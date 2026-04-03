import Link from "next/link";
import { notFound } from "next/navigation";
import { getConventionYears, getSessionsByYear } from "@/lib/content";
import type { TrainingSessionMeta } from "@/lib/content";

export function generateStaticParams() {
  return getConventionYears().map((y) => ({ year: String(y) }));
}

function DifficultyBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    beginner: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    intermediate: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    advanced: "bg-red-500/10 text-red-400 border-red-500/20",
  };
  return (
    <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${colors[level] || colors.intermediate}`}>
      {level}
    </span>
  );
}

const CATEGORY_LABELS: Record<string, string> = {
  "oem-technical": "OEM & Technical",
  regulatory: "Regulatory",
  business: "Business Operations",
  "panel-planning": "Panel Planning",
};

export default async function ConventionYearPage({ params }: { params: Promise<{ year: string }> }) {
  const { year: yearStr } = await params;
  const year = parseInt(yearStr, 10);
  if (isNaN(year)) notFound();

  const sessions = getSessionsByYear(year);
  if (sessions.length === 0) notFound();

  // Group by category
  const grouped = sessions.reduce((acc, s) => {
    const cat = s.category || "uncategorized";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(s);
    return acc;
  }, {} as Record<string, TrainingSessionMeta[]>);

  const categoryOrder = ["oem-technical", "regulatory", "business", "panel-planning"];
  const sortedCategories = Object.keys(grouped).sort(
    (a, b) => (categoryOrder.indexOf(a) === -1 ? 99 : categoryOrder.indexOf(a)) - (categoryOrder.indexOf(b) === -1 ? 99 : categoryOrder.indexOf(b))
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />

      <nav className="text-sm font-medium text-slate-500 mb-8 flex items-center gap-2 relative z-10">
        <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </Link>
        <span className="text-slate-700">/</span>
        <Link href="/conventions" className="hover:text-amber-400 transition-colors">Conventions</Link>
        <span className="text-slate-700">/</span>
        <span className="text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">{year}</span>
      </nav>

      <h1 className="text-4xl font-extrabold text-slate-100 mb-2 tracking-tight relative z-10">
        AEA Convention {year}
      </h1>
      <p className="text-slate-400 mb-12 text-lg relative z-10">
        {sessions.length} training session{sessions.length !== 1 ? "s" : ""} presented
      </p>

      <div className="space-y-12 relative z-10">
        {sortedCategories.map((cat) => (
          <section key={cat}>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-500/80">
                {CATEGORY_LABELS[cat] || cat}
              </span>
              <div className="flex-1 h-px bg-slate-800" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {grouped[cat].map((session) => (
                <Link
                  key={`${session.track}/${session.slug}`}
                  href={`/training/${session.track}/${session.slug}`}
                  className="group glass-panel glass-panel-hover rounded-xl p-5 flex items-start gap-4"
                >
                  <div className="mt-0.5 flex-shrink-0 w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/50 text-red-400 group-hover:text-amber-400 group-hover:bg-amber-400/10 group-hover:border-amber-400/30 flex items-center justify-center transition-all">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-slate-200 group-hover:text-amber-400 transition-colors leading-snug">
                      {session.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                      <span className="text-xs text-slate-500 font-medium">{session.provider}</span>
                      <span className="text-slate-700">·</span>
                      <DifficultyBadge level={session.difficulty} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
