const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const source = fs.readFileSync(path.join(root, "script.js"), "utf8");
const start = source.indexOf("const seedCatalog =");
const end = source.indexOf("const storageKeys =");
if (start < 0 || end < 0) throw new Error("Static catalog block was not found");

const snippet = source
  .slice(start, end)
  .replace("const seedCatalog =", "globalThis.seedCatalog =")
  .replace("const narutoRelatedCatalog =", "globalThis.narutoRelatedCatalog =");
const context = {};
vm.createContext(context);
vm.runInContext(snippet, context, { filename: "character-cache-source.js" });

const animeItems = [...(context.seedCatalog || []), ...(context.narutoRelatedCatalog || [])]
  .filter((anime) => anime.malId && anime.characters?.length);
const characterDirectory = path.join(root, "assets", "characters");
fs.mkdirSync(characterDirectory, { recursive: true });

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function fetchWithRetry(url, attempts = 3) {
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    const response = await fetch(url, { headers: { "User-Agent": "Taytlo/1.0" } });
    if (response.ok) return response;
    if (attempt === attempts) throw new Error(`${response.status} ${url}`);
    await delay(attempt * 900);
  }
}

(async () => {
  const cache = {};
  for (const anime of animeItems) {
    const response = await fetchWithRetry(`https://api.jikan.moe/v4/anime/${anime.malId}/characters`);
    const payload = await response.json();
    const characters = [];
    for (const item of (payload.data || []).slice(0, 12)) {
      const characterId = item.character?.mal_id || `${anime.malId}-${characters.length + 1}`;
      const remoteImage = item.character?.images?.jpg?.image_url || "";
      const filename = `${anime.malId}-${characterId}.jpg`;
      const target = path.join(characterDirectory, filename);
      let image = remoteImage;
      if (remoteImage) {
        try {
          if (!fs.existsSync(target)) {
            const imageResponse = await fetchWithRetry(remoteImage, 2);
            fs.writeFileSync(target, Buffer.from(await imageResponse.arrayBuffer()));
          }
          image = `./assets/characters/${filename}`;
        } catch {
          image = remoteImage;
        }
      }
      characters.push({
        id: `mal-character-${characterId}-${anime.malId}`,
        name: item.character?.name || "Персонаж",
        role: item.role || "Supporting",
        image,
        tags: [anime.titleRu || anime.title]
      });
    }
    cache[String(anime.malId)] = characters;
    console.log(`${anime.titleRu || anime.title}: ${characters.length}`);
    await delay(450);
  }

  fs.writeFileSync(
    path.join(root, "character-cache.js"),
    `window.ANI_CHARACTER_CACHE = ${JSON.stringify(cache, null, 2)};\n`,
    "utf8"
  );
  console.log(`Character cache generated for ${Object.keys(cache).length} anime`);
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
