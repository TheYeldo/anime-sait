const fs = require("fs");
const path = require("path");

const target = path.resolve(__dirname, "..", "runtime-config.js");
const config = {
  ga4MeasurementId: process.env.GA4_MEASUREMENT_ID || "",
  yandexMetrikaId: process.env.YANDEX_METRIKA_ID || "",
  googleSiteVerification: process.env.GOOGLE_SITE_VERIFICATION || ""
};

fs.writeFileSync(target, `window.ANI_RUNTIME_CONFIG = ${JSON.stringify(config, null, 2)};\n`, "utf8");
console.log("Runtime analytics configuration generated.");
