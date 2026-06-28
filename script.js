const seedCatalog = [
  {
    id: "frieren",
    malId: 52991,
    source: "local",
    franchise: "Frieren",
    requestBase: 9800,
    popularityBase: 94000,
    broadcastDay: "friday",
    title: "Sousou no Frieren",
    titleRu: "Провожающая Фрирен",
    type: "TV",
    year: 2023,
    episodes: 28,
    score: 9.3,
    image: "https://cdn.myanimelist.net/images/anime/1015/138006l.jpg",
    synopsis:
      "После победы над Королем демонов эльфийская магичка Фрирен заново открывает смысл путешествий, памяти и человеческого времени.",
    genres: ["Фэнтези", "Приключения", "Драма"],
    characters: [
      { id: "frieren-frieren", name: "Фрирен", role: "Маг", image: "", tags: ["магия", "спокойствие"] },
      { id: "frieren-fern", name: "Ферн", role: "Ученица мага", image: "", tags: ["дисциплина", "заклинания"] },
      { id: "frieren-stark", name: "Штарк", role: "Воин", image: "", tags: ["топор", "смелость"] }
    ]
  },
  {
    id: "jujutsu-kaisen",
    malId: 40748,
    source: "local",
    franchise: "Jujutsu Kaisen",
    requestBase: 12800,
    popularityBase: 132000,
    broadcastDay: "thursday",
    title: "Jujutsu Kaisen",
    titleRu: "Магическая битва",
    type: "TV",
    year: 2020,
    episodes: 24,
    score: 8.6,
    image: "https://cdn.myanimelist.net/images/anime/1171/109222l.jpg",
    synopsis:
      "Юдзи Итадори попадает в мир проклятий и становится сосудом древнего демона, где каждая битва требует силы, инстинкта и выбора.",
    genres: ["Экшен", "Сверхъестественное", "Школа"],
    characters: [
      { id: "jjk-yuji", name: "Юдзи Итадори", role: "Заклинатель", image: "", tags: ["сила", "сердце"] },
      { id: "jjk-megumi", name: "Мэгуми Фусигуро", role: "Заклинатель", image: "", tags: ["тени", "тактика"] },
      { id: "jjk-nobara", name: "Нобара Кугисаки", role: "Заклинательница", image: "", tags: ["молоток", "характер"] }
    ]
  },
  {
    id: "kimetsu",
    malId: 38000,
    source: "local",
    franchise: "Demon Slayer",
    requestBase: 11900,
    popularityBase: 125000,
    broadcastDay: "sunday",
    title: "Kimetsu no Yaiba",
    titleRu: "Клинок, рассекающий демонов",
    type: "TV",
    year: 2019,
    episodes: 26,
    score: 8.5,
    image: "https://cdn.myanimelist.net/images/anime/1286/99889l.jpg",
    synopsis:
      "Тандзиро становится охотником на демонов, чтобы спасти сестру и найти путь через боль, тренировки и невероятные поединки.",
    genres: ["Экшен", "Историческое", "Демоны"],
    characters: [
      { id: "demon-tanjiro", name: "Тандзиро Камадо", role: "Охотник", image: "", tags: ["дыхание воды", "упорство"] },
      { id: "demon-nezuko", name: "Нэдзуко Камадо", role: "Демон", image: "", tags: ["защита", "семья"] },
      { id: "demon-zenitsu", name: "Зэницу Агацума", role: "Охотник", image: "", tags: ["молния", "паника"] }
    ]
  },
  {
    id: "attack-on-titan",
    malId: 16498,
    source: "local",
    franchise: "Attack on Titan",
    requestBase: 11000,
    popularityBase: 160000,
    broadcastDay: "sunday",
    title: "Shingeki no Kyojin",
    titleRu: "Атака титанов",
    type: "TV",
    year: 2013,
    episodes: 25,
    score: 8.6,
    image: "https://cdn.myanimelist.net/images/anime/10/47347l.jpg",
    synopsis:
      "Люди живут за стенами, пока появление титанов не запускает историю войны, свободы и жестких решений.",
    genres: ["Экшен", "Драма", "Мистика"],
    characters: [
      { id: "aot-eren", name: "Эрен Йегер", role: "Разведкорпус", image: "", tags: ["свобода", "титан"] },
      { id: "aot-mikasa", name: "Микаса Аккерман", role: "Разведкорпус", image: "", tags: ["клинки", "защита"] },
      { id: "aot-armin", name: "Армин Арлерт", role: "Стратег", image: "", tags: ["ум", "смелость"] }
    ]
  },
  {
    id: "spy-family",
    malId: 50265,
    source: "local",
    franchise: "SPY x FAMILY",
    requestBase: 8100,
    popularityBase: 75000,
    broadcastDay: "saturday",
    title: "Spy x Family",
    titleRu: "Семья шпиона",
    type: "TV",
    year: 2022,
    episodes: 12,
    score: 8.5,
    image: "https://cdn.myanimelist.net/images/anime/1441/122795l.jpg",
    synopsis:
      "Шпион, наемница и девочка-телепат строят фальшивую семью, которая неожиданно становится самой настоящей.",
    genres: ["Комедия", "Экшен", "Семья"],
    characters: [
      { id: "spy-loid", name: "Лойд Форджер", role: "Шпион", image: "", tags: ["миссия", "маскировка"] },
      { id: "spy-yor", name: "Йор Форджер", role: "Наемница", image: "", tags: ["элегантность", "сила"] },
      { id: "spy-anya", name: "Аня Форджер", role: "Телепат", image: "", tags: ["школа", "секрет"] }
    ]
  },
  {
    id: "one-piece",
    malId: 21,
    source: "local",
    franchise: "One Piece",
    requestBase: 15000,
    popularityBase: 200000,
    broadcastDay: "sunday",
    title: "One Piece",
    titleRu: "Ван-Пис",
    type: "TV",
    year: 1999,
    episodes: "1000+",
    score: 8.7,
    image: "https://cdn.myanimelist.net/images/anime/6/73245l.jpg",
    synopsis:
      "Манки Д. Луффи собирает команду и отправляется за легендарным сокровищем, превращая море в карту дружбы и приключений.",
    genres: ["Приключения", "Комедия", "Сёнэн"],
    characters: [
      { id: "op-luffy", name: "Монки Д. Луффи", role: "Капитан", image: "", tags: ["резина", "мечта"] },
      { id: "op-zoro", name: "Ророноа Зоро", role: "Мечник", image: "", tags: ["три меча", "верность"] },
      { id: "op-nami", name: "Нами", role: "Навигатор", image: "", tags: ["карты", "шторм"] }
    ]
  },
  {
    id: "naruto",
    malId: 20,
    source: "local",
    franchise: "Naruto",
    requestBase: 14200,
    popularityBase: 220000,
    broadcastDay: "thursday",
    title: "Naruto",
    titleRu: "Наруто",
    type: "TV",
    year: 2002,
    episodes: 220,
    score: 8.0,
    image: "https://cdn.myanimelist.net/images/anime/13/17405l.jpg",
    synopsis:
      "Наруто Узумаки хочет стать хокаге и доказать деревне, что внутри шумного мечтателя живет настоящий ниндзя.",
    genres: ["Ниндзя", "Приключения", "Сёнэн"],
    characters: [
      { id: "naruto-naruto", name: "Наруто Узумаки", role: "Ниндзя", image: "", tags: ["чакра", "мечта"] },
      { id: "naruto-sasuke", name: "Саске Учиха", role: "Ниндзя", image: "", tags: ["шаринган", "путь"] },
      { id: "naruto-sakura", name: "Сакура Харуно", role: "Медик-ниндзя", image: "", tags: ["сила", "медицина"] }
    ]
  },
  {
    id: "cowboy-bebop",
    malId: 1,
    source: "local",
    franchise: "Cowboy Bebop",
    requestBase: 6200,
    popularityBase: 80000,
    broadcastDay: "friday",
    title: "Cowboy Bebop",
    titleRu: "Ковбой Бибоп",
    type: "TV",
    year: 1998,
    episodes: 26,
    score: 8.8,
    image: "https://cdn.myanimelist.net/images/anime/4/19644l.jpg",
    synopsis:
      "Охотники за головами дрейфуют между планетами, джазом, долгами и прошлым, которое всегда догоняет.",
    genres: ["Sci-Fi", "Нуар", "Приключения"],
    characters: [
      { id: "bebop-spike", name: "Спайк Шпигель", role: "Охотник", image: "", tags: ["джиткундо", "прошлое"] },
      { id: "bebop-jet", name: "Джет Блэк", role: "Пилот", image: "", tags: ["корабль", "опыт"] },
      { id: "bebop-faye", name: "Фэй Валентайн", role: "Авантюристка", image: "", tags: ["карты", "тайна"] }
    ]
  },
  {
    id: "mal-35507",
    malId: 35507,
    aniLibriaReleaseId: 4578,
    source: "local",
    franchise: "Classroom of the Elite",
    requestBase: 7600,
    popularityBase: 72000,
    broadcastDay: "wednesday",
    title: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e",
    titleRu: "Добро пожаловать в класс превосходства",
    type: "TV",
    year: 2017,
    episodes: 12,
    score: 7.9,
    image: "https://cdn.myanimelist.net/images/anime/5/86830l.jpg",
    synopsis: "Киётака Аянокоджи поступает в престижную школу, где положение учеников зависит от результатов, стратегии и скрытой борьбы классов.",
    genres: ["Драма", "Школа", "Психология"],
    characters: []
  },
  {
    id: "mal-51096",
    malId: 51096,
    aniLibriaReleaseId: 9212,
    source: "local",
    franchise: "Classroom of the Elite",
    requestBase: 7200,
    popularityBase: 68000,
    broadcastDay: "monday",
    title: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 2nd Season",
    titleRu: "Добро пожаловать в класс превосходства 2",
    type: "TV",
    year: 2022,
    episodes: 13,
    score: 8.1,
    image: "https://cdn.myanimelist.net/images/anime/1010/124180l.jpg",
    synopsis: "После экзамена на необитаемом острове классы продолжают соревнование, а планы Аянокоджи становятся ещё сложнее и опаснее.",
    genres: ["Драма", "Школа", "Психология"],
    characters: []
  },
  {
    id: "mal-51180",
    malId: 51180,
    aniLibriaReleaseId: 9601,
    source: "local",
    franchise: "Classroom of the Elite",
    requestBase: 7400,
    popularityBase: 70000,
    broadcastDay: "wednesday",
    title: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 3rd Season",
    titleRu: "Добро пожаловать в класс превосходства 3",
    type: "TV",
    year: 2024,
    episodes: 13,
    score: 8.0,
    image: "https://cdn.myanimelist.net/images/anime/1332/139318l.jpg",
    synopsis: "Класс поднимается выше, но новые экзамены и противостояние с сильнейшими учениками проверяют союзников Аянокоджи.",
    genres: ["Драма", "Школа", "Психология"],
    characters: []
  },
  {
    id: "mal-59708",
    malId: 59708,
    aniLibriaReleaseId: 10155,
    source: "local",
    franchise: "Classroom of the Elite",
    requestBase: 7900,
    popularityBase: 76000,
    broadcastDay: "wednesday",
    title: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e 4th Season: 2-nensei-hen 1 Gakki",
    titleRu: "Добро пожаловать в класс превосходства 4: Второй год — Первый семестр",
    type: "TV",
    year: 2026,
    episodes: 15,
    score: 8.0,
    image: "./assets/classroom-elite-season-4.webp",
    synopsis: "Аянокоджи переходит на второй год обучения, где его ждут новые ученики, экзамены и ещё более серьёзная борьба за превосходство.",
    genres: ["Драма", "Школа", "Психология"],
    characters: []
  },
  {
    id: "mal-49596",
    malId: 49596,
    source: "local",
    franchise: "Blue Lock",
    requestBase: 9000,
    popularityBase: 92000,
    broadcastDay: "saturday",
    title: "Blue Lock",
    titleRu: "Синяя тюрьма: Блю Лок",
    type: "TV",
    year: 2022,
    episodes: 24,
    score: 8.1,
    image: "https://cdn.myanimelist.net/images/anime/1258/126929l.jpg",
    synopsis: "Триста молодых нападающих участвуют в жёстком проекте, который должен создать лучшего футбольного форварда Японии.",
    genres: ["Спорт", "Сёнен", "Триллер"],
    characters: []
  },
  {
    id: "mal-54865",
    malId: 54865,
    source: "local",
    franchise: "Blue Lock",
    requestBase: 8600,
    popularityBase: 84000,
    broadcastDay: "saturday",
    title: "Blue Lock vs. U-20 Japan",
    titleRu: "Синяя тюрьма: Блю Лок 2",
    type: "TV",
    year: 2024,
    episodes: 14,
    score: 7.5,
    image: "https://cdn.myanimelist.net/images/anime/1584/144860l.jpg",
    synopsis: "Участники Blue Lock сражаются за право продолжить проект в матче против молодёжной сборной Японии до 20 лет.",
    genres: ["Спорт", "Сёнен", "Триллер"],
    characters: []
  }
];

const narutoRelatedCatalog = [
  {
    malId: 442,
    title: "Naruto Movie 1: Dai Katsugeki!! Yuki Hime Ninpouchou Dattebayo!",
    titleRu: "Наруто 1: Книга искусств ниндзя Снежной принцессы",
    type: "MOVIE",
    year: 2004,
    score: 7.13,
    image: "https://shikimori.one/system/animes/original/442.jpg?1711965668"
  },
  {
    malId: 936,
    title: "Naruto Movie 2: Dai Gekitotsu! Maboroshi no Chiteiiseki Dattebayo!",
    titleRu: "Наруто 2: Большое столкновение! Призрачные руины в глубине земли",
    type: "MOVIE",
    year: 2005,
    score: 6.88,
    image: "https://shikimori.one/system/animes/original/936.jpg?1711965657"
  },
  {
    malId: 2144,
    title: "Naruto Movie 3: Dai Koufun! Mikazuki-jima no Animal Panic Dattebayo!",
    titleRu: "Наруто 3: Грандиозный переполох! Бунт зверей на острове Миказуки!",
    type: "MOVIE",
    year: 2006,
    score: 6.93,
    image: "https://shikimori.one/system/animes/original/2144.jpg?1711965648"
  },
  {
    malId: 761,
    title: "Naruto: Akaki Yotsuba no Clover wo Sagase",
    titleRu: "Наруто: Найти тёмно-красный четырёхлистный клевер!",
    type: "SPECIAL",
    year: 2003,
    score: 6.58,
    image: "https://shikimori.one/system/animes/original/761.jpg?1711965645"
  },
  {
    malId: 594,
    title: "Naruto: Takigakure no Shitou - Ore ga Eiyuu Dattebayo!",
    titleRu: "Наруто: Битва на Хидден-Фолс",
    type: "SPECIAL",
    year: 2003,
    score: 6.77,
    image: "https://shikimori.one/system/animes/original/594.jpg?1711965739"
  },
  {
    malId: 7367,
    title: "Naruto: The Cross Roads",
    titleRu: "Наруто: Пересечение дорог",
    type: "SPECIAL",
    year: 2009,
    score: 6.78,
    image: "https://shikimori.one/system/animes/original/7367.jpg?1711965642"
  },
  {
    malId: 1074,
    title: "Naruto Narutimate Hero 3: Tsuini Gekitotsu! Jounin vs. Genin!!",
    titleRu: "Наруто: Соревнования дзёнинов против гэнинов!",
    type: "OVA",
    year: 2005,
    score: 6.77,
    image: "https://shikimori.one/system/animes/original/1074.jpg?1711965681"
  },
  {
    malId: 53236,
    title: "Road of Naruto",
    titleRu: "Путь Наруто",
    type: "SPECIAL",
    year: 2022,
    score: 8.38,
    image: "https://shikimori.one/system/animes/original/53236.jpg?1711935441",
    synopsis: "Официальный юбилейный спецвыпуск VIZ, посвящённый двадцатилетию аниме «Наруто».",
    watchEpisodes: [
      {
        title: "Полный спецвыпуск на YouTube (VIZ)",
        url: "https://www.youtube.com/watch?v=QczGoCmX-pI"
      }
    ]
  }
].map((anime, index) => ({
  id: `mal-${anime.malId}`,
  source: "shikimori",
  franchise: "Наруто",
  requestBase: Math.max(400, 2400 - index * 120),
  popularityBase: Math.max(1000, 16000 - index * 900),
  broadcastDay: "",
  episodes: 1,
  synopsis: "Связанная часть франшизы «Наруто». Официальный трейлер загружается через Jikan, если он доступен.",
  genres: ["Ниндзя", "Приключения"],
  watchEpisodes: [],
  characters: [],
  ...anime
}));

const storageKeys = {
  animeFavorites: "taytlo:animeFavorites",
  characterFavorites: "taytlo:characterFavorites",
  ratings: "taytlo:ratings",
  savedAnime: "taytlo:savedAnime",
  savedCharacters: "taytlo:savedCharacters",
  viewCounts: "taytlo:viewCounts",
  comments: "taytlo:comments",
  theme: "taytlo:theme",
  watchStatuses: "taytlo:watchStatuses",
  watchHistory: "taytlo:watchHistory",
  playbackProgress: "taytlo:playbackProgress",
  remoteMetadata: "taytlo:remoteMetadata",
  shikimoriCache: "taytlo:shikimoriCache",
  customVoiceovers: "taytlo:customVoiceovers",
  quickFilters: "taytlo:quickFilters",
  notificationsEnabled: "taytlo:notificationsEnabled",
  notifiedEpisodes: "taytlo:notifiedEpisodes",
  adminMode: "taytlo:adminMode"
};

function migrateLegacyStorageKeys() {
  Object.values(storageKeys).forEach((key) => {
    const legacyKey = key.replace(/^taytlo:/, "anipulse:");
    if (legacyKey === key) return;
    if (localStorage.getItem(key) !== null || localStorage.getItem(legacyKey) === null) return;
    localStorage.setItem(key, localStorage.getItem(legacyKey));
  });
}

migrateLegacyStorageKeys();

const adminMode = (() => {
  const params = new URL(window.location.href).searchParams;
  const enabled = params.get("admin") === "1" || localStorage.getItem(storageKeys.adminMode) === "true";
  if (enabled) localStorage.setItem(storageKeys.adminMode, "true");
  return enabled;
})();

function applyPublicMode() {
  document.documentElement.dataset.adminMode = adminMode ? "true" : "false";
  document.querySelectorAll("[data-admin-only]").forEach((element) => {
    element.hidden = !adminMode;
  });
}

// Some catalog APIs return a real JPEG containing a "404 not found" drawing.
// These signatures let us treat that file as a missing poster instead.
const knownPlaceholderPosterHashes = new Set([
  "CCFE8E9DDADFE0DB9CBCDBC6860D74BB3B3B20DCC68A7E6F1CB4A0AC716C0919"
]);
const knownPlaceholderPosterPaths = [
  /missing_(?:original|preview)/i,
  /assets\/globals\/missing/i,
  /images\/questionmark/i,
  /images\/anime\/1176\/153626l?\.jpg/i
];
const posterOverridesByMalId = new Map([
  [59493, "./assets/slime-luminous-memories.webp"],
  [59654, "./assets/jujutsu-hidden-inventory-movie.webp"],
  [56734, "./assets/second-cutest-girl-class.webp"],
  [59708, "./assets/classroom-elite-season-4.webp"],
  [59978, "./assets/frieren-2.webp"],
  [59970, "./assets/slime-season-4.webp"],
  [59983, "./assets/wistoria-season-2.webp"],
  [60048, "./assets/bleach-20th.webp"],
  [60012, "./assets/rezero-break-3.webp"],
  [60749, "./assets/maomao-2.webp"],
  [61322, "./assets/dr-stone-future-2.webp"],
  [61876, "./assets/maomao-usj.webp"],
  [62001, "./assets/yomi-no-tsugai.webp"],
  [62392, "./assets/jujutsu-execution.webp"],
  [62568, "./assets/dr-stone-future-3.webp"],
  [62601, "./assets/marriagetoxin.webp"],
  [63129, "./assets/slime-season-4-part-2.webp"],
  [63830, "./assets/rezero-break-4.webp"],
  [63857, "./assets/wistoria-recap.webp"],
  [64018, "./assets/kaze-anthem.webp"]
]);
const aniLibriaReleaseIdsByMalId = new Map([
  [35507, 4578],
  [51096, 9212],
  [51180, 9601],
  [59708, 10155],
  [56734, 10158],
  [1735, 413]
]);
const franchiseRussianNames = new Map([
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
const genreRussianNames = new Map([
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
const aniLibriaFranchiseNamesByReleaseId = new Map([
  [413, "Наруто"],
  [2495, "Наруто"],
  [3996, "Наруто"],
  [8642, "Хоримия"],
  [8862, "Хоримия"],
  [9480, "Хоримия"],
  [9122, "Эта фарфоровая кукла влюбилась"],
  [9964, "Эта фарфоровая кукла влюбилась"],
  [4578, "Класс превосходства"],
  [9212, "Класс превосходства"],
  [9601, "Класс превосходства"],
  [10155, "Класс превосходства"]
]);

const SHIKIMORI_ORIGIN = "https://shikimori.one";
const defaultShikimoriMappings = {
  cacheTtlHours: 12,
  anime: {
    naruto: 20,
    "jujutsu-kaisen": 40748,
    kimetsu: 38000,
    "mal-35507": 35507,
    "mal-51096": 51096,
    "mal-51180": 51180,
    "mal-59708": 59708,
    "mal-49596": 49596,
    "mal-54865": 54865,
    "anilibria-7462": 37450,
    "anilibria-9122": 48736,
    "anilibria-9964": 53065,
    "anilibria-9470": 51009,
    "anilibria-8862": 42897,
    "anilibria-9480": 54856,
    "anilibria-413": 1735,
    "anilibria-2495": 28755,
    "anilibria-3996": 34566,
    "anilibria-8642": 14753
  },
  anilibria: {
    413: 1735,
    2495: 28755,
    3996: 34566,
    4578: 35507,
    9212: 51096,
    9601: 51180,
    10155: 59708,
    7462: 37450,
    9122: 48736,
    9964: 53065,
    9470: 51009,
    8862: 42897,
    9480: 54856,
    8642: 14753,
    8789: 40748,
    8325: 38000
  }
};

const elements = {
  canonicalLink: document.querySelector("#canonicalLink"),
  searchForm: document.querySelector("#searchForm"),
  searchInput: document.querySelector("#searchInput"),
  scoreFilter: document.querySelector("#scoreFilter"),
  scoreValue: document.querySelector("#scoreValue"),
  sortSelect: document.querySelector("#sortSelect"),
  genreFilter: document.querySelector("#genreFilter"),
  franchiseFilter: document.querySelector("#franchiseFilter"),
  genreOptionSearch: document.querySelector("#genreOptionSearch"),
  franchiseOptionSearch: document.querySelector("#franchiseOptionSearch"),
  genreSearchEmpty: document.querySelector("#genreSearchEmpty"),
  franchiseSearchEmpty: document.querySelector("#franchiseSearchEmpty"),
  resetFiltersButton: document.querySelector("#resetFiltersButton"),
  quickFilterButtons: document.querySelectorAll(".quick-filter"),
  installAppButton: document.querySelector("#installAppButton"),
  profileButton: document.querySelector("#profileButton"),
  watchHubGrid: document.querySelector("#watchHubGrid"),
  watchHubRefresh: document.querySelector("#watchHubRefresh"),
  adminButton: document.querySelector("#adminButton"),
  addAnimeButton: document.querySelector("#addAnimeButton"),
  themeToggle: document.querySelector("#themeToggle"),
  statusLine: document.querySelector("#statusLine"),
  animeGrid: document.querySelector("#animeGrid"),
  catalogLoadMore: document.querySelector("#catalogLoadMore"),
  showMoreButton: document.querySelector("#showMoreButton"),
  emptyState: document.querySelector("#emptyState"),
  viewTitle: document.querySelector("#viewTitle"),
  refreshButton: document.querySelector("#refreshButton"),
  detailCover: document.querySelector("#detailCover"),
  detailMeta: document.querySelector("#detailMeta"),
  detailTitle: document.querySelector("#detailTitle"),
  detailOriginalTitle: document.querySelector("#detailOriginalTitle"),
  shareAnimeButton: document.querySelector("#shareAnimeButton"),
  editAnimeButton: document.querySelector("#editAnimeButton"),
  detailFavorite: document.querySelector("#detailFavorite"),
  detailSynopsis: document.querySelector("#detailSynopsis"),
  detailAvailability: document.querySelector("#detailAvailability"),
  detailAvailabilityState: document.querySelector("#detailAvailabilityState"),
  detailAvailabilityTitle: document.querySelector("#detailAvailabilityTitle"),
  detailAvailabilityNote: document.querySelector("#detailAvailabilityNote"),
  detailScore: document.querySelector("#detailScore"),
  detailStars: document.querySelector("#detailStars"),
  detailFranchise: document.querySelector("#detailFranchise"),
  detailScoreLabel: document.querySelector("#detailScoreLabel"),
  detailScoreMeta: document.querySelector("#detailScoreMeta"),
  shikimoriLink: document.querySelector("#shikimoriLink"),
  franchiseTimeline: document.querySelector("#franchiseTimeline"),
  franchiseTimelineList: document.querySelector("#franchiseTimelineList"),
  franchiseTimelineCount: document.querySelector("#franchiseTimelineCount"),
  guideNotes: document.querySelector("#guideNotes"),
  guideNotesText: document.querySelector("#guideNotesText"),
  watchAnimeButton: document.querySelector("#watchAnimeButton"),
  resumeHint: document.querySelector("#resumeHint"),
  watchStatusSelect: document.querySelector("#watchStatusSelect"),
  genreList: document.querySelector("#genreList"),
  apiEpisodesStatus: document.querySelector("#apiEpisodesStatus"),
  apiEpisodeList: document.querySelector("#apiEpisodeList"),
  apiEpisodeCount: document.querySelector("#apiEpisodeCount"),
  aniLibriaReleaseLink: document.querySelector("#aniLibriaReleaseLink"),
  characterCount: document.querySelector("#characterCount"),
  characterGrid: document.querySelector("#characterGrid"),
  statAnime: document.querySelector("#statAnime"),
  statFavorites: document.querySelector("#statFavorites"),
  statRated: document.querySelector("#statRated"),
  animeCardTemplate: document.querySelector("#animeCardTemplate"),
  characterCardTemplate: document.querySelector("#characterCardTemplate"),
  addAnimeDialog: document.querySelector("#addAnimeDialog"),
  addAnimeForm: document.querySelector("#addAnimeForm"),
  adminDialog: document.querySelector("#adminDialog"),
  adminForm: document.querySelector("#adminForm"),
  adminAnimeSelect: document.querySelector("#adminAnimeSelect"),
  adminPosterPreview: document.querySelector("#adminPosterPreview"),
  adminPreviewTitle: document.querySelector("#adminPreviewTitle"),
  adminPreviewMeta: document.querySelector("#adminPreviewMeta"),
  adminTitleRu: document.querySelector("#adminTitleRu"),
  adminTitle: document.querySelector("#adminTitle"),
  adminFranchise: document.querySelector("#adminFranchise"),
  adminType: document.querySelector("#adminType"),
  adminYear: document.querySelector("#adminYear"),
  adminEpisodes: document.querySelector("#adminEpisodes"),
  adminScore: document.querySelector("#adminScore"),
  adminBroadcastDay: document.querySelector("#adminBroadcastDay"),
  adminPoster: document.querySelector("#adminPoster"),
  adminGenres: document.querySelector("#adminGenres"),
  adminAvailabilityState: document.querySelector("#adminAvailabilityState"),
  adminAvailabilityStart: document.querySelector("#adminAvailabilityStart"),
  adminAvailabilityNote: document.querySelector("#adminAvailabilityNote"),
  adminGuideNote: document.querySelector("#adminGuideNote"),
  adminSynopsis: document.querySelector("#adminSynopsis"),
  adminEpisodesUrls: document.querySelector("#adminEpisodesUrls"),
  adminFormNote: document.querySelector("#adminFormNote"),
  adminDeleteButton: document.querySelector("#adminDeleteButton"),
  playerDialog: document.querySelector("#playerDialog"),
  playerTitle: document.querySelector("#playerTitle"),
  playerMeta: document.querySelector("#playerMeta"),
  videoPlayer: document.querySelector("#videoPlayer"),
  embedPlayer: document.querySelector("#embedPlayer"),
  playerEmpty: document.querySelector("#playerEmpty"),
  episodeList: document.querySelector("#episodeList"),
  playbackStatus: document.querySelector("#playbackStatus"),
  voiceoverSelect: document.querySelector("#voiceoverSelect"),
  customVoiceoverName: document.querySelector("#customVoiceoverName"),
  customVoiceoverUrl: document.querySelector("#customVoiceoverUrl"),
  addVoiceoverButton: document.querySelector("#addVoiceoverButton"),
  openSourceLink: document.querySelector("#openSourceLink"),
  sourceEpisodes: document.querySelector("#sourceEpisodes"),
  localVideoInput: document.querySelector("#localVideoInput"),
  saveSourcesButton: document.querySelector("#saveSourcesButton"),
  topRequestsList: document.querySelector("#topRequestsList"),
  updatesList: document.querySelector("#updatesList"),
  popularList: document.querySelector("#popularList"),
  commentForm: document.querySelector("#commentForm"),
  commentInput: document.querySelector("#commentInput"),
  commentList: document.querySelector("#commentList"),
  commentCount: document.querySelector("#commentCount"),
  recommendationsTitle: document.querySelector("#recommendationsTitle"),
  recommendationsHint: document.querySelector("#recommendationsHint"),
  recommendationsList: document.querySelector("#recommendationsList"),
  collectionsSection: document.querySelector("#collectionsSection"),
  collectionTabs: document.querySelector("#collectionTabs"),
  collectionList: document.querySelector("#collectionList"),
  libraryList: document.querySelector("#libraryList"),
  countWatching: document.querySelector("#countWatching"),
  countCompleted: document.querySelector("#countCompleted"),
  countDropped: document.querySelector("#countDropped"),
  countPlanned: document.querySelector("#countPlanned"),
  enableNotificationsButton: document.querySelector("#enableNotificationsButton"),
  notificationStatus: document.querySelector("#notificationStatus"),
  notificationList: document.querySelector("#notificationList"),
  calendarGrid: document.querySelector("#calendarGrid"),
  historyList: document.querySelector("#historyList"),
  clearHistoryButton: document.querySelector("#clearHistoryButton"),
  profileSection: document.querySelector("#profileSection"),
  profileSummary: document.querySelector("#profileSummary"),
  exportProfileButton: document.querySelector("#exportProfileButton"),
  profileImportInput: document.querySelector("#profileImportInput")
};

let animeFavorites = readSet(storageKeys.animeFavorites);
let characterFavorites = readSet(storageKeys.characterFavorites);
let ratings = readObject(storageKeys.ratings);
let savedAnime = readObject(storageKeys.savedAnime);
let savedCharacters = readObject(storageKeys.savedCharacters);
let viewCounts = readObject(storageKeys.viewCounts);
let comments = readObject(storageKeys.comments);
let watchStatuses = readObject(storageKeys.watchStatuses);
let watchHistory = readArray(storageKeys.watchHistory);
let playbackProgress = readObject(storageKeys.playbackProgress);
let remoteMetadata = readObject(storageKeys.remoteMetadata);
let shikimoriCache = readObject(storageKeys.shikimoriCache);
let customVoiceovers = readObject(storageKeys.customVoiceovers);
let quickFilters = readSet(storageKeys.quickFilters);
let notifiedEpisodes = readSet(storageKeys.notifiedEpisodes);
let catalog = mergeInitialCatalog([...seedCatalog, ...narutoRelatedCatalog], Object.values(savedAnime));
const catalogPageSize = 9;
let shikimoriMappings = JSON.parse(JSON.stringify(defaultShikimoriMappings));
let shikimoriMappingsLoaded = false;
let shikimoriStaticCacheLoaded = false;
let shikimoriStaticCacheAvailable = false;
let shikimoriHydrating = false;
let shikimoriHydrationTimer = null;
const shikimoriHydrationQueue = new Map();
let scheduleEntries = [];
let latestReleaseUpdates = [];
let scheduleLoading = true;
let scheduleLoadFailed = false;
let updatesLoading = true;
let updatesLoadFailed = false;

const state = {
  view: "catalog",
  query: "",
  minScore: 0,
  sort: "score",
  genre: "",
  franchise: "",
  genreOptionQuery: "",
  franchiseOptionQuery: "",
  visibleCount: catalogPageSize,
  selectedId: catalog[0].id,
  loading: false,
  playerAnimeId: null,
  playerEpisodeIndex: 0,
  activeAniLibriaEpisode: null,
  activeVoiceoverSelection: null,
  baseMediaSource: null,
  libraryStatus: "watching",
  activeCollection: "",
  watchHubSeed: 0,
  adminAnimeId: null
};

let hlsInstance = null;
let lastProgressSavedAt = 0;
let deferredInstallPrompt = null;

function readSet(key) {
  try {
    return new Set(JSON.parse(localStorage.getItem(key) || "[]"));
  } catch {
    return new Set();
  }
}

function saveSet(key, set) {
  localStorage.setItem(key, JSON.stringify([...set]));
}

function readObject(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "{}");
  } catch {
    return {};
  }
}

function readArray(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function saveObject(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}

function shikimoriCacheTtlMs() {
  const hours = Number(shikimoriMappings.cacheTtlHours || defaultShikimoriMappings.cacheTtlHours || 12);
  return Math.max(12, Math.min(24, hours)) * 60 * 60 * 1000;
}

function ensureShikimoriCache() {
  if (!shikimoriCache || typeof shikimoriCache !== "object" || Array.isArray(shikimoriCache)) {
    shikimoriCache = {};
  }
  shikimoriCache.version = 1;
  shikimoriCache.items = shikimoriCache.items && typeof shikimoriCache.items === "object" ? shikimoriCache.items : {};
  return shikimoriCache;
}

function saveShikimoriCache() {
  ensureShikimoriCache();
  saveObject(storageKeys.shikimoriCache, shikimoriCache);
}

function shikimoriCacheEntry(anime) {
  return ensureShikimoriCache().items?.[anime?.id || ""];
}

function shikimoriCacheIsFresh(entry) {
  return Boolean(entry?.checkedAt && Date.now() - Number(entry.checkedAt) < shikimoriCacheTtlMs());
}

function normalizedRoutePath(value) {
  const path = String(value || "").replace(/^\/+|\/+$/g, "");
  return path ? `/${path}/` : "/";
}

function appRootPath() {
  try {
    return normalizedRoutePath(new URL(configuredSiteUrl()).pathname);
  } catch {
    return "/";
  }
}

function slugifyAnimeTitle(value) {
  const transliteration = {
    а: "a", б: "b", в: "v", г: "g", д: "d", е: "e", ё: "yo", ж: "zh", з: "z", и: "i", й: "y",
    к: "k", л: "l", м: "m", н: "n", о: "o", п: "p", р: "r", с: "s", т: "t", у: "u", ф: "f",
    х: "h", ц: "ts", ч: "ch", ш: "sh", щ: "sch", ъ: "", ы: "y", ь: "", э: "e", ю: "yu", я: "ya"
  };
  return String(value || "anime")
    .toLocaleLowerCase("ru")
    .split("")
    .map((character) => transliteration[character] ?? character)
    .join("")
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80) || "anime";
}

function ensureAnimeRoute(anime) {
  if (!anime?.id) return "";
  window.ANI_SEO_ROUTES ||= {};
  if (window.ANI_SEO_ROUTES[anime.id]) return window.ANI_SEO_ROUTES[anime.id];
  const usedRoutes = new Set(Object.values(window.ANI_SEO_ROUTES));
  const titleSlug = slugifyAnimeTitle(anime.titleRu || anime.title);
  const base = `anime/${titleSlug}-${slugifyAnimeTitle(anime.id)}/`;
  const route = usedRoutes.has(base) ? `anime/${titleSlug}-${slugifyAnimeTitle(anime.id)}-anime/` : base;
  window.ANI_SEO_ROUTES[anime.id] = route;
  return route;
}

catalog.forEach(ensureAnimeRoute);

function animeIdFromUrl() {
  const url = new URL(window.location.href);
  const queryId = url.searchParams.get("anime");
  if (queryId) return queryId;
  const currentPath = normalizedRoutePath(url.pathname);
  const route = Object.entries(window.ANI_SEO_ROUTES || {}).find(([, value]) => {
    const absolutePath = new URL(value, `${url.origin}${appRootPath()}`).pathname;
    return normalizedRoutePath(absolutePath) === currentPath;
  });
  if (route?.[0]) return route[0];
  const routeId = currentPath.match(/-(mal-\d+|anilibria-\d+)(?:-anime)?\/$/i)?.[1];
  return routeId || "";
}

function syncAnimeUrl(id, replace = false) {
  const url = new URL(window.location.href);
  const currentId = animeIdFromUrl();
  if (id) {
    const anime = catalog.find((item) => item.id === id);
    const route = anime ? ensureAnimeRoute(anime) : "";
    if (route) url.pathname = new URL(route, `${url.origin}${appRootPath()}`).pathname;
    else url.searchParams.set("anime", id);
    url.searchParams.delete("anime");
    url.searchParams.delete("query");
  } else {
    url.pathname = appRootPath();
    url.searchParams.delete("anime");
  }
  url.hash = "";
  const method = replace || currentId === String(id || "") ? "replaceState" : "pushState";
  window.history[method]({ animeId: id || null }, "", url);
}

function syncSearchUrl(query, replace = false) {
  const url = new URL(window.location.href);
  url.pathname = appRootPath();
  url.searchParams.delete("anime");
  if (query) url.searchParams.set("query", query);
  else url.searchParams.delete("query");
  const method = replace ? "replaceState" : "pushState";
  window.history[method]({ query: query || null }, "", url);
}

function configuredSiteUrl() {
  const configured = window.ANI_SEO_CONFIG?.siteUrl;
  if (!configured) return window.location.origin;
  try {
    const value = new URL(configured);
    const configuredIsLocal = ["localhost", "127.0.0.1"].includes(value.hostname);
    const currentIsLocal = ["localhost", "127.0.0.1"].includes(window.location.hostname);
    return configuredIsLocal && !currentIsLocal ? window.location.origin : value.toString().replace(/\/$/, "");
  } catch {
    return window.location.origin;
  }
}

function seoUrlForAnime(anime) {
  const route = ensureAnimeRoute(anime);
  if (route) return new URL(route, `${configuredSiteUrl()}/`).toString();
  const fallback = new URL(`${configuredSiteUrl()}/`);
  fallback.searchParams.set("anime", anime.id);
  return fallback.toString();
}

function absoluteSeoImage(value) {
  const image = String(value || "").trim();
  if (!image) return new URL("favicon.svg", `${configuredSiteUrl()}/`).toString();
  try {
    return new URL(image, `${configuredSiteUrl()}/`).toString();
  } catch {
    return image;
  }
}

function setMetaContent(selector, value) {
  const node = document.querySelector(selector);
  if (node) node.setAttribute("content", value);
}

function seoDescription(anime) {
  const fallback = `${anime.titleRu || anime.title}: описание, рейтинг, персонажи и части франшизы.`;
  const value = String(anime.synopsis || fallback).replace(/\s+/g, " ").trim();
  return value.length > 158 ? `${value.slice(0, 155).trimEnd()}...` : value;
}

function updateSeoMetadata(anime) {
  const siteName = window.ANI_SEO_CONFIG?.siteName || "Taytlo";
  const title = `${anime.titleRu || anime.title} - описание и рейтинг | ${siteName}`;
  const description = seoDescription(anime);
  const canonical = seoUrlForAnime(anime);
  const image = absoluteSeoImage(anime.image);
  const isMovie = String(anime.type || "").toUpperCase() === "MOVIE";
  document.title = title;
  elements.canonicalLink?.setAttribute("href", canonical);
  setMetaContent("#metaDescription", description);
  setMetaContent("#ogType", isMovie ? "video.movie" : "video.tv_show");
  setMetaContent("#ogTitle", title);
  setMetaContent("#ogDescription", description);
  setMetaContent("#ogUrl", canonical);
  setMetaContent("#ogImage", image);
  setMetaContent("#twitterTitle", title);
  setMetaContent("#twitterDescription", description);
  setMetaContent("#twitterImage", image);
  let script = document.querySelector("#animeStructuredData");
  if (!script) {
    script = document.createElement("script");
    script.id = "animeStructuredData";
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  const structured = {
    "@context": "https://schema.org",
    "@type": isMovie ? "Movie" : "TVSeries",
    name: anime.titleRu || anime.title,
    alternateName: anime.title && anime.title !== anime.titleRu ? anime.title : undefined,
    description,
    image,
    url: canonical,
    genre: anime.genres || [],
    datePublished: anime.year ? String(anime.year) : undefined,
    numberOfEpisodes: Number(anime.episodes) || undefined,
    sameAs: anime.malId ? `https://myanimelist.net/anime/${anime.malId}` : undefined,
    isPartOf: anime.franchise ? { "@type": "CreativeWorkSeries", name: anime.franchise } : undefined
  };
  Object.keys(structured).forEach((key) => structured[key] === undefined && delete structured[key]);
  script.textContent = JSON.stringify(structured);
}

function resetSeoMetadata() {
  const config = window.ANI_SEO_CONFIG || {};
  const title = config.defaultTitle || "Taytlo beta - каталог аниме, рейтинги и календарь";
  const description = config.defaultDescription || "Временная версия Taytlo: русский каталог аниме с поиском, рейтингами Shikimori и календарем серий.";
  const canonical = `${configuredSiteUrl()}/`;
  const image = new URL("assets/frieren-2.webp", canonical).toString();
  document.title = title;
  elements.canonicalLink?.setAttribute("href", canonical);
  setMetaContent("#metaDescription", description);
  setMetaContent("#ogType", "website");
  setMetaContent("#ogTitle", title);
  setMetaContent("#ogDescription", description);
  setMetaContent("#ogUrl", canonical);
  setMetaContent("#ogImage", image);
  setMetaContent("#twitterTitle", title);
  setMetaContent("#twitterDescription", description);
  setMetaContent("#twitterImage", image);
  document.querySelector("#animeStructuredData")?.remove();
}

async function copyAnimeLink(anime) {
  if (!anime) return;
  syncAnimeUrl(anime.id, true);
  const value = seoUrlForAnime(anime);
  try {
    await navigator.clipboard.writeText(value);
  } catch {
    const input = document.createElement("textarea");
    input.value = value;
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    input.remove();
  }
  setStatus(`Ссылка на «${anime.titleRu || anime.title}» скопирована.`);
}

async function resolveAnimeFromUrl({ scroll = false } = {}) {
  const routeId = animeIdFromUrl();
  if (!routeId) return;
  const existing = catalog.find((anime) => anime.id === routeId);
  if (existing) {
    focusAnime(existing.id, false, { updateUrl: false, scroll });
    syncAnimeUrl(existing.id, true);
    return;
  }

  try {
    let resolved = null;
    const malMatch = routeId.match(/^mal-(\d+)$/);
    const aniLibriaMatch = routeId.match(/^anilibria-(\d+)$/);
    if (malMatch) {
      const malId = Number(malMatch[1]);
      const [jikanResult, shikimoriResult] = await Promise.allSettled([
        fetch(`https://api.jikan.moe/v4/anime/${malId}`),
        fetch(`https://shikimori.one/api/animes/${malId}`)
      ]);
      const jikanResponse = jikanResult.status === "fulfilled" ? jikanResult.value : null;
      const shikimoriResponse = shikimoriResult.status === "fulfilled" ? shikimoriResult.value : null;
      if (jikanResponse?.ok) {
        const jikanPayload = await jikanResponse.json();
        resolved = animeFromJikan(jikanPayload.data);
      }
      if (shikimoriResponse?.ok) {
        const russian = animeFromShikimori(await shikimoriResponse.json());
        if (resolved) mergeAnimeRecords(resolved, russian);
        else resolved = russian;
      }
      if (!resolved) throw new Error("Anime route APIs failed");
    } else if (aniLibriaMatch) {
      const response = await fetch(`https://anilibria.top/api/v1/anime/releases/${aniLibriaMatch[1]}`);
      if (!response.ok) throw new Error("AniLibria route failed");
      resolved = animeFromAniLibriaCatalog(await response.json(), 0);
    }
    if (!resolved) throw new Error("Unknown route");
    mergeAnime([resolved]);
    await hydrateMissingPosters([resolved]);
    const target = catalog.find((anime) => anime.id === routeId) ||
      catalog.find((anime) => Number(anime.malId) === Number(resolved.malId)) ||
      catalog.find((anime) => Number(anime.aniLibriaReleaseId) === Number(resolved.aniLibriaReleaseId));
    if (!target) throw new Error("Route merge failed");
    focusAnime(target.id, false, { updateUrl: false, scroll });
    syncAnimeUrl(target.id, true);
  } catch {
    setStatus("Карточку по этой ссылке не удалось загрузить.");
  }
}

function saveRatings() {
  localStorage.setItem(storageKeys.ratings, JSON.stringify(ratings));
}

function applyTheme(theme) {
  const nextTheme = theme === "light" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem(storageKeys.theme, nextTheme);
  elements.themeToggle.innerHTML = `<i data-lucide="${nextTheme === "dark" ? "sun" : "moon"}" aria-hidden="true"></i>`;
  const label = nextTheme === "dark" ? "Светлая тема" : "Темная тема";
  elements.themeToggle.title = label;
  elements.themeToggle.setAttribute("aria-label", label);
  createIcons();
}

function canonicalAnimeTitle(value) {
  return normalizeText(value)
    .normalize("NFKC")
    .replace(/ё/g, "е")
    .replace(/[^a-zа-я0-9]+/giu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function guideData() {
  return window.ANI_GUIDE_DATA || {};
}

function hasCyrillic(value) {
  return /[а-яё]/i.test(String(value || ""));
}

function localizeGenreName(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  const normalized = canonicalAnimeTitle(raw);
  return genreRussianNames.get(raw.toLocaleLowerCase("ru")) || genreRussianNames.get(normalized) || raw;
}

function localizeGenres(genres = []) {
  return [...new Set((genres || []).map(localizeGenreName).filter(Boolean))];
}

function readableRussianTitleBase(anime = {}) {
  const title = hasCyrillic(anime.titleRu) ? anime.titleRu : hasCyrillic(anime.title) ? anime.title : "";
  return String(title || "")
    .replace(/\s*[:—-]\s*(?:сезон|часть|фильм|ova|ona|спецвыпуск).*$/iu, "")
    .replace(/\s+\d+(?:[-–]\w+)?\s*(?:сезон|часть).*$/iu, "")
    .replace(/\s+\d+$/u, "")
    .trim();
}

function animeGuideKeys(anime = {}) {
  return [
    anime.id,
    anime.malId ? `mal-${anime.malId}` : "",
    anime.aniLibriaReleaseId ? `anilibria-${anime.aniLibriaReleaseId}` : ""
  ].filter(Boolean);
}

function animeAvailabilityOverride(anime = {}) {
  const overrides = guideData().availabilityOverrides || {};
  const savedOverride = anime.availabilityOverride || {};
  const guideOverride = animeGuideKeys(anime).map((key) => overrides[key]).find(Boolean) || {};
  return { ...guideOverride, ...savedOverride };
}

function animeGuideNote(anime = {}) {
  const notes = guideData().titleGuides || {};
  const guide = animeGuideKeys(anime).map((key) => notes[key]).find(Boolean) || {};
  return anime.guideNote || guide.note || "";
}

function animeIdentityTitles(anime) {
  return [...new Set([anime.title, anime.titleRu, ...(anime.altTitles || [])].map(canonicalAnimeTitle).filter((title) => title.length >= 3))];
}

function sameAnimeIdentity(left, right) {
  if (left.malId && right.malId && Number(left.malId) === Number(right.malId)) return true;
  if (
    left.aniLibriaReleaseId &&
    right.aniLibriaReleaseId &&
    Number(left.aniLibriaReleaseId) === Number(right.aniLibriaReleaseId)
  ) {
    return true;
  }
  if (left.id && right.id && left.id === right.id) return true;
  const leftYear = Number(left.year || 0);
  const rightYear = Number(right.year || 0);
  if (leftYear && rightYear && leftYear !== rightYear) return false;
  const rightTitles = new Set(animeIdentityTitles(right));
  return animeIdentityTitles(left).some((title) => rightTitles.has(title));
}

function localizeFranchiseName(value, anime = {}) {
  const raw = String(value || "").trim();
  const normalized = canonicalAnimeTitle(raw);
  for (const [key, russian] of franchiseRussianNames) {
    if (normalized === key || normalized.startsWith(`${key} `)) return russian;
  }
  if (hasCyrillic(raw)) return raw;
  const russianBase = readableRussianTitleBase(anime);
  return russianBase || raw || (hasCyrillic(anime.titleRu) ? anime.titleRu : anime.title) || "Без франшизы";
}

function preferDescription(left, right) {
  const placeholders = /описание (?:недоступно|релиза пока недоступно)|загружается при открытии/i;
  const values = [left, right].filter(Boolean).filter((value) => !placeholders.test(value));
  return values.sort((a, b) => b.length - a.length)[0] || left || right || "Описание недоступно.";
}

function mergeAnimeRecords(target, incoming) {
  const incomingRu = /[а-яё]/i.test(incoming.titleRu || "") ? incoming.titleRu : "";
  const targetRu = /[а-яё]/i.test(target.titleRu || "") ? target.titleRu : "";
  target.posterCandidates = posterCandidateList(target, [incoming.image, ...(incoming.posterCandidates || [])]);
  target.malId = target.malId || incoming.malId || null;
  target.aniLibriaReleaseId = target.aniLibriaReleaseId || incoming.aniLibriaReleaseId || null;
  target.title = target.title || incoming.title;
  target.titleRu = targetRu || incomingRu || target.titleRu || incoming.titleRu || target.title;
  target.altTitles = [...new Set([...(target.altTitles || []), ...(incoming.altTitles || []), incoming.title, incoming.titleRu].filter(Boolean))];
  target.image = posterCandidateList(target, [incoming.image, ...(incoming.posterCandidates || [])])[0] ||
    cleanPosterUrl(target.image, target.malId) ||
    cleanPosterUrl(incoming.image, target.malId);
  target.score = Math.max(Number(target.score || 0), Number(incoming.score || 0));
  if (incoming.shikimori || incoming.shikimoriScore || incoming.shikimoriId) {
    applyShikimoriData(target, incoming.shikimori || {
      id: incoming.shikimoriId || incoming.malId || null,
      score: Number(incoming.shikimoriScore || incoming.score || 0),
      votes: Number(incoming.shikimoriVotes || 0),
      url: incoming.shikimoriUrl || "",
      title: incoming.title || "",
      titleRu: incoming.titleRu || "",
      matchedBy: incoming.source === "shikimori" ? "api" : "merge",
      confidence: incoming.source === "shikimori" ? 99 : 0,
      status: Number(incoming.shikimoriScore || incoming.score || 0) > 0 ? "ready" : "no_score",
      checkedAt: Date.now()
    });
  }
  target.synopsis = preferDescription(target.synopsis, incoming.synopsis);
  target.genres = localizeGenres([...(target.genres || []), ...(incoming.genres || [])]);
  target.franchise = localizeFranchiseName(target.franchise || incoming.franchise, target);
  target.trailer = target.trailer || incoming.trailer || "";
  target.broadcastDay = target.broadcastDay || incoming.broadcastDay || "";
  target.status = incoming.status || target.status || "";
  target.episodesAired = Math.max(Number(target.episodesAired || 0), Number(incoming.episodesAired || 0));
  target.nextEpisodeAt = incoming.nextEpisodeAt || target.nextEpisodeAt || "";
  target.airedOn = target.airedOn || incoming.airedOn || "";
  target.releasedOn = target.releasedOn || incoming.releasedOn || "";
  target.year = target.year || incoming.year || "";
  target.type = target.type && target.type !== "Anime" ? target.type : incoming.type || target.type;
  target.episodes = target.episodes && target.episodes !== "?" ? target.episodes : incoming.episodes || target.episodes;
  target.requestBase = Math.max(Number(target.requestBase || 0), Number(incoming.requestBase || 0));
  target.popularityBase = Math.max(Number(target.popularityBase || 0), Number(incoming.popularityBase || 0));
  const episodesByUrl = new Map([...(target.watchEpisodes || []), ...(incoming.watchEpisodes || [])].map((episode) => [episode.url, episode]));
  target.watchEpisodes = [...episodesByUrl.values()].filter((episode) => episode?.url);
  const charactersById = new Map(
    [...(target.characters || []), ...(incoming.characters || [])].map((character) => [character.id || canonicalAnimeTitle(character.name), character])
  );
  target.characters = [...charactersById.values()];
  ensureAnimeRoute(target);
  return target;
}

function deduplicateAnimeItems(items) {
  const unique = [];
  for (const item of items) {
    if (!item) continue;
    const existing = unique.find((candidate) => sameAnimeIdentity(candidate, item));
    if (existing) mergeAnimeRecords(existing, item);
    else unique.push(item);
  }
  return unique;
}

function cachedCharactersForAnime(anime) {
  const cached = window.ANI_CHARACTER_CACHE?.[String(anime?.malId || "")];
  return Array.isArray(cached) ? cached : [];
}

function resolveSiteAsset(value) {
  const path = String(value || "");
  if (!/^\.?\/?assets\//i.test(path)) return path;
  return new URL(path.replace(/^\.?\/?/, ""), `${window.location.origin}${appRootPath()}`).toString();
}

function romanizedCharacterKey(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/ou/g, "o")
    .replace(/([aeiou])\1+/g, "$1")
    .replace(/[^a-z0-9]/g, "");
}

function charactersWithImageReserve(anime) {
  const current = (anime.characters || []).map((character) => ({
    ...character,
    image: resolveSiteAsset(character.image),
    role: translateCharacterRole(character.role),
    tags: [...(character.tags || [])]
  }));
  if (current.some((character) => character.image)) return current;
  const cached = cachedCharactersForAnime(anime);
  if (!cached.length) return current;
  const enriched = current.map((character) => {
    const idToken = romanizedCharacterKey(String(character.id || "").split("-").at(-1));
    const match = cached.find((candidate) => romanizedCharacterKey(candidate.name).includes(idToken));
    return match ? { ...character, image: resolveSiteAsset(match.image) } : character;
  });
  return enriched.every((character) => character.image)
    ? enriched
    : cached.map((character) => ({
      ...character,
      image: resolveSiteAsset(character.image),
      role: translateCharacterRole(character.role),
      tags: [...(character.tags || [])]
    }));
}

function cloneAnime(anime) {
  return {
    ...anime,
    image: cleanPosterUrl(anime.image, anime.malId),
    posterCandidates: posterCandidateList(anime),
    franchise: localizeFranchiseName(anime.franchise, anime),
    altTitles: [...(anime.altTitles || [])],
    charactersLoading: false,
    charactersLoadFailed: false,
    mediaLoading: false,
    mediaLoadFailed: false,
    russianDetailsLoading: false,
    russianDetailsFailed: false,
    genres: localizeGenres(anime.genres || []),
    availabilityOverride: { ...(anime.availabilityOverride || {}) },
    guideNote: anime.guideNote || "",
    shikimori: anime.shikimori ? { ...anime.shikimori } : null,
    shikimoriId: anime.shikimoriId || null,
    shikimoriScore: Number(anime.shikimoriScore || 0),
    shikimoriVotes: Number(anime.shikimoriVotes || 0),
    shikimoriUrl: anime.shikimoriUrl || "",
    shikimoriStatus: anime.shikimoriStatus || "",
    shikimoriMatchConfidence: Number(anime.shikimoriMatchConfidence || 0),
    watchEpisodes: (anime.watchEpisodes || []).map((episode, index) =>
      typeof episode === "string" ? { title: `Серия ${index + 1}`, url: episode } : { ...episode }
    ),
    characters: charactersWithImageReserve(anime)
  };
}

function snapshotAnime(anime) {
  const snapshot = cloneAnime(anime);
  delete snapshot.aniLibria;
  delete snapshot.franchiseLoading;
  delete snapshot.franchiseLoaded;
  delete snapshot.franchiseLoadFailed;
  delete snapshot.relationsLoading;
  delete snapshot.relationsLoaded;
  delete snapshot.relationsLoadFailed;
  return snapshot;
}

function mergeInitialCatalog(baseItems, savedItems) {
  const saved = savedItems.filter((anime) => anime?.id).map(cloneAnime);
  const passiveSaved = saved.filter((anime) => !anime.adminEdited);
  const initial = deduplicateAnimeItems([...baseItems, ...passiveSaved].filter((anime) => anime?.id).map(cloneAnime));

  for (const edited of saved.filter((anime) => anime.adminEdited)) {
    const existing = initial.find((anime) => anime.id === edited.id) || initial.find((anime) => sameAnimeIdentity(anime, edited));
    if (existing) Object.assign(existing, edited, { id: existing.id, adminEdited: true });
    else initial.push(edited);
  }

  return deduplicateAnimeItems(initial);
}

function createIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function normalizeText(value) {
  return String(value || "").toLocaleLowerCase("ru");
}

function animeSearchText(anime) {
  const characters = anime.characters?.map((character) => character.name).join(" ") || "";
  return normalizeText(
    [anime.title, anime.titleRu, anime.altTitles?.join(" "), anime.franchise, anime.type, anime.year, anime.genres?.join(" "), characters].join(" ")
  );
}

function sortedUnique(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b, "ru"));
}

function renderFilterOptions() {
  const genres = sortedUnique(catalog.flatMap((anime) => anime.genres || []));
  const franchises = sortedUnique(catalog.map((anime) => anime.franchise));
  const genreQuery = normalizeText(state.genreOptionQuery.trim());
  const franchiseQuery = normalizeText(state.franchiseOptionQuery.trim());
  const filteredGenres = genreQuery ? genres.filter((genre) => normalizeText(genre).includes(genreQuery)) : genres;
  const filteredFranchises = franchiseQuery
    ? franchises.filter((franchise) => normalizeText(franchise).includes(franchiseQuery))
    : franchises;
  updateSelectOptions(elements.genreFilter, filteredGenres, "Все жанры", state.genre, Boolean(genreQuery));
  updateSelectOptions(elements.franchiseFilter, filteredFranchises, "Все франшизы", state.franchise, Boolean(franchiseQuery));
  elements.genreSearchEmpty.hidden = !genreQuery || filteredGenres.length > 0;
  elements.franchiseSearchEmpty.hidden = !franchiseQuery || filteredFranchises.length > 0;
}

function updateSelectOptions(select, values, emptyLabel, selectedValue, hasSearch = false) {
  const fragment = document.createDocumentFragment();
  const emptyOption = document.createElement("option");
  emptyOption.value = "";
  emptyOption.textContent = emptyLabel;
  fragment.appendChild(emptyOption);

  const visibleValues = selectedValue && !values.includes(selectedValue) ? [selectedValue, ...values] : values;
  for (const value of visibleValues) {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    fragment.appendChild(option);
  }

  if (hasSearch && values.length === 0) {
    const noResults = document.createElement("option");
    noResults.disabled = true;
    noResults.textContent = "Ничего не найдено";
    fragment.appendChild(noResults);
  }

  select.replaceChildren(fragment);
  select.value = selectedValue || "";
}

function hasWatchableSources(anime) {
  return Boolean(
    anime?.aniLibria?.episodes?.length ||
    anime?.aniLibriaReleaseId ||
    aniLibriaReleaseIdsByMalId.get(Number(anime?.malId)) ||
    (anime?.watchEpisodes || []).some((episode) => episode?.url)
  );
}

function isOngoingAnime(anime) {
  return animeReleaseStatusLabel(anime, anime?.aniLibria || {}) === "Онгоинг";
}

function isCompletedAnime(anime) {
  return animeReleaseStatusLabel(anime, anime?.aniLibria || {}) === "Завершено";
}

function matchesQuickFilter(anime, filter) {
  const rating = shikimoriRating(anime)?.score || catalogRatingScore(anime);
  const tests = {
    available: () => hasWatchableSources(anime),
    ongoing: () => isOngoingAnime(anime),
    completed: () => isCompletedAnime(anime),
    highRating: () => Number(rating || 0) >= 8.5,
    continue: () => Boolean(playbackProgress[anime.id])
  };
  return tests[filter]?.() ?? true;
}

function matchesQuickFilters(anime) {
  return [...quickFilters].every((filter) => matchesQuickFilter(anime, filter));
}

function renderQuickFilters() {
  elements.quickFilterButtons.forEach((button) => {
    const filter = button.dataset.quickFilter;
    const count = catalog.filter((anime) => matchesQuickFilter(anime, filter)).length;
    button.classList.toggle("is-active", quickFilters.has(filter));
    button.setAttribute("aria-pressed", String(quickFilters.has(filter)));
    button.querySelector("b").textContent = String(count);
  });
}

function getVisibleAnime() {
  const query = normalizeText(state.query.trim());
  let items = [...catalog];

  if (query) {
    items = items.filter((anime) => animeSearchText(anime).includes(query));
  }

  if (state.view === "top") {
    items = items.filter((anime) => catalogRatingScore(anime) >= 8.5);
  }

  if (state.view === "favorites") {
    items = items.filter((anime) => animeFavorites.has(anime.id));
  }

  if (state.genre) {
    items = items.filter((anime) => anime.genres?.includes(state.genre));
  }

  if (state.franchise) {
    items = items.filter((anime) => anime.franchise === state.franchise);
  }

  if (quickFilters.size > 0) {
    items = items.filter(matchesQuickFilters);
  }

  items = items.filter((anime) => catalogRatingScore(anime) >= state.minScore);

  const favoriteWeight = (anime) => (animeFavorites.has(anime.id) ? 1 : 0);
  const sorters = {
    score: (a, b) => catalogRatingScore(b) - catalogRatingScore(a),
    shikimori: (a, b) => shikimoriSortScore(b) - shikimoriSortScore(a) || (a.titleRu || a.title).localeCompare(b.titleRu || b.title, "ru"),
    title: (a, b) => (a.titleRu || a.title).localeCompare(b.titleRu || b.title, "ru"),
    year: (a, b) => Number(b.year || 0) - Number(a.year || 0),
    genre: (a, b) => (a.genres?.[0] || "").localeCompare(b.genres?.[0] || "", "ru"),
    franchise: (a, b) => (a.franchise || "").localeCompare(b.franchise || "", "ru"),
    favorite: (a, b) => favoriteWeight(b) - favoriteWeight(a) || catalogRatingScore(b) - catalogRatingScore(a)
  };

  return items.sort(sorters[state.sort] || sorters.score);
}

function render() {
  renderFilterOptions();
  renderQuickFilters();
  const items = getVisibleAnime();
  if (state.view === "catalog" && animeIdFromUrl() === state.selectedId) {
    const routeIndex = items.findIndex((anime) => anime.id === state.selectedId);
    if (routeIndex >= state.visibleCount) {
      state.visibleCount = Math.ceil((routeIndex + 1) / catalogPageSize) * catalogPageSize;
    }
  }
  const gridItems = state.view === "catalog" ? items.slice(0, state.visibleCount) : items;
  renderStats(items);
  renderGrid(gridItems);
  renderCatalogLoadMore(items.length, gridItems.length);
  renderDetail(gridItems);
  renderPersonalFeatures();
  renderDiscoveryShelves();
  updateViewTitle(items.length);
  createIcons();
}

function renderCatalogLoadMore(total, shown) {
  const hasMore = state.view === "catalog" && shown < total;
  elements.catalogLoadMore.hidden = !hasMore;
  elements.showMoreButton.disabled = !hasMore;
}

function activityScore(anime, field) {
  return Number(anime[field] || 0) + Number(viewCounts[anime.id] || 0) * 250;
}

function formatCompactNumber(value) {
  return new Intl.NumberFormat("ru", { notation: "compact", maximumFractionDigits: 1 }).format(Number(value || 0));
}

function createShelfImage(anime, className) {
  const candidates = posterCandidateList(anime);
  if (!candidates.length) {
    const fallback = document.createElement("span");
    fallback.className = `${className} image-fallback`;
    fallback.textContent = initials(anime.titleRu || anime.title);
    return fallback;
  }
  const image = document.createElement("img");
  image.className = className;
  image.src = candidates[0];
  image.alt = anime.titleRu || anime.title;
  image.referrerPolicy = "no-referrer";
  image.loading = "lazy";
  attachImageFallback(image, anime.titleRu || anime.title, { candidates, animeId: anime.id });
  return image;
}

function renderDiscoveryShelves() {
  renderTopRequests();
  renderUpdates();
  renderPopular();
}

function renderPersonalFeatures() {
  renderWatchHub();
  renderEditorialCollections();
  renderRecommendations();
  renderLibrary();
  renderNotificationCenter();
  renderCalendar();
  renderHistory();
  renderProfileSummary();
}

function recentProgressAnime() {
  return Object.entries(playbackProgress)
    .map(([animeId, progress]) => ({
      anime: catalog.find((item) => item.id === animeId),
      progress,
      updatedAt: Date.parse(progress?.updatedAt || 0) || 0
    }))
    .filter((entry) => entry.anime)
    .sort((left, right) => right.updatedAt - left.updatedAt)[0] || null;
}

function topPlayableAnime(excluded = new Set()) {
  const playable = [...catalog]
    .filter((anime) => !excluded.has(anime.id) && hasWatchableSources(anime))
    .sort((left, right) => catalogRatingScore(right) - catalogRatingScore(left));
  const fallback = [...catalog]
    .filter((anime) => !excluded.has(anime.id))
    .sort((left, right) => catalogRatingScore(right) - catalogRatingScore(left));
  const pool = playable.length ? playable.slice(0, 8) : fallback.slice(0, 8);
  return pool[state.watchHubSeed % Math.max(1, pool.length)] || catalog[0] || null;
}

function bestRecommendationFor(source, excluded = new Set()) {
  if (!source) return null;
  const items = catalog
    .filter((anime) => anime.id !== source.id && !excluded.has(anime.id))
    .map((anime) => recommendationData(source, anime))
    .sort((left, right) => right.score - left.score || catalogRatingScore(right.anime) - catalogRatingScore(left.anime));
  const pool = items.slice(0, 6);
  return pool[state.watchHubSeed % Math.max(1, pool.length)] || items[0] || null;
}

function formatShortDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  const today = new Date();
  const day = localDateKey(date) === localDateKey(today)
    ? "Сегодня"
    : new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "short" }).format(date);
  const time = new Intl.DateTimeFormat("ru-RU", { hour: "2-digit", minute: "2-digit" }).format(date);
  return `${day}, ${time}`;
}

function createWatchHubCard({ icon, eyebrow, anime, title, meta, note, actionLabel, onClick, stateClass = "" }) {
  const button = document.createElement("button");
  button.className = `watch-hub-card ${stateClass}`.trim();
  button.type = "button";
  button.innerHTML = `
    <span class="watch-hub-icon"><i data-lucide="${icon}" aria-hidden="true"></i></span>
    <span class="watch-hub-poster"></span>
    <span class="watch-hub-copy">
      <span class="watch-hub-eyebrow"></span>
      <strong></strong>
      <span class="watch-hub-meta"></span>
      <span class="watch-hub-note"></span>
    </span>
    <span class="watch-hub-action"></span>
  `;
  const poster = button.querySelector(".watch-hub-poster");
  if (anime) {
    poster.appendChild(createShelfImage(anime, "watch-hub-image"));
  } else {
    const fallback = document.createElement("span");
    fallback.className = "watch-hub-image image-fallback";
    fallback.textContent = initials(title || eyebrow || "AP");
    poster.appendChild(fallback);
  }
  button.querySelector(".watch-hub-eyebrow").textContent = eyebrow;
  button.querySelector("strong").textContent = title || anime?.titleRu || anime?.title || "Taytlo";
  button.querySelector(".watch-hub-meta").textContent = meta || "";
  button.querySelector(".watch-hub-note").textContent = note || "";
  button.querySelector(".watch-hub-action").textContent = actionLabel || "Открыть";
  button.addEventListener("click", onClick);
  return button;
}

function renderWatchHub() {
  if (!elements.watchHubGrid) return;
  const used = new Set();
  const fragment = document.createDocumentFragment();
  const recent = recentProgressAnime();
  const latestHistory = watchHistory[0];
  const historyAnime = latestHistory ? catalog.find((anime) => anime.id === latestHistory.animeId) : null;
  const continueAnime = recent?.anime || historyAnime || topPlayableAnime(used);
  if (continueAnime) used.add(continueAnime.id);

  fragment.appendChild(createWatchHubCard({
    icon: recent ? "play-circle" : "clapperboard",
    eyebrow: recent ? "Продолжить" : "Начать просмотр",
    anime: continueAnime,
    title: continueAnime?.titleRu || continueAnime?.title,
    meta: recent
      ? `${recent.progress.episodeTitle || "Серия"} · ${formatPlaybackTime(recent.progress.seconds)}`
      : hasWatchableSources(continueAnime) ? "Есть доступные серии" : "Откройте карточку",
    note: recent ? "Прогресс сохранён в этом браузере" : "Хорошая точка входа в каталог",
    actionLabel: recent ? "Продолжить" : "Смотреть",
    onClick: () => continueAnime && continueWatching(continueAnime)
  }));

  const upcoming = scheduleEntries.find((anime) => Date.parse(anime.nextEpisodeAt) >= Date.now()) || scheduleEntries[0];
  if (upcoming) used.add(upcoming.id);
  fragment.appendChild(createWatchHubCard({
    icon: "calendar-clock",
    eyebrow: "Ближайшая серия",
    anime: upcoming,
    title: upcoming?.titleRu || upcoming?.title || "Календарь серий",
    meta: upcoming ? `${formatShortDateTime(upcoming.nextEpisodeAt)} · ${episodeCountdown(upcoming.nextEpisodeAt)}` : "Расписание загружается",
    note: upcoming
      ? `Ожидается серия ${Number(upcoming.episodesAired || 0) + 1}`
      : scheduleLoadFailed ? "Календарь временно недоступен" : "Проверяем будущие выходы",
    actionLabel: upcoming ? "Открыть" : "Календарь",
    stateClass: scheduleLoading && !upcoming ? "is-loading" : "",
    onClick: () => upcoming ? focusAnime(upcoming.id) : elements.calendarGrid?.scrollIntoView({ behavior: "smooth", block: "start" })
  }));

  const latest = latestReleaseUpdates[0];
  const latestAnime = latest ? catalog.find((item) => item.id === latest.animeId) || latest.anime : null;
  if (latestAnime) used.add(latestAnime.id);
  fragment.appendChild(createWatchHubCard({
    icon: "badge-check",
    eyebrow: "Новое на сайте",
    anime: latestAnime,
    title: latestAnime?.titleRu || latestAnime?.title || "Обновления AniLibria",
    meta: latest ? `Серия ${latest.episodeNumber}${latest.episodeTitle ? `: ${latest.episodeTitle}` : ""}` : "Свежие серии загружаются",
    note: latest ? formatShortDateTime(latest.releasedAt) : updatesLoadFailed ? "Обновления временно недоступны" : "Ждём ответ AniLibria",
    actionLabel: latestAnime ? "Смотреть" : "Обновления",
    stateClass: updatesLoading && !latest ? "is-loading" : "",
    onClick: () => latestAnime ? focusAnime(latestAnime.id, true) : elements.updatesList?.scrollIntoView({ behavior: "smooth", block: "start" })
  }));

  const source = recent?.anime || historyAnime || catalog.find((anime) => anime.id === state.selectedId) || catalog[0];
  const recommendation = bestRecommendationFor(source, used);
  if (recommendation?.anime) used.add(recommendation.anime.id);
  const fallback = topPlayableAnime(used);
  fragment.appendChild(createWatchHubCard({
    icon: "sparkles",
    eyebrow: "Рекомендация",
    anime: recommendation?.anime || fallback,
    title: recommendation?.anime?.titleRu || recommendation?.anime?.title || fallback?.titleRu || fallback?.title,
    meta: recommendation?.reason || `★ ${formatScore(catalogRatingScore(fallback))}`,
    note: source ? `По вкусу: ${source.titleRu || source.title}` : "По высоким рейтингам",
    actionLabel: "Попробовать",
    onClick: () => {
      const target = recommendation?.anime || fallback;
      if (target) focusAnime(target.id);
    }
  }));

  elements.watchHubGrid.replaceChildren(fragment);
}

function createFeatureShelfCard(anime, subtitle) {
  const button = document.createElement("button");
  button.className = "shelf-card";
  button.type = "button";
  const media = document.createElement("span");
  media.className = "shelf-media";
  media.appendChild(createShelfImage(anime, "shelf-image"));
  const copy = document.createElement("span");
  copy.className = "shelf-copy";
  const title = document.createElement("strong");
  title.textContent = anime.titleRu || anime.title;
  const meta = document.createElement("span");
  meta.textContent = `${anime.year || "?"} · ★ ${formatScore(catalogRatingScore(anime))}`;
  copy.append(title, meta);
  if (subtitle) {
    const reason = document.createElement("span");
    reason.className = "shelf-reason";
    reason.textContent = subtitle;
    copy.appendChild(reason);
  }
  button.append(media, copy);
  button.addEventListener("click", () => focusAnime(anime.id));
  return button;
}

function recommendationData(source, candidate) {
  const sharedGenres = (source.genres || []).filter((genre) => candidate.genres?.includes(genre));
  const sameFranchise = source.franchise && source.franchise === candidate.franchise;
  const score = sharedGenres.length * 4 + (sameFranchise ? 6 : 0) + catalogRatingScore(candidate) / 2;
  const reason = sameFranchise
    ? `Та же франшиза: ${source.franchise}`
    : sharedGenres.length
      ? `Общий жанр: ${sharedGenres[0]}`
      : "Высокий рейтинг";
  return { anime: candidate, score, reason };
}

function renderRecommendations() {
  const source = catalog.find((anime) => anime.id === state.selectedId) || catalog[0];
  elements.recommendationsList.innerHTML = "";
  if (!source) return;
  elements.recommendationsTitle.textContent = `Если понравилось «${source.titleRu || source.title}», попробуйте...`;
  elements.recommendationsHint.textContent = "Подбираем по общим жанрам, рейтингу и франшизе";
  const items = catalog
    .filter((anime) => anime.id !== source.id)
    .map((anime) => recommendationData(source, anime))
    .sort((a, b) => b.score - a.score || catalogRatingScore(b.anime) - catalogRatingScore(a.anime))
    .slice(0, 5);

  items.forEach((item) => elements.recommendationsList.appendChild(createFeatureShelfCard(item.anime, item.reason)));
}

function collectionMatches(collection, anime) {
  const idTokens = [anime.id, anime.malId ? `mal-${anime.malId}` : "", anime.aniLibriaReleaseId ? `anilibria-${anime.aniLibriaReleaseId}` : ""];
  if ((collection.ids || []).some((id) => idTokens.includes(id))) return true;
  if ((collection.genres || []).some((genre) => anime.genres?.includes(localizeGenreName(genre)))) return true;
  if ((collection.types || []).length) {
    const type = String(anime.type || "").toUpperCase();
    const typeMatches = collection.types.map((item) => String(item).toUpperCase()).includes(type);
    const maxEpisodes = Number(collection.maxEpisodes || 0);
    if (typeMatches && (!maxEpisodes || numericEpisodeCount(anime.episodes) <= maxEpisodes)) return true;
  }
  const search = animeSearchText(anime);
  return (collection.keywords || []).some((keyword) => search.includes(normalizeText(keyword)));
}

function renderEditorialCollections() {
  const collections = guideData().collections || [];
  if (!elements.collectionsSection) return;
  elements.collectionsSection.hidden = collections.length === 0;
  elements.collectionTabs.innerHTML = "";
  elements.collectionList.innerHTML = "";
  if (!collections.length) return;

  if (!state.activeCollection || !collections.some((collection) => collection.id === state.activeCollection)) {
    state.activeCollection = collections[0].id;
  }
  const active = collections.find((collection) => collection.id === state.activeCollection) || collections[0];

  collections.forEach((collection) => {
    const button = document.createElement("button");
    button.className = `collection-tab${collection.id === active.id ? " is-active" : ""}`;
    button.type = "button";
    button.role = "tab";
    button.setAttribute("aria-selected", String(collection.id === active.id));
    button.textContent = collection.title;
    button.addEventListener("click", () => {
      state.activeCollection = collection.id;
      renderEditorialCollections();
      createIcons();
    });
    elements.collectionTabs.appendChild(button);
  });

  const items = catalog
    .filter((anime) => collectionMatches(active, anime))
    .sort((left, right) => catalogRatingScore(right) - catalogRatingScore(left))
    .slice(0, 5);

  if (!items.length) {
    const empty = document.createElement("p");
    empty.className = "feature-empty";
    empty.textContent = "Ничего не найдено";
    elements.collectionList.appendChild(empty);
    return;
  }

  items.forEach((anime) => elements.collectionList.appendChild(createFeatureShelfCard(anime, active.description)));
}

const watchStatusLabels = {
  watching: "Смотрю",
  completed: "Посмотрел",
  dropped: "Брошено",
  planned: "Планирую посмотреть"
};

function renderLibrary() {
  const counts = { watching: 0, completed: 0, dropped: 0, planned: 0 };
  Object.values(watchStatuses).forEach((status) => {
    if (status in counts) counts[status] += 1;
  });
  elements.countWatching.textContent = String(counts.watching);
  elements.countCompleted.textContent = String(counts.completed);
  elements.countDropped.textContent = String(counts.dropped);
  elements.countPlanned.textContent = String(counts.planned);
  elements.libraryList.innerHTML = "";

  const items = catalog.filter((anime) => watchStatuses[anime.id] === state.libraryStatus);
  if (items.length === 0) {
    const empty = document.createElement("p");
    empty.className = "feature-empty";
    empty.textContent = `В списке «${watchStatusLabels[state.libraryStatus]}» пока пусто.`;
    elements.libraryList.appendChild(empty);
    return;
  }
  items.forEach((anime) => elements.libraryList.appendChild(createFeatureShelfCard(anime, watchStatusLabels[state.libraryStatus])));
}

function notificationPermissionLabel() {
  if (!("Notification" in window)) return "Браузер не поддерживает уведомления.";
  if (Notification.permission === "granted" && localStorage.getItem(storageKeys.notificationsEnabled) === "true") {
    return "Уведомления включены для новых серий и ближайших выходов.";
  }
  if (Notification.permission === "denied") return "Уведомления запрещены в настройках браузера.";
  return "Можно включить локальные уведомления для этого браузера.";
}

function notificationItems() {
  const latest = latestReleaseUpdates.slice(0, 4).map((update) => {
    const anime = catalog.find((item) => item.id === update.animeId) || update.anime;
    return {
      key: `latest:${update.animeId}:${update.episodeNumber}:${update.releasedAt}`,
      kind: "latest",
      anime,
      title: anime.titleRu || anime.title,
      meta: update.episodeTitle ? `Серия ${update.episodeNumber}: ${update.episodeTitle}` : `Серия ${update.episodeNumber}`,
      at: update.releasedAt,
      action: "Смотреть"
    };
  });
  const upcoming = scheduleEntries.slice(0, 6).map((anime) => ({
    key: `schedule:${anime.id}:${anime.nextEpisodeAt}`,
    kind: "schedule",
    anime,
    title: anime.titleRu || anime.title,
    meta: anime.nextEpisodeAt ? `Новая серия ${episodeCountdown(anime.nextEpisodeAt)}` : "Ожидается новая серия",
    at: anime.nextEpisodeAt,
    action: "Открыть"
  }));
  return [...latest, ...upcoming]
    .filter((item) => item.anime && Number.isFinite(Date.parse(item.at || "")))
    .sort((left, right) => Date.parse(right.at) - Date.parse(left.at));
}

function formatNotificationTime(value, kind) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  if (kind === "schedule") return episodeCountdown(value);
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);
  const day = localDateKey(date) === localDateKey(today)
    ? "Сегодня"
    : localDateKey(date) === localDateKey(yesterday)
      ? "Вчера"
      : new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "short" }).format(date);
  const time = new Intl.DateTimeFormat("ru-RU", { hour: "2-digit", minute: "2-digit" }).format(date);
  return `${day}, ${time}`;
}

function renderNotificationCenter() {
  if (!elements.notificationList) return;
  elements.notificationStatus.textContent = notificationPermissionLabel();
  const canNotify = "Notification" in window && Notification.permission !== "denied";
  elements.enableNotificationsButton.disabled = !canNotify;
  const label = elements.enableNotificationsButton.querySelector("span");
  if (label) {
    label.textContent = "Notification" in window && Notification.permission === "granted" && localStorage.getItem(storageKeys.notificationsEnabled) === "true"
      ? "Уведомления включены"
      : "Включить уведомления";
  }
  elements.notificationList.innerHTML = "";
  const items = notificationItems().slice(0, 6);
  if (items.length === 0) {
    const empty = document.createElement("p");
    empty.className = "feature-empty";
    empty.textContent = scheduleLoading || updatesLoading ? "Загрузка ближайших серий..." : "Новых событий пока нет.";
    elements.notificationList.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  for (const item of items) {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "notification-card";
    card.innerHTML = `
      <span class="notification-icon"><i data-lucide="${item.kind === "schedule" ? "calendar-clock" : "badge-check"}" aria-hidden="true"></i></span>
      <span class="notification-copy">
        <strong></strong>
        <span></span>
      </span>
      <span class="notification-time"></span>
    `;
    card.querySelector("strong").textContent = item.title;
    card.querySelector(".notification-copy span").textContent = item.meta;
    card.querySelector(".notification-time").textContent = formatNotificationTime(item.at, item.kind);
    card.addEventListener("click", () => focusAnime(item.anime.id, item.kind === "latest"));
    fragment.appendChild(card);
  }
  elements.notificationList.appendChild(fragment);
}

async function showBrowserNotification(item) {
  const title = item.kind === "schedule" ? "Скоро новая серия" : "Вышла новая серия";
  const options = {
    body: `${item.title} · ${item.meta}`,
    icon: "./favicon.svg",
    badge: "./favicon.svg",
    tag: item.key
  };
  try {
    const registration = await navigator.serviceWorker?.ready;
    if (registration?.showNotification) {
      await registration.showNotification(title, options);
      return;
    }
  } catch {
    // Fallback below covers browsers without a ready service worker.
  }
  new Notification(title, options);
}

async function maybeNotifyEpisodeUpdates() {
  if (!("Notification" in window)) return;
  if (Notification.permission !== "granted" || localStorage.getItem(storageKeys.notificationsEnabled) !== "true") return;
  const now = Date.now();
  const horizon = now + 24 * 60 * 60 * 1000;
  const freshWindow = now - 12 * 60 * 60 * 1000;
  const candidates = notificationItems()
    .filter((item) => {
      const timestamp = Date.parse(item.at);
      if (!Number.isFinite(timestamp)) return false;
      if (item.kind === "latest") return timestamp >= freshWindow && timestamp <= now + 5 * 60 * 1000;
      return timestamp >= now && timestamp <= horizon;
    })
    .slice(0, 4);

  for (const item of candidates) {
    if (notifiedEpisodes.has(item.key)) continue;
    notifiedEpisodes.add(item.key);
    try {
      await showBrowserNotification(item);
    } catch {
      // Permission can be revoked between the check and display attempt.
    }
  }
  saveSet(storageKeys.notifiedEpisodes, notifiedEpisodes);
}

async function enableNotifications() {
  if (!("Notification" in window)) {
    setStatus("Этот браузер не поддерживает уведомления.");
    renderNotificationCenter();
    return;
  }
  let permission = Notification.permission;
  if (permission === "default") {
    permission = await Notification.requestPermission();
  }
  if (permission === "granted") {
    localStorage.setItem(storageKeys.notificationsEnabled, "true");
    setStatus("Уведомления включены.");
    await maybeNotifyEpisodeUpdates();
  } else {
    localStorage.setItem(storageKeys.notificationsEnabled, "false");
    setStatus("Уведомления не включены.");
  }
  renderNotificationCenter();
}

const calendarDays = [
  { key: "monday", label: "Понедельник", jsDay: 1 },
  { key: "tuesday", label: "Вторник", jsDay: 2 },
  { key: "wednesday", label: "Среда", jsDay: 3 },
  { key: "thursday", label: "Четверг", jsDay: 4 },
  { key: "friday", label: "Пятница", jsDay: 5 },
  { key: "saturday", label: "Суббота", jsDay: 6 },
  { key: "sunday", label: "Воскресенье", jsDay: 0 }
];

function localDateKey(value) {
  const date = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function episodeCountdown(value) {
  const difference = new Date(value).getTime() - Date.now();
  if (difference <= 0) return "время выхода наступило";
  const hours = Math.floor(difference / 3600000);
  const days = Math.floor(hours / 24);
  const remainingHours = hours % 24;
  if (days > 0) return `через ${days} дн. ${remainingHours} ч.`;
  if (hours > 0) return `через ${hours} ч.`;
  return `через ${Math.max(1, Math.ceil(difference / 60000))} мин.`;
}

function renderCalendar() {
  elements.calendarGrid.innerHTML = "";
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(today);
    date.setDate(today.getDate() + index);
    return date;
  });

  days.forEach((date, dayIndex) => {
    const column = document.createElement("article");
    column.className = `calendar-day${dayIndex === 0 ? " is-today" : ""}`;
    const key = localDateKey(date);
    const items = scheduleEntries
      .filter((anime) => localDateKey(anime.nextEpisodeAt) === key)
      .sort((left, right) => new Date(left.nextEpisodeAt) - new Date(right.nextEpisodeAt));
    const head = document.createElement("header");
    head.className = "calendar-day-head";
    const title = document.createElement("strong");
    title.textContent = dayIndex === 0
      ? "Сегодня"
      : new Intl.DateTimeFormat("ru-RU", { weekday: "short", day: "numeric", month: "short" }).format(date);
    const count = document.createElement("span");
    count.textContent = String(items.length);
    head.append(title, count);
    column.appendChild(head);

    if (items.length === 0) {
      const empty = document.createElement("p");
      empty.className = "calendar-empty";
      empty.textContent = scheduleLoading
        ? "Загрузка расписания..."
        : scheduleLoadFailed
          ? "Расписание временно недоступно"
          : "Нет подтверждённых серий";
      column.appendChild(empty);
    } else {
      items.slice(0, 5).forEach((anime) => {
        const button = document.createElement("button");
        button.className = "calendar-anime";
        button.type = "button";
        const name = document.createElement("strong");
        name.textContent = anime.titleRu || anime.title;
        const episode = document.createElement("span");
        const nextNumber = Number(anime.episodesAired || 0) + 1;
        episode.textContent = nextNumber > 1 ? `Серия ${nextNumber}` : "Новая серия";
        const timing = document.createElement("span");
        const time = new Intl.DateTimeFormat("ru-RU", { hour: "2-digit", minute: "2-digit" }).format(new Date(anime.nextEpisodeAt));
        timing.className = "calendar-countdown";
        timing.textContent = `${time} · ${episodeCountdown(anime.nextEpisodeAt)}`;
        button.append(name, episode, timing);
        button.addEventListener("click", () => focusAnime(anime.id));
        column.appendChild(button);
      });
    }
    elements.calendarGrid.appendChild(column);
  });
}

function renderHistory() {
  elements.historyList.innerHTML = "";
  elements.clearHistoryButton.disabled = watchHistory.length === 0;
  if (watchHistory.length === 0) {
    const empty = document.createElement("p");
    empty.className = "feature-empty";
    empty.textContent = "История появится после запуска серии или трейлера.";
    elements.historyList.appendChild(empty);
    return;
  }

  watchHistory.slice(0, 10).forEach((entry) => {
    const anime = catalog.find((item) => item.id === entry.animeId) || entry;
    const button = document.createElement("button");
    button.className = "history-item";
    button.type = "button";
    button.appendChild(createShelfImage(anime, "history-image"));
    const copy = document.createElement("span");
    copy.className = "history-copy";
    const title = document.createElement("strong");
    title.textContent = entry.title;
    const episode = document.createElement("span");
    episode.textContent = entry.episodeTitle;
    copy.append(title, episode);
    const time = document.createElement("span");
    time.className = "history-time";
    time.textContent = new Date(entry.watchedAt).toLocaleString("ru", { dateStyle: "short", timeStyle: "short" });
    button.append(copy, time);
    button.addEventListener("click", () => focusAnime(entry.animeId, true));
    elements.historyList.appendChild(button);
  });
}

function setWatchStatus(animeId, status) {
  if (status && status in watchStatusLabels) {
    watchStatuses[animeId] = status;
  } else {
    delete watchStatuses[animeId];
  }
  saveObject(storageKeys.watchStatuses, watchStatuses);
  render();
}

function formatPlaybackTime(value) {
  const seconds = Math.max(0, Math.floor(Number(value) || 0));
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const rest = seconds % 60;
  return hours
    ? `${hours}:${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`
    : `${minutes}:${String(rest).padStart(2, "0")}`;
}

function renderPlaybackHint(anime) {
  const progress = anime ? playbackProgress[anime.id] : null;
  const buttonLabel = elements.watchAnimeButton.querySelector("span");
  if (!progress) {
    elements.resumeHint.hidden = true;
    elements.resumeHint.textContent = "";
    if (buttonLabel) buttonLabel.textContent = "Смотреть";
    return;
  }
  elements.resumeHint.hidden = false;
  elements.resumeHint.textContent = `Вы остановились: ${progress.episodeTitle} · ${formatPlaybackTime(progress.seconds)}`;
  if (buttonLabel) buttonLabel.textContent = "Продолжить";
}

function currentPlaybackSource() {
  const anime = currentPlayerAnime();
  return anime ? playerSources(anime)[state.playerEpisodeIndex] : null;
}

function saveCurrentPlaybackProgress(force = false) {
  const anime = currentPlayerAnime();
  const source = currentPlaybackSource();
  const seconds = Number(elements.videoPlayer.currentTime || 0);
  if (!anime || !source || elements.videoPlayer.hidden || seconds < 1) return;
  const now = Date.now();
  if (!force && now - lastProgressSavedAt < 4000) return;
  lastProgressSavedAt = now;
  playbackProgress[anime.id] = {
    episodeTitle: source.title,
    episodeNumber: state.activeAniLibriaEpisode?.number || null,
    seconds,
    duration: Number(elements.videoPlayer.duration || 0),
    kind: state.activeAniLibriaEpisode ? "anilibria" : "video",
    updatedAt: new Date().toISOString()
  };
  saveObject(storageKeys.playbackProgress, playbackProgress);
  if (state.selectedId === anime.id) renderPlaybackHint(anime);
}

function restoreCurrentPlaybackProgress() {
  const anime = currentPlayerAnime();
  const source = currentPlaybackSource();
  const progress = anime ? playbackProgress[anime.id] : null;
  if (!anime || !source || !progress || progress.episodeTitle !== source.title || progress.seconds < 1) return;
  const duration = Number(elements.videoPlayer.duration || 0);
  elements.videoPlayer.currentTime = duration > 1 ? Math.min(progress.seconds, duration - 1) : progress.seconds;
  setPlaybackStatus(`Продолжаем с ${formatPlaybackTime(progress.seconds)}`);
}

async function continueWatching(anime) {
  const progress = playbackProgress[anime.id];
  const canUseAniLibria = Boolean(
    anime.aniLibriaReleaseId || aniLibriaReleaseIdsByMalId.get(Number(anime.malId)) || anime.aniLibria
  );
  if (canUseAniLibria) {
    if (!anime.aniLibria || anime.aniLibria.state === "loading") {
      anime.aniLibria = { state: "loading", episodes: [], releaseUrl: "" };
      await fetchAniLibriaEpisodes(anime);
    }
    const episodes = anime.aniLibria?.episodes || [];
    const episode = progress?.kind === "anilibria"
      ? episodes.find((item) => Number(item.number) === Number(progress.episodeNumber)) ||
        episodes.find((item) => progress.episodeTitle.includes(`Серия ${item.number}`))
      : episodes[0];
    if (episode) {
      openAniLibriaEpisode(anime, episode);
      return;
    }
  }
  openPlayer(anime);
}

function recordCurrentHistory() {
  const anime = currentPlayerAnime();
  const source = anime ? playerSources(anime)[state.playerEpisodeIndex] : null;
  if (!anime || !source) return;
  const key = `${anime.id}::${source.title}`;
  watchHistory = watchHistory.filter((entry) => entry.key !== key);
  watchHistory.unshift({
    key,
    animeId: anime.id,
    title: anime.titleRu || anime.title,
    image: anime.image || "",
    episodeTitle: source.title,
    watchedAt: new Date().toISOString()
  });
  watchHistory = watchHistory.slice(0, 30);
  localStorage.setItem(storageKeys.watchHistory, JSON.stringify(watchHistory));
  if (!watchStatuses[anime.id]) {
    watchStatuses[anime.id] = "watching";
    saveObject(storageKeys.watchStatuses, watchStatuses);
    elements.watchStatusSelect.value = "watching";
  }
  renderHistory();
  renderLibrary();
  renderWatchHub();
}

function renderTopRequests() {
  elements.topRequestsList.innerHTML = "";
  const items = [...catalog].sort((a, b) => activityScore(b, "requestBase") - activityScore(a, "requestBase")).slice(0, 5);

  items.forEach((anime, index) => {
    const button = document.createElement("button");
    button.className = "shelf-card";
    button.type = "button";
    const media = document.createElement("span");
    media.className = "shelf-media";
    media.appendChild(createShelfImage(anime, "shelf-image"));
    const rank = document.createElement("span");
    rank.className = "rank-badge";
    rank.textContent = String(index + 1);
    media.appendChild(rank);

    const copy = document.createElement("span");
    copy.className = "shelf-copy";
    const title = document.createElement("strong");
    title.textContent = anime.titleRu || anime.title;
    const metric = document.createElement("span");
    metric.textContent = `${formatCompactNumber(activityScore(anime, "requestBase"))} запросов`;
    copy.append(title, metric);
    button.append(media, copy);
    button.addEventListener("click", () => focusAnime(anime.id));
    elements.topRequestsList.appendChild(button);
  });
}

function renderUpdates() {
  elements.updatesList.innerHTML = "";
  if (latestReleaseUpdates.length === 0) {
    const empty = document.createElement("p");
    empty.className = "feature-empty";
    empty.textContent = updatesLoading
      ? "Загрузка свежих серий..."
      : updatesLoadFailed
        ? "Не удалось загрузить обновления"
        : "Новых серий пока нет";
    elements.updatesList.appendChild(empty);
    return;
  }

  latestReleaseUpdates.slice(0, 8).forEach((update) => {
    const anime = catalog.find((item) => item.id === update.animeId) || update.anime;
    const button = document.createElement("button");
    button.className = "update-card";
    button.type = "button";
    const media = document.createElement("span");
    media.className = "update-media";
    media.appendChild(createShelfImage(anime, "update-image"));

    const copy = document.createElement("span");
    copy.className = "update-copy";
    const title = document.createElement("strong");
    title.textContent = anime.titleRu || anime.title;
    const subtitle = document.createElement("span");
    subtitle.textContent = update.episodeTitle
      ? `Серия ${update.episodeNumber}: ${update.episodeTitle}`
      : `Серия ${update.episodeNumber}`;
    const availability = document.createElement("span");
    const releasedAt = new Date(update.releasedAt);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    const prefix = localDateKey(releasedAt) === localDateKey(today)
      ? "Сегодня"
      : localDateKey(releasedAt) === localDateKey(yesterday)
        ? "Вчера"
        : new Intl.DateTimeFormat("ru-RU", { day: "numeric", month: "long" }).format(releasedAt);
    const time = new Intl.DateTimeFormat("ru-RU", { hour: "2-digit", minute: "2-digit" }).format(releasedAt);
    availability.className = "availability-tag";
    availability.textContent = `${prefix}, ${time}`;
    copy.append(title, subtitle, availability);
    button.append(media, copy);
    button.addEventListener("click", () => focusAnime(anime.id, true));
    elements.updatesList.appendChild(button);
  });
}

function renderPopular() {
  elements.popularList.innerHTML = "";
  const items = [...catalog]
    .sort((a, b) => activityScore(b, "popularityBase") - activityScore(a, "popularityBase"))
    .slice(0, 8);

  items.forEach((anime, index) => {
    const button = document.createElement("button");
    button.className = "popular-item";
    button.type = "button";
    const rank = document.createElement("span");
    rank.className = "popular-rank";
    rank.textContent = `#${index + 1}`;
    const image = createShelfImage(anime, "popular-image");
    const copy = document.createElement("span");
    copy.className = "popular-copy";
    const title = document.createElement("strong");
    title.textContent = anime.titleRu || anime.title;
    const meta = document.createElement("span");
    meta.textContent = `${anime.year || "?"} · ★ ${formatScore(catalogRatingScore(anime))}`;
    copy.append(title, meta);
    const metric = document.createElement("span");
    metric.className = "popular-metric";
    metric.textContent = `${formatCompactNumber(activityScore(anime, "popularityBase"))} просмотров`;
    button.append(rank, image, copy, metric);
    button.addEventListener("click", () => focusAnime(anime.id));
    elements.popularList.appendChild(button);
  });
}

function renderStats(items) {
  elements.statAnime.textContent = items.length;
  elements.statFavorites.textContent = animeFavorites.size + characterFavorites.size;
  elements.statRated.textContent = Object.keys(ratings).length;
}

function createProfileBackup() {
  return {
    app: "Taytlo",
    version: 1,
    exportedAt: new Date().toISOString(),
    data: {
      animeFavorites: [...animeFavorites],
      characterFavorites: [...characterFavorites],
      ratings,
      savedAnime,
      savedCharacters,
      viewCounts,
      comments,
      watchStatuses,
      watchHistory,
      playbackProgress,
      remoteMetadata,
      customVoiceovers,
      quickFilters: [...quickFilters],
      theme: document.documentElement.dataset.theme || "dark"
    }
  };
}

function downloadJsonFile(fileName, payload) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportProfile() {
  const date = localDateKey(new Date());
  downloadJsonFile(`taytlo-profile-${date}.json`, createProfileBackup());
  setStatus("Профиль сохранён в JSON-файл.");
}

function safeObject(value) {
  return value && typeof value === "object" && !Array.isArray(value) ? value : {};
}

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function saveImportedProfile() {
  saveSet(storageKeys.animeFavorites, animeFavorites);
  saveSet(storageKeys.characterFavorites, characterFavorites);
  saveSet(storageKeys.quickFilters, quickFilters);
  saveObject(storageKeys.ratings, ratings);
  saveObject(storageKeys.savedAnime, savedAnime);
  saveObject(storageKeys.savedCharacters, savedCharacters);
  saveObject(storageKeys.viewCounts, viewCounts);
  saveObject(storageKeys.comments, comments);
  saveObject(storageKeys.watchStatuses, watchStatuses);
  saveObject(storageKeys.playbackProgress, playbackProgress);
  saveObject(storageKeys.remoteMetadata, remoteMetadata);
  saveObject(storageKeys.customVoiceovers, customVoiceovers);
  localStorage.setItem(storageKeys.watchHistory, JSON.stringify(watchHistory));
}

function applyProfileBackup(payload) {
  const data = payload?.data || payload;
  if (!data || typeof data !== "object") throw new Error("Invalid profile");
  animeFavorites = new Set(safeArray(data.animeFavorites));
  characterFavorites = new Set(safeArray(data.characterFavorites));
  quickFilters = new Set(safeArray(data.quickFilters));
  ratings = safeObject(data.ratings);
  savedAnime = safeObject(data.savedAnime);
  savedCharacters = safeObject(data.savedCharacters);
  viewCounts = safeObject(data.viewCounts);
  comments = safeObject(data.comments);
  watchStatuses = safeObject(data.watchStatuses);
  watchHistory = safeArray(data.watchHistory).slice(0, 60);
  playbackProgress = safeObject(data.playbackProgress);
  remoteMetadata = safeObject(data.remoteMetadata);
  customVoiceovers = safeObject(data.customVoiceovers);
  catalog = mergeInitialCatalog([...seedCatalog, ...narutoRelatedCatalog], Object.values(savedAnime));
  applyCachedShikimoriRatings(catalog);
  if (!catalog.some((anime) => anime.id === state.selectedId)) state.selectedId = catalog[0]?.id || null;
  if (data.theme === "light" || data.theme === "dark") applyTheme(data.theme);
  saveImportedProfile();
  render();
}

async function importProfileFromFile() {
  const file = elements.profileImportInput.files?.[0];
  if (!file) return;
  try {
    applyProfileBackup(JSON.parse(await file.text()));
    setStatus("Профиль импортирован: избранное, списки, история и прогресс обновлены.");
  } catch {
    setStatus("Не удалось импортировать профиль. Проверьте JSON-файл.");
  } finally {
    elements.profileImportInput.value = "";
  }
}

function renderProfileSummary() {
  if (!elements.profileSummary) return;
  const listsCount = Object.keys(watchStatuses).length;
  const progressCount = Object.keys(playbackProgress).length;
  elements.profileSummary.textContent =
    `${animeFavorites.size} избранных · ${listsCount} в списках · ${progressCount} сохранённых прогрессов`;
}

function numericEpisodeCount(value) {
  const number = Number(value);
  return Number.isFinite(number) && number > 0 ? number : 0;
}

function animeReleaseStatusLabel(anime, data = {}) {
  const status = normalizeText(anime.status || "");
  if (status.includes("anons") || status.includes("not yet") || status.includes("ожида")) return "Ожидается";
  if (status.includes("ongoing") || status.includes("airing") || data.isOngoing) return "Онгоинг";
  if (status.includes("released") || status.includes("finished") || status.includes("completed")) return "Завершено";
  return "";
}

function deriveAvailability(anime) {
  const data = anime.aniLibria || {};
  const override = animeAvailabilityOverride(anime);
  const expectedEpisodes = numericEpisodeCount(override.expectedEpisodes) ||
    numericEpisodeCount(data.expectedEpisodes) ||
    numericEpisodeCount(anime.episodes);
  const firstEpisode = numericEpisodeCount(override.startEpisode) ||
    numericEpisodeCount(data.firstEpisode) ||
    numericEpisodeCount(data.episodes?.[0]?.number);
  const lastEpisode = numericEpisodeCount(data.lastEpisode) ||
    numericEpisodeCount(data.episodes?.at?.(-1)?.number);
  const count = data.episodes?.length || 0;
  const releaseStatus = animeReleaseStatusLabel(anime, data);

  if (override.state) {
    const labels = {
      available: "Доступно",
      partial: "Доступно частично",
      unavailable: "Нет серий",
      expected: "Ожидается"
    };
    const titles = {
      available: "Доступно к просмотру",
      partial: "Доступно не полностью",
      unavailable: "Недоступно в AniLibria",
      expected: "Ожидается в AniLibria"
    };
    return {
      state: override.state,
      short: labels[override.state] || "Проверяется",
      title: titles[override.state] || "Статус AniLibria",
      note: override.note || (override.state === "partial" && firstEpisode ? `В AniLibria доступно с серии ${firstEpisode}.` : "Статус задан вручную."),
      releaseStatus,
      firstEpisode,
      expectedEpisodes
    };
  }

  if (data.state === "loading") {
    return {
      state: "checking",
      short: "Проверяется",
      title: "Проверяем AniLibria",
      note: "Сайт получает список серий через публичный API AniLibria.",
      releaseStatus
    };
  }

  if (data.state === "error") {
    return {
      state: "error",
      short: "Ошибка API",
      title: "Не удалось проверить серии",
      note: "AniLibria API сейчас не отвечает. Информационная карточка остается доступной.",
      releaseStatus
    };
  }

  if (data.state === "empty") {
    return {
      state: "unavailable",
      short: "Нет серий",
      title: "Серии пока недоступны",
      note: "В публичном AniLibria API для этого тайтла не найден список серий.",
      releaseStatus
    };
  }

  if (data.state === "ready" && count > 0) {
    if (firstEpisode > 1) {
      return {
        state: "partial",
        short: "Серия " + firstEpisode + "+",
        title: "Доступно не полностью",
        note: `В AniLibria доступны серии с ${firstEpisode}${lastEpisode ? ` по ${lastEpisode}` : ""}. Ранние серии в этот релиз не входят.`,
        releaseStatus,
        firstEpisode,
        expectedEpisodes
      };
    }
    if (expectedEpisodes && lastEpisode && lastEpisode < expectedEpisodes && !data.isOngoing) {
      return {
        state: "partial",
        short: `${lastEpisode}/${expectedEpisodes}`,
        title: "Доступно не полностью",
        note: `В AniLibria сейчас найдено ${count} серий из ${expectedEpisodes}.`,
        releaseStatus,
        firstEpisode,
        expectedEpisodes
      };
    }
    return {
      state: data.isOngoing ? "ongoing" : "available",
      short: data.isOngoing ? "Онгоинг" : "Доступно",
      title: data.isOngoing ? "Онгоинг доступен" : "Доступно к просмотру",
      note: data.isOngoing
        ? `Доступно серий: ${count}. Новые серии появляются по мере выхода.`
        : `Доступно серий: ${count}.`,
      releaseStatus,
      firstEpisode,
      expectedEpisodes
    };
  }

  if (releaseStatus === "Ожидается") {
    return {
      state: "expected",
      short: "Ожидается",
      title: "Релиз ожидается",
      note: "Тайтл пока отмечен как ожидаемый, серии появятся после выхода.",
      releaseStatus
    };
  }

  if (anime.aniLibriaReleaseId || anime.source === "anilibria") {
    return {
      state: "checking",
      short: "AniLibria",
      title: "Есть релиз AniLibria",
      note: "Список серий будет загружен при открытии карточки.",
      releaseStatus
    };
  }

  return {
    state: "info",
    short: "Гид",
    title: "Информационная карточка",
    note: "Сайт покажет описание, порядок просмотра и связи. Просмотр появится только если тайтл найден в AniLibria.",
    releaseStatus
  };
}

function availabilityClass(stateName) {
  return `is-${["available", "ongoing", "partial", "unavailable", "expected", "checking", "error", "info"].includes(stateName) ? stateName : "info"}`;
}

function renderDetailAvailability(anime) {
  if (!elements.detailAvailability) return;
  const availability = deriveAvailability(anime);
  elements.detailAvailability.className = `availability-panel ${availabilityClass(availability.state)}`;
  elements.detailAvailabilityState.className = `availability-state ${availabilityClass(availability.state)}`;
  elements.detailAvailabilityState.textContent = availability.short;
  elements.detailAvailabilityTitle.textContent = availability.title;
  const releaseStatus = availability.releaseStatus ? ` Статус тайтла: ${availability.releaseStatus}.` : "";
  elements.detailAvailabilityNote.textContent = `${availability.note}${releaseStatus}`;
}

function renderDetailShikimoriRating(anime) {
  const display = shikimoriDisplayState(anime);
  const rating = display.rating;
  elements.detailScoreLabel.textContent = "Рейтинг Shikimori";
  if (!rating) {
    elements.detailScore.textContent = "-";
    elements.detailScoreMeta.textContent = display.meta;
    elements.shikimoriLink.hidden = true;
    elements.shikimoriLink.removeAttribute("href");
    return;
  }
  elements.detailScore.textContent = formatScore(rating.score);
  elements.detailScoreMeta.textContent = display.meta;
  elements.shikimoriLink.hidden = !rating.url;
  if (rating.url) elements.shikimoriLink.href = rating.url;
}

function renderGuideNotes(anime) {
  if (!elements.guideNotes) return;
  const note = animeGuideNote(anime);
  elements.guideNotes.hidden = !note;
  elements.guideNotesText.textContent = note || "";
}

function updateViewTitle(count) {
  const titles = {
    catalog: "Каталог аниме",
    top: "Топ рейтинга",
    favorites: "Избранное"
  };
  elements.viewTitle.textContent = `${titles[state.view]} (${count})`;
}

function renderGrid(items) {
  elements.animeGrid.innerHTML = "";
  elements.emptyState.hidden = items.length > 0;

  if (!items.some((item) => item.id === state.selectedId) && items.length > 0 && animeIdFromUrl() !== state.selectedId) {
    state.selectedId = items[0].id;
  }

  const fragment = document.createDocumentFragment();

  for (const anime of items) {
    const node = elements.animeCardTemplate.content.firstElementChild.cloneNode(true);
    const selectButton = node.querySelector(".anime-select");
    const poster = node.querySelector(".poster");
    const favoriteButton = node.querySelector(".favorite-toggle");
    const availabilityBadge = node.querySelector(".card-availability");
    const posterCandidates = posterCandidateList(anime);

    node.classList.toggle("is-selected", anime.id === state.selectedId);
    poster.src = posterCandidates[0] || "";
    poster.alt = anime.titleRu || anime.title;
    poster.referrerPolicy = "no-referrer";
    attachImageFallback(poster, anime.titleRu || anime.title, { candidates: posterCandidates, animeId: anime.id });

    node.querySelector(".anime-title").textContent = anime.titleRu || anime.title;
    node.querySelector(".anime-subtitle").textContent = anime.title;
    node.querySelector(".anime-meta").textContent = `${anime.type || "Anime"} · ${anime.year || "?"} · ${anime.franchise || "Без франшизы"}`;
    const shikimori = shikimoriDisplayState(anime);
    const scorePill = node.querySelector(".score-pill");
    scorePill.classList.toggle("is-missing", shikimori.state === "missing");
    scorePill.classList.toggle("is-loading", shikimori.state === "loading");
    scorePill.classList.toggle("is-temporary", shikimori.state === "temporary");
    scorePill.textContent = shikimori.text;
    const availability = deriveAvailability(anime);
    availabilityBadge.textContent = availability.short;
    availabilityBadge.className = `card-availability ${availabilityClass(availability.state)}`;

    selectButton.addEventListener("click", () => selectAnime(anime.id));
    favoriteButton.classList.toggle("is-active", animeFavorites.has(anime.id));
    favoriteButton.setAttribute("aria-pressed", String(animeFavorites.has(anime.id)));
    favoriteButton.addEventListener("click", () => toggleAnimeFavorite(anime.id));

    fragment.appendChild(node);
  }

  elements.animeGrid.appendChild(fragment);
}

function franchiseIdentity(anime) {
  return canonicalAnimeTitle(localizeFranchiseName(anime.franchise, anime));
}

function franchiseChronology(anime) {
  const identity = franchiseIdentity(anime);
  const franchiseName = localizeFranchiseName(anime.franchise, anime);
  const configuredOrder = guideData().franchiseOrder?.[franchiseName] || [];
  const orderMap = new Map(configuredOrder.map((key, index) => [key, index]));
  const typeOrder = new Map([
    ["TV", 0],
    ["ONA", 1],
    ["OVA", 2],
    ["SPECIAL", 3],
    ["TV_SPECIAL", 3],
    ["MOVIE", 4],
    ["MUSIC", 5],
    ["PV", 6]
  ]);
  return catalog
    .filter((item) => identity && franchiseIdentity(item) === identity)
    .sort((left, right) => {
      const leftOrder = Math.min(
        orderMap.get(left.id) ?? 9999,
        left.malId ? orderMap.get(`mal-${left.malId}`) ?? 9999 : 9999,
        left.aniLibriaReleaseId ? orderMap.get(`anilibria-${left.aniLibriaReleaseId}`) ?? 9999 : 9999
      );
      const rightOrder = Math.min(
        orderMap.get(right.id) ?? 9999,
        right.malId ? orderMap.get(`mal-${right.malId}`) ?? 9999 : 9999,
        right.aniLibriaReleaseId ? orderMap.get(`anilibria-${right.aniLibriaReleaseId}`) ?? 9999 : 9999
      );
      if (leftOrder !== rightOrder) return leftOrder - rightOrder;
      const year = Number(left.year || 9999) - Number(right.year || 9999);
      if (year) return year;
      const type = Number(typeOrder.get(String(left.type || "").toUpperCase()) ?? 9) -
        Number(typeOrder.get(String(right.type || "").toUpperCase()) ?? 9);
      if (type) return type;
      return (left.titleRu || left.title).localeCompare(right.titleRu || right.title, "ru");
    });
}

function renderFranchiseTimeline(anime) {
  const items = franchiseChronology(anime);
  elements.franchiseTimeline.hidden = items.length < 2;
  elements.franchiseTimelineCount.textContent = String(items.length);
  elements.franchiseTimelineList.innerHTML = "";
  if (items.length < 2) return;

  const statusLabels = {
    watching: "Смотрю",
    completed: "Посмотрел",
    dropped: "Брошено",
    planned: "В планах"
  };
  const fragment = document.createDocumentFragment();
  items.forEach((item, index) => {
    const button = document.createElement("button");
    button.className = `franchise-timeline-item${item.id === anime.id ? " is-current" : ""}`;
    button.type = "button";
    const order = document.createElement("span");
    order.className = "timeline-order";
    order.textContent = String(index + 1);
    const copy = document.createElement("span");
    copy.className = "timeline-copy";
    const title = document.createElement("strong");
    title.textContent = item.titleRu || item.title;
    const meta = document.createElement("span");
    meta.textContent = `${item.year || "?"} · ${item.type || "Anime"} · ${deriveAvailability(item).short}`;
    copy.append(title, meta);
    const status = document.createElement("span");
    status.className = "timeline-status";
    status.textContent = item.id === anime.id ? "Сейчас" : statusLabels[watchStatuses[item.id]] || "Открыть";
    button.append(order, copy, status);
    button.addEventListener("click", () => focusAnime(item.id));
    fragment.appendChild(button);
  });
  elements.franchiseTimelineList.appendChild(fragment);
}

function renderDetail(visibleItems) {
  if (visibleItems.length === 0) {
    if (state.view === "favorites") {
      renderFavoriteCharactersPane();
      return;
    }
    renderEmptyDetail("Ничего не найдено", "Попробуйте другой запрос или снизьте минимальный рейтинг.");
    return;
  }

  const selected = catalog.find((anime) => anime.id === state.selectedId);

  if (state.view === "favorites" && !selected && characterFavorites.size > 0) {
    renderFavoriteCharactersPane();
    return;
  }

  const anime = selected || visibleItems[0] || catalog[0];
  if (!anime) return;

  state.selectedId = anime.id;
  renderDetailCover(anime);
  const releaseStatus = animeReleaseStatusLabel(anime, anime.aniLibria || {});
  elements.detailMeta.textContent = `${anime.type || "Anime"} · ${anime.year || "?"} · ${anime.episodes || "?"} эп.${releaseStatus ? ` · ${releaseStatus}` : ""}`;
  elements.detailTitle.textContent = anime.titleRu || anime.title;
  const originalTitle = [anime.title, ...(anime.altTitles || [])]
    .filter(Boolean)
    .filter((title) => title !== anime.titleRu)
    .slice(0, 3)
    .join(" · ");
  elements.detailOriginalTitle.hidden = !originalTitle;
  elements.detailOriginalTitle.textContent = originalTitle;
  elements.detailSynopsis.textContent = anime.synopsis || "Описание недоступно.";
  renderDetailShikimoriRating(anime);
  elements.detailFranchise.textContent = anime.franchise ? `Франшиза: ${anime.franchise}` : "Франшиза не указана";
  renderDetailAvailability(anime);
  if (animeIdFromUrl() === anime.id) updateSeoMetadata(anime);
  else resetSeoMetadata();
  elements.watchAnimeButton.disabled = false;
  elements.watchAnimeButton.onclick = () => continueWatching(anime);
  elements.shareAnimeButton.disabled = false;
  elements.shareAnimeButton.onclick = () => copyAnimeLink(anime);
  elements.editAnimeButton.disabled = false;
  elements.editAnimeButton.onclick = () => openAdminDialog(anime.id);
  renderPlaybackHint(anime);
  elements.watchStatusSelect.disabled = false;
  elements.watchStatusSelect.value = watchStatuses[anime.id] || "";
  elements.detailFavorite.classList.toggle("is-active", animeFavorites.has(anime.id));
  elements.detailFavorite.setAttribute("aria-pressed", String(animeFavorites.has(anime.id)));
  elements.detailFavorite.onclick = () => toggleAnimeFavorite(anime.id);

  renderFranchiseTimeline(anime);
  renderGuideNotes(anime);
  renderGenres(anime.genres || []);
  renderStars(anime);
  renderCharacters(anime);
  if (!anime.aniLibria) {
    anime.aniLibria = { state: "loading", episodes: [], releaseUrl: "" };
    fetchAniLibriaEpisodes(anime);
  }
  renderAniLibriaEpisodes(anime);
  if (anime.aniLibriaReleaseId && !anime.franchiseLoading && !anime.franchiseLoaded && !anime.franchiseLoadFailed) {
    loadAniLibriaFranchise(anime);
  }
  if (anime.malId && !anime.relationsLoading && !anime.relationsLoaded && !anime.relationsLoadFailed) {
    loadJikanRelations(anime);
  }

  const needsCharacterImages =
    anime.malId &&
    !anime.charactersLoading &&
    !anime.charactersLoadFailed &&
    (!anime.characters?.length || anime.characters.every((character) => !character.image));
  if (needsCharacterImages) {
    fetchCharacters(anime);
  }
  if (
    anime.malId &&
    ["jikan", "shikimori"].includes(anime.source) &&
    !anime.russianDetailsLoaded &&
    !anime.russianDetailsLoading &&
    !anime.russianDetailsFailed
  ) {
    fetchRussianDetails(anime);
  }
}

function renderEmptyDetail(title, message) {
  elements.detailCover.style.backgroundImage =
    "linear-gradient(135deg, rgba(112, 216, 238, 0.18), rgba(255, 92, 104, 0.16))";
  elements.detailMeta.textContent = "Пустой результат";
  elements.detailTitle.textContent = title;
  elements.detailOriginalTitle.hidden = true;
  elements.detailOriginalTitle.textContent = "";
  elements.detailSynopsis.textContent = message;
  renderDetailShikimoriRating(null);
  elements.detailFranchise.textContent = "Франшиза не указана";
  renderDetailAvailability({ status: "", aniLibria: { state: "empty", episodes: [] } });
  renderGuideNotes({});
  resetSeoMetadata();
  elements.watchAnimeButton.disabled = true;
  elements.watchAnimeButton.onclick = null;
  elements.shareAnimeButton.disabled = true;
  elements.shareAnimeButton.onclick = null;
  elements.editAnimeButton.disabled = true;
  elements.editAnimeButton.onclick = null;
  renderPlaybackHint(null);
  elements.watchStatusSelect.disabled = true;
  elements.watchStatusSelect.value = "";
  elements.detailFavorite.classList.remove("is-active");
  elements.detailFavorite.onclick = null;
  elements.genreList.innerHTML = "";
  elements.detailStars.innerHTML = "";
  elements.franchiseTimeline.hidden = true;
  elements.franchiseTimelineList.innerHTML = "";
  elements.characterCount.textContent = "0";
  elements.characterGrid.innerHTML = '<p class="status-line">Нет карточек для отображения.</p>';
  clearAniLibriaEpisodes("Серии пока недоступны");
}

function loadFirstWorkingPoster(candidates, index = 0) {
  return new Promise((resolve) => {
    const url = candidates[index];
    if (!url) {
      resolve("");
      return;
    }
    const image = new Image();
    image.referrerPolicy = "no-referrer";
    image.onload = () => resolve(url);
    image.onerror = () => {
      loadFirstWorkingPoster(candidates, index + 1).then(resolve);
    };
    image.src = url;
  });
}

function renderDetailCover(anime) {
  const fallback = "linear-gradient(135deg, rgba(112, 216, 238, 0.18), rgba(255, 92, 104, 0.16))";
  const candidates = posterCandidateList(anime);
  const token = `${anime?.id || "empty"}:${Date.now()}`;
  elements.detailCover.dataset.posterToken = token;
  elements.detailCover.style.backgroundImage = fallback;
  if (!candidates.length) return;
  loadFirstWorkingPoster(candidates).then((url) => {
    if (!url || elements.detailCover.dataset.posterToken !== token) return;
    rememberWorkingPoster(anime.id, url);
    elements.detailCover.style.backgroundImage =
      `linear-gradient(180deg, rgba(16, 17, 19, 0.1), rgba(16, 17, 19, 0.94)), url("${url}")`;
  });
}

function renderGenres(genres) {
  elements.genreList.innerHTML = "";
  const fragment = document.createDocumentFragment();

  for (const genre of genres.slice(0, 8)) {
    const chip = document.createElement("span");
    chip.className = "genre-chip";
    chip.textContent = genre;
    fragment.appendChild(chip);
  }

  elements.genreList.appendChild(fragment);
}

function normalizeAniLibriaTitle(value) {
  return normalizeText(value)
    .replace(/ё/g, "е")
    .replace(/[^a-zа-я0-9]+/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// Require a strong title/year match so similarly named sequels are not mixed up.
function aniLibriaMatchScore(anime, release) {
  const animeNames = [anime.titleRu, anime.title].map(normalizeAniLibriaTitle).filter(Boolean);
  const releaseNames = [release.name?.main, release.name?.english, release.name?.alternative]
    .map(normalizeAniLibriaTitle)
    .filter(Boolean);
  let score = 0;
  animeNames.forEach((animeName) => {
    releaseNames.forEach((releaseName) => {
      if (animeName === releaseName) score = Math.max(score, 12);
      else if (Math.min(animeName.length, releaseName.length) >= 5 && (animeName.includes(releaseName) || releaseName.includes(animeName))) {
        score = Math.max(score, 5);
      }
    });
  });
  const yearDifference = Math.abs(Number(anime.year || 0) - Number(release.year || 0));
  if (anime.year && release.year && yearDifference === 0) score += 4;
  else if (anime.year && release.year && yearDifference === 1) score += 1;
  return score;
}

function normalizeExternalUrl(value) {
  if (!value) return "";
  if (String(value).startsWith("//")) return `https:${value}`;
  return validMediaUrl(value);
}

async function fetchAniLibriaSearch(query) {
  const response = await fetch(`https://anilibria.top/api/v1/app/search/releases?query=${encodeURIComponent(query)}`);
  if (!response.ok) throw new Error("AniLibria search failed");
  const payload = await response.json();
  return Array.isArray(payload) ? payload : payload.data || [];
}

async function fetchAniLibriaEpisodes(anime) {
  try {
    let releaseId = Number(anime.aniLibriaReleaseId || aniLibriaReleaseIdsByMalId.get(Number(anime.malId))) || 0;
    if (!releaseId) {
      let releases = await fetchAniLibriaSearch(anime.titleRu || anime.title);
      if (releases.length === 0 && anime.title && anime.title !== anime.titleRu) {
        releases = await fetchAniLibriaSearch(anime.title);
      }
      const ranked = releases
        .map((release) => ({ release, score: aniLibriaMatchScore(anime, release) }))
        .sort((a, b) => b.score - a.score);
      if (!ranked[0] || ranked[0].score < 9) {
        anime.aniLibria = { state: "empty", episodes: [], releaseUrl: "" };
        if (state.selectedId === anime.id) {
          renderAniLibriaEpisodes(anime);
          renderDetailAvailability(anime);
        }
        return;
      }
      releaseId = ranked[0].release.id;
    }

    const releaseResponse = await fetch(`https://anilibria.top/api/v1/anime/releases/${releaseId}`);
    if (!releaseResponse.ok) throw new Error("AniLibria release failed");
    const release = await releaseResponse.json();
    const releasePosters = [
      release.poster?.optimized?.src,
      release.poster?.optimized?.preview,
      release.poster?.src,
      release.poster?.preview
    ].map(aniLibriaPoster).filter(Boolean);
    anime.posterCandidates = posterCandidateList(anime, releasePosters);
    if (!anime.image && anime.posterCandidates[0]) anime.image = anime.posterCandidates[0];
    const releaseUrl =
      normalizeExternalUrl(release.external_player) || `https://anilibria.top/api/v1/anime/releases/${release.id}`;
    const episodes = (release.episodes || [])
      .map((episode, index) => {
        const ordinal = Number(episode.ordinal);
        return {
          id: episode.id,
          number: Number.isFinite(ordinal) && ordinal > 0 ? ordinal : index + 1,
          title: episode.name || episode.name_english || "",
          url: episode.hls_1080 || episode.hls_720 || episode.hls_480 || "",
          originalUrl: releaseUrl,
          duration: Number(episode.duration || 0)
        };
      })
      .sort((a, b) => Number(a.number || 0) - Number(b.number || 0));
    anime.aniLibria = {
      state: episodes.length ? "ready" : "empty",
      releaseName: release.name?.main || anime.titleRu || anime.title,
      releaseUrl,
      firstEpisode: episodes[0]?.number || 0,
      lastEpisode: episodes.at(-1)?.number || 0,
      expectedEpisodes: Number(release.episodes_total || anime.episodes || 0) || 0,
      isOngoing: Boolean(release.is_ongoing),
      episodes
    };
  } catch {
    anime.aniLibria = { state: "error", episodes: [], releaseUrl: "" };
  }
  if (state.selectedId === anime.id) {
    renderAniLibriaEpisodes(anime);
    renderDetailAvailability(anime);
  }
}

function clearAniLibriaEpisodes(message) {
  elements.apiEpisodeCount.textContent = "0";
  elements.apiEpisodesStatus.textContent = message;
  elements.apiEpisodesStatus.hidden = false;
  elements.apiEpisodeList.innerHTML = "";
  elements.aniLibriaReleaseLink.hidden = true;
  elements.aniLibriaReleaseLink.removeAttribute("href");
}

function renderAniLibriaEpisodes(anime) {
  const data = anime.aniLibria || { state: "loading", episodes: [] };
  const availability = deriveAvailability(anime);
  renderDetailAvailability(anime);
  elements.apiEpisodeList.innerHTML = "";
  elements.apiEpisodeCount.textContent = String(data.episodes?.length || 0);
  elements.aniLibriaReleaseLink.hidden = !data.releaseUrl;
  if (data.releaseUrl) elements.aniLibriaReleaseLink.href = data.releaseUrl;

  if (data.state === "loading") {
    elements.apiEpisodesStatus.hidden = false;
    elements.apiEpisodesStatus.textContent = "Загрузка серий...";
    return;
  }
  if (data.state === "error") {
    elements.apiEpisodesStatus.hidden = false;
    elements.apiEpisodesStatus.textContent = "Не удалось загрузить серии";
    return;
  }
  if (data.state === "empty" || !data.episodes?.length) {
    elements.apiEpisodesStatus.hidden = false;
    elements.apiEpisodesStatus.textContent = "Серии пока недоступны";
    return;
  }

  elements.apiEpisodesStatus.hidden = false;
  elements.apiEpisodesStatus.textContent = availability.state === "partial"
    ? `${data.releaseName} · ${availability.note}`
    : `${data.releaseName} · доступно серий: ${data.episodes.length}`;
  const fragment = document.createDocumentFragment();
  data.episodes.forEach((episode) => {
    const card = document.createElement("article");
    card.className = "api-episode-card";
    const number = document.createElement("span");
    number.className = "api-episode-number";
    number.textContent = String(episode.number || "?");
    const copy = document.createElement("div");
    copy.className = "api-episode-copy";
    const title = document.createElement("strong");
    title.textContent = episode.title || `Серия ${episode.number || "?"}`;
    const meta = document.createElement("span");
    meta.textContent = episode.duration ? `${Math.round(episode.duration / 60)} мин.` : "AniLibria";
    copy.append(title, meta);

    let action;
    if (episode.url) {
      action = document.createElement("button");
      action.type = "button";
      action.className = "secondary-button api-watch-button";
      action.innerHTML = '<i data-lucide="play" aria-hidden="true"></i><span>Смотреть</span>';
      action.addEventListener("click", () => openAniLibriaEpisode(anime, episode));
    } else {
      action = document.createElement("a");
      action.className = "secondary-button api-watch-button";
      action.href = data.releaseUrl;
      action.target = "_blank";
      action.rel = "noopener noreferrer";
      action.innerHTML = '<i data-lucide="external-link" aria-hidden="true"></i><span>Открыть</span>';
    }
    card.append(number, copy, action);
    fragment.appendChild(card);
  });
  elements.apiEpisodeList.appendChild(fragment);
  createIcons();
}

function renderStars(anime) {
  elements.detailStars.innerHTML = "";
  const currentRating = Number(ratings[anime.id] || 0);
  const fragment = document.createDocumentFragment();

  for (let index = 1; index <= 10; index += 1) {
    const button = document.createElement("button");
    button.className = "star-button";
    button.type = "button";
    button.title = `${index}/10`;
    button.setAttribute("aria-label", `Оценить ${index} из 10`);
    button.classList.toggle("is-active", index <= currentRating);
    button.innerHTML = '<i data-lucide="star" aria-hidden="true"></i>';
    button.addEventListener("click", () => {
      ratings[anime.id] = index;
      saveRatings();
      render();
    });
    fragment.appendChild(button);
  }

  elements.detailStars.appendChild(fragment);
}

function renderCharacters(anime) {
  const characters = anime.characters || [];
  elements.characterGrid.innerHTML = "";
  elements.characterCount.textContent = characters.length;

  if (characters.length === 0) {
    const empty = document.createElement("p");
    empty.className = "status-line";
    empty.textContent = anime.charactersLoading ? "Загружаю персонажей..." : "Персонажи пока не добавлены.";
    elements.characterGrid.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();

  for (const character of characters.slice(0, 12)) {
    fragment.appendChild(createCharacterCard(character));
  }

  elements.characterGrid.appendChild(fragment);
}

function createCharacterCard(character) {
  const node = elements.characterCardTemplate.content.firstElementChild.cloneNode(true);
  const image = node.querySelector(".character-photo");
  const favoriteButton = node.querySelector(".character-favorite");

  image.src = character.image || "";
  image.alt = character.name;
  image.referrerPolicy = "no-referrer";
  attachImageFallback(image, character.name);

  node.querySelector("strong").textContent = character.name;
  node.querySelector("span").textContent = translateCharacterRole(character.role) || character.tags?.join(", ") || "Персонаж";
  favoriteButton.classList.toggle("is-active", characterFavorites.has(character.id));
  favoriteButton.setAttribute("aria-pressed", String(characterFavorites.has(character.id)));
  favoriteButton.addEventListener("click", () => toggleCharacterFavorite(character));

  return node;
}

function renderFavoriteCharactersPane() {
  const characters = allCharacters().filter((character) => characterFavorites.has(character.id));
  elements.detailCover.style.backgroundImage =
    "linear-gradient(135deg, rgba(255, 92, 104, 0.24), rgba(98, 213, 164, 0.16))";
  elements.detailMeta.textContent = "Персональная подборка";
  elements.detailTitle.textContent = "Избранные персонажи";
  elements.detailOriginalTitle.hidden = true;
  elements.detailOriginalTitle.textContent = "";
  elements.detailSynopsis.textContent = "Здесь собраны персонажи, отмеченные сердцем.";
  renderDetailShikimoriRating(null);
  elements.detailFranchise.textContent = "Избранные из разных франшиз";
  resetSeoMetadata();
  elements.watchAnimeButton.disabled = true;
  elements.watchAnimeButton.onclick = null;
  elements.shareAnimeButton.disabled = true;
  elements.shareAnimeButton.onclick = null;
  elements.editAnimeButton.disabled = true;
  elements.editAnimeButton.onclick = null;
  renderPlaybackHint(null);
  elements.watchStatusSelect.disabled = true;
  elements.watchStatusSelect.value = "";
  elements.detailFavorite.classList.remove("is-active");
  elements.detailFavorite.onclick = null;
  elements.genreList.innerHTML = "";
  elements.detailStars.innerHTML = "";
  elements.franchiseTimeline.hidden = true;
  elements.franchiseTimelineList.innerHTML = "";
  elements.characterCount.textContent = characters.length;
  elements.characterGrid.innerHTML = "";
  clearAniLibriaEpisodes("Серии пока недоступны");

  if (characters.length === 0) {
    const empty = document.createElement("p");
    empty.className = "status-line";
    empty.textContent = "Пока пусто.";
    elements.characterGrid.appendChild(empty);
    return;
  }

  const fragment = document.createDocumentFragment();
  for (const character of characters) {
    fragment.appendChild(createCharacterCard(character));
  }
  elements.characterGrid.appendChild(fragment);
}

function allCharacters() {
  const byId = new Map();
  for (const anime of catalog) {
    for (const character of anime.characters || []) {
      byId.set(character.id, character);
    }
  }
  for (const character of Object.values(savedCharacters)) {
    if (character?.id && !byId.has(character.id)) {
      byId.set(character.id, character);
    }
  }
  return [...byId.values()];
}

function selectAnime(id, { updateUrl = true } = {}) {
  recordView(id);
  state.selectedId = id;
  if (updateUrl) syncAnimeUrl(id);
  render();
}

function recordView(id) {
  viewCounts[id] = Number(viewCounts[id] || 0) + 1;
  saveObject(storageKeys.viewCounts, viewCounts);
}

function focusAnime(id, watch = false, { updateUrl = true, scroll = true } = {}) {
  const anime = catalog.find((item) => item.id === id);
  if (!anime) return;
  recordView(id);
  state.view = "catalog";
  state.query = "";
  state.genre = "";
  state.franchise = "";
  state.genreOptionQuery = "";
  state.franchiseOptionQuery = "";
  state.minScore = 0;
  quickFilters.clear();
  saveSet(storageKeys.quickFilters, quickFilters);
  state.selectedId = id;
  if (updateUrl) syncAnimeUrl(id);
  elements.searchInput.value = "";
  elements.genreOptionSearch.value = "";
  elements.franchiseOptionSearch.value = "";
  elements.scoreFilter.value = "0";
  elements.scoreValue.textContent = "0";
  document.querySelectorAll(".segment").forEach((segment) => {
    const isActive = segment.dataset.view === "catalog";
    segment.classList.toggle("is-active", isActive);
    segment.setAttribute("aria-selected", String(isActive));
  });
  const selectedIndex = getVisibleAnime().findIndex((item) => item.id === id);
  state.visibleCount = Math.max(catalogPageSize, Math.ceil((selectedIndex + 1) / catalogPageSize) * catalogPageSize);
  render();
  if (watch) {
    openPlayer(anime);
  } else if (scroll) {
    document.querySelector(".workspace")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function toggleAnimeFavorite(id) {
  const anime = catalog.find((item) => item.id === id);
  if (animeFavorites.has(id)) {
    animeFavorites.delete(id);
    if (anime?.source === "jikan" && !(anime.watchEpisodes || []).length) {
      delete savedAnime[id];
    }
  } else {
    animeFavorites.add(id);
    if (anime) {
      savedAnime[id] = snapshotAnime(anime);
    }
  }
  saveSet(storageKeys.animeFavorites, animeFavorites);
  saveObject(storageKeys.savedAnime, savedAnime);
  render();
}

function toggleCharacterFavorite(character) {
  const id = typeof character === "string" ? character : character.id;
  if (characterFavorites.has(id)) {
    characterFavorites.delete(id);
    delete savedCharacters[id];
  } else {
    characterFavorites.add(id);
    if (typeof character !== "string") {
      savedCharacters[id] = character;
    }
  }
  saveSet(storageKeys.characterFavorites, characterFavorites);
  saveObject(storageKeys.savedCharacters, savedCharacters);
  render();
}

function isPlaceholderImageUrl(value) {
  const url = String(value || "").trim();
  return !url || knownPlaceholderPosterPaths.some((pattern) => pattern.test(url));
}

function posterOverrideUrl(malId) {
  return posterOverridesByMalId.get(Number(malId)) || "";
}

function cleanPosterCandidateUrl(value) {
  const url = String(value || "").trim();
  return isPlaceholderImageUrl(url) ? "" : url;
}

function cleanPosterUrl(value, malId) {
  return posterOverrideUrl(malId) || cleanPosterCandidateUrl(value);
}

function absolutePosterUrl(value) {
  const url = cleanPosterCandidateUrl(value);
  if (!url) return "";
  try {
    return new URL(url, `${window.location.origin}${appRootPath()}`).toString();
  } catch {
    return url;
  }
}

function shikimoriPosterCandidates(id) {
  const value = Number(id || 0);
  if (!value) return [];
  return [
    `${SHIKIMORI_ORIGIN}/system/animes/original/${value}.jpg`,
    `${SHIKIMORI_ORIGIN}/system/animes/preview/${value}.jpg`,
    `${SHIKIMORI_ORIGIN}/system/animes/x96/${value}.jpg`
  ];
}

function posterCandidateList(anime, extra = []) {
  if (!anime) return [];
  const seen = new Set();
  const result = [];
  const add = (value) => {
    const url = cleanPosterCandidateUrl(value);
    const key = absolutePosterUrl(url);
    if (!url || !key || seen.has(key)) return;
    seen.add(key);
    result.push(url);
  };
  add(posterOverrideUrl(anime.malId));
  (anime.posterCandidates || []).forEach(add);
  add(anime.image);
  extra.forEach(add);
  shikimoriPosterCandidates(anime.shikimoriId || anime.malId).forEach(add);
  if (anime.shikimoriId && Number(anime.shikimoriId) !== Number(anime.malId)) {
    shikimoriPosterCandidates(anime.shikimoriId).forEach(add);
  }
  return result;
}

function rememberWorkingPoster(animeId, url) {
  if (!animeId || !url) return;
  const anime = catalog.find((item) => item.id === animeId);
  if (!anime || anime.image === url) return;
  anime.posterCandidates = posterCandidateList(anime, [url]);
  anime.image = url;
  if (savedAnime[anime.id]) {
    savedAnime[anime.id] = snapshotAnime(anime);
    saveObject(storageKeys.savedAnime, savedAnime);
  }
}

function replaceWithFallback(image, label) {
  const fallback = document.createElement("span");
  fallback.className = `${image.className} image-fallback`;
  fallback.textContent = initials(label);
  image.replaceWith(fallback);
}

function tryNextImageCandidate(image, label) {
  const candidates = JSON.parse(image.dataset.posterCandidates || "[]");
  const nextIndex = Number(image.dataset.posterIndex || 0) + 1;
  if (nextIndex < candidates.length) {
    image.dataset.posterIndex = String(nextIndex);
    image.src = candidates[nextIndex];
    return;
  }
  replaceWithFallback(image, label);
}

function attachImageFallback(image, label, options = {}) {
  const candidates = [...new Set([image.getAttribute("src"), ...(options.candidates || [])].map(absolutePosterUrl).filter(Boolean))];
  image.dataset.posterCandidates = JSON.stringify(candidates);
  image.dataset.posterIndex = "0";

  if (!candidates.length) {
    replaceWithFallback(image, label);
    return;
  }

  image.addEventListener("error", () => tryNextImageCandidate(image, label));
  image.addEventListener("load", () => {
    const index = Number(image.dataset.posterIndex || 0);
    rememberWorkingPoster(options.animeId, candidates[index]);
  });
  image.src = candidates[0];
}

async function verifiedPosterUrl(value, malId) {
  const url = cleanPosterUrl(value, malId);
  if (!url || !window.crypto?.subtle) return url;

  try {
    const response = await fetch(url, { cache: "force-cache", referrerPolicy: "no-referrer" });
    if (!response.ok) return "";
    const digest = await window.crypto.subtle.digest("SHA-256", await response.arrayBuffer());
    const hash = [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("").toUpperCase();
    return knownPlaceholderPosterHashes.has(hash) ? "" : url;
  } catch {
    // The regular image error handler still covers inaccessible CDN files.
    return url;
  }
}

function initials(value) {
  const parts = String(value || "AP")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2);
  return parts.map((part) => part[0]).join("").toLocaleUpperCase("ru") || "AP";
}

function translateCharacterRole(value) {
  const role = String(value || "").trim();
  const translations = {
    main: "Главный герой",
    supporting: "Второстепенный персонаж",
    background: "Фоновый персонаж"
  };
  return translations[role.toLowerCase()] || role || "Персонаж";
}

function formatScore(value) {
  const score = Number(value || 0);
  return score > 0 ? score.toFixed(1) : "-";
}

function formatVotes(value) {
  const votes = Number(value || 0);
  return votes > 0 ? new Intl.NumberFormat("ru").format(votes) : "";
}

function shikimoriVotesFromItem(item) {
  const stats = Array.isArray(item?.rates_scores_stats) ? item.rates_scores_stats : [];
  return stats.reduce((sum, entry) => sum + Number(entry.value || 0), 0);
}

function shikimoriUrlFor(id, url = "") {
  if (/^https?:\/\//i.test(url)) return url;
  if (url) return new URL(url, SHIKIMORI_ORIGIN).toString();
  return id ? `${SHIKIMORI_ORIGIN}/animes/${id}` : "";
}

function siteFileUrl(fileName) {
  return new URL(fileName, `${window.location.origin}${appRootPath()}`).toString();
}

function normalizeShikimoriKind(value) {
  const kind = String(value || "").toLowerCase();
  const map = {
    tv: "TV",
    movie: "MOVIE",
    ova: "OVA",
    ona: "ONA",
    special: "SPECIAL",
    tv_special: "SPECIAL"
  };
  return map[kind] || String(value || "").toUpperCase();
}

function shikimoriRatingFromItem(item, meta = {}) {
  const score = Number(item?.score || 0);
  return {
    id: Number(item?.id || meta.id || 0) || null,
    title: item?.name || meta.title || "",
    titleRu: item?.russian || meta.titleRu || "",
    score: score > 0 ? score : 0,
    votes: shikimoriVotesFromItem(item) || Number(meta.votes || 0) || 0,
    url: shikimoriUrlFor(item?.id || meta.id, item?.url || meta.url || ""),
    matchedBy: meta.matchedBy || "api",
    confidence: Number(meta.confidence || 0),
    status: score > 0 ? "ready" : "no_score",
    checkedAt: Date.now()
  };
}

function shikimoriRating(anime) {
  const data = anime?.shikimori || {};
  const score = Number(data.score || anime?.shikimoriScore || 0);
  if (score <= 0) return null;
  return {
    id: Number(data.id || anime.shikimoriId || 0) || null,
    score,
    votes: Number(data.votes || anime.shikimoriVotes || 0) || 0,
    url: data.url || anime.shikimoriUrl || "",
    title: data.title || "",
    titleRu: data.titleRu || "",
    matchedBy: data.matchedBy || "",
    confidence: Number(data.confidence || 0)
  };
}

function shikimoriDisplayState(anime) {
  if (!anime) {
    return {
      state: "missing",
      text: "Оценка недоступна",
      meta: "Оценка Shikimori недоступна"
    };
  }
  const rating = shikimoriRating(anime);
  if (rating) {
    return {
      state: "ready",
      rating,
      text: `★ ${formatScore(rating.score)} SH`,
      meta: rating.votes ? `${formatVotes(rating.votes)} оценок · SH` : "Источник: Shikimori"
    };
  }

  const cached = shikimoriCacheEntry(anime);
  const status = anime?.shikimoriStatus || cached?.status || "";
  if (!shikimoriStaticCacheLoaded) {
    return {
      state: "loading",
      text: "Загрузка SH",
      meta: "Загрузка рейтинга Shikimori..."
    };
  }
  if (status === "api_error" && !shikimoriStaticCacheAvailable) {
    return {
      state: "temporary",
      text: "Рейтинг позже",
      meta: "Рейтинг Shikimori временно недоступен"
    };
  }
  return {
    state: "missing",
    text: "Оценка недоступна",
    meta: "Оценка Shikimori недоступна"
  };
}

function shikimoriSortScore(anime) {
  return shikimoriRating(anime)?.score || -1;
}

function catalogRatingScore(anime) {
  return shikimoriRating(anime)?.score || Number(anime?.score || 0);
}

function applyShikimoriData(anime, data) {
  if (!anime || !data) return false;
  anime.shikimori = {
    id: data.id || null,
    title: data.title || "",
    titleRu: data.titleRu || "",
    score: Number(data.score || 0),
    votes: Number(data.votes || 0),
    url: data.url || "",
    matchedBy: data.matchedBy || "",
    confidence: Number(data.confidence || 0),
    status: data.status || (Number(data.score || 0) > 0 ? "ready" : "no_score"),
    checkedAt: Number(data.checkedAt || Date.now())
  };
  anime.shikimoriId = anime.shikimori.id;
  anime.shikimoriScore = anime.shikimori.score;
  anime.shikimoriVotes = anime.shikimori.votes;
  anime.shikimoriUrl = anime.shikimori.url;
  anime.shikimoriMatchConfidence = anime.shikimori.confidence;
  anime.shikimoriStatus = anime.shikimori.status;
  if (!anime.malId && anime.shikimori.id) anime.malId = anime.shikimori.id;
  if (anime.shikimori.titleRu) anime.titleRu = anime.titleRu || anime.shikimori.titleRu;
  if (anime.shikimori.title || anime.shikimori.titleRu) {
    anime.altTitles = [...new Set([...(anime.altTitles || []), anime.shikimori.title, anime.shikimori.titleRu].filter(Boolean))];
  }
  return true;
}

function cacheShikimoriResult(anime, data) {
  ensureShikimoriCache().items[anime.id] = data;
  saveShikimoriCache();
}

function manualShikimoriId(anime) {
  const byAnime = shikimoriMappings.anime?.[anime.id];
  const byRelease = anime.aniLibriaReleaseId ? shikimoriMappings.anilibria?.[String(anime.aniLibriaReleaseId)] : null;
  const byMal = anime.malId ? shikimoriMappings.mal?.[String(anime.malId)] || anime.malId : null;
  return Number(byAnime || byRelease || byMal || 0) || 0;
}

function shikimoriCandidateTitles(item) {
  return [item.name, item.russian, item.english, item.japanese, item.license_name_ru, ...(item.synonyms || [])]
    .map(canonicalAnimeTitle)
    .filter(Boolean);
}

function animeCandidateTitles(anime) {
  return [anime.title, anime.titleRu, ...(anime.altTitles || [])]
    .map(canonicalAnimeTitle)
    .filter(Boolean);
}

function typeSimilarity(animeType, candidateKind) {
  const left = normalizeShikimoriKind(animeType);
  const right = normalizeShikimoriKind(candidateKind);
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

function shikimoriMatchScore(anime, item) {
  const animeTitles = animeCandidateTitles(anime);
  const candidateTitles = shikimoriCandidateTitles(item);
  let titleScore = 0;
  for (const animeTitle of animeTitles) {
    for (const candidateTitle of candidateTitles) {
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
  return { score, titleScore, yearScore };
}

function isConfidentShikimoriMatch(best, second) {
  if (!best || best.score < 13 || best.titleScore < 7) return false;
  if (second && second.score >= best.score - 2 && best.titleScore < 14) return false;
  return true;
}

async function fetchShikimoriAnime(id) {
  const response = await fetch(`${SHIKIMORI_ORIGIN}/api/animes/${id}`);
  if (!response.ok) throw new Error("Shikimori anime request failed");
  return response.json();
}

async function searchShikimoriAnime(anime) {
  const queries = [...new Set([anime.title, anime.titleRu, ...(anime.altTitles || [])].filter(Boolean))].slice(0, 4);
  const ranked = [];
  for (const query of queries) {
    const response = await fetch(`${SHIKIMORI_ORIGIN}/api/animes?search=${encodeURIComponent(query)}&limit=8`);
    if (!response.ok) continue;
    const payload = await response.json();
    (payload || []).forEach((item) => ranked.push({ item, ...shikimoriMatchScore(anime, item) }));
    if (ranked.some((candidate) => candidate.titleScore >= 14 && candidate.score >= 17)) break;
  }
  ranked.sort((left, right) => right.score - left.score);
  if (!isConfidentShikimoriMatch(ranked[0], ranked[1])) {
    return {
      status: "low_confidence",
      confidence: ranked[0]?.score || 0,
      title: ranked[0]?.item?.name || "",
      titleRu: ranked[0]?.item?.russian || "",
      checkedAt: Date.now()
    };
  }
  const detail = await fetchShikimoriAnime(ranked[0].item.id);
  return shikimoriRatingFromItem(detail, { matchedBy: "auto", confidence: ranked[0].score });
}

async function resolveShikimoriRating(anime) {
  const manualId = manualShikimoriId(anime);
  if (manualId) {
    const item = await fetchShikimoriAnime(manualId);
    return shikimoriRatingFromItem(item, { matchedBy: anime.malId && Number(anime.malId) === manualId ? "malId" : "manual", confidence: 99 });
  }
  return searchShikimoriAnime(anime);
}

function applyCachedShikimoriRatings(items = catalog) {
  for (const anime of items) {
    const entry = shikimoriCacheEntry(anime);
    if (entry?.status === "ready" && Number(entry.score || 0) > 0) {
      applyShikimoriData(anime, entry);
    } else if (entry?.status) {
      anime.shikimoriStatus = entry.status;
      anime.shikimoriMatchConfidence = Number(entry.confidence || 0);
    }
  }
}

async function loadShikimoriMappings() {
  if (shikimoriMappingsLoaded) return;
  try {
    const response = await fetch(siteFileUrl("shikimori-map.json"), { cache: "no-cache" });
    if (!response.ok) throw new Error("mapping unavailable");
    const remote = await response.json();
    shikimoriMappings = {
      cacheTtlHours: remote.cacheTtlHours || defaultShikimoriMappings.cacheTtlHours,
      anime: { ...defaultShikimoriMappings.anime, ...(remote.anime || {}) },
      anilibria: { ...defaultShikimoriMappings.anilibria, ...(remote.anilibria || {}) },
      mal: { ...(remote.mal || {}) }
    };
  } catch {
    shikimoriMappings = JSON.parse(JSON.stringify(defaultShikimoriMappings));
  } finally {
    shikimoriMappingsLoaded = true;
  }
}

async function loadShikimoriStaticCache() {
  try {
    const response = await fetch(siteFileUrl("shikimori-ratings.json"), { cache: "no-cache" });
    if (!response.ok) throw new Error("static cache unavailable");
    const payload = await response.json();
    const items = payload.items || {};
    shikimoriStaticCacheAvailable = true;
    ensureShikimoriCache();
    Object.entries(items).forEach(([id, entry]) => {
      if (!entry || entry.status !== "ready" || Number(entry.score || 0) <= 0) return;
      shikimoriCache.items[id] = entry;
      const anime = catalog.find((candidate) => candidate.id === id);
      if (anime) applyShikimoriData(anime, entry);
    });
    saveShikimoriCache();
    shikimoriStaticCacheLoaded = true;
    return true;
  } catch {
    shikimoriStaticCacheLoaded = true;
    shikimoriStaticCacheAvailable = false;
    return false;
  }
}

function scheduleShikimoriHydration(items = catalog, { priority = false } = {}) {
  const cleanItems = items.filter(Boolean);
  if (priority) {
    const current = [...shikimoriHydrationQueue.values()].filter((anime) => !cleanItems.some((item) => item.id === anime.id));
    shikimoriHydrationQueue.clear();
    [...cleanItems, ...current].forEach((anime) => shikimoriHydrationQueue.set(anime.id, anime));
  } else {
    cleanItems.forEach((anime) => shikimoriHydrationQueue.set(anime.id, anime));
  }
  window.clearTimeout(shikimoriHydrationTimer);
  shikimoriHydrationTimer = window.setTimeout(() => {
    hydrateShikimoriRatings([...shikimoriHydrationQueue.values()]);
    shikimoriHydrationQueue.clear();
  }, 600);
}

async function hydrateShikimoriRatings(items = catalog, { force = false } = {}) {
  if (shikimoriHydrating) {
    scheduleShikimoriHydration(items);
    return;
  }
  shikimoriHydrating = true;
  await loadShikimoriMappings();
  ensureShikimoriCache();
  let changed = false;
  const unique = deduplicateAnimeItems(items.filter(Boolean)).slice(0, 120);
  for (const anime of unique) {
    const target = catalog.find((candidate) => candidate.id === anime.id) || anime;
    const cached = shikimoriCacheEntry(target);
    if (!force && cached) {
      if (cached.status === "ready") applyShikimoriData(target, cached);
      if (shikimoriCacheIsFresh(cached)) continue;
    }
    try {
      const result = await resolveShikimoriRating(target);
      if (result?.status === "ready" && Number(result.score || 0) > 0) {
        applyShikimoriData(target, result);
        cacheShikimoriResult(target, result);
        changed = true;
      } else {
        const fallback = {
          status: result?.status || "not_found",
          confidence: Number(result?.confidence || 0),
          title: result?.title || "",
          titleRu: result?.titleRu || "",
          checkedAt: Date.now()
        };
        target.shikimoriStatus = fallback.status;
        target.shikimoriMatchConfidence = fallback.confidence;
        cacheShikimoriResult(target, fallback);
      }
    } catch {
      if (cached?.status === "ready") {
        applyShikimoriData(target, cached);
      } else {
        cacheShikimoriResult(target, { status: "api_error", checkedAt: Date.now() });
      }
    }
    await new Promise((resolve) => setTimeout(resolve, 300));
  }
  shikimoriHydrating = false;
  if (changed) render();
}

async function initializeShikimoriRatings() {
  await loadShikimoriMappings();
  await loadShikimoriStaticCache();
  applyCachedShikimoriRatings(catalog);
  render();
}

function shikimoriDebugReport() {
  const report = catalog.map((anime) => {
    const rating = shikimoriRating(anime);
    const cached = shikimoriCacheEntry(anime);
    return {
      id: anime.id,
      title: anime.titleRu || anime.title,
      shikimoriId: rating?.id || anime.shikimoriId || manualShikimoriId(anime) || null,
      score: rating?.score || null,
      votes: rating?.votes || null,
      status: anime.shikimoriStatus || cached?.status || (rating ? "ready" : "missing"),
      confidence: anime.shikimoriMatchConfidence || cached?.confidence || 0,
      matchedBy: anime.shikimori?.matchedBy || cached?.matchedBy || "",
      cachedAt: cached?.checkedAt ? new Date(cached.checkedAt).toISOString() : ""
    };
  });
  const summary = {
    total: report.length,
    staticCacheLoaded: shikimoriStaticCacheLoaded,
    staticCacheAvailable: shikimoriStaticCacheAvailable,
    cacheItems: Object.keys(ensureShikimoriCache().items || {}).length,
    withShikimoriId: report.filter((item) => item.shikimoriId).length,
    withScore: report.filter((item) => Number(item.score || 0) > 0).length,
    missingScore: report.filter((item) => !Number(item.score || 0)).length,
    apiErrors: report.filter((item) => item.status === "api_error").length,
    lowConfidence: report.filter((item) => item.status === "low_confidence").length,
    notFound: report.filter((item) => ["missing", "not_found", "no_score"].includes(item.status)).length,
    items: report
  };
  console.info("[Taytlo] Shikimori debug", summary);
  console.table(report);
  return summary;
}

function setStatus(message) {
  elements.statusLine.textContent = message;
}

function recordSearchActivity(query) {
  const normalizedQuery = normalizeText(query);
  if (!normalizedQuery) return;
  catalog
    .filter((anime) => animeSearchText(anime).includes(normalizedQuery))
    .slice(0, 5)
    .forEach((anime) => {
      viewCounts[anime.id] = Number(viewCounts[anime.id] || 0) + 1;
    });
  saveObject(storageKeys.viewCounts, viewCounts);
}

function mergeAnime(nextItems) {
  for (const item of nextItems) {
    item.image = cleanPosterUrl(item.image, item.malId);
    item.franchise = localizeFranchiseName(item.franchise, item);
    item.genres = localizeGenres(item.genres || []);
    item.altTitles = [...new Set([...(item.altTitles || []), item.title, item.titleRu].filter(Boolean))];
    ensureAnimeRoute(item);
    const existing = catalog.find((candidate) => sameAnimeIdentity(candidate, item));
    if (existing) {
      mergeAnimeRecords(existing, item);
      item.mergedIntoId = existing.id;
      continue;
    }
    catalog.push(item);
  }
  catalog = deduplicateAnimeItems(catalog);
  const hydrationTargets = nextItems
    .map((item) => catalog.find((anime) => anime.id === item.mergedIntoId || anime.id === item.id) || item)
    .filter(Boolean);
  applyCachedShikimoriRatings(hydrationTargets);
}

function inferFranchise(item) {
  const rawTitle = item.title_english || item.title || item.title_japanese || "Anime";
  return rawTitle
    .replace(/\s+(season|part)\s+\d.*$/i, "")
    .replace(/\s+\d+(st|nd|rd|th)\s+season.*$/i, "")
    .split(/\s*[:–—]\s*/)[0]
    .trim();
}

function normalizeBroadcastDay(value) {
  const normalized = normalizeText(value).replace(/s$/, "");
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  return days.includes(normalized) ? normalized : "";
}

function animeFromJikan(item) {
  const title = item.title || item.title_english || item.title_japanese || "Anime";
  const posterCandidates = [
    item.images?.webp?.large_image_url,
    item.images?.jpg?.large_image_url,
    item.images?.webp?.image_url,
    item.images?.jpg?.image_url
  ].filter(Boolean);
  const poster = posterCandidates[0] || "";
  return {
    id: `mal-${item.mal_id}`,
    malId: item.mal_id,
    source: "jikan",
    franchise: inferFranchise(item),
    requestBase: Math.max(500, 12000 - Number(item.popularity || 12000)),
    popularityBase: Number(item.members || item.favorites || 0),
    broadcastDay: normalizeBroadcastDay(item.broadcast?.day),
    title,
    titleRu: item.title_english || title,
    altTitles: [...new Set([...(item.titles || []).map((entry) => entry.title), item.title_english, item.title_japanese].filter(Boolean))],
    type: item.type || "Anime",
    year: item.year || (item.aired?.from ? new Date(item.aired.from).getFullYear() : ""),
    episodes: item.episodes || "?",
    status: item.status || "",
    episodesAired: item.episodes || 0,
    airedOn: item.aired?.from || "",
    releasedOn: item.aired?.to || "",
    nextEpisodeAt: "",
    score: item.score || 0,
    image: cleanPosterUrl(poster, item.mal_id),
    posterCandidates,
    synopsis: item.synopsis || "Описание недоступно.",
    genres: localizeGenres((item.genres || []).map((genre) => genre.name)),
    trailer: item.trailer?.embed_url || item.trailer?.url || "",
    watchEpisodes: [],
    characters: []
  };
}

function shikimoriImage(path, malId) {
  if (!path) return cleanPosterUrl("", malId);
  return cleanPosterUrl(new URL(path, "https://shikimori.one").toString(), malId);
}

function shikimoriImageCandidates(item) {
  return [
    item?.image?.original,
    item?.image?.preview,
    item?.image?.x96,
    item?.image?.x48,
    ...shikimoriPosterCandidates(item?.id)
  ]
    .filter(Boolean)
    .map((path) => /^https?:\/\//i.test(path) ? path : new URL(path, SHIKIMORI_ORIGIN).toString());
}

async function hydrateMissingPosters(items) {
  let changed = false;
  for (const item of items) {
    const anime = catalog.find((candidate) => candidate.malId === item.malId);
    if (!anime || !anime.malId) continue;
    anime.image = cleanPosterUrl(anime.image, anime.malId);
    if (anime.image) continue;
    try {
      const response = await fetch(`https://api.jikan.moe/v4/anime/${anime.malId}`);
      if (!response.ok) throw new Error("Jikan poster failed");
      const payload = await response.json();
      const posterCandidates = [
        payload.data?.images?.webp?.large_image_url,
        payload.data?.images?.jpg?.large_image_url,
        payload.data?.images?.webp?.image_url,
        payload.data?.images?.jpg?.image_url
      ].filter(Boolean);
      const poster = await verifiedPosterUrl(posterCandidates[0], anime.malId);
      anime.posterCandidates = posterCandidateList(anime, [poster, ...posterCandidates]);
      anime.image = poster || posterCandidateList(anime)[0] || anime.image;
      anime.trailer = anime.trailer || payload.data?.trailer?.embed_url || payload.data?.trailer?.url || "";
      changed = changed || Boolean(anime.image);
    } catch {
      // The initials fallback remains visible when neither image source is available.
    }
    await new Promise((resolve) => setTimeout(resolve, 350));
  }
  if (changed) render();
}

function animeFromShikimori(item) {
  const title = item.name || item.russian || "Anime";
  const shikimori = shikimoriRatingFromItem(item, { matchedBy: "api", confidence: 99 });
  const posterCandidates = shikimoriImageCandidates(item);
  return {
    id: `mal-${item.id}`,
    malId: item.id,
    shikimoriId: item.id,
    source: "shikimori",
    franchise: title.split(/\s*[:–—]\s*/)[0],
    requestBase: 0,
    popularityBase: 0,
    broadcastDay: "",
    title,
    titleRu: item.russian || title,
    altTitles: [item.name, item.russian].filter(Boolean),
    type: String(item.kind || "Anime").toUpperCase(),
    year: item.aired_on ? new Date(item.aired_on).getFullYear() : "",
    episodes: item.episodes || item.episodes_aired || "?",
    status: item.status || "",
    episodesAired: Number(item.episodes_aired || 0),
    airedOn: item.aired_on || "",
    releasedOn: item.released_on || "",
    nextEpisodeAt: item.next_episode_at || "",
    score: Number(item.score || 0),
    shikimori,
    shikimoriScore: shikimori.score,
    shikimoriVotes: shikimori.votes,
    shikimoriUrl: shikimori.url,
    shikimoriStatus: shikimori.status,
    image: cleanPosterUrl(posterCandidates[0], item.id),
    posterCandidates,
    synopsis: "Русское описание загружается при открытии карточки.",
    genres: [],
    trailer: "",
    watchEpisodes: [],
    characters: []
  };
}

function cleanShikimoriDescription(value) {
  return String(value || "")
    .replace(/\[\/?(?:character|anime|manga|person)[^\]]*\]/gi, "")
    .replace(/\[\[([^\]]+)\]\]/g, "$1")
    .replace(/\[([^\]]+)\]/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim();
}

async function fetchRussianDetails(anime) {
  anime.russianDetailsLoading = true;
  try {
    const response = await fetch(`https://shikimori.one/api/animes/${anime.malId}`);
    if (!response.ok) throw new Error("Shikimori details failed");
    const item = await response.json();
    const rating = shikimoriRatingFromItem(item, { matchedBy: "malId", confidence: 99 });
    if (rating.score > 0) {
      applyShikimoriData(anime, rating);
      cacheShikimoriResult(anime, rating);
    }
    anime.titleRu = item.russian || anime.titleRu || anime.title;
    anime.franchise = localizeFranchiseName(anime.franchise, anime);
    anime.synopsis = cleanShikimoriDescription(item.description) || anime.synopsis;
    anime.genres = localizeGenres((item.genres || []).map((genre) => genre.russian || genre.name).filter(Boolean));
    anime.posterCandidates = posterCandidateList(anime, shikimoriImageCandidates(item));
    anime.image = posterCandidateList(anime)[0] || anime.image;
    anime.episodes = item.episodes || item.episodes_aired || anime.episodes;
    anime.status = item.status || anime.status || "";
    anime.episodesAired = Number(item.episodes_aired || anime.episodesAired || 0);
    anime.airedOn = item.aired_on || anime.airedOn || "";
    anime.releasedOn = item.released_on || anime.releasedOn || "";
    anime.nextEpisodeAt = item.next_episode_at || anime.nextEpisodeAt || "";
    anime.russianDetailsLoaded = true;
    anime.russianDetailsFailed = false;
    if (animeFavorites.has(anime.id) || watchStatuses[anime.id]) {
      savedAnime[anime.id] = snapshotAnime(anime);
      saveObject(storageKeys.savedAnime, savedAnime);
    }
  } catch {
    anime.russianDetailsFailed = true;
  } finally {
    anime.russianDetailsLoading = false;
    if (state.selectedId === anime.id) render();
  }
}

function applyScheduleEntries(entries = []) {
  const confirmed = entries
    .filter((anime) => Number.isFinite(Date.parse(anime.nextEpisodeAt || "")))
    .map((anime) => ({
      ...anime,
      source: anime.source || "schedule-cache",
      genres: localizeGenres(anime.genres || []),
      posterCandidates: [...(anime.posterCandidates || [])]
    }));
  mergeAnime(confirmed);
  scheduleEntries = confirmed.map((anime) => {
    const target = catalog.find((item) => item.id === anime.mergedIntoId || item.id === anime.id) ||
      catalog.find((item) => Number(item.malId) === Number(anime.malId)) || anime;
    target.nextEpisodeAt = anime.nextEpisodeAt;
    target.episodesAired = anime.episodesAired;
    target.posterCandidates = posterCandidateList(target, anime.posterCandidates || []);
    return target;
  });
  scheduleEntries = [...new Map(scheduleEntries.map((anime) => [anime.id, anime])).values()]
    .sort((left, right) => Date.parse(left.nextEpisodeAt) - Date.parse(right.nextEpisodeAt));
}

async function loadRealSchedule() {
  scheduleLoading = true;
  scheduleLoadFailed = false;
  renderCalendar();
  try {
    const response = await fetch(siteFileUrl("schedule-cache.json"), { cache: "no-cache" });
    if (!response.ok) throw new Error("Schedule cache unavailable");
    const payload = await response.json();
    applyScheduleEntries(Array.isArray(payload.entries) ? payload.entries : []);
    scheduleLoadFailed = false;
  } catch {
    scheduleEntries = [];
    scheduleLoadFailed = true;
  } finally {
    scheduleLoading = false;
    renderWatchHub();
    renderCalendar();
    renderNotificationCenter();
    maybeNotifyEpisodeUpdates().catch(() => {});
  }
}

async function loadLatestAniLibriaUpdates() {
  updatesLoading = true;
  updatesLoadFailed = false;
  renderUpdates();
  try {
    const response = await fetch("https://anilibria.top/api/v1/anime/releases/latest?limit=12");
    if (!response.ok) throw new Error("AniLibria latest releases failed");
    const payload = await response.json();
    const releases = Array.isArray(payload) ? payload : payload.data || payload.releases || [];
    const prepared = releases
      .map((release, index) => {
        const latestEpisode = release.latest_episode || {};
        const episodeNumber = Number(latestEpisode.ordinal || latestEpisode.number || 0);
        const releasedAt = latestEpisode.updated_at || release.fresh_at || release.updated_at || "";
        return {
          anime: animeFromAniLibriaCatalog(release, index),
          episodeNumber,
          episodeTitle: latestEpisode.name || "",
          releasedAt
        };
      })
      .filter((update) => update.episodeNumber > 0 && Number.isFinite(Date.parse(update.releasedAt)))
      .sort((left, right) => Date.parse(right.releasedAt) - Date.parse(left.releasedAt));
    mergeAnime(prepared.map((update) => update.anime));
    latestReleaseUpdates = prepared.map((update) => {
      const target = catalog.find((item) => item.id === update.anime.mergedIntoId) ||
        catalog.find((item) => Number(item.aniLibriaReleaseId) === Number(update.anime.aniLibriaReleaseId)) || update.anime;
      return { ...update, animeId: target.id };
    });
  } catch {
    latestReleaseUpdates = [];
    updatesLoadFailed = true;
  } finally {
    updatesLoading = false;
    renderWatchHub();
    renderUpdates();
    renderNotificationCenter();
    maybeNotifyEpisodeUpdates().catch(() => {});
  }
}

async function loadRussianCatalog() {
  setStatus("Загружаю русский каталог...");
  try {
    const response = await fetch("https://shikimori.one/api/animes?order=popularity&limit=12&status=ongoing");
    if (!response.ok) throw new Error("Shikimori catalog failed");
    const payload = await response.json();
    const items = (payload || []).map(animeFromShikimori);
    mergeAnime(items);
    hydrateMissingPosters(items);
    setStatus(`Русский каталог загружен: ${items.length} тайтлов.`);
  } catch {
    setStatus("Русский API временно недоступен, локальный каталог продолжает работать.");
  } finally {
    render();
  }
}

function aniLibriaPoster(path) {
  if (!path) return "";
  try {
    return new URL(path, "https://anilibria.top").toString();
  } catch {
    return "";
  }
}

function animeFromAniLibriaCatalog(release, index) {
  const titleRu = release.name?.main || release.name?.english || `Релиз ${release.id}`;
  const title = release.name?.english || release.name?.alternative || titleRu;
  const cached = remoteMetadata[`anilibria-${release.id}`] || {};
  const mappedFranchise = localizeFranchiseName(release.name?.english || "", { title, titleRu });
  const russianBaseTitle = titleRu.replace(/\s+\d+(?::.*)?$/u, "").trim() || titleRu;
  const posterCandidates = [
    release.poster?.optimized?.src,
    release.poster?.optimized?.preview,
    release.poster?.src,
    release.poster?.preview
  ].map(aniLibriaPoster).filter(Boolean);
  const poster = posterCandidates[0] || "";
  return {
    id: `anilibria-${release.id}`,
    malId: cached.malId || null,
    aniLibriaReleaseId: release.id,
    source: "anilibria",
    franchise:
      aniLibriaFranchiseNamesByReleaseId.get(Number(release.id)) ||
      (/[а-яё]/i.test(mappedFranchise) ? mappedFranchise : russianBaseTitle),
    requestBase: Math.max(200, 4200 - index * 90),
    popularityBase: Math.max(500, 28000 - index * 600),
    updatedAt: Date.parse(release.fresh_at || release.updated_at || "") || Date.now(),
    broadcastDay: "",
    title,
    titleRu,
    altTitles: [release.name?.main, release.name?.english, release.name?.alternative, release.alias].filter(Boolean),
    type: release.type?.value || release.type?.description || "TV",
    year: release.year || "",
    episodes: release.episodes_total || "?",
    status: release.is_ongoing ? "ongoing" : release.is_in_production ? "anons" : "released",
    episodesAired: Number(release.latest_episode?.ordinal || release.episodes_are_available || 0),
    availabilityOverride: {},
    nextEpisodeAt: "",
    score: Number(cached.score || 0),
    image: cleanPosterUrl(poster, cached.malId),
    posterCandidates,
    synopsis: release.description || "Описание релиза пока недоступно.",
    genres: localizeGenres((release.genres || []).map((genre) => genre.name).filter(Boolean)),
    watchEpisodes: [],
    characters: []
  };
}

function shikimoriMetadataMatchScore(anime, item) {
  const targetTitles = [anime.title, anime.titleRu].map(normalizeAniLibriaTitle).filter(Boolean);
  const candidateTitles = [item.name, item.russian].map(normalizeAniLibriaTitle).filter(Boolean);
  const exact = targetTitles.some((title) => candidateTitles.includes(title));
  const contains = targetTitles.some((title) =>
    candidateTitles.some((candidate) => title.length > 4 && (candidate.includes(title) || title.includes(candidate)))
  );
  return (exact ? 10 : contains ? 4 : 0) + (Number(anime.year) === Number(item.aired_on?.slice?.(0, 4)) ? 4 : 0);
}

async function hydrateAniLibriaMetadata(items) {
  applyCachedShikimoriRatings(items);
}

async function loadAniLibriaCatalog() {
  try {
    const response = await fetch(
      "https://anilibria.top/api/v1/anime/catalog/releases?page=1&limit=30&f%5Bsorting%5D=RATING_DESC"
    );
    if (!response.ok) throw new Error("AniLibria catalog failed");
    const payload = await response.json();
    const pinnedIds = [9122, 9964, 413, 2495, 3996, 8642, 8862, 9480];
    const catalogReleases = (payload.data || []).slice(0, 30);
    const presentIds = new Set(catalogReleases.map((release) => Number(release.id)));
    const pinnedResponses = await Promise.all(
      pinnedIds
        .filter((id) => !presentIds.has(id))
        .map((id) => fetch(`https://anilibria.top/api/v1/anime/releases/${id}`))
    );
    const pinnedReleases = [];
    for (const pinnedResponse of pinnedResponses) {
      if (pinnedResponse.ok) pinnedReleases.push(await pinnedResponse.json());
    }
    const releases = [...catalogReleases, ...pinnedReleases];
    const uniqueReleases = [...new Map(releases.map((release) => [Number(release.id), release])).values()];
    const items = uniqueReleases.map(animeFromAniLibriaCatalog);
    mergeAnime(items);
    hydrateAniLibriaMetadata(items);
    setStatus(`Каталог обновлён: добавлено ${items.length} озвученных релизов AniLibria.`);
  } catch {
    setStatus("Каталог AniLibria временно недоступен, сохранённые карточки продолжают работать.");
  } finally {
    render();
  }
}

async function loadAniLibriaFranchise(anime) {
  if (!anime.aniLibriaReleaseId || anime.franchiseLoading || anime.franchiseLoaded) return;
  anime.franchiseLoading = true;
  try {
    const response = await fetch(`https://anilibria.top/api/v1/anime/franchises/release/${anime.aniLibriaReleaseId}`);
    if (!response.ok) throw new Error("AniLibria franchise failed");
    const payload = await response.json();
    const items = (payload.franchise_releases || [])
      .map((entry, index) => animeFromAniLibriaCatalog(entry.release, index))
      .filter((item) => item.aniLibriaReleaseId);
    items.forEach((item) => {
      item.franchise = payload.name || anime.franchise || item.franchise;
    });
    mergeAnime(items);
    hydrateAniLibriaMetadata(items);
    anime.franchiseLoaded = true;
    anime.franchiseLoadFailed = false;
  } catch {
    anime.franchiseLoadFailed = true;
  } finally {
    anime.franchiseLoading = false;
    render();
  }
}

async function loadJikanRelations(anime) {
  if (!anime.malId || anime.relationsLoading || anime.relationsLoaded || anime.relationsLoadFailed) return;
  anime.relationsLoading = true;
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime.malId}/full`);
    if (!response.ok) throw new Error("Jikan relations failed");
    const payload = await response.json();
    const related = (payload.data?.relations || [])
      .flatMap((relation) =>
        (relation.entry || [])
          .filter((entry) => entry.type === "anime" && Number(entry.mal_id) !== Number(anime.malId))
          .map((entry) => ({ ...entry, relation: relation.relation }))
      )
      .slice(0, 24);
    const items = [];
    for (const entry of related) {
      if (catalog.some((candidate) => Number(candidate.malId) === Number(entry.mal_id))) continue;
      try {
        const detailResponse = await fetch(`https://shikimori.one/api/animes/${entry.mal_id}`);
        if (!detailResponse.ok) throw new Error("Shikimori relation failed");
        const item = animeFromShikimori(await detailResponse.json());
        item.franchise = localizeFranchiseName(anime.franchise, anime);
        item.relation = entry.relation;
        item.aniLibriaReleaseId = aniLibriaReleaseIdsByMalId.get(Number(item.malId)) || null;
        items.push(item);
      } catch {
        // A missing related title should not block the rest of the franchise.
      }
      await new Promise((resolve) => setTimeout(resolve, 350));
    }
    mergeAnime(items);
    await hydrateMissingPosters(items);
    anime.relationsLoaded = true;
    anime.relationsLoadFailed = false;
  } catch {
    anime.relationsLoadFailed = true;
  } finally {
    anime.relationsLoading = false;
    render();
  }
}

async function searchRemote() {
  const query = state.query.trim();
  if (!query) {
    setStatus("Готово к поиску.");
    render();
    return;
  }

  state.loading = true;
  setStatus("Ищу в Jikan и русском каталоге...");

  try {
    const [jikanResult, shikimoriResult] = await Promise.allSettled([
      fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=12&sfw=true`),
      fetch(`https://shikimori.one/api/animes?search=${encodeURIComponent(query)}&limit=12`)
    ]);
    let nextItems = [];

    if (jikanResult.status === "fulfilled" && jikanResult.value.ok) {
      const payload = await jikanResult.value.json();
      nextItems = (payload.data || []).map(animeFromJikan);
    }

    if (shikimoriResult.status === "fulfilled" && shikimoriResult.value.ok) {
      const payload = await shikimoriResult.value.json();
      const russianItems = (payload || []).map(animeFromShikimori);
      const russianByMal = new Map(russianItems.map((anime) => [anime.malId, anime]));
      nextItems.forEach((anime) => {
        const russian = russianByMal.get(anime.malId);
        if (!russian) return;
        anime.titleRu = russian.titleRu;
        anime.image = anime.image || russian.image;
        russianByMal.delete(anime.malId);
      });
      nextItems.push(...russianByMal.values());
    }

    if (nextItems.length === 0) throw new Error("Online search failed");
    mergeAnime(nextItems);
    await hydrateMissingPosters(nextItems);
    recordSearchActivity(query);
    setStatus(`Найдено: ${nextItems.length}. Русские названия включены.`);
  } catch {
    setStatus("Онлайн-поиск недоступен, работает локальный каталог.");
  } finally {
    state.loading = false;
    render();
  }
}

async function fetchCharacters(anime) {
  anime.charactersLoading = true;
  elements.characterGrid.innerHTML = '<p class="status-line">Загружаю персонажей...</p>';
  createIcons();

  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${anime.malId}/characters`);
    if (!response.ok) throw new Error("Jikan characters failed");
    const payload = await response.json();
    anime.characters = (payload.data || []).slice(0, 12).map((item) => ({
      id: `mal-character-${item.character?.mal_id || item.role}-${anime.malId}`,
      name: item.character?.name || "Персонаж",
      role: translateCharacterRole(item.role),
      image: item.character?.images?.jpg?.image_url || "",
      tags: [anime.title]
    }));
    anime.charactersLoading = false;
    anime.charactersLoadFailed = false;
    savedAnime[anime.id] = snapshotAnime(anime);
    saveObject(storageKeys.savedAnime, savedAnime);
    if (state.selectedId === anime.id) {
      render();
    }
  } catch {
    anime.charactersLoading = false;
    anime.charactersLoadFailed = true;
    if (state.selectedId === anime.id) {
      render();
    }
  }
}

function openDialog(dialog) {
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeDialog(dialog) {
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

function validMediaUrl(value) {
  try {
    const url = new URL(String(value).trim());
    return ["http:", "https:"].includes(url.protocol) ? url.toString() : "";
  } catch {
    return "";
  }
}

function parseEpisodeUrls(value) {
  return String(value || "")
    .split(/\r?\n/)
    .map((line) => validMediaUrl(line))
    .filter(Boolean)
    .map((url, index) => ({ title: `Серия ${index + 1}`, url }));
}

function adminPosterValue(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (/^(?:\.{0,2}\/|\/|assets\/)/i.test(raw)) return raw;
  return validMediaUrl(raw);
}

function populateAdminSelect(selectedId = state.selectedId) {
  const items = [...catalog].sort((left, right) =>
    (left.titleRu || left.title).localeCompare(right.titleRu || right.title, "ru")
  );
  elements.adminAnimeSelect.innerHTML = "";
  items.forEach((anime) => {
    const option = document.createElement("option");
    option.value = anime.id;
    option.textContent = `${anime.titleRu || anime.title} (${anime.year || "?"})`;
    elements.adminAnimeSelect.appendChild(option);
  });
  const fallbackId = items[0]?.id || "";
  elements.adminAnimeSelect.value = items.some((anime) => anime.id === selectedId) ? selectedId : fallbackId;
}

function updateAdminPreview() {
  const anime = catalog.find((item) => item.id === state.adminAnimeId);
  const title = elements.adminTitleRu.value.trim() || elements.adminTitle.value.trim() || anime?.titleRu || anime?.title || "Аниме";
  const poster = adminPosterValue(elements.adminPoster.value) || anime?.image || "";
  elements.adminPreviewTitle.textContent = title;
  elements.adminPreviewMeta.textContent = `${elements.adminYear.value || anime?.year || "?"} · ${elements.adminType.value || anime?.type || "Anime"}`;
  if (poster) elements.adminPosterPreview.src = poster;
  else elements.adminPosterPreview.removeAttribute("src");
}

function fillAdminForm(id) {
  const anime = catalog.find((item) => item.id === id);
  if (!anime) return;
  state.adminAnimeId = anime.id;
  elements.adminAnimeSelect.value = anime.id;
  elements.adminTitleRu.value = anime.titleRu || anime.title || "";
  elements.adminTitle.value = anime.title || "";
  elements.adminFranchise.value = anime.franchise || "";
  const type = String(anime.type || "TV").toUpperCase();
  if (![...elements.adminType.options].some((option) => option.value === type)) {
    const option = document.createElement("option");
    option.value = type;
    option.textContent = type;
    elements.adminType.appendChild(option);
  }
  elements.adminType.value = type;
  elements.adminYear.value = Number(anime.year) || "";
  elements.adminEpisodes.value = Number(anime.episodes) || "";
  elements.adminScore.value = Number(anime.score) || 0;
  elements.adminBroadcastDay.value = anime.broadcastDay || "";
  elements.adminPoster.value = anime.image || "";
  elements.adminGenres.value = (anime.genres || []).join(", ");
  const availabilityOverride = animeAvailabilityOverride(anime);
  elements.adminAvailabilityState.value = availabilityOverride.state || "";
  elements.adminAvailabilityStart.value = Number(availabilityOverride.startEpisode || 0) || "";
  elements.adminAvailabilityNote.value = availabilityOverride.note || "";
  elements.adminGuideNote.value = animeGuideNote(anime);
  elements.adminSynopsis.value = anime.synopsis || "";
  elements.adminEpisodesUrls.value = (anime.watchEpisodes || []).map((episode) => episode.url).filter(Boolean).join("\n");
  const isCustom = anime.source === "custom";
  const hasOverride = Boolean(anime.adminEdited || savedAnime[anime.id]?.adminEdited);
  elements.adminDeleteButton.disabled = !isCustom && !hasOverride;
  elements.adminDeleteButton.innerHTML = isCustom
    ? '<i data-lucide="trash-2" aria-hidden="true"></i><span>Удалить карточку</span>'
    : '<i data-lucide="rotate-ccw" aria-hidden="true"></i><span>Сбросить правки</span>';
  elements.adminFormNote.textContent = isCustom
    ? "Это ваша карточка: её можно изменить или полностью удалить из каталога."
    : "Изменения сохраняются только в этом браузере и имеют приоритет над данными API.";
  updateAdminPreview();
  createIcons();
}

function openAdminDialog(id = state.selectedId) {
  if (!adminMode) {
    setStatus("Управление скрыто в публичной версии. Откройте сайт с ?admin=1, чтобы включить локальную админку.");
    return;
  }
  populateAdminSelect(id);
  fillAdminForm(elements.adminAnimeSelect.value);
  openDialog(elements.adminDialog);
  createIcons();
}

function handleAdminSave(event) {
  event.preventDefault();
  const anime = catalog.find((item) => item.id === state.adminAnimeId);
  if (!anime) return;
  const titleRu = elements.adminTitleRu.value.trim();
  if (!titleRu) return;
  const genres = localizeGenres(elements.adminGenres.value.split(",").map((genre) => genre.trim()).filter(Boolean));
  const sources = parseEpisodeUrls(elements.adminEpisodesUrls.value);
  const score = Math.min(10, Math.max(0, Number(elements.adminScore.value) || 0));
  const poster = adminPosterValue(elements.adminPoster.value);
  const availabilityOverride = {
    state: elements.adminAvailabilityState.value,
    startEpisode: Number(elements.adminAvailabilityStart.value) || 0,
    note: elements.adminAvailabilityNote.value.trim()
  };
  if (!availabilityOverride.state && !availabilityOverride.startEpisode && !availabilityOverride.note) {
    delete availabilityOverride.state;
    delete availabilityOverride.startEpisode;
    delete availabilityOverride.note;
  }
  Object.assign(anime, {
    adminEdited: true,
    titleRu,
    title: elements.adminTitle.value.trim() || anime.title || titleRu,
    franchise: elements.adminFranchise.value.trim() || titleRu,
    type: elements.adminType.value || anime.type || "TV",
    year: Number(elements.adminYear.value) || anime.year || "",
    episodes: Number(elements.adminEpisodes.value) || sources.length || anime.episodes || "?",
    score,
    broadcastDay: normalizeBroadcastDay(elements.adminBroadcastDay.value),
    image: poster || anime.image || "",
    genres: genres.length ? genres : localizeGenres(anime.genres || []),
    availabilityOverride,
    guideNote: elements.adminGuideNote.value.trim(),
    synopsis: elements.adminSynopsis.value.trim() || "Описание недоступно.",
    watchEpisodes: sources,
    updatedAt: Date.now()
  });
  savedAnime[anime.id] = snapshotAnime(anime);
  saveObject(storageKeys.savedAnime, savedAnime);
  state.selectedId = anime.id;
  syncAnimeUrl(anime.id, true);
  closeDialog(elements.adminDialog);
  setStatus(`Карточка «${anime.titleRu || anime.title}» обновлена.`);
  render();
}

function handleAdminDelete() {
  const anime = catalog.find((item) => item.id === state.adminAnimeId);
  if (!anime) return;
  if (anime.source === "custom") {
    if (!window.confirm(`Удалить «${anime.titleRu || anime.title}» из каталога?`)) return;
    catalog = catalog.filter((item) => item.id !== anime.id);
    animeFavorites.delete(anime.id);
    delete savedAnime[anime.id];
    delete ratings[anime.id];
    delete watchStatuses[anime.id];
    delete playbackProgress[anime.id];
    saveSet(storageKeys.animeFavorites, animeFavorites);
    saveObject(storageKeys.savedAnime, savedAnime);
    saveObject(storageKeys.ratings, ratings);
    saveObject(storageKeys.watchStatuses, watchStatuses);
    saveObject(storageKeys.playbackProgress, playbackProgress);
    state.selectedId = catalog[0]?.id || null;
    syncAnimeUrl(state.selectedId, true);
    closeDialog(elements.adminDialog);
    setStatus(`«${anime.titleRu || anime.title}» удалено из каталога.`);
    render();
    return;
  }
  if (!anime.adminEdited && !savedAnime[anime.id]?.adminEdited) return;
  if (!window.confirm(`Сбросить локальные правки карточки «${anime.titleRu || anime.title}»?`)) return;
  delete savedAnime[anime.id];
  saveObject(storageKeys.savedAnime, savedAnime);
  window.location.reload();
}

function handleAddAnime(event) {
  event.preventDefault();
  const formData = new FormData(elements.addAnimeForm);
  const title = String(formData.get("title") || "").trim();
  if (!title) return;

  const watchEpisodes = parseEpisodeUrls(formData.get("episodes"));
  const score = Math.min(10, Math.max(0, Number(formData.get("score")) || 0));
  const genres = localizeGenres(String(formData.get("genres") || "")
    .split(",")
    .map((genre) => genre.trim())
    .filter(Boolean));
  const id = `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
  const anime = {
    id,
    source: "custom",
    franchise: String(formData.get("franchise") || "").trim() || title,
    requestBase: 0,
    popularityBase: 0,
    updatedAt: Date.now(),
    broadcastDay: normalizeBroadcastDay(formData.get("broadcastDay")),
    title,
    titleRu: title,
    type: "TV",
    year: Number(formData.get("year")) || new Date().getFullYear(),
    episodes: watchEpisodes.length || "?",
    score,
    image: validMediaUrl(formData.get("poster")),
    synopsis: "Аниме из вашей личной медиатеки.",
    genres: genres.length ? genres : ["Без жанра"],
    watchEpisodes,
    characters: []
  };

  mergeAnime([anime]);
  const savedTarget = catalog.find((item) => item.id === anime.mergedIntoId) || catalog.find((item) => item.id === id) || anime;
  savedAnime[savedTarget.id] = snapshotAnime(savedTarget);
  saveObject(storageKeys.savedAnime, savedAnime);
  state.selectedId = savedTarget.id;
  syncAnimeUrl(savedTarget.id);
  state.visibleCount = Math.ceil(catalog.length / catalogPageSize) * catalogPageSize;
  state.query = "";
  state.genre = "";
  state.franchise = "";
  elements.searchInput.value = "";
  elements.addAnimeForm.reset();
  closeDialog(elements.addAnimeDialog);
  setStatus(`«${title}» добавлено в личную медиатеку.`);
  render();
}

function playerSources(anime) {
  if (state.playerAnimeId === anime.id && state.activeAniLibriaEpisode) {
    return [state.activeAniLibriaEpisode];
  }
  const episodes = (anime.watchEpisodes || []).map((episode, index) => ({
    title: episode.title || `Серия ${index + 1}`,
    url: episode.url
  }));
  if (episodes.length === 0 && anime.trailer) {
    const trailerUrl = validMediaUrl(anime.trailer);
    if (trailerUrl) episodes.push({ title: "Трейлер", url: trailerUrl });
  }
  return episodes;
}

function openPlayer(anime) {
  state.activeAniLibriaEpisode = null;
  state.playerAnimeId = anime.id;
  state.playerEpisodeIndex = 0;
  const progress = playbackProgress[anime.id];
  if (progress?.kind === "video") {
    const savedIndex = playerSources(anime).findIndex((source) => source.title === progress.episodeTitle);
    if (savedIndex >= 0) state.playerEpisodeIndex = savedIndex;
  }
  elements.playerTitle.textContent = anime.titleRu || anime.title;
  elements.playerMeta.textContent = anime.franchise || "Просмотр";
  elements.sourceEpisodes.value = (anime.watchEpisodes || []).map((episode) => episode.url).join("\n");
  elements.localVideoInput.value = "";
  renderPlayerEpisodes();
  openDialog(elements.playerDialog);
  createIcons();
  if (playerSources(anime).length > 0) {
    recordCurrentHistory();
  }
  if (playerSources(anime).length === 0 && anime.malId && !anime.mediaLoading) {
    anime.mediaLoadFailed = false;
    setPlayerEmpty("Загружаю официальный трейлер", "Проверяю доступный источник видео.");
    elements.playerEmpty.hidden = false;
    fetchAnimeTrailer(anime);
  }
}

function openAniLibriaEpisode(anime, episode) {
  state.playerAnimeId = anime.id;
  state.playerEpisodeIndex = 0;
  state.activeAniLibriaEpisode = {
    title: episode.title ? `Серия ${episode.number}: ${episode.title}` : `Серия ${episode.number}`,
    number: episode.number,
    url: episode.url,
    originalUrl: episode.originalUrl
  };
  elements.playerTitle.textContent = anime.titleRu || anime.title;
  elements.playerMeta.textContent = `AniLibria · серия ${episode.number}`;
  elements.sourceEpisodes.value = (anime.watchEpisodes || []).map((item) => item.url).join("\n");
  elements.localVideoInput.value = "";
  renderPlayerEpisodes();
  openDialog(elements.playerDialog);
  createIcons();
  recordCurrentHistory();
}

function currentPlayerAnime() {
  return catalog.find((anime) => anime.id === state.playerAnimeId);
}

function renderPlayerEpisodes() {
  const anime = currentPlayerAnime();
  const sources = anime ? playerSources(anime) : [];
  elements.episodeList.innerHTML = "";

  if (sources.length === 0) {
    clearPlayer();
    setPlayerEmpty("Источник пока не добавлен", "Вставьте ссылку на серию ниже или выберите видео с компьютера.");
    elements.playerEmpty.hidden = false;
    renderComments();
    return;
  }

  if (state.playerEpisodeIndex >= sources.length) state.playerEpisodeIndex = 0;
  const fragment = document.createDocumentFragment();
  sources.forEach((source, index) => {
    const button = document.createElement("button");
    button.className = "episode-button";
    button.type = "button";
    button.textContent = source.title;
    button.classList.toggle("is-active", index === state.playerEpisodeIndex);
    button.addEventListener("click", () => {
      state.playerEpisodeIndex = index;
      renderPlayerEpisodes();
      recordCurrentHistory();
    });
    fragment.appendChild(button);
  });
  elements.episodeList.appendChild(fragment);
  const source = sources[state.playerEpisodeIndex];
  state.activeVoiceoverSelection = null;
  state.baseMediaSource = {
    url: source.url,
    localFile: false,
    sourcePageUrl: source.originalUrl || source.url,
    provider: state.activeAniLibriaEpisode ? "AniLibria" : "Оригинальная дорожка"
  };
  playMediaSource(source.url, false, source.originalUrl || source.url);
  renderComments();
}

async function fetchAnimeTrailer(anime) {
  anime.mediaLoading = true;
  try {
    let response = await fetch(`https://api.jikan.moe/v4/anime/${anime.malId}/full`);
    if (!response.ok) {
      response = await fetch(`https://api.jikan.moe/v4/anime/${anime.malId}`);
    }
    if (!response.ok) throw new Error("Jikan media failed");
    const payload = await response.json();
    anime.trailer = payload.data?.trailer?.embed_url || payload.data?.trailer?.url || "";
    anime.mediaLoadFailed = !anime.trailer;
    if (anime.trailer) {
      savedAnime[anime.id] = snapshotAnime(anime);
      saveObject(storageKeys.savedAnime, savedAnime);
    }
  } catch {
    anime.mediaLoadFailed = true;
  } finally {
    anime.mediaLoading = false;
    if (state.playerAnimeId === anime.id && elements.playerDialog.open) {
      renderPlayerEpisodes();
      if (anime.trailer) recordCurrentHistory();
      if (anime.mediaLoadFailed) {
        setPlaybackStatus("Официальный трейлер не найден. Можно добавить свою ссылку ниже.", true);
      }
    }
  }
}

function youtubeVideoId(value) {
  try {
    const url = new URL(value);
    const host = url.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      return url.pathname.split("/").filter(Boolean)[0] || "";
    }
    if (host.endsWith("youtube.com") || host.endsWith("youtube-nocookie.com")) {
      const parts = url.pathname.split("/").filter(Boolean);
      const markerIndex = parts.findIndex((part) => ["embed", "shorts", "live"].includes(part));
      return url.searchParams.get("v") || (markerIndex >= 0 ? parts[markerIndex + 1] : "") || "";
    }
  } catch {
    return "";
  }
  return "";
}

function embedUrl(value) {
  try {
    const youtubeId = youtubeVideoId(value);
    if (youtubeId) {
      const params = new URLSearchParams({ rel: "0" });
      if (["http:", "https:"].includes(window.location.protocol)) {
        params.set("origin", window.location.origin);
      }
      return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(youtubeId)}?${params}`;
    }
    const url = new URL(value);
    if (url.hostname.includes("vimeo.com")) {
      const id = url.pathname.split("/").filter(Boolean).pop();
      return id ? `https://player.vimeo.com/video/${id}` : "";
    }
  } catch {
    return "";
  }
  return "";
}

function originalSourceUrl(value) {
  const youtubeId = youtubeVideoId(value);
  if (youtubeId) return `https://www.youtube.com/watch?v=${encodeURIComponent(youtubeId)}`;
  return value;
}

function setPlaybackStatus(message = "", isError = false) {
  elements.playbackStatus.textContent = message;
  elements.playbackStatus.hidden = !message;
  elements.playbackStatus.classList.toggle("is-error", isError);
}

function renderVoiceoverOptions(tracks = [], provider = "Оригинальная дорожка") {
  elements.voiceoverSelect.innerHTML = "";
  const normalizedTracks = Array.from(tracks || []);
  const key = currentCommentKey();
  const additional = key && Array.isArray(customVoiceovers[key]) ? customVoiceovers[key] : [];
  const baseOption = document.createElement("option");
  baseOption.value = "base";
  baseOption.textContent = state.baseMediaSource?.provider || provider;
  elements.voiceoverSelect.appendChild(baseOption);
  if (normalizedTracks.length > 1) {
    normalizedTracks.forEach((track, index) => {
      const option = document.createElement("option");
      option.value = `hls:${index}`;
      const trackName = track.name || track.lang || track.language || `Дорожка ${index + 1}`;
      option.textContent = `${provider} · ${trackName}`;
      elements.voiceoverSelect.appendChild(option);
    });
  }
  additional.forEach((voiceover, index) => {
    const option = document.createElement("option");
    option.value = `custom:${index}`;
    option.textContent = voiceover.name;
    elements.voiceoverSelect.appendChild(option);
  });
  elements.voiceoverSelect.disabled = elements.voiceoverSelect.options.length < 2;
  const activeIndex = hlsInstance && hlsInstance.audioTrack >= 0 ? hlsInstance.audioTrack : 0;
  const preferred = state.activeVoiceoverSelection || (normalizedTracks.length > 1 ? `hls:${activeIndex}` : "base");
  elements.voiceoverSelect.value = [...elements.voiceoverSelect.options].some((option) => option.value === preferred)
    ? preferred
    : normalizedTracks.length > 1
      ? `hls:${activeIndex}`
      : "base";
}

function addCustomVoiceover() {
  const key = currentCommentKey();
  const name = elements.customVoiceoverName.value.trim();
  const url = validMediaUrl(elements.customVoiceoverUrl.value);
  if (!key || !name || !url) {
    setPlaybackStatus("Укажите название озвучки и корректную ссылку для текущей серии.", true);
    return;
  }
  const items = Array.isArray(customVoiceovers[key]) ? customVoiceovers[key] : [];
  const existingIndex = items.findIndex((item) => normalizeText(item.name) === normalizeText(name));
  const voiceover = { name, url };
  if (existingIndex >= 0) items[existingIndex] = voiceover;
  else items.push(voiceover);
  customVoiceovers[key] = items;
  saveObject(storageKeys.customVoiceovers, customVoiceovers);
  elements.customVoiceoverName.value = "";
  elements.customVoiceoverUrl.value = "";
  renderVoiceoverOptions(hlsInstance?.audioTracks || [], state.activeAniLibriaEpisode ? "AniLibria" : "Оригинальная дорожка");
  createIcons();
  setPlaybackStatus(`Озвучка «${name}» добавлена.`);
}

function setPlayerEmpty(title, message) {
  elements.playerEmpty.querySelector("strong").textContent = title;
  elements.playerEmpty.querySelector("span").textContent = message;
}

function clearPlayer() {
  if (hlsInstance) {
    hlsInstance.destroy();
    hlsInstance = null;
  }
  elements.videoPlayer.pause();
  elements.videoPlayer.removeAttribute("src");
  elements.videoPlayer.load();
  elements.embedPlayer.removeAttribute("src");
  elements.videoPlayer.hidden = true;
  elements.embedPlayer.hidden = true;
  elements.openSourceLink.hidden = true;
  elements.openSourceLink.removeAttribute("href");
  elements.openSourceLink.querySelector("span").textContent = "Открыть оригинал";
  renderVoiceoverOptions([], "Дорожка не выбрана");
  setPlaybackStatus();
}

function isHlsUrl(value) {
  try {
    return new URL(value).pathname.toLowerCase().endsWith(".m3u8");
  } catch {
    return false;
  }
}

function playMediaSource(url, localFile = false, sourcePageUrl = url, providerOverride = "") {
  clearPlayer();
  const provider = providerOverride || (state.activeAniLibriaEpisode ? "AniLibria" : localFile ? "Локальный файл" : "Оригинальная дорожка");
  renderVoiceoverOptions([], provider);
  const embedded = localFile ? "" : embedUrl(url);
  if (!localFile) {
    elements.openSourceLink.href = originalSourceUrl(sourcePageUrl);
    elements.openSourceLink.querySelector("span").textContent = youtubeVideoId(sourcePageUrl)
      ? "Смотреть на YouTube"
      : "Открыть оригинал";
    elements.openSourceLink.hidden = false;
  }

  if (embedded) {
    if (window.location.protocol === "file:") {
      setPlayerEmpty("Браузер заблокировал встроенный трейлер", "Запустите сайт через start-site.cmd или откройте оригинал.");
      elements.playerEmpty.hidden = false;
      setPlaybackStatus("Для YouTube-плеера сайт нужно открыть через локальный адрес.", true);
      createIcons();
      return;
    }
    elements.playerEmpty.hidden = true;
    elements.embedPlayer.src = embedded;
    elements.embedPlayer.hidden = false;
    return;
  }

  elements.playerEmpty.hidden = true;
  // Chromium needs HLS.js for .m3u8; Safari can play the same stream natively.
  if (!localFile && isHlsUrl(url)) {
    elements.videoPlayer.hidden = false;
    if (elements.videoPlayer.canPlayType("application/vnd.apple.mpegurl")) {
      elements.videoPlayer.src = url;
      elements.videoPlayer.load();
      return;
    }
    if (window.Hls?.isSupported()) {
      hlsInstance = new window.Hls({ enableWorker: true });
      hlsInstance.loadSource(url);
      hlsInstance.attachMedia(elements.videoPlayer);
      const updateTracks = () => renderVoiceoverOptions(hlsInstance?.audioTracks || [], provider);
      hlsInstance.on(window.Hls.Events.MANIFEST_PARSED, updateTracks);
      if (window.Hls.Events.AUDIO_TRACKS_UPDATED) {
        hlsInstance.on(window.Hls.Events.AUDIO_TRACKS_UPDATED, updateTracks);
      }
      hlsInstance.on(window.Hls.Events.ERROR, (_event, data) => {
        if (!data.fatal) return;
        setPlaybackStatus("Поток не удалось загрузить. Откройте официальный плеер.", true);
      });
      return;
    }
    setPlaybackStatus("Этот браузер не поддерживает HLS. Откройте официальный плеер.", true);
    return;
  }
  elements.videoPlayer.src = url;
  elements.videoPlayer.hidden = false;
  elements.videoPlayer.load();
}

function savePlayerSources() {
  const anime = currentPlayerAnime();
  if (!anime) return;
  state.activeAniLibriaEpisode = null;
  anime.watchEpisodes = parseEpisodeUrls(elements.sourceEpisodes.value);
  if (anime.source === "custom") anime.episodes = anime.watchEpisodes.length || "?";
  anime.updatedAt = Date.now();
  savedAnime[anime.id] = snapshotAnime(anime);
  saveObject(storageKeys.savedAnime, savedAnime);
  state.playerEpisodeIndex = 0;
  renderPlayerEpisodes();
  setStatus(`Источники для «${anime.titleRu || anime.title}» сохранены.`);
  render();
}

function currentCommentKey() {
  const anime = currentPlayerAnime();
  if (!anime) return "";
  const sources = playerSources(anime);
  const episode = sources[state.playerEpisodeIndex];
  return `${anime.id}::${episode?.title || `Серия ${state.playerEpisodeIndex + 1}`}`;
}

function renderComments() {
  const key = currentCommentKey();
  const items = key ? comments[key] || [] : [];
  const anime = currentPlayerAnime();
  const episode = anime ? playerSources(anime)[state.playerEpisodeIndex] : null;
  elements.commentList.innerHTML = "";
  elements.commentCount.textContent = String(items.length);
  elements.commentInput.disabled = !anime;
  elements.commentForm.querySelector("button").disabled = !anime;
  document.querySelector("#commentsTitle").textContent = episode ? `Комментарии · ${episode.title}` : "Комментарии";

  if (items.length === 0) {
    const empty = document.createElement("p");
    empty.className = "comments-empty";
    empty.textContent = "Комментариев пока нет. Начните обсуждение этой серии.";
    elements.commentList.appendChild(empty);
    return;
  }

  items
    .slice()
    .reverse()
    .forEach((comment) => {
      const item = document.createElement("article");
      item.className = "comment-item";
      const meta = document.createElement("div");
      meta.className = "comment-meta";
      const author = document.createElement("strong");
      author.textContent = comment.author || "Пользователь";
      const date = document.createElement("span");
      date.textContent = new Date(comment.createdAt).toLocaleString("ru", { dateStyle: "medium", timeStyle: "short" });
      const text = document.createElement("p");
      text.textContent = comment.text;
      meta.append(author, date);
      item.append(meta, text);
      elements.commentList.appendChild(item);
    });
}

function addComment(event) {
  event.preventDefault();
  const key = currentCommentKey();
  const text = elements.commentInput.value.trim();
  if (!key || !text) return;
  comments[key] = comments[key] || [];
  comments[key].push({
    id: `comment-${Date.now()}`,
    author: "Вы",
    text,
    createdAt: new Date().toISOString()
  });
  saveObject(storageKeys.comments, comments);
  elements.commentInput.value = "";
  renderComments();
}

function isStandaloneApp() {
  return window.matchMedia?.("(display-mode: standalone)")?.matches || window.navigator.standalone === true;
}

function updateInstallButton() {
  if (!elements.installAppButton) return;
  elements.installAppButton.hidden = isStandaloneApp() || !deferredInstallPrompt;
}

async function installApp() {
  if (!deferredInstallPrompt) return;
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice.catch(() => null);
  deferredInstallPrompt = null;
  updateInstallButton();
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || !window.isSecureContext) return;
  navigator.serviceWorker.register(siteFileUrl("sw.js")).catch(() => {
    // The site remains fully usable if the browser blocks offline caching.
  });
}

function bindInstallPrompt() {
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    updateInstallButton();
  });
  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    updateInstallButton();
    setStatus("Taytlo установлен как приложение.");
  });
  updateInstallButton();
}

function resetCatalogPage() {
  state.visibleCount = catalogPageSize;
}

function bindEvents() {
  elements.searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    state.query = elements.searchInput.value.trim();
    syncSearchUrl(state.query);
    resetCatalogPage();
    searchRemote();
  });

  elements.searchInput.addEventListener("input", () => {
    state.query = elements.searchInput.value.trim();
    resetCatalogPage();
    render();
  });

  elements.scoreFilter.addEventListener("input", () => {
    state.minScore = Number(elements.scoreFilter.value);
    resetCatalogPage();
    elements.scoreValue.textContent = state.minScore.toFixed(1).replace(".0", "");
    render();
  });

  elements.sortSelect.addEventListener("change", () => {
    state.sort = elements.sortSelect.value;
    resetCatalogPage();
    render();
  });

  elements.genreFilter.addEventListener("change", () => {
    state.genre = elements.genreFilter.value;
    resetCatalogPage();
    render();
  });

  elements.franchiseFilter.addEventListener("change", () => {
    state.franchise = elements.franchiseFilter.value;
    resetCatalogPage();
    render();
  });

  elements.genreOptionSearch.addEventListener("input", () => {
    state.genreOptionQuery = elements.genreOptionSearch.value;
    renderFilterOptions();
  });

  elements.franchiseOptionSearch.addEventListener("input", () => {
    state.franchiseOptionQuery = elements.franchiseOptionSearch.value;
    renderFilterOptions();
  });

  elements.resetFiltersButton.addEventListener("click", () => {
    state.genre = "";
    state.franchise = "";
    state.genreOptionQuery = "";
    state.franchiseOptionQuery = "";
    quickFilters.clear();
    saveSet(storageKeys.quickFilters, quickFilters);
    elements.genreOptionSearch.value = "";
    elements.franchiseOptionSearch.value = "";
    resetCatalogPage();
    state.minScore = 0;
    elements.scoreFilter.value = "0";
    elements.scoreValue.textContent = "0";
    render();
  });

  elements.quickFilterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.quickFilter;
      if (quickFilters.has(filter)) quickFilters.delete(filter);
      else quickFilters.add(filter);
      saveSet(storageKeys.quickFilters, quickFilters);
      resetCatalogPage();
      render();
    });
  });

  elements.installAppButton.addEventListener("click", installApp);
  elements.profileButton.addEventListener("click", () => {
    elements.profileSection?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
  elements.watchHubRefresh?.addEventListener("click", () => {
    state.watchHubSeed += 1;
    renderWatchHub();
    createIcons();
  });
  elements.exportProfileButton.addEventListener("click", exportProfile);
  elements.profileImportInput.addEventListener("change", importProfileFromFile);
  elements.enableNotificationsButton.addEventListener("click", enableNotifications);

  elements.addAnimeButton.addEventListener("click", () => {
    openDialog(elements.addAnimeDialog);
    createIcons();
  });

  elements.adminButton.addEventListener("click", () => openAdminDialog(state.selectedId));
  elements.adminAnimeSelect.addEventListener("change", () => fillAdminForm(elements.adminAnimeSelect.value));
  elements.adminForm.addEventListener("submit", handleAdminSave);
  elements.adminDeleteButton.addEventListener("click", handleAdminDelete);
  [elements.adminTitleRu, elements.adminTitle, elements.adminYear, elements.adminType, elements.adminPoster].forEach((control) => {
    control.addEventListener("input", updateAdminPreview);
    control.addEventListener("change", updateAdminPreview);
  });
  elements.adminPosterPreview.addEventListener("error", () => elements.adminPosterPreview.removeAttribute("src"));

  elements.showMoreButton.addEventListener("click", () => {
    state.visibleCount += catalogPageSize;
    render();
  });

  elements.themeToggle.addEventListener("click", () => {
    applyTheme(document.documentElement.dataset.theme === "light" ? "dark" : "light");
  });

  elements.watchStatusSelect.addEventListener("change", () => {
    if (state.selectedId) setWatchStatus(state.selectedId, elements.watchStatusSelect.value);
  });

  document.querySelectorAll(".library-tab").forEach((button) => {
    button.addEventListener("click", () => {
      state.libraryStatus = button.dataset.libraryStatus;
      document.querySelectorAll(".library-tab").forEach((tab) => {
        const isActive = tab === button;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
      });
      renderLibrary();
    });
  });

  elements.clearHistoryButton.addEventListener("click", () => {
    watchHistory = [];
    localStorage.setItem(storageKeys.watchHistory, "[]");
    renderHistory();
    renderWatchHub();
  });

  elements.addAnimeForm.addEventListener("submit", handleAddAnime);
  elements.saveSourcesButton.addEventListener("click", savePlayerSources);
  elements.commentForm.addEventListener("submit", addComment);
  elements.addVoiceoverButton.addEventListener("click", addCustomVoiceover);
  elements.voiceoverSelect.addEventListener("change", () => {
    const value = elements.voiceoverSelect.value;
    const hlsMatch = value.match(/^hls:(\d+)$/);
    const customMatch = value.match(/^custom:(\d+)$/);
    if (hlsInstance && hlsMatch) {
      hlsInstance.audioTrack = Number(hlsMatch[1]);
      return;
    }
    if (customMatch) {
      const items = customVoiceovers[currentCommentKey()] || [];
      const voiceover = items[Number(customMatch[1])];
      if (!voiceover) return;
      state.activeVoiceoverSelection = value;
      playMediaSource(voiceover.url, false, voiceover.url, voiceover.name);
      return;
    }
    if (value === "base" && state.baseMediaSource) {
      state.activeVoiceoverSelection = null;
      playMediaSource(
        state.baseMediaSource.url,
        state.baseMediaSource.localFile,
        state.baseMediaSource.sourcePageUrl,
        state.baseMediaSource.provider
      );
    }
  });

  elements.localVideoInput.addEventListener("change", () => {
    const file = elements.localVideoInput.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    state.activeVoiceoverSelection = null;
    state.baseMediaSource = { url, localFile: true, sourcePageUrl: url, provider: "Локальный файл" };
    elements.episodeList.innerHTML = '<span class="status-line">Локальный файл</span>';
    playMediaSource(url, true, url, "Локальный файл");
  });

  elements.videoPlayer.addEventListener("loadedmetadata", restoreCurrentPlaybackProgress);
  elements.videoPlayer.addEventListener("loadeddata", () => {
    if (elements.videoPlayer.currentTime < 1) setPlaybackStatus();
  });
  elements.videoPlayer.addEventListener("timeupdate", () => saveCurrentPlaybackProgress());
  elements.videoPlayer.addEventListener("pause", () => {
    if (!elements.videoPlayer.ended) saveCurrentPlaybackProgress(true);
  });
  elements.videoPlayer.addEventListener("ended", () => {
    const anime = currentPlayerAnime();
    if (!anime) return;
    delete playbackProgress[anime.id];
    saveObject(storageKeys.playbackProgress, playbackProgress);
    renderPlaybackHint(anime);
  });
  elements.videoPlayer.addEventListener("error", () => {
    if (!elements.videoPlayer.getAttribute("src")) return;
    setPlaybackStatus("Видео не удалось загрузить. Проверьте прямую ссылку или откройте оригинал.", true);
  });

  document.querySelectorAll("[data-close-dialog]").forEach((button) => {
    button.addEventListener("click", () => closeDialog(document.querySelector(`#${button.dataset.closeDialog}`)));
  });

  elements.playerDialog.addEventListener("close", () => {
    saveCurrentPlaybackProgress(true);
    clearPlayer();
  });
  window.addEventListener("beforeunload", () => saveCurrentPlaybackProgress(true));
  window.addEventListener("popstate", () => {
    const routeId = animeIdFromUrl();
    if (routeId) {
      resolveAnimeFromUrl({ scroll: false });
      return;
    }
    const query = new URL(window.location.href).searchParams.get("query") || "";
    state.query = query;
    elements.searchInput.value = query;
    resetCatalogPage();
    state.selectedId = getVisibleAnime()[0]?.id || catalog[0]?.id || null;
    if (query) searchRemote();
    else render();
  });

  document.querySelectorAll(".segment").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      resetCatalogPage();
      document.querySelectorAll(".segment").forEach((segment) => {
        const isActive = segment === button;
        segment.classList.toggle("is-active", isActive);
        segment.setAttribute("aria-selected", String(isActive));
      });
      render();
    });
  });

  elements.refreshButton.addEventListener("click", () => {
    searchRemote();
  });
}

registerServiceWorker();
bindInstallPrompt();
applyPublicMode();
bindEvents();
window.taytloDebugShikimori = shikimoriDebugReport;
window.taytloRefreshShikimori = async () => {
  await loadShikimoriMappings();
  await loadShikimoriStaticCache();
  applyCachedShikimoriRatings(catalog);
  render();
  return shikimoriDebugReport();
};
applyTheme(localStorage.getItem(storageKeys.theme) || "dark");
elements.scoreValue.textContent = "0";
const initialRouteId = animeIdFromUrl();
const initialSearchQuery = new URL(window.location.href).searchParams.get("query") || "";
if (initialSearchQuery && !initialRouteId) {
  state.query = initialSearchQuery;
  elements.searchInput.value = initialSearchQuery;
}
if (initialRouteId && catalog.some((anime) => anime.id === initialRouteId)) {
  state.selectedId = initialRouteId;
  const initialIndex = getVisibleAnime().findIndex((anime) => anime.id === initialRouteId);
  state.visibleCount = Math.max(catalogPageSize, Math.ceil((initialIndex + 1) / catalogPageSize) * catalogPageSize);
}
render();
initializeShikimoriRatings();
if (initialRouteId && catalog.some((anime) => anime.id === initialRouteId)) syncAnimeUrl(initialRouteId, true);
if (initialRouteId && !catalog.some((anime) => anime.id === initialRouteId)) resolveAnimeFromUrl({ scroll: false });
if (initialSearchQuery && !initialRouteId) searchRemote();
loadRussianCatalog();
loadAniLibriaCatalog();
loadRealSchedule();
loadLatestAniLibriaUpdates();
