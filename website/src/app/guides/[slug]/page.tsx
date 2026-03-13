import Link from "next/link";
import { notFound } from "next/navigation";
import { getGuides, getGuide } from "@/lib/content";
import Markdown from "@/components/Markdown";

export function generateStaticParams() {
  return getGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} — AEA Avionics KB`,
    description: `${guide.title} — an educational guide for avionics technicians.`,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2"></div>
      
      <nav className="text-sm font-medium text-slate-500 mb-8 flex items-center gap-2 relative z-10 flex-wrap">
        <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </Link>
        <span className="text-slate-700">/</span>
        <Link href="/guides" className="hover:text-amber-400 transition-colors">
          Guides
        </Link>
        <span className="text-slate-700">/</span>
        <span className="text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">{guide.title}</span>
      </nav>

      <div className="relative z-10 glass-panel rounded-2xl p-6 md:p-10 shadow-xl mb-12">
        <Markdown content={guide.content} />
      </div>

      <div className="pt-8 border-t border-slate-800/50 flex items-center justify-between">
        <Link
          href="/guides"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 font-medium transition-colors"
        >
          &larr; Back to Guides
        </Link>
      </div>
    </div>
  );
}
