"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const categories = [
  { slug: "autopilots", label: "Autopilots" },
  { slug: "efis-pfd", label: "Flight Displays" },
  { slug: "gps-nav", label: "GPS & Navigation" },
  { slug: "transponders", label: "Transponders & ADS-B" },
  { slug: "audio-panels", label: "Audio Panels" },
  { slug: "traffic-systems", label: "Traffic Awareness" },
  { slug: "weather-radar", label: "Weather Radar" },
  { slug: "comm-radios", label: "Comm Radios" },
  { slug: "heading-systems", label: "Heading Systems" },
  { slug: "elts", label: "ELTs" },
];

const aircraftSizes = [
  { slug: "piston-single", label: "Piston Singles" },
  { slug: "piston-twin", label: "Piston Twins" },
  { slug: "turboprop", label: "Turboprops" },
  { slug: "light-jet", label: "Light Jets" },
];

const purposes = [
  { slug: "ifr-capability", label: "IFR Capability" },
  { slug: "ads-b-compliance", label: "ADS-B Compliance" },
  { slug: "panel-modernization", label: "Panel Modernization" },
  { slug: "safety-upgrades", label: "Safety Upgrades" },
  { slug: "communication", label: "Communication" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-slate-950/80 backdrop-blur-md border-b border-white/5 text-slate-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 font-bold text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 rounded-md">
            <span className="text-amber-400">AEA</span>
            <span className="hidden sm:inline">Avionics Knowledge Base</span>
            <span className="sm:hidden">Avionics KB</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {/* Products dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-amber-400 transition-colors py-4 focus:outline-none focus-visible:text-amber-400">
                Products
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="glass-panel rounded-lg shadow-2xl py-2 border border-slate-700/50">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/products/${cat.slug}`}
                      className="block px-4 py-2 hover:bg-white/5 hover:text-amber-400 transition-colors text-sm font-medium"
                    >
                      {cat.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Browse dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 hover:text-amber-400 transition-colors py-4 focus:outline-none focus-visible:text-amber-400">
                Browse
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 top-full pt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="glass-panel rounded-lg shadow-2xl py-2 border border-slate-700/50">
                  {/* By Aircraft */}
                  <p className="px-4 pt-2 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    By Aircraft
                  </p>
                  {aircraftSizes.map((a) => (
                    <Link
                      key={a.slug}
                      href={`/aircraft/${a.slug}`}
                      className="block px-4 py-1.5 hover:bg-white/5 hover:text-amber-400 transition-colors text-sm font-medium"
                    >
                      {a.label}
                    </Link>
                  ))}

                  <div className="my-2 border-t border-slate-700/50" />

                  {/* By Purpose */}
                  <p className="px-4 pt-1 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    By Purpose
                  </p>
                  {purposes.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/purpose/${p.slug}`}
                      className="block px-4 py-1.5 hover:bg-white/5 hover:text-amber-400 transition-colors text-sm font-medium"
                    >
                      {p.label}
                    </Link>
                  ))}

                  <div className="my-2 border-t border-slate-700/50" />

                  {/* By Manufacturer */}
                  <p className="px-4 pt-1 pb-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    By Manufacturer
                  </p>
                  <Link
                    href="/#manufacturers"
                    className="block px-4 py-1.5 hover:bg-white/5 hover:text-amber-400 transition-colors text-sm font-medium"
                  >
                    All Manufacturers →
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/guides" className={`hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 rounded-md px-1 ${pathname.startsWith("/guides") ? "text-amber-400" : ""}`}>
              Guides
            </Link>
            <Link href="/search" className="hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 rounded-md p-1">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/50 rounded-md" onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl absolute top-full left-0 w-full px-4 shadow-xl">
            <Link href="/search" className="block py-2 hover:text-amber-400" onClick={() => setMenuOpen(false)}>
              Search
            </Link>
            <Link href="/guides" className="block py-2 hover:text-amber-400" onClick={() => setMenuOpen(false)}>
              Guides
            </Link>

            {/* Product Categories */}
            <div className="mt-2 pt-2 border-t border-slate-700">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Product Categories</p>
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/products/${cat.slug}`}
                  className="block py-1.5 text-sm hover:text-amber-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {cat.label}
                </Link>
              ))}
            </div>

            {/* By Aircraft */}
            <div className="mt-2 pt-2 border-t border-slate-700">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">By Aircraft</p>
              {aircraftSizes.map((a) => (
                <Link
                  key={a.slug}
                  href={`/aircraft/${a.slug}`}
                  className="block py-1.5 text-sm hover:text-amber-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {a.label}
                </Link>
              ))}
            </div>

            {/* By Purpose */}
            <div className="mt-2 pt-2 border-t border-slate-700">
              <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">By Purpose</p>
              {purposes.map((p) => (
                <Link
                  key={p.slug}
                  href={`/purpose/${p.slug}`}
                  className="block py-1.5 text-sm hover:text-amber-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {p.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
