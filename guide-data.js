window.ANI_GUIDE_DATA = {
  availabilityOverrides: {
    naruto: {
      state: "unavailable",
      expectedEpisodes: 220,
      note: "Оригинальный сериал Naruto сейчас не найден в публичном AniLibria API. Страница работает как информационный гид."
    },
    "anilibria-413": {
      state: "partial",
      startEpisode: 370,
      expectedEpisodes: 500,
      note: "В AniLibria доступны серии 370–500. Предыдущие серии в этот релиз не входят."
    }
  },
  franchiseOrder: {
    "Наруто": [
      "naruto",
      "mal-761",
      "mal-594",
      "mal-442",
      "mal-936",
      "mal-2144",
      "anilibria-413",
      "mal-7367",
      "mal-1074",
      "mal-53236",
      "anilibria-2495",
      "anilibria-3996"
    ],
    "Класс превосходства": ["mal-35507", "mal-51096", "mal-51180", "mal-59708"],
    "Синяя тюрьма: Блю Лок": ["mal-49596", "mal-54865"],
    "Хоримия": ["anilibria-8862", "anilibria-9480"],
    "Эта фарфоровая кукла влюбилась": ["anilibria-9122", "anilibria-9964"]
  },
  titleGuides: {
    naruto: {
      note: "Разметка канонических и филлерных серий не добавлена: сайт не показывает неподтверждённые списки как факт."
    }
  },
  collections: [
    {
      id: "smart-lead",
      title: "Умный главный герой",
      description: "Стратегия, расчёт и герои, которые побеждают головой.",
      ids: ["mal-35507", "mal-51096", "mal-51180"],
      keywords: ["Доктор Стоун", "Монолог фармацевта", "Класс превосходства"]
    },
    {
      id: "school",
      title: "Школьное аниме",
      description: "Учёба, дружба, соревнования и школьная повседневность.",
      genres: ["Школа"]
    },
    {
      id: "romance",
      title: "Романтика",
      description: "Истории отношений: от лёгких комедий до взрослой драмы.",
      genres: ["Романтика"]
    },
    {
      id: "shonen",
      title: "Сёнен",
      description: "Приключения, рост героев и большие сражения.",
      genres: ["Сёнен", "Сёнэн"]
    },
    {
      id: "short-evening",
      title: "Короткие на вечер",
      description: "Завершённые истории и короткие сезоны до 13 серий.",
      maxEpisodes: 13,
      types: ["TV", "OVA", "ONA", "MOVIE"]
    }
  ]
};
