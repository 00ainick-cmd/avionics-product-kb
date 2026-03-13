/**
 * Product Image Resolution
 *
 * Resolves the best available image for a product, using this priority:
 *   1. heroImage field from markdown (author-specified)
 *   2. Known product-to-local-image mapping
 *   3. Category-level fallback (Unsplash cockpit/aviation photos)
 *
 * To add a new product image:
 *   - Drop the file in /public/images/products/ (e.g. garmin-gtx-345.jpg)
 *   - Add the mapping to PRODUCT_IMAGE_MAP below
 *   - Or add **Hero Image:** /images/products/garmin-gtx-345.jpg to the markdown
 */

// Map specific product slugs to local image files
const PRODUCT_IMAGE_MAP: Record<string, { src: string; alt: string }> = {
  "garmin-gfc-500": {
    src: "/images/autopilot.png",
    alt: "Garmin GFC 500 autopilot system installed in aircraft panel",
  },
  "garmin-gtn-750xi": {
    src: "/images/navigator.png",
    alt: "Garmin GTN 750Xi touchscreen GPS navigator in cockpit",
  },
  "garmin-gi-275": {
    src: "/images/efis.png",
    alt: "Garmin GI 275 electronic flight instrument in panel",
  },
};

// Category-level fallback images — used when no product-specific image exists
const CATEGORY_IMAGE_MAP: Record<string, { src: string; alt: string }> = {
  autopilots: {
    src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&q=80",
    alt: "Aircraft autopilot controls in glass cockpit",
  },
  "efis-pfd": {
    src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&q=80",
    alt: "Glass cockpit primary flight displays",
  },
  "gps-nav": {
    src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&q=80",
    alt: "GPS navigation system in aircraft panel",
  },
  transponders: {
    src: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1200&q=80",
    alt: "Aircraft transponder and ADS-B equipment",
  },
  "audio-panels": {
    src: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1200&q=80",
    alt: "Aviation audio panel and intercom system",
  },
  audio: {
    src: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1200&q=80",
    alt: "Aviation audio panel and intercom system",
  },
  "traffic-systems": {
    src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&q=80",
    alt: "Traffic awareness system display in cockpit",
  },
  "weather-radar": {
    src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&q=80",
    alt: "Weather radar display in aircraft",
  },
  "comm-radios": {
    src: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1200&q=80",
    alt: "VHF communication radio stack in cockpit",
  },
  "heading-systems": {
    src: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1200&q=80",
    alt: "Heading indicator and compass system",
  },
  elts: {
    src: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=1200&q=80",
    alt: "Emergency locator transmitter equipment",
  },
};

// Default fallback for any category not listed
const DEFAULT_IMAGE = {
  src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=1200&q=80",
  alt: "General aviation cockpit instrument panel",
};

/**
 * Resolve the best available image for a product.
 */
export function getProductImage(
  slug: string,
  category: string,
  heroImageFromMarkdown?: string
): { src: string; alt: string; isProductSpecific: boolean } {
  // Priority 1: Author-specified heroImage in markdown
  if (heroImageFromMarkdown) {
    return {
      src: heroImageFromMarkdown,
      alt: `${slug.replace(/-/g, " ")} product image`,
      isProductSpecific: true,
    };
  }

  // Priority 2: Known product mapping (local images)
  if (PRODUCT_IMAGE_MAP[slug]) {
    return {
      ...PRODUCT_IMAGE_MAP[slug],
      isProductSpecific: true,
    };
  }

  // Priority 3: Category fallback
  const categoryImage = CATEGORY_IMAGE_MAP[category];
  if (categoryImage) {
    return {
      ...categoryImage,
      isProductSpecific: false,
    };
  }

  // Priority 4: Default
  return {
    ...DEFAULT_IMAGE,
    isProductSpecific: false,
  };
}

/**
 * Get the category-level image (for category listing pages).
 */
export function getCategoryImage(
  category: string
): { src: string; alt: string } {
  return CATEGORY_IMAGE_MAP[category] || DEFAULT_IMAGE;
}
