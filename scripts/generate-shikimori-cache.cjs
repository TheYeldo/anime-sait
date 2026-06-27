const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const sourcePath = path.join(root, "script.js");
const extraCatalogPath = path.join(root, "seo.extra-catalog.json");
const mapPath = path.join(root, "shikimori-map.json");
const outputPath = path.join(root, "shikimori-ratings.json");
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
  vm.runInContext(snippet, context, { filename: "catalog-shikimori-source.js" });
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

function numericEpisodeCount(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : 0;
}

function normalizeKind(value) {
  const kind = String(value || "").toLowerCase();
  return {
    tv: "TV",
    movie: "MOVIE",
    ova: "OVA",
    ona: "ONA",
    special: "SPECIAL",
    tv_special: "SPECIAL"
  }[kind] || String(value || "").toUpperCase();
}

function votesFromItem(item) {
  return (Array.isArray(item?.rates_scores_stats) ? item.rates_scores_stats : [])
    .reduce((sum, entry) => sum + Number(entry.value || 0), 0);
}

function shikimoriUrlFor(item) {
  if (item?.url) return new URL(item.url, SHIKIMORI_ORIGIN).toString();
  return item?.id ? `${SHIKIMORI_ORIGIN}/animes/${item.id}` : "";
}

function candidateTitles(item) {
  return [item.name, item.russian, item.english, item.japanese, item.license_name_ru, ...(item.synonyms || [])]
    .map(normalize)
    .filter(Boolean);
}

function animeTitles(anime) {
  return [anime.title, anime.titleRu, ...(anime.altTitles || [])].map(normalize).filter(Boolean);
}

function typeSimilarity(animeType, candidateKind) {
  const left = normalizeKind(animeType);
  const right = normalizeKind(candidateKind);
  if (!left || !right) return 0;
  if (left === right) return 3;
  if (left === "TV" && right === "ONA") return 1;
  if (left === "SPECIAL" && right === "OVA") return 1;
  return -2;
}

function episodeSimilarity(animeEpisodes, candidateEpisodes) {
  const left = numericEpisodeCount(animeEpisodes);
  const right = numericEpisodeCount(candidateEpisodes);
  if (!left || !right) return 0;
  if (left === right) return 3;
  if (Math.abs(left - right) <= 1) return 1;
  return Math.abs(left - right) > 12 ? -3 : -1;
}

function matchScore(anime, item) {
  let titleScore = 0;
  for (const animeTitle of animeTitles(anime)) {
    for (const candidateTitle of candidateTitles(item)) {
      if (animeTitle === candidateTitle) titleScore = Math.max(titleScore, 14);
      else if (animeTitle.length >= 6 && candidateTitle.length >= 6 && (animeTitle.includes(candidateTitle) || candidateTitle.includes(animeTitle))) {
        titleScore = Math.max(titleScore, 7);
      }
    }
  }
  const animeYear = Number(anime.year || 0);
  const candidateYear = Number(item.aired_on?.slice?.(0, 4) || item.released_on?.slice?.(0, 4) || 0);
  const yearScore = animeYear && candidateYear
    ? animeYear === candidateYear ? 4 : Math.abs(animeYear - candidateYear) === 1 ? 1 : -5
    : 0;
  const score =
    titleScore +
    yearScore +
    typeSimilarity(anime.type, item.kind) +
    episodeSimilarity(anime.episodes, item.episodes || item.episodes_aired);
  return { score, titleScore };
}

function confident(best, second) {
  if (!best || best.score < 13 || best.titleScore < 7) return false;
  if (second && second.score >= best.score - 2 && best.titleScore < 14) return false;
  return true;
}

function ratingFromItem(item, meta = {}) {
  const score = Number(item?.score || 0);
  return {
    status: score > 0 ? "ready" : "no_score",
    id: Number(item?.id || meta.id || 0) || null,
    title: item?.name || "",
    titleRu: item?.russian || "",
    score,
    votes: votesFromItem(item),
    url: shikimoriUrlFor(item),
    matchedBy: meta.matchedBy || "api",
    confidence: Number(meta.confidence || 0),
    checkedAt: Date.now()
  };
}

function manualIdFor(anime, mappings) {
  return Number(
    mappings.anime?.[anime.id] ||
    (anime.aniLibriaReleaseId ? mappings.anilibria?.[String(anime.aniLibriaReleaseId)] : 0) ||
    (anime.malId ? mappings.mal?.[String(anime.malId)] || anime.malId : 0) ||
    0
  ) || 0;
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

async function fetchById(id, matchedBy) {
  const item = await requestJson(`${SHIKIMORI_ORIGIN}/api/animes/${id}`);
  return ratingFromItem(item, { matchedBy, confidence: 99 });
}

async function searchRating(anime) {
  const ranked = [];
  const queries = [...new Set([anime.title, anime.titleRu, ...(anime.altTitles || [])].filter(Boolean))].slice(0, 4);
  for (const query of queries) {
    const payload = await requestJson(`${SHIKIMORI_ORIGIN}/api/animes?search=${encodeURIComponent(query)}&limit=8`);
    (payload || []).forEach((item) => ranked.push({ item, ...matchScore(anime, item) }));
    if (ranked.some((candidate) => candidate.titleScore >= 14 && candidate.score >= 17)) break;
    await new Promise((resolve) => setTimeout(resolve, 150));
  }
  ranked.sort((left, right) => right.score - left.score);
  if (!confident(ranked[0], ranked[1])) {
    return {
      status: "low_confidence",
      confidence: ranked[0]?.score || 0,
      title: ranked[0]?.item?.name || "",
      titleRu: ranked[0]?.item?.russian || "",
      checkedAt: Date.now()
    };
  }
  const item = await requestJson(`${SHIKIMORI_ORIGIN}/api/animes/${ranked[0].item.id}`);
  return ratingFromItem(item, { matchedBy: "auto", confidence: ranked[0].score });
}

async function main() {
  const catalog = readCatalog();
  const mappings = fs.existsSync(mapPath) ? JSON.parse(fs.readFileSync(mapPath, "utf8")) : { anime: {}, anilibria: {}, mal: {} };
  const previous = fs.existsSync(outputPath) ? JSON.parse(fs.readFileSync(outputPath, "utf8")) : { items: {} };
  const items = {};
  const failures = [];

  for (const anime of catalog) {
    try {
      const id = manualIdFor(anime, mappings);
      items[anime.id] = id ? await fetchById(id, anime.malId && Number(anime.malId) === id ? "malId" : "manual") : await searchRating(anime);
    } catch (error) {
      items[anime.id] = previous.items?.[anime.id] || {
        status: "api_error",
        checkedAt: Date.now()
      };
      failures.push({ id: anime.id, title: anime.titleRu || anime.title, error: error.message });
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  const ready = Object.values(items).filter((item) => item.status === "ready" && Number(item.score || 0) > 0).length;
  fs.writeFileSync(outputPath, JSON.stringify({
    generatedAt: new Date().toISOString(),
    source: "Shikimori REST API",
    ttlHours: Number(mappings.cacheTtlHours || 12),
    total: catalog.length,
    ready,
    failures,
    items
  }, null, 2), "utf8");
  console.log(`Shikimori cache generated: ${ready}/${catalog.length} ratings (${failures.length} API/search issues)`);
}

main().catch((error) => {
  console.warn(`Shikimori cache was not updated: ${error.message}`);
  if (!fs.existsSync(outputPath)) {
    fs.writeFileSync(outputPath, JSON.stringify({
      generatedAt: new Date().toISOString(),
      source: "Shikimori REST API",
      ttlHours: 12,
      total: 0,
      ready: 0,
      failures: [{ error: error.message }],
      items: {}
    }, null, 2), "utf8");
  }
});
