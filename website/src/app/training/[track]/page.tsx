import Link from "next/link";
import { notFound } from "next/navigation";
import { getTrainingTracks, getSessionsByTrack } from "@/lib/content";

export function generateStaticParams() {
  return getTrainingTracks().map((t) => ({ track: t.slug }));
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

export default async function TrackPage({ params }: { params: Promise<{ track: string }> }) {
  const { track: trackSlug } = await params;
  const tracks = getTrainingTracks();
  const track = tracks.find((t) => t.slug === trackSlug);
  if (!track) notFound();

  const sessions = getSessionsByTrack(trackSlug);

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
        <Link href="/training" className="hover:text-amber-400 transition-colors">Training</Link>
        <span className="text-slate-700">/</span>
        <span className="text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">{track.title}</span>
      </nav>

      <div className="flex items-center gap-2 mb-2 relative z-10">
        <span className="text-xs font-bold uppercase tracking-widest text-amber-500/80">{track.provider}</span>
      </div>
      <h1 className="text-4xl font-extrabold text-slate-100 mb-4 tracking-tight relative z-10">
        {track.title}
      </h1>
      <p className="text-slate-400 mb-12 text-lg max-w-2xl relative z-10">
        {track.description}
      </p>

      <div className="grid grid-cols-1 gap-4 relative z-10">
        {sessions.map((session) => (
          <Link
            key={session.slug}
            href={`/training/${trackSlug}/${session.slug}`}
            className="group glass-panel glass-panel-hover rounded-xl p-6 flex items-start gap-4"
          >
            <div className="mt-0.5 flex-shrink-0 w-12 h-12 rounded-lg bg-slate-800/80 border border-slate-700/50 text-red-400 group-hover:text-amber-400 group-hover:bg-amber-400/10 group-hover:border-amber-400/30 flex items-center justify-center transition-all">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <h2 className="text-lg font-bold text-slate-200 group-hover:text-amber-400 transition-colors leading-snug">
                {session.title}
              </h2>
              <div className="flex items-center gap-2 mt-2 flex-wrap">
                <span className="text-xs text-slate-500 font-medium">AEA {session.conventionYear}</span>
                <span className="text-slate-700">·</span>
                <DifficultyBadge level={session.difficulty} />
                {session.relatedProducts.length > 0 && (
                  <>
                    <span className="text-slate-700">·</span>
                    <span className="text-xs text-slate-500">{session.relatedProducts.length} related product{session.relatedProducts.length !== 1 ? "s" : ""}</span>
                  </>
                )}
              </div>
              {session.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {session.tags.slice(0, 5).map((tag) => (
                    <span key={tag} className="text-[10px] text-slate-500 bg-slate-800/50 border border-slate-700/30 px-2 py-0.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <svg className="w-5 h-5 text-slate-600 group-hover:text-amber-400 transition-colors shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
