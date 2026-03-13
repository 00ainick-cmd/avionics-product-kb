/**
 * Pre-build script: generates public/products.json for client-side search.
 * Replaces the API route which doesn't work with static export.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, "..", "..", "content", "products");
const outFile = path.join(__dirname, "..", "public", "products.json");

const CATEGORY_LABELS = {
  autopilots: "Autopilots",
  "efis-pfd": "Flight Displays (EFIS/PFD)",
  "gps-nav": "GPS & Navigation",
  transponders: "Transponders & ADS-B",
  "audio-panels": "Audio Panels",
  "traffic-systems": "Traffic Awareness",
  "weather-radar": "Weather Radar",
  "comm-radios": "Comm Radios",
  "heading-systems": "Heading Systems",
  elts: "ELTs",
  audio: "Audio",
};

function extractField(content, label) {
  const re = new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+)`, "i");
  const m = content.match(re);
  return m ? m[1].trim() : "";
}

const products = [];

for (const cat of fs.readdirSync(contentDir)) {
  const catPath = path.join(contentDir, cat);
  if (!fs.statSync(catPath).isDirectory()) continue;

  for (const file of fs.readdirSync(catPath)) {
    if (!file.endsWith(".md") || file.startsWith("_")) continue;
    const raw = fs.readFileSync(path.join(catPath, file), "utf-8");
    const titleMatch = raw.match(/^#\s+(.+)/m);
    const title = titleMatch ? titleMatch[1].trim() : file.replace(".md", "");

    products.push({
      slug: file.replace(".md", ""),
      category: cat,
      title,
      manufacturer: extractField(raw, "Manufacturer"),
      priceRange: extractField(raw, "Price Range"),
      categoryLabel: CATEGORY_LABELS[cat] || cat,
    });
  }
}

products.sort((a, b) => a.title.localeCompare(b.title));
fs.writeFileSync(outFile, JSON.stringify(products, null, 2));
console.log(`Generated ${outFile} with ${products.length} products`);
