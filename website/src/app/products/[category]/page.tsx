import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  getProductCategories,
  getProductsByCategory,
  CATEGORY_LABELS,
} from "@/lib/content";
import { getCategoryIcon } from "@/components/CategoryIcons";
import { getCategoryImage } from "@/lib/product-images";

export function generateStaticParams() {
  return getProductCategories().map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const label = CATEGORY_LABELS[category];
  if (!label) return {};
  return {
    title: `${label} — AEA Avionics KB`,
    description: `Browse ${label} products for general aviation aircraft.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const label = CATEGORY_LABELS[category];
  if (!label) notFound();

  const products = getProductsByCategory(category);

  const heroImage = getCategoryImage(category);
  const IconComp = getCategoryIcon(category);

  return (
    <div className="relative">
      {/* Category hero banner */}
      {heroImage && (
        <div className="relative h-48 md:h-56 overflow-hidden">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 to-slate-950" />
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 py-12 relative">
        <nav className="text-sm font-medium text-slate-500 mb-8 flex items-center gap-2 relative z-10">
          <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
          <span className="text-slate-700">/</span>
          <span className="text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">{label}</span>
        </nav>

        <div className="flex items-center gap-4 mb-3 relative z-10">
          <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <IconComp className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-slate-100 tracking-tight">{label}</h1>
            <p className="text-slate-400 text-lg mt-1">
              {products.length} product{products.length !== 1 ? "s" : ""} in this category
            </p>
          </div>
        </div>

      <div className="mt-10">
      {products.length === 0 ? (
        <div className="glass-panel p-12 text-center rounded-2xl relative z-10">
          <p className="text-slate-500 italic">
            No products in this category yet.
          </p>
        </div>
      ) : (
        <div className="grid gap-4 relative z-10">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${category}/${product.slug}`}
              className="group block glass-panel glass-panel-hover rounded-xl p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                    {product.title}
                  </h2>
                  <p className="text-sm font-medium text-slate-500 mt-1.5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50"></span>
                    {product.manufacturer}
                  </p>
                </div>
                {product.priceRange && (
                  <div className="text-right">
                    <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">Retail Ref</span>
                    <span className="text-sm font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg whitespace-nowrap">
                      {product.priceRange}
                    </span>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}
      </div>
      </div>
    </div>
  );
}
