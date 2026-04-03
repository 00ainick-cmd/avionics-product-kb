import Link from "next/link";
import { getConventionYears, getSessionsByYear } from "@/lib/content";

export const metadata = {
  title: "Convention Archive — AEA Avionics KB",
  description: "Browse training sessions from past AEA conventions by year.",
};

export default function ConventionsPage() {
  const years = getConventionYears();

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
        <span className="text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">Conventions</span>
      </nav>

      <h1 className="text-4xl font-extrabold text-slate-100 mb-4 tracking-tight relative z-10">
        Convention Archive
      </h1>
      <p className="text-slate-400 mb-12 text-lg max-w-2xl relative z-10">
        Browse training sessions and presentations from past AEA conventions.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
        {years.map((year) => {
          const sessions = getSessionsByYear(year);
          return (
            <Link
              key={year}
              href={`/conventions/${year}`}
              className="group glass-panel glass-panel-hover rounded-2xl p-8 flex flex-col items-center text-center gap-3"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-800/80 border border-slate-700/50 text-amber-400 flex items-center justify-center group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-all">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-200 group-hover:text-amber-400 transition-colors">
                {year}
              </h2>
              <p className="text-sm text-slate-500">AEA Convention</p>
              <span className="text-xs font-bold text-amber-500/70 bg-amber-500/5 border border-amber-500/10 px-3 py-1 rounded-full mt-2">
                {sessions.length} session{sessions.length !== 1 ? "s" : ""}
              </span>
            </Link>
          );
        })}
      </div>

      {years.length === 0 && (
        <div className="glass-panel p-12 text-center rounded-2xl relative z-10">
          <p className="text-slate-500 italic">No convention archives available yet.</p>
        </div>
      )}
    </div>
  );
}
