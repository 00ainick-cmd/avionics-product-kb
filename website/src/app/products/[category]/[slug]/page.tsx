import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getProductCategories,
  getProductsByCategory,
  getProduct,
  CATEGORY_LABELS,
} from "@/lib/content";
import { getProductImage } from "@/lib/product-images";
import { getCategoryIcon } from "@/components/CategoryIcons";
import Markdown from "@/components/Markdown";

export function generateStaticParams() {
  const categories = getProductCategories();
  const params: { category: string; slug: string }[] = [];
  for (const category of categories) {
    const products = getProductsByCategory(category);
    for (const product of products) {
      params.push({ category, slug: product.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const product = getProduct(category, slug);
  if (!product) return {};
  return {
    title: `${product.title} — AEA Avionics KB`,
    description: `${product.title} by ${product.manufacturer}. ${product.categoryLabel} overview for avionics technicians.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const product = getProduct(category, slug);
  if (!product) notFound();

  const categoryLabel = CATEGORY_LABELS[category] || category;
  const heroImage = getProductImage(slug, category, product.heroImage);
  const IconComp = getCategoryIcon(category);

  return (
    <div className="relative">
      {/* ════════════════ PRODUCT HERO ════════════════ */}
      <section className="relative h-64 md:h-80 overflow-hidden">
        {/* Hero image */}
        {heroImage.src.startsWith("/") ? (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroImage.src}')` }}
          />
        ) : (
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover"
            priority
          />
        )}

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-[#020617]/80 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/60 to-transparent" />

        {/* Product info overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 pb-8 w-full">
            {/* Breadcrumb */}
            <nav className="text-sm font-medium text-slate-400 mb-4 flex items-center gap-2 flex-wrap">
              <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </Link>
              <span className="text-slate-600">/</span>
              <Link
                href={`/products/${category}`}
                className="hover:text-amber-400 transition-colors"
              >
                {categoryLabel}
              </Link>
            </nav>

            {/* Title row */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 backdrop-blur-sm">
                <IconComp className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
                  {product.title}
                </h1>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="text-sm font-medium text-slate-300">
                    {product.manufacturer}
                  </span>
                  {product.priceRange && (
                    <>
                      <span className="text-slate-600">•</span>
                      <span className="text-sm font-bold text-amber-400">
                        {product.priceRange}
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo credit / product-specific indicator */}
        {heroImage.isProductSpecific && (
          <div className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-slate-400/60 bg-slate-950/30 backdrop-blur-sm px-2 py-1 rounded-md border border-white/5">
            Product Photo
          </div>
        )}
      </section>

      {/* ════════════════ QUICK SPECS BAR ════════════════ */}
      <div className="border-b border-slate-800/50 bg-slate-900/30">
        <div className="max-w-4xl mx-auto px-4 py-4 flex flex-wrap items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Category</span>
            <span className="bg-amber-500/10 border border-amber-500/20 text-amber-500 px-2.5 py-1 rounded-full text-xs font-bold">
              {categoryLabel}
            </span>
          </div>
          <div className="w-px h-5 bg-slate-800 hidden sm:block" />
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Manufacturer</span>
            <span className="text-slate-300 font-medium text-xs">{product.manufacturer}</span>
          </div>
          {product.priceRange && (
            <>
              <div className="w-px h-5 bg-slate-800 hidden sm:block" />
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Retail Ref</span>
                <span className="text-amber-400 font-bold text-xs">{product.priceRange}</span>
              </div>
            </>
          )}
        </div>
      </div>

      {/* ════════════════ ARTICLE CONTENT ════════════════ */}
      <div className="max-w-4xl mx-auto px-4 py-12 relative">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2" />

        <div className="relative z-10 glass-panel rounded-2xl p-6 md:p-10 shadow-xl mb-12">
          <Markdown content={product.content} category={category} />
        </div>

        {/* Back navigation */}
        <div className="pt-8 border-t border-slate-800/50 flex items-center justify-between">
          <Link
            href={`/products/${category}`}
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 font-medium transition-colors group"
          >
            <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to {categoryLabel}
          </Link>
          <Link
            href="/search"
            className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-amber-400 font-medium transition-colors"
          >
            Search all products
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
