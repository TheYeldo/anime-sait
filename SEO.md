# SEO после покупки домена

1. Откройте `seo.config.json`.
2. Замените `http://127.0.0.1:4173` в поле `siteUrl` на адрес сайта, например `https://taytlo.ru`.
3. Запустите `build-seo.cmd`.
4. Загрузите на хостинг весь каталог сайта вместе с папкой `anime`, файлами `sitemap.xml`, `robots.txt`, `seo-routes.js` и `site.webmanifest`.
5. Добавьте адрес `/sitemap.xml` в панели Google Search Console и Яндекс Вебмастер.

Генератор обновляет canonical, Open Graph, JSON-LD, robots, sitemap и статические страницы из локального каталога.

## Аналитика

Перед запуском `build-seo.cmd` можно задать переменные окружения:

```cmd
set GA4_MEASUREMENT_ID=G-XXXXXXXXXX
set GOOGLE_SITE_VERIFICATION=ваш_код_подтверждения
set YANDEX_METRIKA_ID=12345678
build-seo.cmd
```

Если переменные пустые, сайт работает без аналитики и ничего лишнего не подключает.
