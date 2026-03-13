import Link from "next/link";
import { getGuides } from "@/lib/content";

export const metadata = {
  title: "Guides — AEA Avionics KB",
  description:
    "Educational guides for avionics technicians — upgrade paths, ecosystem overviews, installation planning, and more.",
};

export default function GuidesPage() {
  const guides = getGuides();

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2"></div>
      
      <nav className="text-sm font-medium text-slate-500 mb-8 flex items-center gap-2 relative z-10">
        <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </Link>
        <span className="text-slate-700">/</span>
        <span className="text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">Guides</span>
      </nav>

      <h1 className="text-4xl font-extrabold text-slate-100 mb-4 tracking-tight relative z-10">
        Educational Guides
      </h1>
      <p className="text-slate-400 mb-12 text-lg max-w-2xl relative z-10">
        Cross-cutting guides that help you understand upgrade paths, compare
        ecosystems, and plan installations.
      </p>

      {guides.length === 0 ? (
        <div className="glass-panel p-12 text-center rounded-2xl relative z-10">
          <p className="text-slate-500 italic">No guides available yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
          {guides.map((guide) => (
            <Link
              key={guide.slug}
              href={`/guides/${guide.slug}`}
              className="group block glass-panel glass-panel-hover rounded-xl p-6"
            >
              <div className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 text-slate-500 group-hover:text-amber-400 transition-colors">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-lg font-bold text-slate-200 group-hover:text-amber-400 transition-colors leading-snug">
                  {guide.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
