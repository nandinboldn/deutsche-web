"use client";

import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/i18n";

const PHONE = "+976 9911 2233";
const EMAIL = "info@deutschebaeckerei.mn";

const NAV_COLS = [
  {
    titleKey: "footerProducts",
    links: [
      { label: "Бүх бүтээгдэхүүн", labelEn: "All Products", href: "/products" },
      { label: "Талх", labelEn: "Bread", href: "/products#bread" },
      { label: "Хобо", labelEn: "Rolls", href: "/products#rolls" },
      { label: "Бургерний бунс", labelEn: "Burger Buns", href: "/products#buns" },
      { label: "Хөлдөөлт", labelEn: "Frozen Bake-Off", href: "/products#frozen" },
    ],
  },
  {
    titleKey: "footerCompany",
    links: [
      { label: "Бидний тухай", labelEn: "Our Story", href: "/story" },
      { label: "Үйлдвэр", labelEn: "Our Bakery", href: "/bakery" },
      { label: "Бизнес", labelEn: "For Business", href: "/b2b" },
      { label: "Чанар", labelEn: "Quality", href: "/story#quality" },
    ],
  },
  {
    titleKey: "footerContact",
    links: [
      { label: PHONE, labelEn: PHONE, href: `tel:${PHONE}` },
      { label: EMAIL, labelEn: EMAIL, href: `mailto:${EMAIL}` },
      { label: "Онлайн захиалга", labelEn: "Order Online", href: "/order" },
      { label: "Хан-Уул дүүрэг, Улаанбаатар", labelEn: "Khan-Uul, Ulaanbaatar", href: "#" },
    ],
  },
];

export default function Footer() {
  const { lang } = useLanguage();
  const isMn = lang === "mn";

  return (
    <footer className="bg-charcoal border-t border-flour/6">
      {/* Footer header — logo + tagline */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 pt-16 pb-10 border-b border-flour/6 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
        <div>
          {/* Big faded wordmark behind logo */}
          <div className="font-serif leading-none mb-6 select-none pointer-events-none" aria-hidden>
            <div className="text-[clamp(2rem,7vw,6rem)] font-bold text-flour/6 tracking-tight">DEUTSCHE</div>
            <div className="text-[clamp(2rem,7vw,6rem)] font-bold text-flour/6 tracking-tight">BÄCKEREI</div>
          </div>
          <img src="/logo.png" alt="Deutsche Bäckerei" className="h-10 w-auto object-contain" />
        </div>
        <p className="section-label text-flour/30 pb-1">{t(lang, "footerTagline")}</p>
      </div>

      {/* Nav columns */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {NAV_COLS.map((col) => (
            <div key={col.titleKey}>
              <div className="section-label text-flour/35 mb-6">{t(lang, col.titleKey)}</div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="text-sm text-flour/50 hover:text-flour transition-colors duration-200"
                    >
                      {isMn ? l.label : l.labelEn}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social */}
          <div>
            <div className="section-label text-flour/35 mb-6">Social</div>
            <ul className="space-y-3">
              {[
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "TikTok", href: "https://tiktok.com" },
              ].map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-sm text-flour/50 hover:text-flour transition-colors duration-200" target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-flour/6">
        <span className="text-xs text-flour/25">
          © {new Date().getFullYear()} Deutsche Bäckerei. {t(lang, "footerAllRights")}
        </span>
        <span className="section-label text-flour/20">{t(lang, "footerTagline")}</span>
      </div>
    </footer>
  );
}
