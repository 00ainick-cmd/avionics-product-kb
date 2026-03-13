"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface SearchResult {
  slug: string;
  category: string;
  title: string;
  manufacturer: string;
  priceRange: string;
  categoryLabel: string;
}

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [allProducts, setAllProducts] = useState<SearchResult[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products.json`)
      .then((r) => r.json())
      .then((data) => {
        setAllProducts(data);
        setLoaded(true);
      })
      .catch(() => setLoaded(true));
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const q = query.toLowerCase();
    setResults(
      allProducts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.manufacturer.toLowerCase().includes(q) ||
          p.categoryLabel.toLowerCase().includes(q)
      )
    );
  }, [query, allProducts]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 relative">
      <div className="absolute top-0 right-1/2 w-96 h-96 bg-amber-500/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
      
      <nav className="text-sm font-medium text-slate-500 mb-8 flex items-center gap-2 relative z-10">
        <Link href="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          Home
        </Link>
        <span className="text-slate-700">/</span>
        <span className="text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-md border border-slate-700/50">Search</span>
      </nav>

      <h1 className="text-4xl font-extrabold text-slate-100 mb-8 tracking-tight relative z-10">
        Search Products
      </h1>

      <div className="relative mb-12 z-10 group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="w-6 h-6 text-slate-500 group-focus-within:text-amber-400 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by product name, manufacturer, or category..."
          className="w-full pl-14 pr-6 py-5 bg-slate-900/50 backdrop-blur-sm border border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 text-slate-100 placeholder-slate-500 text-lg shadow-inner transition-all"
          autoFocus
        />
      </div>

      <div className="relative z-10">
        {!loaded ? (
          <div className="flex items-center gap-3 text-slate-400">
            <svg className="animate-spin w-5 h-5 text-amber-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            Loading products...
          </div>
        ) : query.trim() === "" ? (
          <div className="glass-panel p-8 text-center rounded-xl border-dashed border-slate-700">
            <p className="text-slate-400">
              Type a product name, manufacturer, or category to search across{" "}
              <span className="text-slate-200 font-medium">{allProducts.length}</span> products.
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="glass-panel p-8 text-center rounded-xl">
            <p className="text-slate-400">
              No products match <span className="text-slate-200 font-medium">&ldquo;{query}&rdquo;</span>
            </p>
          </div>
        ) : (
          <div className="grid gap-4">
            <p className="text-sm font-medium text-slate-500 mb-2 uppercase tracking-wide">
              {results.length} result{results.length !== 1 ? "s" : ""}
            </p>
            {results.map((product) => (
              <Link
                key={`${product.category}/${product.slug}`}
                href={`/products/${product.category}/${product.slug}`}
                className="group block glass-panel glass-panel-hover rounded-xl p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-lg font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                      {product.title}
                    </h2>
                    <p className="text-sm font-medium text-slate-500 mt-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-600"></span>
                      {product.manufacturer} &middot; {product.categoryLabel}
                    </p>
                  </div>
                  {product.priceRange && (
                    <div className="text-right hidden sm:block">
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
  );
}
