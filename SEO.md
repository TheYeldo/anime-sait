# Временный запуск Taytlo на домене

## Vercel

Чтобы SEO работало на Vercel, в деплой должны попасть уже сгенерированные:

- `title` и `description` на главной;
- `canonical` с твоим доменом;
- `sitemap.xml`;
- `robots.txt`;
- статические страницы `/anime/...`;
- `seo-routes.js` с правильным `siteUrl`.

В настройках проекта Vercel поставь:

```text
Root Directory: outputs/anime-site
Build Command: npm run build
Output Directory: .
```

В Environment Variables добавь:

```text
SITE_URL=https://твой-домен.com
```

После этого Vercel при деплое сам запустит `scripts/prepare-vercel.cjs`, обновит SEO-файлы под твой домен и отдаст статический сайт.

## Локально Перед Заливкой

Если деплоишь вручную, открой папку `outputs/anime-site` и запусти:

```cmd
prepare-domain.cmd https://твой-домен.com
```

Потом загрузи на хостинг всё содержимое папки `outputs/anime-site`.

## Проверка

После деплоя открой:

```text
https://твой-домен.com/sitemap.xml
https://твой-домен.com/robots.txt
```

В коде главной страницы должны быть:

```html
<link rel="canonical" href="https://твой-домен.com/" />
<meta property="og:url" content="https://твой-домен.com/" />
```

Потом добавь `https://твой-домен.com/sitemap.xml` в Google Search Console и Яндекс Вебмастер.

## Админ-Режим

На публичной версии кнопки управления скрыты. Чтобы включить локальную админку в своём браузере:

```text
https://твой-домен.com/?admin=1
```

Админка в старом сайте локальная: изменения сохраняются только в твоём браузере.

## Аналитика

Можно добавить переменные:

```text
GA4_MEASUREMENT_ID=G-XXXXXXXXXX
GOOGLE_SITE_VERIFICATION=код_подтверждения
YANDEX_METRIKA_ID=12345678
```

Если переменные пустые, сайт работает без аналитики.
