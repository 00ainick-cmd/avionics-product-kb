import Link from "next/link";
import {
  getTrainingTracks,
  getAllTrainingSessions,
  getConventionYears,
  getTrainingCategories,
} from "@/lib/content";

export const metadata = {
  title: "Training — AEA Avionics KB",
  description:
    "AEA convention training sessions, OEM workshops, and professional development — browse by track, topic, or convention year.",
};

function DifficultyBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    beginner: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    intermediate: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    advanced: "bg-red-500/10 text-red-400 border-red-500/20",
  };
  return (
    <span
      className={`text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${colors[level] || colors.intermediate}`}
    >
      {level}
    </span>
  );
}

export default function TrainingPage() {
  const tracks = getTrainingTracks();
  const allSessions = getAllTrainingSessions();
  const years = getConventionYears();
  const categories = getTrainingCategories();

  return (
    <div className="max-w-7xl mx-auto px-4 py-20 relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />

      <nav className="text-sm font-medium text-slate-500 mb-8 flex items-center gap-2 relative z-10">
        <Link
          href="/"
          className="hover:text-amber-400 transition-colors flex items-center gap-1"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </Link>
        <span className="text-slate-700">/</span>
        <span className="text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">
          Training
        </span>
      </nav>

      <h1 className="text-4xl font-extrabold text-slate-100 mb-4 tracking-tight relative z-10">
        Training Sessions
      </h1>
      <p className="text-slate-400 mb-6 text-lg max-w-3xl relative z-10">
        AEA convention presentations, OEM workshops, and professional
        development resources. Download slides and session materials.
      </p>

      {/* Stats */}
      <div className="flex flex-wrap gap-6 mb-12 relative z-10">
        <div className="glass-panel rounded-xl px-5 py-3 flex items-center gap-3">
          <span className="text-2xl font-bold text-amber-400">{allSessions.length}</span>
          <span className="text-sm text-slate-400">Sessions</span>
        </div>
        <div className="glass-panel rounded-xl px-5 py-3 flex items-center gap-3">
          <span className="text-2xl font-bold text-amber-400">{tracks.length}</span>
          <span className="text-sm text-slate-400">Tracks</span>
        </div>
        <div className="glass-panel rounded-xl px-5 py-3 flex items-center gap-3">
          <span className="text-2xl font-bold text-amber-400">{years.length}</span>
          <span className="text-sm text-slate-400">Convention {years.length === 1 ? "Year" : "Years"}</span>
        </div>
      </div>

      {/* Training Tracks */}
      <section className="mb-16 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-8 bg-amber-500 rounded-full" />
          <div>
            <h2 className="text-2xl font-bold text-slate-100">By Training Track</h2>
            <p className="text-slate-400 mt-1 text-sm">Browse sessions grouped by provider and topic</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tracks.map((track) => (
            <Link
              key={track.slug}
              href={`/training/${track.slug}`}
              className="group glass-panel glass-panel-hover rounded-xl p-6 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-800/80 border border-slate-700/50 text-amber-400 flex items-center justify-center group-hover:bg-amber-400/10 group-hover:border-amber-400/30 transition-all">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                      {track.title}
                    </h3>
                    <span className="text-xs text-slate-500 font-medium">{track.provider}</span>
                  </div>
                </div>
                <span className="text-xs font-bold text-amber-500/70 bg-amber-500/5 border border-amber-500/10 px-2.5 py-1 rounded-full">
                  {track.sessionCount}
                </span>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                {track.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* By Topic Category */}
      <section className="mb-16 relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-8 bg-amber-500 rounded-full" />
          <div>
            <h2 className="text-2xl font-bold text-slate-100">By Topic</h2>
            <p className="text-slate-400 mt-1 text-sm">Filter by session category</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <div
              key={cat.category}
              className="glass-panel rounded-xl px-5 py-3 flex items-center gap-3"
            >
              <span className="font-semibold text-slate-200">{cat.label}</span>
              <span className="text-xs font-bold text-slate-500 bg-slate-800/50 px-2 py-0.5 rounded-full">
                {cat.count}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Convention Years */}
      {years.length > 0 && (
        <section className="mb-16 relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1.5 h-8 bg-amber-500 rounded-full" />
            <div>
              <h2 className="text-2xl font-bold text-slate-100">By Convention Year</h2>
              <p className="text-slate-400 mt-1 text-sm">Browse sessions from past AEA conventions</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {years.map((year) => (
              <Link
                key={year}
                href={`/conventions/${year}`}
                className="group glass-panel glass-panel-hover rounded-xl px-6 py-4 text-center"
              >
                <span className="text-2xl font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                  {year}
                </span>
                <p className="text-xs text-slate-500 mt-1 font-medium">AEA Convention</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* All Sessions */}
      <section className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1.5 h-8 bg-amber-500 rounded-full" />
          <div>
            <h2 className="text-2xl font-bold text-slate-100">All Sessions</h2>
            <p className="text-slate-400 mt-1 text-sm">{allSessions.length} training sessions available</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {allSessions.map((session) => (
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
                  <span className="text-xs text-slate-500">AEA {session.conventionYear}</span>
                  <span className="text-slate-700">·</span>
                  <DifficultyBadge level={session.difficulty} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
