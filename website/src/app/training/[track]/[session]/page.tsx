import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  getTrainingTracks,
  getSessionsByTrack,
  getSession,
  getAllProducts,
} from "@/lib/content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function generateStaticParams() {
  const tracks = getTrainingTracks();
  const params: { track: string; session: string }[] = [];
  for (const t of tracks) {
    const sessions = getSessionsByTrack(t.slug);
    for (const s of sessions) {
      params.push({ track: t.slug, session: s.slug });
    }
  }
  return params;
}

function DifficultyBadge({ level }: { level: string }) {
  const colors: Record<string, string> = {
    beginner: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    intermediate: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    advanced: "bg-red-500/10 text-red-400 border-red-500/20",
  };
  return (
    <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full border ${colors[level] || colors.intermediate}`}>
      {level}
    </span>
  );
}

export default async function SessionPage({
  params,
}: {
  params: Promise<{ track: string; session: string }>;
}) {
  const { track: trackSlug, session: sessionSlug } = await params;
  const tracks = getTrainingTracks();
  const track = tracks.find((t) => t.slug === trackSlug);
  if (!track) notFound();

  const session = getSession(trackSlug, sessionSlug);
  if (!session) notFound();

  // Resolve related product names
  const allProducts = getAllProducts();
  const relatedProducts = session.relatedProducts
    .map((slug) => {
      const product = allProducts.find((p) => p.slug === slug);
      return product ? { slug: product.slug, title: product.title, category: product.category } : null;
    })
    .filter(Boolean) as { slug: string; title: string; category: string }[];

  // Build full download URL with basePath
  const downloadUrl = session.fileUrl ? `${basePath}${session.fileUrl}` : "";

  // Extract h2 headings from content for table of contents
  const headings = session.content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.replace("## ", "").trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      return { text, id };
    });

  return (
    <div className="max-w-5xl mx-auto px-4 py-20 relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />

      {/* Breadcrumb */}
      <nav className="text-sm font-medium text-slate-500 mb-8 flex items-center gap-2 relative z-10 flex-wrap">
        <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </Link>
        <span className="text-slate-700">/</span>
        <Link href="/training" className="hover:text-amber-400 transition-colors">Training</Link>
        <span className="text-slate-700">/</span>
        <Link href={`/training/${trackSlug}`} className="hover:text-amber-400 transition-colors">{track.title}</Link>
        <span className="text-slate-700">/</span>
        <span className="text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50 truncate max-w-[250px]">
          {session.title}
        </span>
      </nav>

      {/* Hero Header */}
      <header className="relative z-10 mb-10 glass-panel rounded-2xl p-8 md:p-10 border-l-4 border-amber-500">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-500">{session.provider}</span>
          <span className="text-slate-700">·</span>
          <span className="text-xs text-slate-400">AEA Convention {session.conventionYear}</span>
          <span className="text-slate-700">·</span>
          <DifficultyBadge level={session.difficulty} />
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-slate-100 mb-4 tracking-tight leading-tight">
          {session.title}
        </h1>

        {/* Tags */}
        {session.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {session.tags.map((tag) => (
              <span key={tag} className="text-[10px] text-slate-400 bg-slate-800/60 border border-slate-700/30 px-2.5 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Download Button */}
        {downloadUrl && (
          <a
            href={downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 text-slate-950 px-5 py-2.5 rounded-xl hover:bg-amber-400 transition-colors font-bold text-sm shadow-lg shadow-amber-500/20"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Original {session.fileType.toUpperCase()} Slides
          </a>
        )}
      </header>

      {/* Two-column layout: TOC sidebar + content */}
      <div className="flex gap-8 relative z-10">
        {/* Sidebar TOC - desktop only */}
        {headings.length > 2 && (
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 glass-panel rounded-xl p-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-amber-500/80 mb-4">In This Session</h3>
              <nav className="space-y-1.5">
                {headings.map((h) => (
                  <a
                    key={h.id}
                    href={`#${h.id}`}
                    className="block text-xs text-slate-400 hover:text-amber-400 transition-colors py-1 leading-snug"
                  >
                    {h.text}
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        )}

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <div className="prose prose-invert prose-amber max-w-none
            prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-0
            prose-h2:text-2xl prose-h2:mt-14 prose-h2:mb-5 prose-h2:pb-3 prose-h2:border-b prose-h2:border-slate-800/50
            prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-amber-400/90
            prose-h4:text-base prose-h4:mt-6 prose-h4:mb-2 prose-h4:text-slate-200
            prose-p:text-slate-300 prose-p:leading-relaxed
            prose-li:text-slate-300 prose-li:leading-relaxed
            prose-strong:text-slate-100
            prose-a:text-amber-400 prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-amber-500/30 prose-blockquote:bg-slate-800/30 prose-blockquote:rounded-r-xl prose-blockquote:py-3 prose-blockquote:px-5 prose-blockquote:not-italic
            prose-blockquote:text-slate-300
            prose-table:text-sm
            prose-th:text-slate-300 prose-th:font-semibold prose-th:bg-slate-800/50 prose-th:px-4 prose-th:py-2
            prose-td:px-4 prose-td:py-2 prose-td:text-slate-400 prose-td:border-slate-800/50
            prose-code:text-amber-400 prose-code:bg-slate-800/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
            prose-hr:border-slate-800/50 prose-hr:my-10
          ">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h2: ({ children, ...props }) => {
                  const text = typeof children === "string" ? children : String(children);
                  const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
                  return <h2 id={id} {...props}>{children}</h2>;
                },
              }}
            >
              {session.content}
            </ReactMarkdown>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <section className="mt-16 pt-8 border-t border-slate-800/50">
              <h2 className="text-xl font-bold text-slate-100 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Products Covered In This Training
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {relatedProducts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/products/${p.category}/${p.slug}`}
                    className="group glass-panel glass-panel-hover rounded-xl p-4 flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-md bg-slate-800/80 border border-slate-700/50 text-amber-400 flex items-center justify-center group-hover:bg-amber-400/10 transition-all">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    <span className="font-medium text-slate-200 group-hover:text-amber-400 transition-colors">{p.title}</span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
