import Link from "next/link";
import {
  getProductCategories,
  getProductsByCategory,
  getAllProducts,
  getGuides,
  getManufacturers,
  getAircraftSizesWithCounts,
  getPurposesWithCounts,
  CATEGORY_LABELS,
} from "@/lib/content";
import {
  AIRCRAFT_SIZE_DESCRIPTIONS,
  PURPOSE_DESCRIPTIONS,
} from "@/lib/product-classifications";
import {
  getCategoryIcon,
  getAircraftIcon,
  getPurposeIcon,
  ManufacturerIcon,
} from "@/components/CategoryIcons";

// ─── Cockpit-zone groupings (existing) ──────────────────────────────
const CATEGORY_GROUPS = [
  {
    title: "Flight Deck",
    subtitle: "Primary Systems",
    description:
      "Primary flight instruments, navigation, and flight control",
    categories: ["efis-pfd", "gps-nav", "autopilots"],
  },
  {
    title: "Communication & Safety",
    subtitle: "Comms & Compliance",
    description: "Stay connected, stay legal, stay found",
    categories: [
      "comm-radios",
      "audio-panels",
      "audio",
      "transponders",
      "elts",
    ],
  },
  {
    title: "Situational Awareness",
    subtitle: "Environment",
    description: "See traffic, weather, and orientation at a glance",
    categories: ["traffic-systems", "weather-radar", "heading-systems"],
  },
];

// ─── Four-way navigator cards ───────────────────────────────────────
const NAV_CARDS = [
  {
    title: "By Category",
    subtitle: "Cockpit Systems",
    description:
      "Browse by avionics system type — displays, navigators, transponders, and more",
    href: "#browse-category",
    icon: "category" as const,
  },
  {
    title: "By Aircraft",
    subtitle: "Platform Type",
    description:
      "Find products compatible with your airframe — singles, twins, turboprops, jets",
    href: "#browse-aircraft",
    icon: "aircraft" as const,
  },
  {
    title: "By Purpose",
    subtitle: "Mission & Goal",
    description:
      "Shopping for IFR capability, ADS-B compliance, or a full panel modernization?",
    href: "#browse-purpose",
    icon: "purpose" as const,
  },
  {
    title: "By Manufacturer",
    subtitle: "OEM Lookup",
    description:
      "See all products from a specific manufacturer in one place",
    href: "#browse-manufacturer",
    icon: "manufacturer" as const,
  },
];

// ─── Inline SVG icons for the nav cards ─────────────────────────────
function NavCardIcon({ type }: { type: string }) {
  const cls = "w-5 h-5";
  switch (type) {
    case "category":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
        </svg>
      );
    case "aircraft":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 4v16" /><path d="M4 8h16" /><path d="M9 20h6" />
        </svg>
      );
    case "purpose":
      return (
        <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      );
    case "manufacturer":
      return <ManufacturerIcon className={cls} />;
    default:
      return null;
  }
}

// ═════════════════════════════════════════════════════════════════════
// HOME PAGE
// ═════════════════════════════════════════════════════════════════════

export default function Home() {
  const existingCategories = getProductCategories();
  const allProducts = getAllProducts();
  const guides = getGuides();
  const manufacturers = getManufacturers();
  const aircraftSizes = getAircraftSizesWithCounts();
  const purposes = getPurposesWithCounts();

  return (
    <div>
      {/* ════════════════ HERO ════════════════ */}
      <section className="relative overflow-hidden border-b border-slate-800/50">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
          style={{ backgroundImage: "url('/images/hero.png')" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900/80 via-[#020617]/90 to-[#020617]" />

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:py-32 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 font-medium tracking-wide text-xs uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              Ace Avionics Training
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-br from-white to-slate-400 bg-clip-text text-transparent">
              Avionics Product{" "}
              <span className="text-amber-500">Knowledge Base</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
              Learn products, sell confidently, compare intelligently. Built for
              avionics technicians by avionics technicians.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/search"
                className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 px-6 py-3 rounded-xl hover:bg-amber-400 transition-colors font-bold shadow-lg shadow-amber-500/20"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Search Products
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center gap-2 border border-slate-700 text-slate-200 px-6 py-3 rounded-xl hover:border-amber-500/50 hover:text-amber-400 transition-all font-medium"
              >
                Browse Guides
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Stats bar */}
          <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-8 md:gap-16 text-sm justify-center">
            <div>
              <p className="text-3xl font-bold text-slate-100">{allProducts.length}</p>
              <p className="text-slate-500 font-medium mt-1">Products Covered</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-100">{existingCategories.length}</p>
              <p className="text-slate-500 font-medium mt-1">Categories</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-100">{manufacturers.length}</p>
              <p className="text-slate-500 font-medium mt-1">Manufacturers</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-slate-100">{guides.length}</p>
              <p className="text-slate-500 font-medium mt-1">Deep-Dive Guides</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════ FOUR-WAY NAVIGATOR ════════════════ */}
      <section className="max-w-7xl mx-auto px-4 pt-20 pb-10 relative">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-1.5 h-8 bg-amber-500 rounded-full" />
          <div>
            <h2 className="text-3xl font-bold text-slate-100 tracking-tight">
              Find What You Need
            </h2>
            <p className="text-slate-400 mt-1">
              Four ways to navigate the knowledge base
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {NAV_CARDS.map((card) => (
            <a
              key={card.title}
              href={card.href}
              className="group relative glass-panel glass-panel-hover rounded-2xl p-6 md:p-8 flex flex-col gap-3 transition-all hover:border-amber-500/30"
            >
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-slate-800/80 border border-slate-700/50 text-amber-400 flex items-center justify-center group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-all">
                  <NavCardIcon type={card.icon} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-200 group-hover:text-amber-400 transition-colors text-lg">
                    {card.title}
                  </h3>
                  <span className="text-xs font-bold uppercase tracking-widest text-amber-500/60">
                    {card.subtitle}
                  </span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                {card.description}
              </p>
              <svg
                className="absolute top-6 right-6 w-5 h-5 text-slate-700 group-hover:text-amber-400 transition-all group-hover:translate-x-0.5"
                fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          ))}
        </div>
      </section>

      {/* ════════════════ BROWSE BY CATEGORY ════════════════ */}
      <section id="browse-category" className="relative border-t border-slate-800/50 bg-slate-900/20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1.5 h-8 bg-amber-500 rounded-full" />
            <div>
              <h2 className="text-3xl font-bold text-slate-100 tracking-tight">Browse by Category</h2>
              <p className="text-slate-400 mt-1">Explore products organized by cockpit system</p>
            </div>
          </div>

          <div className="space-y-12">
            {CATEGORY_GROUPS.map((group) => {
              const activeCats = group.categories.filter((c) => existingCategories.includes(c));
              if (activeCats.length === 0) return null;

              return (
                <div key={group.title}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-xs font-bold uppercase tracking-widest text-amber-500/80">{group.subtitle}</span>
                    <div className="flex-1 h-px bg-slate-800" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-200 mb-1.5">{group.title}</h3>
                  <p className="text-sm text-slate-400 mb-5">{group.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {activeCats.map((cat) => {
                      const products = getProductsByCategory(cat);
                      const label = CATEGORY_LABELS[cat] || cat;
                      const IconComp = getCategoryIcon(cat);
                      return (
                        <Link key={cat} href={`/products/${cat}`} className="group flex items-center gap-4 glass-panel glass-panel-hover rounded-xl p-5">
                          <div className="w-11 h-11 rounded-lg bg-slate-800/80 border border-slate-700/50 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-all">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-semibold text-slate-200 group-hover:text-amber-400 transition-colors leading-tight">{label}</h4>
                            <p className="text-xs text-slate-500 mt-0.5 font-medium">{products.length} product{products.length !== 1 ? "s" : ""}</p>
                          </div>
                          <svg className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════ BROWSE BY AIRCRAFT ════════════════ */}
      <section id="browse-aircraft" className="relative border-t border-slate-800/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1.5 h-8 bg-amber-500 rounded-full" />
            <div>
              <h2 className="text-3xl font-bold text-slate-100 tracking-tight">Browse by Aircraft</h2>
              <p className="text-slate-400 mt-1">Find products compatible with your platform</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {aircraftSizes.map(({ size, label, count }) => {
              const IconComp = getAircraftIcon(size);
              const desc = AIRCRAFT_SIZE_DESCRIPTIONS[size as keyof typeof AIRCRAFT_SIZE_DESCRIPTIONS];
              return (
                <Link key={size} href={`/aircraft/${size}`} className="group glass-panel glass-panel-hover rounded-xl p-6 flex flex-col items-center text-center gap-3">
                  <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700/50 text-amber-400 flex items-center justify-center group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-all">
                    <IconComp className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-200 group-hover:text-amber-400 transition-colors text-lg">{label}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{desc}</p>
                  </div>
                  <span className="text-xs font-bold text-amber-500/70 bg-amber-500/5 border border-amber-500/10 px-3 py-1 rounded-full mt-auto">
                    {count} product{count !== 1 ? "s" : ""}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════ BROWSE BY PURPOSE ════════════════ */}
      <section id="browse-purpose" className="relative border-t border-slate-800/50 bg-slate-900/20 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1.5 h-8 bg-amber-500 rounded-full" />
            <div>
              <h2 className="text-3xl font-bold text-slate-100 tracking-tight">Browse by Purpose</h2>
              <p className="text-slate-400 mt-1">What is the customer trying to accomplish?</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {purposes.map(({ purpose, label, count }) => {
              const IconComp = getPurposeIcon(purpose);
              const desc = PURPOSE_DESCRIPTIONS[purpose as keyof typeof PURPOSE_DESCRIPTIONS];
              return (
                <Link key={purpose} href={`/purpose/${purpose}`} className="group flex items-start gap-4 glass-panel glass-panel-hover rounded-xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/50 text-amber-400 flex items-center justify-center shrink-0 group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-200 group-hover:text-amber-400 transition-colors leading-tight">{label}</h3>
                    <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{desc}</p>
                    <span className="inline-block text-xs font-bold text-amber-500/70 mt-2">{count} product{count !== 1 ? "s" : ""}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════ BROWSE BY MANUFACTURER ════════════════ */}
      <section id="browse-manufacturer" className="relative border-t border-slate-800/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 py-20">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-1.5 h-8 bg-amber-500 rounded-full" />
            <div>
              <h2 className="text-3xl font-bold text-slate-100 tracking-tight">Browse by Manufacturer</h2>
              <p className="text-slate-400 mt-1">Neutral lookup — all manufacturers treated equally</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {manufacturers.map((mfr) => (
              <Link
                key={mfr.slug}
                href={`/manufacturers/${mfr.slug}`}
                className="group inline-flex items-center gap-2 glass-panel glass-panel-hover rounded-xl px-5 py-3 transition-all hover:border-amber-500/30"
              >
                <span className="font-semibold text-slate-200 group-hover:text-amber-400 transition-colors">{mfr.name}</span>
                <span className="text-xs font-bold text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded-full">{mfr.productCount}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════ GUIDES ════════════════ */}
      {guides.length > 0 && (
        <section className="relative border-t border-slate-800/50 bg-slate-900/20">
          <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="flex items-end justify-between mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-2 block">Learn the Landscape</span>
                <h2 className="text-3xl font-bold text-slate-100 tracking-tight">Educational Guides</h2>
                <p className="text-slate-400 mt-2">Deep dives across ecosystems, upgrade paths, and installation strategy</p>
              </div>
              <Link href="/guides" className="text-sm text-amber-500 hover:text-amber-400 font-medium hidden sm:block transition-colors">
                View all &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {guides.map((guide) => (
                <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group block glass-panel glass-panel-hover rounded-xl p-6">
                  <div className="flex items-start gap-4">
                    <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/50 text-slate-400 group-hover:text-amber-400 group-hover:bg-amber-400/10 group-hover:border-amber-400/30 flex items-center justify-center transition-all">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-slate-200 group-hover:text-amber-400 transition-colors text-base leading-snug">{guide.title}</h3>
                      {guide.description && (
                        <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">{guide.description}</p>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ════════════════ CTA ════════════════ */}
      <section className="max-w-4xl mx-auto px-4 py-24 text-center">
        <div className="glass-panel p-10 md:p-16 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-amber-500/10 blur-[80px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-3xl font-bold mb-4 text-slate-100 relative z-10">Looking for something specific?</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto relative z-10">
            Search across our entire taxonomy of products and comprehensive installation guides to find exactly what you need.
          </p>
          <Link
            href="/search"
            className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 px-8 py-4 rounded-xl hover:bg-amber-400 transition-colors font-bold shadow-lg shadow-amber-500/20 relative z-10"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            Search Knowledge Base
          </Link>
        </div>
      </section>
    </div>
  );
}
