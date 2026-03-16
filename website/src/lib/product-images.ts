/**
 * Product Image Resolution
 *
 * Resolves the best available image for a product, using this priority:
 *   1. heroImage field from markdown (author-specified)
 *   2. Known product-to-local-image mapping
 *   3. Category-level fallback (local images)
 *
 * To add a new product image:
 *   - Drop the file in /public/images/ (e.g. garmin-gtx-345.jpg)
 *   - Add the mapping to PRODUCT_IMAGE_MAP below
 *   - Or add **Hero Image:** /images/garmin-gtx-345.jpg to the markdown
 */

// Map specific product slugs to local image files
const PRODUCT_IMAGE_MAP: Record<string, { src: string; alt: string }> = {
  // Autopilots
  "garmin-gfc-500": {
    src: "/images/autopilot.png",
    alt: "Garmin GFC 500 autopilot system installed in GA aircraft panel",
  },
  "garmin-gfc-600": {
    src: "/images/autopilot.png",
    alt: "Autopilot controller in general aviation cockpit",
  },
  "genesys-s-tec-3100": {
    src: "/images/autopilot.png",
    alt: "S-TEC 3100 digital autopilot in aircraft panel",
  },
  // Navigators
  "garmin-gtn-750xi": {
    src: "/images/navigator.png",
    alt: "Garmin GTN 750Xi touchscreen GPS navigator in cockpit",
  },
  "garmin-gtn-650xi": {
    src: "/images/navigator.png",
    alt: "Garmin GTN 650Xi GPS navigator in GA aircraft",
  },
  "avidyne-ifd550-540": {
    src: "/images/navigator.png",
    alt: "Avidyne IFD touchscreen navigator in aircraft panel",
  },
  // Flight Displays
  "garmin-gi-275": {
    src: "/images/efis.png",
    alt: "Garmin GI 275 electronic flight instrument in panel",
  },
  "garmin-g5": {
    src: "/images/efis.png",
    alt: "Garmin G5 electronic flight instrument",
  },
  "garmin-g3x-touch": {
    src: "/images/efis.png",
    alt: "Garmin G3X Touch glass cockpit display",
  },
  "dynon-skyview-hdx": {
    src: "/images/efis.png",
    alt: "Dynon SkyView HDX glass cockpit display",
  },
  "aspen-evolution-max": {
    src: "/images/efis.png",
    alt: "Aspen Evolution Pro MAX PFD display",
  },
  // Transponders
  "garmin-gtx-345": {
    src: "/images/transponder.png",
    alt: "Garmin GTX 345 ADS-B transponder in aircraft panel",
  },
  "garmin-gtx-335": {
    src: "/images/transponder.png",
    alt: "Garmin GTX 335 ADS-B transponder installed in radio stack",
  },
  // Audio
  "garmin-gma-345": {
    src: "/images/audio-panel.png",
    alt: "Garmin GMA 345 audio panel in cockpit",
  },
  "ps-engineering-pma450b": {
    src: "/images/audio-panel.png",
    alt: "PS Engineering PMA 450B audio panel in GA aircraft",
  },
  // Comm Radios
  "garmin-gnc-255": {
    src: "/images/comm-radio.png",
    alt: "Garmin GNC 255 NAV/COMM radio in aircraft panel",
  },
  "garmin-gtr-225": {
    src: "/images/comm-radio.png",
    alt: "Garmin GTR 225 comm radio in GA aircraft",
  },
  // Weather
  "garmin-gwx-75": {
    src: "/images/weather-radar.png",
    alt: "Weather radar display showing storm cells in GA cockpit",
  },
  // Traffic
  "avidyne-tas600": {
    src: "/images/traffic-system.png",
    alt: "Avidyne TAS600 traffic advisory system display",
  },
};

// Category-level fallback images — used when no product-specific image exists
const CATEGORY_IMAGE_MAP: Record<string, { src: string; alt: string }> = {
  autopilots: {
    src: "/images/autopilot.png",
    alt: "Autopilot controller in general aviation cockpit",
  },
  "efis-pfd": {
    src: "/images/efis.png",
    alt: "Glass cockpit primary flight display",
  },
  "gps-nav": {
    src: "/images/navigator.png",
    alt: "GPS navigator in aircraft panel",
  },
  transponders: {
    src: "/images/transponder.png",
    alt: "Aircraft transponder and ADS-B equipment",
  },
  "audio-panels": {
    src: "/images/audio-panel.png",
    alt: "Aviation audio panel and intercom system",
  },
  audio: {
    src: "/images/audio-panel.png",
    alt: "Aviation audio panel and intercom system",
  },
  "traffic-systems": {
    src: "/images/traffic-system.png",
    alt: "Traffic advisory system display in cockpit",
  },
  "weather-radar": {
    src: "/images/weather-radar.png",
    alt: "Weather radar display in aircraft",
  },
  "comm-radios": {
    src: "/images/comm-radio.png",
    alt: "VHF communication radio in cockpit",
  },
  "heading-systems": {
    src: "/images/efis.png",
    alt: "Heading indicator and compass system",
  },
  elts: {
    src: "/images/hero.png",
    alt: "General aviation cockpit instrument panel",
  },
};

// Default fallback for any category not listed
const DEFAULT_IMAGE = {
  src: "/images/hero.png",
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
