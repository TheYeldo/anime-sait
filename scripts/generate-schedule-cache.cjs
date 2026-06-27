const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const sourcePath = path.join(root, "script.js");
const extraCatalogPath = path.join(root, "seo.extra-catalog.json");
const outputPath = path.join(root, "schedule-cache.json");
const SHIKIMORI_ORIGIN = "https://shikimori.one";

function readCatalog() {
  const source = fs.readFileSync(sourcePath, "utf8");
  const start = source.indexOf("const seedCatalog =");
  const end = source.indexOf("const storageKeys =");
  if (start < 0 || end < 0 || end <= start) throw new Error("Static catalog block was not found in script.js");
  const snippet = source
    .slice(start, end)
    .replace("const seedCatalog =", "globalThis.seedCatalog =")
    .replace("const narutoRelatedCatalog =", "globalThis.narutoRelatedCatalog =");
  const context = {};
  vm.createContext(context);
  vm.runInContext(snippet, context, { filename: "catalog-schedule-source.js" });
  const byId = new Map();
  [...(context.seedCatalog || []), ...(context.narutoRelatedCatalog || [])].forEach((anime) => {
    if (anime?.id) byId.set(anime.id, anime);
  });
  if (fs.existsSync(extraCatalogPath)) {
    const extraCatalog = JSON.parse(fs.readFileSync(extraCatalogPath, "utf8"));
    for (const anime of Array.isArray(extraCatalog) ? extraCatalog : []) {
      if (anime?.id) byId.set(anime.id, { ...(byId.get(anime.id) || {}), ...anime });
    }
  }
  return [...byId.values()];
}

function normalize(value) {
  return String(value || "")
    .toLocaleLowerCase("ru")
    .normalize("NFKC")
    .replace(/ё/g, "е")
    .replace(/[^a-zа-я0-9]+/giu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function textList(...values) {
  return values.flatMap((value) => {
    if (Array.isArray(value)) return textList(...value);
    const text = String(value || "").trim();
    return text ? [text] : [];
  });
}

function firstText(...values) {
  return textList(...values)[0] || "";
}

function titleKeys(anime) {
  return textList(anime.title, anime.titleRu, anime.altTitles)
    .map(normalize)
    .filter((title) => title.length >= 3);
}

function shikimoriPosterCandidates(item) {
  return [
    item?.image?.original,
    item?.image?.preview,
    item?.image?.x96,
    item?.image?.x48
  ]
    .filter(Boolean)
    .map((value) => /^https?:\/\//i.test(value) ? value : new URL(value, SHIKIMORI_ORIGIN).toString());
}

function shikimoriUrlFor(item) {
  if (item?.url) return new URL(item.url, SHIKIMORI_ORIGIN).toString();
  return item?.id ? `${SHIKIMORI_ORIGIN}/animes/${item.id}` : "";
}

async function requestJson(url) {
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "User-Agent": "Taytlo/1.0"
    }
  });
  if (!response.ok) throw new Error(`${response.status} ${url}`);
  return response.json();
}

function localCatalogMatch(item, catalog) {
  const malId = Number(item.id || 0);
  const byMal = catalog.find((anime) => Number(anime.malId || 0) === malId || Number(anime.shikimoriId || 0) === malId);
  if (byMal) return byMal;

  const candidateTitles = textList(item.name, item.russian, item.english, item.japanese, item.synonyms)
    .map(normalize)
    .filter(Boolean);
  return catalog.find((anime) => {
    const keys = titleKeys(anime);
    return keys.some((key) => candidateTitles.includes(key));
  }) || null;
}

function scheduleEntryFromItem(item, catalog) {
  const nextEpisodeAt = item.next_episode_at || "";
  const timestamp = Date.parse(nextEpisodeAt);
  if (!Number.isFinite(timestamp)) return null;
  const matched = localCatalogMatch(item, catalog);
  const id = matched?.id || `mal-${item.id}`;
  const episodesAired = Number(item.episodes_aired || 0);
  const score = Number(item.score || matched?.score || 0);
  return {
    id,
    malId: Number(item.id || matched?.malId || 0) || null,
    source: matched ? "catalog+shikimori" : "shikimori",
    title: firstText(item.name, matched?.title, item.russian, "Anime"),
    titleRu: firstText(item.russian, matched?.titleRu, item.name, "Anime"),
    altTitles: [...new Set(textList(item.name, item.russian, item.english, item.japanese, item.synonyms))],
    franchise: firstText(matched?.franchise, item.russian, item.name),
    type: String(item.kind || matched?.type || "TV").toUpperCase(),
    year: item.aired_on ? new Date(item.aired_on).getFullYear() : matched?.year || "",
    episodes: item.episodes || matched?.episodes || "?",
    episodesAired,
    nextEpisodeAt,
    score,
    shikimoriId: Number(item.id || 0) || null,
    shikimoriScore: score,
    shikimoriUrl: shikimoriUrlFor(item),
    image: matched?.image || shikimoriPosterCandidates(item)[0] || "",
    posterCandidates: [...new Set([...(matched?.posterCandidates || []), matched?.image, ...shikimoriPosterCandidates(item)].filter(Boolean))],
    status: item.status || "ongoing",
    genres: matched?.genres || [],
    synopsis: matched?.synopsis || "Ожидается новая серия.",
    watchEpisodes: matched?.watchEpisodes || [],
    characters: matched?.characters || []
  };
}

async function fetchUpcomingSchedule(catalog) {
  const pages = [1, 2, 3];
  const details = [];
  const seen = new Set();

  for (const page of pages) {
    const list = await requestJson(`${SHIKIMORI_ORIGIN}/api/animes?order=ranked&limit=50&page=${page}&status=ongoing`);
    for (const item of Array.isArray(list) ? list : []) {
      if (!item?.id || seen.has(item.id)) continue;
      seen.add(item.id);
      try {
        const detail = await requestJson(`${SHIKIMORI_ORIGIN}/api/animes/${item.id}`);
        details.push(detail);
      } catch (error) {
        details.push(item);
      }
      await new Promise((resolve) => setTimeout(resolve, 220));
    }
    await new Promise((resolve) => setTimeout(resolve, 350));
  }

  const now = Date.now();
  const horizon = now + 14 * 24 * 60 * 60 * 1000;
  return details
    .map((item) => scheduleEntryFromItem(item, catalog))
    .filter((entry) => {
      const timestamp = Date.parse(entry?.nextEpisodeAt || "");
      return Number.isFinite(timestamp) && timestamp >= now && timestamp <= horizon;
    })
    .sort((left, right) => Date.parse(left.nextEpisodeAt) - Date.parse(right.nextEpisodeAt));
}

async function main() {
  const previous = fs.existsSync(outputPath) ? JSON.parse(fs.readFileSync(outputPath, "utf8")) : { entries: [] };
  const catalog = readCatalog();
  const failures = [];
  let entries = [];

  try {
    entries = await fetchUpcomingSchedule(catalog);
  } catch (error) {
    failures.push({ error: error.message });
    entries = previous.entries || [];
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    source: "Shikimori REST API",
    ttlHours: 6,
    total: entries.length,
    failures,
    entries
  };
  fs.writeFileSync(outputPath, JSON.stringify(payload, null, 2), "utf8");
  console.log(`Schedule cache generated: ${entries.length} upcoming episodes (${failures.length} issues)`);
}

main().catch((error) => {
  console.warn(`Schedule cache was not updated: ${error.message}`);
  if (!fs.existsSync(outputPath)) {
    fs.writeFileSync(outputPath, JSON.stringify({
      generatedAt: new Date().toISOString(),
      source: "Shikimori REST API",
      ttlHours: 6,
      total: 0,
      failures: [{ error: error.message }],
      entries: []
    }, null, 2), "utf8");
  }
});
