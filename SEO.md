# Временный запуск Taytlo на домене

## Быстрый вариант

1. Откройте папку `outputs/anime-site`.
2. Запустите:

```cmd
prepare-domain.cmd https://ваш-домен.com
```

3. Загрузите на хостинг всё содержимое папки `outputs/anime-site`.

Команда обновит `seo.config.json`, статические страницы в `anime/`, `sitemap.xml`, `robots.txt`, `seo-routes.js`, `site.webmanifest` и главную страницу.

## Если нужно без команды

1. Откройте `seo.config.json`.
2. Замените `siteUrl` на адрес сайта, например `https://taytlo.com`.
3. Запустите `build-seo.cmd`.
4. Загрузите на хостинг весь каталог `outputs/anime-site`.

## Админ-режим

На публичной версии кнопки управления скрыты. Чтобы включить локальную админку в своём браузере, откройте сайт так:

```text
https://ваш-домен.com/?admin=1
```

Админка в старом сайте локальная: изменения сохраняются только в вашем браузере. Настоящую закрытую админку лучше использовать уже в основном Next.js сайте.

## Аналитика

Перед запуском `prepare-domain.cmd` или `build-seo.cmd` можно задать переменные:

```cmd
set GA4_MEASUREMENT_ID=G-XXXXXXXXXX
set GOOGLE_SITE_VERIFICATION=ваш_код_подтверждения
set YANDEX_METRIKA_ID=12345678
prepare-domain.cmd https://ваш-домен.com
```

Если переменные пустые, сайт работает без аналитики.
