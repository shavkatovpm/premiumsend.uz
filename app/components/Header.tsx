"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl hero-gradient flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <span className="text-xl font-bold gradient-text">Premium Send</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary-light transition-all"
            >
              Bosh sahifa
            </Link>
            <Link
              href="/3-oylik"
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary-light transition-all"
            >
              3 oylik
            </Link>
            <Link
              href="/6-oylik"
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary-light transition-all"
            >
              6 oylik
            </Link>
            <Link
              href="/12-oylik"
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary-light transition-all"
            >
              12 oylik
            </Link>
            <Link
              href="/maqolalar"
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary-light transition-all"
            >
              Maqolalar
            </Link>
          </nav>

          {/* CTA Button */}
          <Link
            href="https://t.me/premiumsendbot"
            target="_blank"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/25"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z" />
            </svg>
            Sotib olish
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-section-alt transition-colors"
            aria-label="Menyu"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-card-border bg-white">
          <div className="px-4 py-3 space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary-light hover:text-primary transition-all"
            >
              Bosh sahifa
            </Link>
            <Link
              href="/3-oylik"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary-light hover:text-primary transition-all"
            >
              3 oylik Premium
            </Link>
            <Link
              href="/6-oylik"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary-light hover:text-primary transition-all"
            >
              6 oylik Premium
            </Link>
            <Link
              href="/12-oylik"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary-light hover:text-primary transition-all"
            >
              12 oylik Premium
            </Link>
            <Link
              href="/maqolalar"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary-light hover:text-primary transition-all"
            >
              Maqolalar
            </Link>
            <Link
              href="https://t.me/premiumsendbot"
              target="_blank"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-3 rounded-xl bg-primary text-white text-sm font-semibold text-center mt-2"
            >
              Sotib olish
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
