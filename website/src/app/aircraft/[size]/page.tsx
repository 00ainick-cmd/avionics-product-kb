import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProductsByAircraftSize,
  AIRCRAFT_SIZE_LABELS,
  AIRCRAFT_SIZES,
  type AircraftSize,
} from "@/lib/content";
import { AIRCRAFT_SIZE_DESCRIPTIONS } from "@/lib/product-classifications";
import { getAircraftIcon } from "@/components/CategoryIcons";
import ProductGrid from "@/components/ProductGrid";

export function generateStaticParams() {
  return AIRCRAFT_SIZES.map((size) => ({ size }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ size: string }>;
}) {
  const { size } = await params;
  const label = AIRCRAFT_SIZE_LABELS[size as AircraftSize];
  if (!label) return {};
  return {
    title: `${label} Avionics — AEA Avionics KB`,
    description: `Avionics products compatible with ${label.toLowerCase()} aircraft.`,
  };
}

export default async function AircraftSizePage({
  params,
}: {
  params: Promise<{ size: string }>;
}) {
  const { size } = await params;
  const label = AIRCRAFT_SIZE_LABELS[size as AircraftSize];
  if (!label) notFound();

  const products = getProductsByAircraftSize(size as AircraftSize);
  const description = AIRCRAFT_SIZE_DESCRIPTIONS[size as AircraftSize];
  const IconComp = getAircraftIcon(size);

  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm font-medium text-slate-500 mb-8 flex items-center gap-2">
          <Link
            href="/"
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Home
          </Link>
          <span className="text-slate-700">/</span>
          <span className="text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">
            {label}
          </span>
        </nav>

        {/* Header */}
        <div className="flex items-center gap-4 mb-3">
          <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
            <IconComp className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-4xl font-extrabold text-slate-100 tracking-tight">
              {label}
            </h1>
            <p className="text-slate-400 text-lg mt-1">
              {products.length} product{products.length !== 1 ? "s" : ""}{" "}
              compatible
            </p>
          </div>
        </div>
        {description && (
          <p className="text-slate-500 mb-10 ml-[4.5rem]">{description}</p>
        )}

        {/* Product list */}
        <ProductGrid products={products} />

        {/* Back */}
        <div className="pt-8 mt-8 border-t border-slate-800/50">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 font-medium transition-colors group"
          >
            <svg
              className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
