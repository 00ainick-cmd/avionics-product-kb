/**
 * Reusable product card grid — used on manufacturer, aircraft, purpose,
 * and category listing pages.
 */
import Link from "next/link";
import type { ProductMeta } from "@/lib/content";

interface ProductGridProps {
  products: ProductMeta[];
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="glass-panel p-12 text-center rounded-2xl">
        <p className="text-slate-500 italic">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      {products.map((product) => (
        <Link
          key={`${product.category}-${product.slug}`}
          href={`/products/${product.category}/${product.slug}`}
          className="group block glass-panel glass-panel-hover rounded-xl p-6"
        >
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                {product.title}
              </h2>
              <div className="flex flex-wrap items-center gap-3 mt-1.5 text-sm text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                  {product.manufacturer}
                </span>
                <span className="text-slate-700">|</span>
                <span>{product.categoryLabel}</span>
              </div>
            </div>
            {product.priceRange && (
              <div className="text-right shrink-0">
                <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">
                  Retail Ref
                </span>
                <span className="text-sm font-bold text-amber-500 bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-lg whitespace-nowrap">
                  {product.priceRange}
                </span>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}
