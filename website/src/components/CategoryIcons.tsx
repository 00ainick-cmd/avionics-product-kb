/**
 * SVG icons for each product category — designed to feel like
 * avionics panel symbology rather than generic UI icons.
 */

interface IconProps {
  className?: string;
}

export const AutopilotIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Steering yoke / autopilot wings */}
    <circle cx="12" cy="12" r="4" />
    <path d="M12 8V3" />
    <path d="M4 12h4" />
    <path d="M16 12h4" />
    <path d="M12 16v2" />
    <path d="M8.5 8.5L6 6" />
    <path d="M15.5 8.5L18 6" />
  </svg>
);

export const EfisIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Display screen with attitude indicator */}
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <path d="M8 12l4-3 4 3" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export const GpsNavIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Satellite / GPS signal */}
    <circle cx="12" cy="12" r="2" />
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <path d="M4.93 4.93l2.83 2.83" />
    <path d="M16.24 16.24l2.83 2.83" />
    <path d="M4.93 19.07l2.83-2.83" />
    <path d="M16.24 7.76l2.83-2.83" />
  </svg>
);

export const TransponderIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Broadcast / ADS-B signal */}
    <path d="M12 20V10" />
    <path d="M12 10l-3-6" />
    <path d="M12 10l3-6" />
    <path d="M6 16a8 8 0 0 1 0-8" />
    <path d="M18 16a8 8 0 0 0 0-8" />
    <path d="M3 18a12 12 0 0 1 0-12" />
    <path d="M21 18a12 12 0 0 0 0-12" />
  </svg>
);

export const AudioIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Headset / audio panel */}
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z" />
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z" />
  </svg>
);

export const TrafficIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Aircraft with alert diamond */}
    <path d="M12 3L9 9h6L12 3z" />
    <path d="M12 9v6" />
    <path d="M8 15l4 3 4-3" />
    <circle cx="5" cy="8" r="1.5" />
    <circle cx="19" cy="14" r="1.5" />
    <path d="M5 9.5v1" strokeDasharray="1 2" />
    <path d="M19 11v1.5" strokeDasharray="1 2" />
  </svg>
);

export const WeatherIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Radar sweep / weather returns */}
    <circle cx="12" cy="14" r="8" />
    <path d="M12 14V6" />
    <path d="M12 14l5.5-5.5" />
    <path d="M16 11a5 5 0 0 0-2-2" opacity="0.5" />
    <circle cx="12" cy="14" r="2" />
  </svg>
);

export const CommRadioIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Radio waves / comm antenna */}
    <rect x="6" y="10" width="12" height="10" rx="1" />
    <path d="M12 10V4" />
    <path d="M9 4h6" />
    <path d="M9 13h2" />
    <path d="M9 16h2" />
    <circle cx="16" cy="15" r="2" />
  </svg>
);

export const HeadingIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Compass rose / DG */}
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v3" />
    <path d="M12 18v3" />
    <path d="M3 12h3" />
    <path d="M18 12h3" />
    <path d="M12 8l-2 4h4l-2 4" fill="currentColor" opacity="0.3" />
    <path d="M12 8l-2 4h4l-2 4" />
  </svg>
);

export const EltIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Emergency beacon / SOS signal */}
    <rect x="8" y="6" width="8" height="14" rx="2" />
    <path d="M12 6V3" />
    <path d="M10 3h4" />
    <circle cx="12" cy="11" r="1.5" fill="currentColor" />
    <path d="M10 15h4" />
    <path d="M10 17h4" />
  </svg>
);

// ─── Aircraft Silhouette Icons ──────────────────────────────────────

export const PistonSingleIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* High-wing single — Cessna 172 profile */}
    <path d="M12 4v16" />
    <path d="M4 8h16" />
    <path d="M9 20h6" />
    <path d="M10 4l2-1 2 1" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

export const PistonTwinIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Twin engine — Baron profile */}
    <path d="M12 4v16" />
    <path d="M3 10h18" />
    <path d="M9 20h6" />
    <circle cx="6" cy="10" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="18" cy="10" r="1.5" fill="currentColor" opacity="0.4" />
    <path d="M6 8.5V7" />
    <path d="M18 8.5V7" />
  </svg>
);

export const TurbopropIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* King Air style — T-tail turboprop */}
    <path d="M12 3v17" />
    <path d="M4 11h16" />
    <path d="M8 20h8" />
    <path d="M9 3h6" />
    <ellipse cx="7" cy="11" rx="1" ry="2" fill="currentColor" opacity="0.3" />
    <ellipse cx="17" cy="11" rx="1" ry="2" fill="currentColor" opacity="0.3" />
  </svg>
);

export const LightJetIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Citation-style light jet */}
    <path d="M12 2v18" />
    <path d="M5 12h14" />
    <path d="M8 20h8" />
    <path d="M9 2l3 2 3-2" />
    <path d="M10 16l2 4 2-4" />
    <ellipse cx="12" cy="8" rx="2" ry="4" fill="currentColor" opacity="0.1" />
  </svg>
);

// ─── Purpose / Mission Icons ────────────────────────────────────────

export const IfrIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* ILS glideslope / approach symbology */}
    <path d="M3 20L12 6l9 14" />
    <path d="M7 14h10" />
    <circle cx="12" cy="10" r="1.5" fill="currentColor" />
    <path d="M12 6V3" />
  </svg>
);

export const AdsbIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Broadcast signal with checkmark */}
    <path d="M12 20V12" />
    <path d="M12 12l-3-5" />
    <path d="M12 12l3-5" />
    <path d="M7 17a7 7 0 0 1 0-10" />
    <path d="M17 17a7 7 0 0 0 0-10" />
    <path d="M9 21l2 2 4-4" />
  </svg>
);

export const PanelModIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Panel cutout with display — steam to glass */}
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <rect x="6" y="8" width="5" height="4" rx="0.5" opacity="0.3" />
    <rect x="13" y="8" width="5" height="8" rx="1" fill="currentColor" opacity="0.15" />
    <path d="M14 11h3" />
    <path d="M14 13h3" />
    <path d="M6 15l2-2 2 2" opacity="0.4" />
  </svg>
);

export const SafetyIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Shield with alert */}
    <path d="M12 3l8 4v5c0 5.25-3.5 9-8 11-4.5-2-8-5.75-8-11V7l8-4z" />
    <path d="M12 8v4" />
    <circle cx="12" cy="15" r="0.5" fill="currentColor" />
  </svg>
);

export const CommPurposeIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Microphone with radio waves */}
    <rect x="9" y="3" width="6" height="10" rx="3" />
    <path d="M6 10a6 6 0 0 0 12 0" />
    <path d="M12 16v4" />
    <path d="M9 20h6" />
    <path d="M19 6a2 2 0 0 1 0 3" opacity="0.5" />
    <path d="M5 6a2 2 0 0 0 0 3" opacity="0.5" />
  </svg>
);

// ─── Generic Browse Icon ────────────────────────────────────────────

export const ManufacturerIcon = ({ className = "w-6 h-6" }: IconProps) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
    {/* Factory / building silhouette */}
    <path d="M3 21V11l4-4v4l4-4v4l4-4v14" />
    <path d="M15 21V7l6 4v10" />
    <path d="M3 21h18" />
    <rect x="6" y="15" width="2" height="3" opacity="0.4" />
    <rect x="11" y="15" width="2" height="3" opacity="0.4" />
    <rect x="17" y="14" width="2" height="3" opacity="0.4" />
  </svg>
);

// ─── Category Icon Map ──────────────────────────────────────────────

// Map category slugs to icon components
export const CATEGORY_ICON_MAP: Record<string, React.ComponentType<IconProps>> = {
  autopilots: AutopilotIcon,
  "efis-pfd": EfisIcon,
  "gps-nav": GpsNavIcon,
  transponders: TransponderIcon,
  "audio-panels": AudioIcon,
  audio: AudioIcon,
  "traffic-systems": TrafficIcon,
  "weather-radar": WeatherIcon,
  "comm-radios": CommRadioIcon,
  "heading-systems": HeadingIcon,
  elts: EltIcon,
};

export function getCategoryIcon(slug: string): React.ComponentType<IconProps> {
  return CATEGORY_ICON_MAP[slug] || GpsNavIcon;
}

// Map aircraft size slugs to icons
export const AIRCRAFT_ICON_MAP: Record<string, React.ComponentType<IconProps>> = {
  "piston-single": PistonSingleIcon,
  "piston-twin": PistonTwinIcon,
  turboprop: TurbopropIcon,
  "light-jet": LightJetIcon,
};

export function getAircraftIcon(slug: string): React.ComponentType<IconProps> {
  return AIRCRAFT_ICON_MAP[slug] || PistonSingleIcon;
}

// Map purpose slugs to icons
export const PURPOSE_ICON_MAP: Record<string, React.ComponentType<IconProps>> = {
  "ifr-capability": IfrIcon,
  "ads-b-compliance": AdsbIcon,
  "panel-modernization": PanelModIcon,
  "safety-upgrades": SafetyIcon,
  communication: CommPurposeIcon,
};

export function getPurposeIcon(slug: string): React.ComponentType<IconProps> {
  return PURPOSE_ICON_MAP[slug] || SafetyIcon;
}
