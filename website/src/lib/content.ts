import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  AIRCRAFT_SIZE_MAP,
  PURPOSE_MAP,
  AIRCRAFT_SIZE_LABELS,
  PURPOSE_LABELS,
  AIRCRAFT_SIZES,
  PURPOSES,
  type AircraftSize,
  type PurposeMission,
} from "./product-classifications";

const contentDir = path.join(process.cwd(), "..", "content");

export interface ProductMeta {
  slug: string;
  category: string;
  title: string;
  manufacturer: string;
  priceRange: string;
  categoryLabel: string;
  heroImage: string; // URL or local path for product hero image
}

export interface Product extends ProductMeta {
  content: string;
}

export interface GuideMeta {
  slug: string;
  title: string;
  description: string;
}

export interface Guide extends GuideMeta {
  content: string;
}

// Category display names
export const CATEGORY_LABELS: Record<string, string> = {
  autopilots: "Autopilots",
  "efis-pfd": "Flight Displays (EFIS/PFD)",
  "gps-nav": "GPS & Navigation",
  transponders: "Transponders & ADS-B",
  "audio-panels": "Audio Panels",
  audio: "Audio Panels",
  "traffic-systems": "Traffic Awareness",
  "weather-radar": "Weather Radar",
  "comm-radios": "Comm & Nav Radios",
  elts: "ELTs",
  "heading-systems": "Heading Systems",
};

function parseProductMarkdown(
  raw: string,
  slug: string,
  category: string
): Product {
  // Extract metadata from the markdown content directly (not frontmatter)
  const lines = raw.split("\n");
  let title = slug;
  let manufacturer = "";
  let priceRange = "";
  let heroImage = "";

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("# ") && title === slug) {
      title = trimmed.replace("# ", "");
    }
    if (trimmed.startsWith("**Manufacturer:**")) {
      manufacturer = trimmed.replace("**Manufacturer:**", "").trim();
    }
    if (trimmed.startsWith("**Price Range:**")) {
      priceRange = trimmed.replace("**Price Range:**", "").trim();
    }
    if (trimmed.startsWith("**Hero Image:**")) {
      heroImage = trimmed.replace("**Hero Image:**", "").trim();
    }
  }

  return {
    slug,
    category,
    title,
    manufacturer,
    priceRange,
    heroImage,
    categoryLabel: CATEGORY_LABELS[category] || category,
    content: raw,
  };
}

export function getProductCategories(): string[] {
  const productsDir = path.join(contentDir, "products");
  if (!fs.existsSync(productsDir)) return [];
  return fs
    .readdirSync(productsDir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort();
}

export function getProductsByCategory(category: string): ProductMeta[] {
  const categoryDir = path.join(contentDir, "products", category);
  if (!fs.existsSync(categoryDir)) return [];

  return fs
    .readdirSync(categoryDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(".md", "");
      const raw = fs.readFileSync(path.join(categoryDir, f), "utf-8");
      const product = parseProductMarkdown(raw, slug, category);
      return {
        slug: product.slug,
        category: product.category,
        title: product.title,
        manufacturer: product.manufacturer,
        priceRange: product.priceRange,
        categoryLabel: product.categoryLabel,
        heroImage: product.heroImage,
      };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getProduct(
  category: string,
  slug: string
): Product | undefined {
  const filePath = path.join(contentDir, "products", category, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  return parseProductMarkdown(raw, slug, category);
}

export function getAllProducts(): ProductMeta[] {
  const categories = getProductCategories();
  return categories.flatMap((cat) => getProductsByCategory(cat));
}

function extractDescription(raw: string): string {
  const lines = raw.split("\n");
  let pastTitle = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith("# ")) {
      pastTitle = true;
      continue;
    }
    // Skip blank lines, metadata lines, and headings after title
    if (!pastTitle) continue;
    if (trimmed === "") continue;
    if (trimmed.startsWith("#")) continue;
    if (trimmed.startsWith("**") && trimmed.includes(":**")) continue;
    if (trimmed.startsWith("---")) continue;
    // Found first real paragraph
    // Truncate to ~160 chars
    if (trimmed.length > 160) {
      return trimmed.slice(0, 157).replace(/\s+\S*$/, "") + "...";
    }
    return trimmed;
  }
  return "";
}

export function getGuides(): GuideMeta[] {
  const guidesDir = path.join(contentDir, "guides");
  if (!fs.existsSync(guidesDir)) return [];

  return fs
    .readdirSync(guidesDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const slug = f.replace(".md", "");
      const raw = fs.readFileSync(path.join(guidesDir, f), "utf-8");
      const firstLine = raw.split("\n").find((l) => l.startsWith("# "));
      const title = firstLine ? firstLine.replace("# ", "") : slug;
      const description = extractDescription(raw);
      return { slug, title, description };
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getGuide(slug: string): Guide | undefined {
  const filePath = path.join(contentDir, "guides", `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;

  const raw = fs.readFileSync(filePath, "utf-8");
  const firstLine = raw.split("\n").find((l) => l.startsWith("# "));
  const title = firstLine ? firstLine.replace("# ", "") : slug;
  const description = extractDescription(raw);
  return { slug, title, description, content: raw };
}

export function searchProducts(query: string): ProductMeta[] {
  const q = query.toLowerCase();
  return getAllProducts().filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.manufacturer.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q)
  );
}

// ─── Manufacturer Queries ───────────────────────────────────────────

export interface ManufacturerInfo {
  slug: string;
  name: string;
  productCount: number;
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getManufacturers(): ManufacturerInfo[] {
  const all = getAllProducts();
  const map = new Map<string, { name: string; count: number }>();

  for (const p of all) {
    if (!p.manufacturer) continue;
    const slug = toSlug(p.manufacturer);
    const existing = map.get(slug);
    if (existing) {
      existing.count++;
    } else {
      map.set(slug, { name: p.manufacturer, count: 1 });
    }
  }

  return Array.from(map.entries())
    .map(([slug, { name, count }]) => ({ slug, name, productCount: count }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function getProductsByManufacturer(slug: string): ProductMeta[] {
  return getAllProducts().filter(
    (p) => toSlug(p.manufacturer) === slug
  );
}

export function getManufacturerBySlug(
  slug: string
): ManufacturerInfo | undefined {
  return getManufacturers().find((m) => m.slug === slug);
}

// ─── Aircraft Size Queries ──────────────────────────────────────────

export function getProductsByAircraftSize(size: AircraftSize): ProductMeta[] {
  const all = getAllProducts();
  return all.filter((p) => {
    const sizes = AIRCRAFT_SIZE_MAP[p.slug];
    return sizes?.includes(size);
  });
}

export function getAircraftSizesWithCounts(): {
  size: AircraftSize;
  label: string;
  count: number;
}[] {
  const all = getAllProducts();
  return AIRCRAFT_SIZES.map((size) => ({
    size,
    label: AIRCRAFT_SIZE_LABELS[size],
    count: all.filter((p) => AIRCRAFT_SIZE_MAP[p.slug]?.includes(size)).length,
  }));
}

// ─── Purpose / Mission Queries ──────────────────────────────────────

export function getProductsByPurpose(purpose: PurposeMission): ProductMeta[] {
  const all = getAllProducts();
  return all.filter((p) => {
    const purposes = PURPOSE_MAP[p.slug];
    return purposes?.includes(purpose);
  });
}

export function getPurposesWithCounts(): {
  purpose: PurposeMission;
  label: string;
  count: number;
}[] {
  const all = getAllProducts();
  return PURPOSES.map((purpose) => ({
    purpose,
    label: PURPOSE_LABELS[purpose],
    count: all.filter((p) => PURPOSE_MAP[p.slug]?.includes(purpose)).length,
  }));
}

// Re-export classification types and constants for use in pages
export {
  AIRCRAFT_SIZE_LABELS,
  PURPOSE_LABELS,
  AIRCRAFT_SIZE_MAP,
  PURPOSE_MAP,
  AIRCRAFT_SIZES,
  PURPOSES,
  type AircraftSize,
  type PurposeMission,
} from "./product-classifications";
export {
  AIRCRAFT_SIZE_DESCRIPTIONS,
  PURPOSE_DESCRIPTIONS,
} from "./product-classifications";
