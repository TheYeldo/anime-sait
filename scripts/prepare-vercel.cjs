const { execFileSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const configPath = path.join(root, "seo.config.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));

function normalizeSiteUrl(value) {
  const raw = String(value || "").trim().replace(/\/+$/, "");
  if (!raw) return "";
  if (/^https?:\/\//i.test(raw)) return raw;
  return `https://${raw}`;
}

const siteUrl = normalizeSiteUrl(
  process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    process.env.VERCEL_URL ||
    config.siteUrl
);

if (!/^https?:\/\/[^/\s]+/i.test(siteUrl)) {
  throw new Error("Set SITE_URL to your production domain, for example https://your-domain.com");
}

config.siteUrl = siteUrl;
fs.writeFileSync(configPath, `${JSON.stringify(config, null, 2)}\n`, "utf8");

execFileSync(process.execPath, [path.join(root, "scripts", "generate-runtime-config.cjs")], { stdio: "inherit" });
execFileSync(process.execPath, [path.join(root, "scripts", "generate-seo.cjs")], { stdio: "inherit" });

console.log(`Taytlo SEO prepared for ${siteUrl}`);
