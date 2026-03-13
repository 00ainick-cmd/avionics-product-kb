"use client";

import { useState, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

/* ═══════════════════════════════════════════════════════
   Types
   ═══════════════════════════════════════════════════════ */

type SectionType =
  | "intro"
  | "howItWorks"
  | "install"
  | "performance"
  | "competitive"
  | "price"
  | "verdict"
  | "talkingPoints"
  | "resources"
  | "default";

interface ParsedSection {
  id: string;
  heading: string;
  content: string;
  type: SectionType;
}

interface ExtractedMeta {
  stcCoverage: string;
  lastUpdated: string;
}

/* ═══════════════════════════════════════════════════════
   Section Configuration
   ═══════════════════════════════════════════════════════ */

const SECTION_ACCENTS: Record<SectionType, string> = {
  intro: "border-l-amber-500/70",
  howItWorks: "border-l-sky-400/50",
  install: "border-l-orange-400/50",
  performance: "border-l-emerald-400/50",
  competitive: "border-l-violet-400/50",
  price: "border-l-teal-400/50",
  verdict: "border-l-amber-500/70",
  talkingPoints: "border-l-amber-400/50",
  resources: "border-l-slate-500/50",
  default: "border-l-slate-600/50",
};

const SECTION_ICON_COLORS: Record<SectionType, string> = {
  intro: "text-amber-400",
  howItWorks: "text-sky-400",
  install: "text-orange-400",
  performance: "text-emerald-400",
  competitive: "text-violet-400",
  price: "text-teal-400",
  verdict: "text-amber-400",
  talkingPoints: "text-amber-400",
  resources: "text-slate-400",
  default: "text-slate-500",
};

const SECTION_LABELS: Record<SectionType, string> = {
  intro: "THE TRANSLATION",
  howItWorks: "TECHNICAL",
  install: "SHOP NOTES",
  performance: "IN THE FIELD",
  competitive: "ALTERNATIVES",
  price: "COST ANALYSIS",
  verdict: "BOTTOM LINE",
  talkingPoints: "CUSTOMER FACING",
  resources: "FURTHER READING",
  default: "",
};

/* ═══════════════════════════════════════════════════════
   Section Atmospheric Images
   Curated Unsplash photos that add visual rhythm to text-heavy sections.
   Uses CSS background-image for graceful fallback (no broken image icons).
   ═══════════════════════════════════════════════════════ */

const SECTION_IMAGES: Partial<Record<SectionType, { src: string; alt: string }>> = {
  intro: {
    src: "https://images.unsplash.com/photo-1559628233-100c798642d4?w=900&h=350&fit=crop",
    alt: "General aviation aircraft wing in flight",
  },
  install: {
    src: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=900&h=350&fit=crop&crop=top",
    alt: "Aircraft cockpit overhead panel and wiring harness",
  },
  performance: {
    src: "https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=900&h=350&fit=crop",
    alt: "Light aircraft flying over terrain",
  },
};

/* ═══════════════════════════════════════════════════════
   Section Type Detection
   ═══════════════════════════════════════════════════════ */

function detectType(heading: string): SectionType {
  const h = heading.toLowerCase();
  if (h.includes("what it is") || h === "the translation") return "intro";
  if (h.includes("how it works")) return "howItWorks";
  if (h.includes("installation")) return "install";
  if (
    h.includes("performance") ||
    h.includes("bench") ||
    h.includes("objective") ||
    h.includes("specs")
  )
    return "performance";
  if (h.includes("competitive") || h.includes("landscape")) return "competitive";
  if (h.includes("price") || h.includes("value")) return "price";
  if (h.includes("verdict")) return "verdict";
  if (h.includes("talking point")) return "talkingPoints";
  if (h.includes("deep dive") || h.includes("resource")) return "resources";
  return "default";
}

/* ═══════════════════════════════════════════════════════
   Content Parser
   ═══════════════════════════════════════════════════════ */

function parseContent(raw: string): {
  meta: ExtractedMeta;
  sections: ParsedSection[];
} {
  const lines = raw.split("\n");
  const meta: ExtractedMeta = { stcCoverage: "", lastUpdated: "" };

  // Find first ## heading — everything before is metadata (already shown in hero)
  let sectionStart = -1;
  for (let i = 0; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t.startsWith("**STC Coverage:**")) {
      meta.stcCoverage = t.replace("**STC Coverage:**", "").trim();
    }
    if (t.startsWith("**Last Updated:**")) {
      meta.lastUpdated = t.replace("**Last Updated:**", "").trim();
    }
    if (t.startsWith("## ")) {
      sectionStart = i;
      break;
    }
  }

  // No sections found — return empty (triggers fallback)
  if (sectionStart === -1) return { meta, sections: [] };

  // Split into sections by ## headings
  const sections: ParsedSection[] = [];
  let curHeading = "";
  let curLines: string[] = [];

  for (let i = sectionStart; i < lines.length; i++) {
    const t = lines[i].trim();
    if (t.startsWith("## ")) {
      if (curHeading) {
        const id = curHeading
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");
        sections.push({
          id,
          heading: curHeading,
          content: curLines.join("\n").trim(),
          type: detectType(curHeading),
        });
      }
      curHeading = t.replace(/^##\s+/, "");
      curLines = [];
    } else {
      curLines.push(lines[i]);
    }
  }
  // Push final section
  if (curHeading) {
    const id = curHeading
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "");
    sections.push({
      id,
      heading: curHeading,
      content: curLines.join("\n").trim(),
      type: detectType(curHeading),
    });
  }

  return { meta, sections };
}

/* ═══════════════════════════════════════════════════════
   Parsers for Special Sections
   ═══════════════════════════════════════════════════════ */

function parseTalkingPoints(content: string): string[] {
  return content
    .split("\n")
    .filter((l) => l.trim().startsWith("- "))
    .map((l) => {
      let text = l.trim().replace(/^-\s+/, "");
      if (text.startsWith('"') && text.endsWith('"')) {
        text = text.slice(1, -1);
      }
      return text;
    })
    .filter(Boolean);
}

interface ResourceLink {
  source: string;
  title: string;
  url: string;
  description: string;
  hostname: string;
}

function parseResources(content: string): ResourceLink[] {
  const results: ResourceLink[] = [];
  const lines = content.split("\n").filter((l) => l.trim().startsWith("- "));

  for (const line of lines) {
    const match = line.match(/\[([^\]]+)\]\(([^)]+)\)/);
    if (!match) continue;

    const [, fullTitle, url] = match;
    const afterLink = line
      .slice(line.indexOf(")") + 1)
      .replace(/^\s*[-\u2013\u2014]+\s*/, "")
      .trim();

    let source = "";
    let title = fullTitle;
    const colonIdx = fullTitle.indexOf(":");
    if (colonIdx > 0 && colonIdx < fullTitle.length - 1) {
      source = fullTitle.slice(0, colonIdx).trim();
      title = fullTitle.slice(colonIdx + 1).trim();
    }

    let hostname = "";
    try {
      hostname = new URL(url).hostname.replace("www.", "");
    } catch {
      /* ignore invalid URLs */
    }

    results.push({ source, title, url, description: afterLink, hostname });
  }

  return results;
}

/* ═══════════════════════════════════════════════════════
   Section Icon Component
   ═══════════════════════════════════════════════════════ */

function SectionIcon({ type }: { type: SectionType }) {
  const color = SECTION_ICON_COLORS[type];
  const cls = `w-5 h-5 ${color}`;

  switch (type) {
    case "intro":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
        </svg>
      );
    case "howItWorks":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    case "install":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
        </svg>
      );
    case "performance":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      );
    case "competitive":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      );
    case "price":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case "verdict":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.745 3.745 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      );
    case "talkingPoints":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
        </svg>
      );
    case "resources":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
        </svg>
      );
    default:
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      );
  }
}

/* ═══════════════════════════════════════════════════════
   Chevron Icon for Collapsible
   ═══════════════════════════════════════════════════════ */

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════
   Prose Wrapper (shared Tailwind Typography styles)
   ═══════════════════════════════════════════════════════ */

const PROSE_CLASSES =
  "prose prose-invert max-w-none prose-headings:font-bold prose-a:text-amber-400 prose-a:no-underline hover:prose-a:text-amber-300 prose-img:rounded-xl prose-img:shadow-lg prose-strong:text-slate-100 prose-th:text-slate-200 prose-td:text-slate-300 prose-li:marker:text-amber-500 prose-p:first:mt-0 prose-h3:first:mt-0";

function ProseContent({ content }: { content: string }) {
  return (
    <div className={PROSE_CLASSES}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   Section Banner Image
   Atmospheric photo strip that adds visual rhythm.
   Uses CSS background-image — if the image fails to load,
   the gradient fallback renders seamlessly (no broken icons).
   ═══════════════════════════════════════════════════════ */

function SectionBanner({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="relative w-full h-36 md:h-44 rounded-xl overflow-hidden mb-5"
      role="img"
      aria-label={alt}
    >
      {/* Gradient fallback — always visible behind the photo */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80" />
      {/* Actual photo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${src}')` }}
      />
      {/* Bottom fade into content */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/80" />
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   Section Header (icon + label + heading)
   ═══════════════════════════════════════════════════════ */

function SectionHeader({
  type,
  heading,
}: {
  type: SectionType;
  heading: string;
}) {
  const label = SECTION_LABELS[type];
  return (
    <div className="flex items-center gap-3 mb-4">
      <SectionIcon type={type} />
      <div>
        {label && (
          <span
            className={`text-[10px] font-bold tracking-[0.15em] ${SECTION_ICON_COLORS[type]} block mb-0.5`}
          >
            {label}
          </span>
        )}
        <h2 className="text-xl font-bold text-slate-100">{heading}</h2>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   Section Renderers
   ═══════════════════════════════════════════════════════ */

/** Standard section: accent border + icon header + optional banner + prose content */
function StandardSection({ section }: { section: ParsedSection }) {
  const image = SECTION_IMAGES[section.type];

  return (
    <div
      id={section.id}
      className={`border-l-[3px] ${SECTION_ACCENTS[section.type]} pl-6 py-2`}
    >
      <SectionHeader type={section.type} heading={section.heading} />
      {image && <SectionBanner src={image.src} alt={image.alt} />}
      <ProseContent content={section.content} />
    </div>
  );
}

/** Intro / "What It Is" — highlighted card with amber accent + banner image */
function IntroSection({ section }: { section: ParsedSection }) {
  const image = SECTION_IMAGES.intro;

  return (
    <div
      id={section.id}
      className="rounded-xl border border-amber-500/20 bg-amber-500/[0.03] overflow-hidden"
    >
      {/* Banner image inside the card */}
      {image && (
        <div
          className="relative w-full h-36 md:h-44"
          role="img"
          aria-label={image.alt}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 to-slate-900/80" />
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${image.src}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/90" />
        </div>
      )}
      {/* Content area */}
      <div className="p-6 pt-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
            <SectionIcon type="intro" />
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-[0.15em] text-amber-400 block mb-0.5">
              {SECTION_LABELS.intro}
            </span>
            <h2 className="text-xl font-bold text-slate-100">
              {section.heading}
            </h2>
          </div>
        </div>
        <ProseContent content={section.content} />
      </div>
    </div>
  );
}

/** Installation — collapsible panel (default open) */
function CollapsibleSection({ section }: { section: ParsedSection }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      id={section.id}
      className={`border-l-[3px] ${SECTION_ACCENTS[section.type]} rounded-r-xl overflow-hidden`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 pl-6 pr-4 py-4 hover:bg-slate-800/30 transition-colors text-left group"
      >
        <SectionIcon type={section.type} />
        <div className="flex-1">
          <span
            className={`text-[10px] font-bold tracking-[0.15em] ${SECTION_ICON_COLORS[section.type]} block mb-0.5`}
          >
            {SECTION_LABELS[section.type]}
          </span>
          <h2 className="text-xl font-bold text-slate-100 group-hover:text-slate-50">
            {section.heading}
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider hidden sm:block">
            {isOpen ? "Collapse" : "Expand"}
          </span>
          <ChevronIcon isOpen={isOpen} />
        </div>
      </button>
      <div
        className={`section-collapsible ${isOpen ? "section-collapsible-open" : "section-collapsible-closed"}`}
      >
        <div className="pl-6 pr-4 pb-6">
          {SECTION_IMAGES[section.type] && (
            <SectionBanner
              src={SECTION_IMAGES[section.type]!.src}
              alt={SECTION_IMAGES[section.type]!.alt}
            />
          )}
          <ProseContent content={section.content} />
        </div>
      </div>
    </div>
  );
}

/** The Verdict — highlighted callout box */
function VerdictSection({ section }: { section: ParsedSection }) {
  return (
    <div
      id={section.id}
      className="rounded-xl border-2 border-amber-500/20 bg-gradient-to-br from-amber-500/[0.06] to-transparent p-6 md:p-8"
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
          <SectionIcon type="verdict" />
        </div>
        <div>
          <span className="text-[10px] font-bold tracking-[0.15em] text-amber-400 block mb-0.5">
            {SECTION_LABELS.verdict}
          </span>
          <h2 className="text-2xl font-extrabold text-white">
            {section.heading}
          </h2>
        </div>
      </div>
      <ProseContent content={section.content} />
    </div>
  );
}

/** Tech Talking Points — styled card per bullet point */
function TalkingPointsSection({ section }: { section: ParsedSection }) {
  const points = useMemo(
    () => parseTalkingPoints(section.content),
    [section.content]
  );

  // Fallback if parsing fails
  if (points.length === 0) {
    return <StandardSection section={section} />;
  }

  return (
    <div id={section.id}>
      <div className="flex items-center gap-3 mb-2">
        <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center">
          <SectionIcon type="talkingPoints" />
        </div>
        <div>
          <span className="text-[10px] font-bold tracking-[0.15em] text-amber-400 block mb-0.5">
            {SECTION_LABELS.talkingPoints}
          </span>
          <h2 className="text-xl font-bold text-slate-100">
            {section.heading}
          </h2>
        </div>
      </div>
      <p className="text-sm text-slate-400 mb-5 ml-12">
        Use these when explaining this product to customers and pilots.
      </p>
      <div className="grid gap-3">
        {points.map((point, i) => (
          <div
            key={i}
            className="group relative rounded-xl border border-slate-700/50 bg-slate-900/40 p-5 pl-14 hover:border-amber-500/30 hover:bg-slate-800/40 transition-all duration-200"
          >
            {/* Chat bubble icon */}
            <div className="absolute left-4 top-5 w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400/60 group-hover:text-amber-400 transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                />
              </svg>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              <span className="text-amber-500/70">&ldquo;</span>
              {point}
              <span className="text-amber-500/70">&rdquo;</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Deep Dive Resources — styled link cards */
function ResourcesSection({ section }: { section: ParsedSection }) {
  const resources = useMemo(
    () => parseResources(section.content),
    [section.content]
  );

  // Fallback if parsing fails
  if (resources.length === 0) {
    return <StandardSection section={section} />;
  }

  return (
    <div id={section.id}>
      <div className="flex items-center gap-3 mb-5">
        <SectionIcon type="resources" />
        <div>
          <span className="text-[10px] font-bold tracking-[0.15em] text-slate-500 block mb-0.5">
            {SECTION_LABELS.resources}
          </span>
          <h2 className="text-xl font-bold text-slate-100">
            {section.heading}
          </h2>
        </div>
      </div>
      <div className="grid gap-3">
        {resources.map((r, i) => (
          <a
            key={i}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-xl border border-slate-700/50 bg-slate-900/30 p-4 hover:border-amber-500/30 hover:bg-slate-800/30 transition-all duration-200"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:text-amber-400 group-hover:border-amber-500/30 transition-colors shrink-0 mt-0.5">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </div>
            <div className="min-w-0">
              {r.source && (
                <span className="text-[10px] font-bold tracking-[0.15em] text-slate-500 uppercase block mb-0.5">
                  {r.source}
                </span>
              )}
              <p className="text-sm font-semibold text-slate-200 group-hover:text-amber-400 transition-colors leading-snug">
                {r.title}
              </p>
              {r.description && (
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  {r.description}
                </p>
              )}
              <p className="text-[11px] text-slate-500 mt-1.5">
                {r.hostname} &rarr;
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════
   Section Router
   ═══════════════════════════════════════════════════════ */

function SectionBlock({ section }: { section: ParsedSection }) {
  switch (section.type) {
    case "intro":
      return <IntroSection section={section} />;
    case "install":
      return <CollapsibleSection section={section} />;
    case "verdict":
      return <VerdictSection section={section} />;
    case "talkingPoints":
      return <TalkingPointsSection section={section} />;
    case "resources":
      return <ResourcesSection section={section} />;
    default:
      return <StandardSection section={section} />;
  }
}

/* ═══════════════════════════════════════════════════════
   Main Markdown Component
   ═══════════════════════════════════════════════════════ */

export default function Markdown({ content, category }: { content: string; category?: string }) {
  const { meta, sections } = useMemo(() => parseContent(content), [content]);

  // Fallback: if no sections found (guides or non-product content),
  // render with simple prose styling (original behavior)
  if (sections.length === 0) {
    return (
      <div className={PROSE_CLASSES}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    );
  }

  return (
    <article className="space-y-8">
      {/* STC Coverage callout */}
      {meta.stcCoverage && (
        <div className="flex items-start gap-3 rounded-lg border border-sky-500/20 bg-sky-500/[0.04] px-4 py-3">
          <svg
            className="w-5 h-5 text-sky-400 shrink-0 mt-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
          <div>
            <span className="text-[10px] font-bold tracking-[0.15em] text-sky-400 uppercase block mb-0.5">
              STC Coverage
            </span>
            <p className="text-sm text-slate-300 leading-relaxed">
              {meta.stcCoverage}
            </p>
          </div>
        </div>
      )}

      {/* Content sections */}
      {sections.map((section) => (
        <SectionBlock key={section.id} section={section} />
      ))}

      {/* Last Updated */}
      {meta.lastUpdated && (
        <div className="text-center pt-4 border-t border-slate-800/50">
          <span className="text-[11px] text-slate-500 uppercase tracking-wider">
            Last updated: {meta.lastUpdated}
          </span>
        </div>
      )}
    </article>
  );
}
