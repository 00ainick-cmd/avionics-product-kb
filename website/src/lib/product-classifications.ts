/**
 * Product classification maps — aircraft size and purpose/mission tags.
 *
 * These live here (not in frontmatter) so we can bulk-edit classifications
 * without touching 31+ markdown files. Each product slug maps to an array
 * of applicable sizes or purposes.
 */

// ─── Types ──────────────────────────────────────────────────────────

export type AircraftSize =
  | "piston-single"
  | "piston-twin"
  | "turboprop"
  | "light-jet";

export type PurposeMission =
  | "ifr-capability"
  | "ads-b-compliance"
  | "panel-modernization"
  | "safety-upgrades"
  | "communication";

// ─── Display Labels ─────────────────────────────────────────────────

export const AIRCRAFT_SIZE_LABELS: Record<AircraftSize, string> = {
  "piston-single": "Piston Singles",
  "piston-twin": "Piston Twins",
  turboprop: "Turboprops",
  "light-jet": "Light Jets",
};

export const AIRCRAFT_SIZE_DESCRIPTIONS: Record<AircraftSize, string> = {
  "piston-single":
    "Cessna 172, Piper Cherokee, Mooney, Bonanza — the bread and butter of GA",
  "piston-twin":
    "Baron, Seneca, Aztec, Twin Comanche — multi-engine piston aircraft",
  turboprop:
    "King Air, Pilatus PC-12, TBM, Caravan — turbine-powered propeller aircraft",
  "light-jet":
    "Citation, Phenom, HondaJet — entry-level turbine jets",
};

export const PURPOSE_LABELS: Record<PurposeMission, string> = {
  "ifr-capability": "IFR Capability",
  "ads-b-compliance": "ADS-B Compliance",
  "panel-modernization": "Panel Modernization",
  "safety-upgrades": "Safety Upgrades",
  communication: "Communication",
};

export const PURPOSE_DESCRIPTIONS: Record<PurposeMission, string> = {
  "ifr-capability":
    "Navigators, autopilots, and flight displays that enable or enhance instrument flight",
  "ads-b-compliance":
    "Transponders meeting the ADS-B Out mandate for controlled airspace",
  "panel-modernization":
    "Glass displays and touchscreens replacing legacy steam gauges",
  "safety-upgrades":
    "Traffic awareness, weather radar, ELTs, and emergency systems",
  communication:
    "Audio panels, comm radios, and intercom systems",
};

// ─── Aircraft Size Map ──────────────────────────────────────────────

export const AIRCRAFT_SIZE_MAP: Record<string, AircraftSize[]> = {
  // Audio
  "garmin-gma-345": ["piston-single", "piston-twin", "turboprop"],
  "ps-engineering-pma450b": ["piston-single", "piston-twin"],

  // Autopilots
  "dynon-emergency-glide": ["piston-single"],
  "garmin-gfc-500": ["piston-single", "piston-twin"],
  "garmin-gfc-600": ["piston-single", "piston-twin", "turboprop"],
  "genesys-s-tec-3100": ["piston-single", "piston-twin"],

  // Comm Radios
  "garmin-gnc-255": ["piston-single", "piston-twin"],
  "garmin-gtr-225": ["piston-single", "piston-twin"],

  // EFIS / PFD
  "aspen-evolution-max": ["piston-single", "piston-twin"],
  "avidyne-vantage-12": ["piston-single", "piston-twin"],
  "dynon-12-hdx": ["piston-single"],
  "dynon-skyview-hdx": ["piston-single"],
  "garmin-g3x-touch": ["piston-single"],
  "garmin-g5": ["piston-single", "piston-twin"],
  "garmin-g5000-prime": ["turboprop", "light-jet"],
  "garmin-gha-15": ["piston-single", "piston-twin"],
  "garmin-gi-275": ["piston-single", "piston-twin"],
  "garmin-txi-12-1": ["piston-single", "piston-twin", "turboprop"],
  "nighthawk-guardian": ["piston-single"],

  // ELTs (all aircraft types)
  "406-mhz-elt-overview": ["piston-single", "piston-twin", "turboprop", "light-jet"],

  // GPS / Nav
  "avidyne-ifd550-540": ["piston-single", "piston-twin"],
  "garmin-gtn-650xi": ["piston-single", "piston-twin"],
  "garmin-gtn-750xi": ["piston-single", "piston-twin", "turboprop"],
  "garmin-smartcharts": ["piston-single", "piston-twin", "turboprop"],

  // Heading
  "bendixking-kcs55a": ["piston-single", "piston-twin"],

  // Traffic
  "avidyne-tas600": ["piston-single", "piston-twin", "turboprop"],

  // Transponders
  "avidyne-skytrax-3000": ["piston-single", "piston-twin"],
  "garmin-gtx-335": ["piston-single", "piston-twin"],
  "garmin-gtx-345": ["piston-single", "piston-twin"],
  "trig-tt23-series": ["piston-single", "piston-twin"],

  // Weather
  "garmin-gwx-75": ["piston-twin", "turboprop", "light-jet"],
};

// ─── Purpose / Mission Map ──────────────────────────────────────────

export const PURPOSE_MAP: Record<string, PurposeMission[]> = {
  // Audio
  "garmin-gma-345": ["communication"],
  "ps-engineering-pma450b": ["communication"],

  // Autopilots
  "dynon-emergency-glide": ["safety-upgrades"],
  "garmin-gfc-500": ["ifr-capability", "safety-upgrades"],
  "garmin-gfc-600": ["ifr-capability", "safety-upgrades"],
  "genesys-s-tec-3100": ["ifr-capability", "safety-upgrades"],

  // Comm Radios
  "garmin-gnc-255": ["communication", "ifr-capability"],
  "garmin-gtr-225": ["communication"],

  // EFIS / PFD
  "aspen-evolution-max": ["panel-modernization", "ifr-capability"],
  "avidyne-vantage-12": ["panel-modernization", "ifr-capability"],
  "dynon-12-hdx": ["panel-modernization"],
  "dynon-skyview-hdx": ["panel-modernization", "ifr-capability"],
  "garmin-g3x-touch": ["panel-modernization"],
  "garmin-g5": ["panel-modernization", "ifr-capability"],
  "garmin-g5000-prime": ["panel-modernization", "ifr-capability"],
  "garmin-gha-15": ["safety-upgrades"],
  "garmin-gi-275": ["panel-modernization", "ifr-capability"],
  "garmin-txi-12-1": ["panel-modernization", "ifr-capability"],
  "nighthawk-guardian": ["panel-modernization", "safety-upgrades"],

  // ELTs
  "406-mhz-elt-overview": ["safety-upgrades"],

  // GPS / Nav
  "avidyne-ifd550-540": ["ifr-capability", "panel-modernization"],
  "garmin-gtn-650xi": ["ifr-capability", "panel-modernization"],
  "garmin-gtn-750xi": ["ifr-capability", "panel-modernization"],
  "garmin-smartcharts": ["ifr-capability"],

  // Heading
  "bendixking-kcs55a": ["ifr-capability"],

  // Traffic
  "avidyne-tas600": ["safety-upgrades"],

  // Transponders
  "avidyne-skytrax-3000": ["ads-b-compliance"],
  "garmin-gtx-335": ["ads-b-compliance"],
  "garmin-gtx-345": ["ads-b-compliance", "safety-upgrades"],
  "trig-tt23-series": ["ads-b-compliance"],

  // Weather
  "garmin-gwx-75": ["safety-upgrades", "ifr-capability"],
};

// ─── Ordered lists for rendering ────────────────────────────────────

export const AIRCRAFT_SIZES: AircraftSize[] = [
  "piston-single",
  "piston-twin",
  "turboprop",
  "light-jet",
];

export const PURPOSES: PurposeMission[] = [
  "ifr-capability",
  "ads-b-compliance",
  "panel-modernization",
  "safety-upgrades",
  "communication",
];
