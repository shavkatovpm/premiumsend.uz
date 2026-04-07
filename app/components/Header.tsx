"use client";

import Link from "next/link";
import { useState } from "react";

interface HeaderProps {
  locale?: "uz" | "ru";
}

export default function Header({ locale = "uz" }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const prefix = locale === "ru" ? "/ru" : "";
  const altPrefix = locale === "ru" ? "" : "/ru";
  const altLabel = locale === "ru" ? "UZ" : "RU";

  const nav = locale === "ru"
    ? {
        home: "Главная",
        m1: "1 месяц",
        m3: "3 месяца",
        m6: "6 месяцев",
        m12: "12 месяцев",
        articles: "Статьи",
        buy: "Купить",
      }
    : {
        home: "Bosh sahifa",
        m1: "1 oylik",
        m3: "3 oylik",
        m6: "6 oylik",
        m12: "12 oylik",
        articles: "Maqolalar",
        buy: "Sotib olish",
      };

  const mobileNav = locale === "ru"
    ? {
        home: "Главная",
        m1: "1 месяц Premium",
        m3: "3 месяца Premium",
        m6: "6 месяцев Premium",
        m12: "12 месяцев Premium",
        articles: "Статьи",
        buy: "Купить",
      }
    : {
        home: "Bosh sahifa",
        m1: "1 oylik Premium",
        m3: "3 oylik Premium",
        m6: "6 oylik Premium",
        m12: "12 oylik Premium",
        articles: "Maqolalar",
        buy: "Sotib olish",
      };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`${prefix}/`} className="flex items-center gap-2">
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
              href={`${prefix}/`}
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary-light transition-all"
            >
              {nav.home}
            </Link>
            <Link
              href={`${prefix}/1-oylik`}
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary-light transition-all"
            >
              {nav.m1}
            </Link>
            <Link
              href={`${prefix}/3-oylik`}
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary-light transition-all"
            >
              {nav.m3}
            </Link>
            <Link
              href={`${prefix}/6-oylik`}
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary-light transition-all"
            >
              {nav.m6}
            </Link>
            <Link
              href={`${prefix}/12-oylik`}
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary-light transition-all"
            >
              {nav.m12}
            </Link>
            <Link
              href={`${prefix}/maqolalar`}
              className="px-4 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary-light transition-all"
            >
              {nav.articles}
            </Link>
            {/* Language Switcher */}
            <Link
              href={`${altPrefix}/`}
              className="ml-2 px-3 py-1.5 rounded-lg text-xs font-bold border border-card-border text-foreground/60 hover:text-primary hover:border-primary transition-all"
            >
              {altLabel}
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
            {nav.buy}
          </Link>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 md:hidden">
            <Link
              href={`${altPrefix}/`}
              className="px-3 py-1.5 rounded-lg text-xs font-bold border border-card-border text-foreground/60 hover:text-primary hover:border-primary transition-all"
            >
              {altLabel}
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-section-alt transition-colors"
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
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 top-16 bg-black/20 z-40"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="md:hidden fixed left-0 right-0 top-16 z-50 border-t border-card-border bg-white shadow-xl">
            <div className="px-4 py-3 space-y-1">
              <Link
                href={`${prefix}/`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary-light hover:text-primary transition-all"
              >
                {mobileNav.home}
              </Link>
              <Link
                href={`${prefix}/1-oylik`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary-light hover:text-primary transition-all"
              >
                {mobileNav.m1}
              </Link>
              <Link
                href={`${prefix}/3-oylik`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary-light hover:text-primary transition-all"
              >
                {mobileNav.m3}
              </Link>
              <Link
                href={`${prefix}/6-oylik`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary-light hover:text-primary transition-all"
              >
                {mobileNav.m6}
              </Link>
              <Link
                href={`${prefix}/12-oylik`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary-light hover:text-primary transition-all"
              >
                {mobileNav.m12}
              </Link>
              <Link
                href={`${prefix}/maqolalar`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium hover:bg-primary-light hover:text-primary transition-all"
              >
                {mobileNav.articles}
              </Link>
              <Link
                href="https://t.me/premiumsendbot"
                target="_blank"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl bg-primary text-white text-sm font-semibold text-center mt-2"
              >
                {mobileNav.buy}
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
