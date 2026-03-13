import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AEA Avionics Knowledge Base",
  description:
    "Avionics product knowledge base for technicians — learn products, sell confidently, compare intelligently.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased bg-slate-950 text-slate-50 min-h-screen flex flex-col`}>
        <Nav />
        <main className="flex-grow">{children}</main>
        <footer className="mt-auto border-t border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 py-12 text-center text-sm text-slate-400">
            <p className="font-semibold text-slate-300 tracking-wide uppercase text-xs">
              AEA Avionics Training
            </p>
            <p className="mt-1">
              Educational resource for avionics technicians. Prices are
              approximate and vary by shop and region.
            </p>
            <p className="mt-1">
              &copy; {new Date().getFullYear()} AEA Avionics Training. All
              rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
