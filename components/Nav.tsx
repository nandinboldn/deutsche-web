"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollY } from "@/hooks/useScrollY";
import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/i18n";
import LanguageToggle from "./LanguageToggle";

const PHONE = "+976 9911 2233";

const navLinks = [
  { key: "navProducts", href: "/products" },
  { key: "navStory",    href: "/story" },
  { key: "navContact",  href: "/contact" },
];

export default function Nav() {
  const { lang } = useLanguage();
  const scrollY = useScrollY();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const solid = scrollY > 60 || menuOpen;

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* ── MAIN NAV BAR ── */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-expo ${
          solid
            ? "bg-charcoal/97 backdrop-blur-sm shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between gap-4">

          {/* ── LOGO ── */}
          <Link href="/" className="flex-shrink-0 flex items-center" aria-label="Deutsche Bäckerei — Home">
            <img
              src="/logo.png"
              alt="Deutsche Bäckerei"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => {
              const active = pathname === l.href || (l.href !== "/" && pathname?.startsWith(l.href));
              return (
                <Link
                  key={l.key}
                  href={l.href}
                  className={`section-label transition-colors duration-300 ${
                    active ? "text-flour" : "text-flour/40 hover:text-flour"
                  }`}
                >
                  {t(lang, l.key)}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <LanguageToggle compact />
            <Link
              href="/order"
              className="hidden sm:inline-flex btn-order-adaptive"
            >
              {t(lang, "navOrderOnline")}
            </Link>
            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[5px]"
              aria-label={menuOpen ? "Хаах" : "Цэс"}
            >
              <span className={`block w-5 h-[1.5px] bg-flour origin-center transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-flour transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block w-5 h-[1.5px] bg-flour origin-center transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* ── MOBILE MENU OVERLAY ── */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal flex flex-col transition-all duration-500 ease-expo ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Logo */}
        <div className="px-6 pt-5 pb-2">
          <img src="/logo.png" alt="Deutsche Bäckerei" className="h-8 w-auto object-contain" />
        </div>

        <div className="flex-1 flex flex-col justify-center px-8 pb-12 pt-6 gap-1">
          {navLinks.map((l, i) => (
            <Link
              key={l.key}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block font-serif text-flour text-[2.4rem] leading-[1.2] py-2.5 border-b border-flour/8 transition-all duration-300"
              style={{
                transitionDelay: menuOpen ? `${i * 60 + 80}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "none" : "translateY(16px)",
              }}
            >
              {t(lang, l.key)}
            </Link>
          ))}
          <Link
            href="/order"
            onClick={() => setMenuOpen(false)}
            className="mt-8 btn-green self-start"
            style={{
              transitionDelay: menuOpen ? `${navLinks.length * 60 + 80}ms` : "0ms",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "none" : "translateY(16px)",
              transition: "opacity 0.3s, transform 0.3s",
            }}
          >
            {t(lang, "navOrderOnline")}
          </Link>
        </div>

        <div className="px-8 pb-8 border-t border-flour/8 pt-5 flex items-center justify-between">
          <a href={`tel:${PHONE}`} className="text-xs text-flour/35 tracking-widest uppercase hover:text-flour/60 transition-colors">
            {PHONE}
          </a>
          <LanguageToggle />
        </div>
      </div>
    </>
  );
}
