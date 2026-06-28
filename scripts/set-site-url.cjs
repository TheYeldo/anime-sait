const fs = require("fs");
const path = require("path");

const rawUrl = String(process.argv[2] || "").trim().replace(/\/+$/, "");

if (!/^https?:\/\/[^/\s]+/i.test(rawUrl)) {
  console.error("Usage: prepare-domain.cmd https://your-domain.com");
  process.exit(1);
}

const configPath = path.resolve(__dirname, "..", "seo.config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
config.siteUrl = rawUrl;

fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");
console.log(`SEO siteUrl set to ${rawUrl}`);
