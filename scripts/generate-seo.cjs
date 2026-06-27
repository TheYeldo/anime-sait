const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const configPath = path.join(root, "seo.config.json");
const sourcePath = path.join(root, "script.js");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
const siteUrl = String(config.siteUrl || "").replace(/\/$/, "");

if (!/^https?:\/\//i.test(siteUrl)) {
  throw new Error("seo.config.json: siteUrl must start with http:// or https://");
}

function canonicalAnimeTitle(value) {
  return String(value || "")
    .toLocaleLowerCase("ru")
    .normalize("NFKC")
    .replace(/ё/g, "е")
    .replace(/[^a-zа-я0-9]+/giu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function hasCyrillic(value) {
  return /[а-яё]/i.test(String(value || ""));
}

const seoFranchiseRussianNames = new Map([
  ["naruto", "Наруто"],
  ["demon slayer", "Клинок, рассекающий демонов"],
  ["kimetsu no yaiba", "Клинок, рассекающий демонов"],
  ["jujutsu kaisen", "Магическая битва"],
  ["classroom of the elite", "Класс превосходства"],
  ["youkoso jitsuryoku shijou shugi no kyoushitsu e", "Класс превосходства"],
  ["attack on titan", "Атака титанов"],
  ["shingeki no kyojin", "Атака титанов"],
  ["spy x family", "Семья шпиона"],
  ["one piece", "Ван-Пис"],
  ["cowboy bebop", "Ковбой Бибоп"],
  ["blue lock", "Синяя тюрьма: Блю Лок"],
  ["frieren", "Фрирен"],
  ["re zero", "Re:Zero"],
  ["horimiya", "Хоримия"],
  ["sono bisque doll wa koi wo suru", "Эта фарфоровая кукла влюбилась"],
  ["chiikawa", "Тикава"],
  ["class de 2 banme ni kawaii onnanoko to tomodachi ni natta", "Я подружился со второй самой симпатичной девушкой в классе"],
  ["diamond no ace", "Путь аса"],
  ["dr stone", "Доктор Стоун"],
  ["mairimashita iruma kun", "Добро пожаловать в ад, Ирума!"],
  ["marriagetoxin", "Брачный токсин"],
  ["marriage toxin", "Брачный токсин"],
  ["meitantei conan", "Детектив Конан"],
  ["steel ball run", "Невероятные приключения ДжоДжо: Steel Ball Run"],
  ["super no ura de yani suu futari", "История о перекуре за супермаркетом"],
  ["tensei shitara slime datta ken", "О моем перерождении в слизь"],
  ["tongari boushi no atelier", "Ателье колдовских колпаков"],
  ["tsue to tsurugi no wistoria", "Вистория: Жезл и меч"],
  ["yomi no tsugai", "Цугай загробного мира"]
]);

const seoGenreRussianNames = new Map([
  ["sci fi", "Фантастика"],
  ["sci-fi", "Фантастика"],
  ["science fiction", "Фантастика"],
  ["историческое", "Исторический"],
  ["исторический", "Исторический"],
  ["психология", "Психологическое"],
  ["психологическое", "Психологическое"],
  ["сёнэн", "Сёнен"],
  ["сенэн", "Сёнен"],
  ["сёнен", "Сёнен"],
  ["сенен", "Сёнен"],
  ["shounen", "Сёнен"],
  ["shonen", "Сёнен"],
  ["супер сила", "Суперсила"],
  ["super power", "Суперсила"],
  ["award winning", "Наградное"],
  ["avant garde", "Авангард"],
  ["slice of life", "Повседневность"]
]);

function readableRussianTitleBase(anime = {}) {
  const title = hasCyrillic(anime.titleRu) ? anime.titleRu : hasCyrillic(anime.title) ? anime.title : "";
  return String(title || "")
    .replace(/\s*[:—-]\s*(?:сезон|часть|фильм|ova|ona|спецвыпуск).*$/iu, "")
    .replace(/\s+\d+(?:[-–]\w+)?\s*(?:сезон|часть).*$/iu, "")
    .replace(/\s+\d+$/u, "")
    .trim();
}

function localizeFranchiseName(value, anime = {}) {
  const raw = String(value || "").trim();
  const normalized = canonicalAnimeTitle(raw);
  for (const [key, russian] of seoFranchiseRussianNames) {
    if (normalized === key || normalized.startsWith(`${key} `)) return russian;
  }
  if (hasCyrillic(raw)) return raw;
  return readableRussianTitleBase(anime) || raw || "Без франшизы";
}

function localizeGenreName(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  return seoGenreRussianNames.get(raw.toLocaleLowerCase("ru")) || seoGenreRussianNames.get(canonicalAnimeTitle(raw)) || raw;
}

function localizeGenres(genres = []) {
  return [...new Set((genres || []).map(localizeGenreName).filter(Boolean))];
}

function normalizeAnimeForSeo(anime) {
  return {
    ...anime,
    titleRu: hasCyrillic(anime.titleRu) ? anime.titleRu : anime.titleRu || anime.title,
    franchise: localizeFranchiseName(anime.franchise, anime),
    genres: localizeGenres(anime.genres || [])
  };
}

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
  vm.runInContext(snippet, context, { filename: "catalog-seo-source.js" });
  const byId = new Map();
  [...(context.seedCatalog || []), ...(context.narutoRelatedCatalog || [])].forEach((anime) => {
    if (anime?.id && !byId.has(anime.id)) byId.set(anime.id, anime);
  });
  const extraCatalogPath = path.join(root, "seo.extra-catalog.json");
  if (fs.existsSync(extraCatalogPath)) {
    const extraCatalog = JSON.parse(fs.readFileSync(extraCatalogPath, "utf8"));
    for (const anime of Array.isArray(extraCatalog) ? extraCatalog : []) {
      if (anime?.id) byId.set(anime.id, { ...(byId.get(anime.id) || {}), ...anime });
    }
  }
  return [...byId.values()].map(normalizeAnimeForSeo);
}

function transliterate(value) {
  const map = {
    а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "zh", з: "z", и: "i", й: "y",
    к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f",
    х: "h", ц: "ts", ч: "ch", ш: "sh", щ: "sch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya"
  };
  return String(value || "").toLowerCase().split("").map((char) => map[char] ?? char).join("");
}

function slugify(value) {
  return transliterate(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "anime";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function cleanText(value) {
  return String(value || "").replace(/\s+/g, " ").trim();
}

function descriptionFor(anime) {
  const synopsis = cleanText(anime.synopsis);
  const unavailable = /описание (?:релиза )?(?:пока )?недоступно|загружается при открытии/i.test(synopsis);
  const source = synopsis && !unavailable
    ? synopsis
    : `${anime.titleRu || anime.title}: описание, рейтинг, персонажи, серии и информация о франшизе на Taytlo.`;
  return source.length > 158 ? `${source.slice(0, 155).trimEnd()}...` : source;
}

function isWeakAnimePage(anime) {
  const title = cleanText(anime.titleRu || anime.title);
  const synopsis = cleanText(anime.synopsis);
  const placeholderDescription = /описание (?:релиза )?(?:пока )?недоступно|загружается при открытии/i.test(synopsis);
  const hasUsefulText = synopsis.length > 80 && !placeholderDescription;
  const hasUsefulFacts = Boolean(anime.malId || anime.aniLibriaReleaseId || (anime.genres || []).length || anime.franchise);
  return !title || (!hasUsefulText && !hasUsefulFacts);
}

function absolute(relativePath) {
  return new URL(String(relativePath).replace(/^\.\//, ""), `${siteUrl}/`).toString();
}

function posterInfo(anime) {
  const value = String(anime.image || "").trim();
  if (/^https?:\/\//i.test(value)) return { page: value, absolute: value };
  const local = value.replace(/^\.\//, "");
  return {
    page: local ? `../../${local}` : "../../favicon.svg",
    absolute: absolute(local || "favicon.svg")
  };
}

function jsonLd(value) {
  return JSON.stringify(value, null, 2).replace(/</g, "\\u003c");
}

function renderHomeSeo() {
  const homeUrl = `${siteUrl}/`;
  const imageUrl = absolute("assets/frieren-2.webp");
  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: config.siteName,
    url: homeUrl,
    description: config.defaultDescription,
    inLanguage: "ru",
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${homeUrl}?query={search_term_string}` },
      "query-input": "required name=search_term_string"
    }
  };
  return `    <!-- SEO:START -->
    <meta name="description" id="metaDescription" content="${escapeHtml(config.defaultDescription)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta name="theme-color" content="#101114" />
    <link rel="canonical" id="canonicalLink" href="${escapeHtml(homeUrl)}" />
    <link rel="manifest" href="./site.webmanifest" />
    <meta property="og:locale" content="${escapeHtml(config.locale)}" />
    <meta property="og:site_name" content="${escapeHtml(config.siteName)}" />
    <meta property="og:type" id="ogType" content="website" />
    <meta property="og:title" id="ogTitle" content="${escapeHtml(config.defaultTitle)}" />
    <meta property="og:description" id="ogDescription" content="${escapeHtml(config.defaultDescription)}" />
    <meta property="og:url" id="ogUrl" content="${escapeHtml(homeUrl)}" />
    <meta property="og:image" id="ogImage" content="${escapeHtml(imageUrl)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" id="twitterTitle" content="${escapeHtml(config.defaultTitle)}" />
    <meta name="twitter:description" id="twitterDescription" content="${escapeHtml(config.defaultDescription)}" />
    <meta name="twitter:image" id="twitterImage" content="${escapeHtml(imageUrl)}" />
    <script type="application/ld+json" id="siteStructuredData">${jsonLd(website)}</script>
    <!-- SEO:END -->`;
}

const catalog = readCatalog();
const routes = {};
const usedSlugs = new Set();
for (const anime of catalog) {
  const base = slugify(anime.titleRu || anime.title);
  let slug = base;
  if (usedSlugs.has(slug)) slug = `${base}-${slugify(anime.id)}`;
  usedSlugs.add(slug);
  routes[anime.id] = `anime/${slug}/`;
}

function franchiseKey(anime) {
  return slugify(anime.franchise || anime.titleRu || anime.title);
}

function renderPage(anime) {
  const title = cleanText(anime.titleRu || anime.title || "Аниме");
  const original = cleanText(anime.title || "");
  const description = descriptionFor(anime);
  const route = routes[anime.id];
  const canonical = absolute(route);
  const poster = posterInfo(anime);
  const robots = isWeakAnimePage(anime) ? "noindex, follow" : "index, follow, max-image-preview:large";
  const schemaType = String(anime.type || "").toUpperCase() === "MOVIE" ? "Movie" : "TVSeries";
  const schema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: title,
    alternateName: original && original !== title ? original : undefined,
    description,
    image: poster.absolute,
    url: canonical,
    genre: anime.genres || [],
    datePublished: anime.year ? String(anime.year) : undefined,
    numberOfEpisodes: Number(anime.episodes) || undefined,
    sameAs: anime.malId ? `https://myanimelist.net/anime/${anime.malId}` : undefined,
    isPartOf: anime.franchise ? { "@type": "CreativeWorkSeries", name: anime.franchise } : undefined
  };
  Object.keys(schema).forEach((key) => schema[key] === undefined && delete schema[key]);
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Каталог", item: `${siteUrl}/` },
      { "@type": "ListItem", position: 2, name: title, item: canonical }
    ]
  };
  const related = catalog
    .filter((item) => item.id !== anime.id && franchiseKey(item) === franchiseKey(anime))
    .sort((left, right) => Number(left.year || 9999) - Number(right.year || 9999));
  const relatedHtml = related.length
    ? `<section class="seo-related" aria-labelledby="related-title">
        <h2 id="related-title">Другие части франшизы</h2>
        <div class="seo-related-list">${related.map((item) => {
          const relatedSlug = routes[item.id].split("/")[1];
          return `<a class="seo-related-item" href="../${relatedSlug}/"><strong>${escapeHtml(item.titleRu || item.title)}</strong><span>${escapeHtml(item.year || "?")} · ${escapeHtml(item.type || "Anime")}</span></a>`;
        }).join("")}</div>
      </section>`
    : "";
  const genres = (anime.genres || []).map((genre) => `<li>${escapeHtml(genre)}</li>`).join("");
  const pageTitle = `${title} - описание, рейтинг и части | ${config.siteName}`;
  return `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(pageTitle)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="robots" content="${escapeHtml(robots)}" />
    <meta name="theme-color" content="#101114" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <link rel="icon" href="../../favicon.svg" type="image/svg+xml" />
    <link rel="manifest" href="../../site.webmanifest" />
    <link rel="stylesheet" href="../../seo-page.css" />
    <script src="../../runtime-config.js" defer></script>
    <script src="../../analytics.js" defer></script>
    <meta property="og:locale" content="${escapeHtml(config.locale)}" />
    <meta property="og:site_name" content="${escapeHtml(config.siteName)}" />
    <meta property="og:type" content="${schemaType === "Movie" ? "video.movie" : "video.tv_show"}" />
    <meta property="og:title" content="${escapeHtml(pageTitle)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(canonical)}" />
    <meta property="og:image" content="${escapeHtml(poster.absolute)}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(pageTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(poster.absolute)}" />
    <script type="application/ld+json">${jsonLd(schema)}</script>
    <script type="application/ld+json">${jsonLd(breadcrumb)}</script>
  </head>
  <body>
    <header class="seo-header seo-shell">
      <a class="seo-brand" href="../../"><span class="seo-brand-mark">TL</span><span class="seo-brand-copy"><strong>${escapeHtml(config.siteName)}</strong><small>anime hub</small></span></a>
      <a class="seo-catalog-link" href="../../">Каталог</a>
    </header>
    <main class="seo-main seo-shell">
      <nav class="seo-breadcrumbs" aria-label="Хлебные крошки"><a href="../../">Каталог</a><span>/</span><span>${escapeHtml(anime.franchise || "Аниме")}</span><span>/</span><span>${escapeHtml(title)}</span></nav>
      <article class="seo-detail">
        <img class="seo-poster" src="${escapeHtml(poster.page)}" alt="Постер: ${escapeHtml(title)}" width="600" height="900" decoding="async" fetchpriority="high" />
        <div class="seo-copy">
          <p class="seo-kicker">${escapeHtml(anime.type || "Anime")} · ${escapeHtml(anime.year || "?")}</p>
          <h1>${escapeHtml(title)}</h1>
          ${original && original !== title ? `<p class="seo-original">${escapeHtml(original)}</p>` : ""}
          <div class="seo-facts"><span class="seo-score">★ ${escapeHtml(anime.score || "Нет оценки")}</span><span>${escapeHtml(anime.episodes || "?")} эп.</span><span>${escapeHtml(anime.franchise || "Без франшизы")}</span></div>
          <p class="seo-description">${escapeHtml(cleanText(anime.synopsis) || description)}</p>
          ${genres ? `<ul class="seo-genres" aria-label="Жанры">${genres}</ul>` : ""}
          <a class="seo-primary-link" href="../../?anime=${encodeURIComponent(anime.id)}">Открыть в Taytlo</a>
        </div>
      </article>
      ${relatedHtml}
    </main>
    <footer class="seo-footer seo-shell">${escapeHtml(config.siteName)} · каталог аниме, рейтинги и легальные источники просмотра</footer>
  </body>
</html>`;
}

function render404Page() {
  const canonical = `${siteUrl}/404.html`;
  return `<!doctype html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Страница не найдена | ${escapeHtml(config.siteName)}</title>
    <meta name="description" content="Страница не найдена. Вернитесь в каталог Taytlo, чтобы найти аниме, франшизы, жанры и легальные серии AniLibria." />
    <meta name="robots" content="noindex, follow" />
    <link rel="canonical" href="${escapeHtml(canonical)}" />
    <link rel="icon" href="./favicon.svg" type="image/svg+xml" />
    <link rel="stylesheet" href="./seo-page.css" />
    <script src="./runtime-config.js" defer></script>
    <script src="./analytics.js" defer></script>
  </head>
  <body>
    <header class="seo-header seo-shell">
      <a class="seo-brand" href="./"><span class="seo-brand-mark">TL</span><span class="seo-brand-copy"><strong>${escapeHtml(config.siteName)}</strong><small>anime hub</small></span></a>
      <a class="seo-catalog-link" href="./">Каталог</a>
    </header>
    <main class="seo-main seo-shell">
      <article class="seo-detail">
        <div class="seo-copy">
          <p class="seo-kicker">404</p>
          <h1>Страница не найдена</h1>
          <p class="seo-description">Такой страницы нет или ссылка устарела. Откройте каталог и выберите тайтл через поиск, жанры или франшизы.</p>
          <a class="seo-primary-link" href="./">Открыть каталог Taytlo</a>
        </div>
      </article>
    </main>
  </body>
</html>`;
}

const previousManifestPath = path.join(root, "seo.generated.json");
if (fs.existsSync(previousManifestPath)) {
  const previous = JSON.parse(fs.readFileSync(previousManifestPath, "utf8"));
  for (const relative of previous.pages || []) {
    const target = path.resolve(root, relative);
    const animeRoot = `${path.resolve(root, "anime")}${path.sep}`;
    if (target.startsWith(animeRoot) && fs.existsSync(target)) fs.rmSync(target, { recursive: true, force: true });
  }
}

const indexPath = path.join(root, "index.html");
const indexSource = fs.readFileSync(indexPath, "utf8");
const seoBlockPattern = /    <!-- SEO:START -->[\s\S]*?    <!-- SEO:END -->/;
if (!seoBlockPattern.test(indexSource)) throw new Error("SEO markers were not found in index.html");
fs.writeFileSync(indexPath, indexSource.replace(seoBlockPattern, renderHomeSeo()), "utf8");

const pageDirectories = [];
for (const anime of catalog) {
  const directory = path.join(root, routes[anime.id]);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, "index.html"), renderPage(anime), "utf8");
  pageDirectories.push(path.relative(root, directory));
}

const routesScript = `window.ANI_SEO_CONFIG = ${JSON.stringify({ ...config, siteUrl }, null, 2)};\nwindow.ANI_SEO_ROUTES = ${JSON.stringify(routes, null, 2)};\n`;
fs.writeFileSync(path.join(root, "seo-routes.js"), routesScript, "utf8");

const today = new Date().toISOString().slice(0, 10);
const sitemapUrls = [
  { loc: `${siteUrl}/`, priority: "1.0" },
  ...catalog.filter((anime) => !isWeakAnimePage(anime)).map((anime) => ({ loc: absolute(routes[anime.id]), priority: "0.8" }))
];
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.map((item) => `  <url>\n    <loc>${escapeHtml(item.loc)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>${item.priority}</priority>\n  </url>`).join("\n")}\n</urlset>\n`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap, "utf8");
fs.writeFileSync(path.join(root, "robots.txt"), `User-agent: *\nAllow: /\nDisallow: /*?anime=\n\nSitemap: ${siteUrl}/sitemap.xml\n`, "utf8");
fs.writeFileSync(path.join(root, "404.html"), render404Page(), "utf8");
fs.writeFileSync(path.join(root, "site.webmanifest"), JSON.stringify({
  name: config.siteName,
  short_name: config.siteName,
  description: config.defaultDescription,
  lang: "ru",
  start_url: "./",
  scope: "./",
  display: "standalone",
  background_color: "#101114",
  theme_color: "#101114",
  icons: [{ src: "./favicon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }]
}, null, 2), "utf8");
fs.writeFileSync(previousManifestPath, JSON.stringify({ generatedAt: new Date().toISOString(), pages: pageDirectories }, null, 2), "utf8");

console.log(`SEO generated: ${catalog.length} anime pages, sitemap.xml, robots.txt, manifest and seo-routes.js`);
