(function initializeAnalytics() {
  const config = window.ANI_RUNTIME_CONFIG || {};
  if (config.googleSiteVerification) {
    const verification = document.createElement("meta");
    verification.name = "google-site-verification";
    verification.content = config.googleSiteVerification;
    document.head.appendChild(verification);
  }

  if (/^G-[A-Z0-9]+$/i.test(config.ga4MeasurementId || "")) {
    const source = document.createElement("script");
    source.async = true;
    source.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(config.ga4MeasurementId)}`;
    document.head.appendChild(source);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", config.ga4MeasurementId, { anonymize_ip: true });
  }

  if (/^\d+$/.test(String(config.yandexMetrikaId || ""))) {
    window.ym = window.ym || function ym() { (window.ym.a = window.ym.a || []).push(arguments); };
    window.ym.l = Date.now();
    const source = document.createElement("script");
    source.async = true;
    source.src = "https://mc.yandex.ru/metrika/tag.js";
    document.head.appendChild(source);
    window.ym(Number(config.yandexMetrikaId), "init", {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true
    });
  }
})();
