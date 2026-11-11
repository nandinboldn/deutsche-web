"use client";

import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/i18n";
import { useReveal } from "@/hooks/useReveal";

const BAKERY_IMAGE = "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1200&q=85";
const BAKERY_IMAGE2 = "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=800&q=85";

export default function BakerySection() {
  const { lang } = useLanguage();
  const ref = useReveal();
  const titleLines = t(lang, "bakeryTitle").split("\n");

  return (
    <section ref={ref} className="bg-charcoal py-20 sm:py-28 lg:py-36">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-14 lg:mb-20">
          <div className="flex-1">
            <div className="reveal section-label text-brand-green mb-6">{t(lang, "bakeryLabel")}</div>
            <h2 className="reveal delay-100 font-serif text-display-lg text-flour leading-none">
              {titleLines.map((line, i) => <span key={i} className="block">{line}</span>)}
            </h2>
          </div>
          <div className="flex-1 flex flex-col justify-end">
            <p className="reveal delay-200 text-flour/50 text-sm leading-relaxed mb-8">
              {t(lang, "bakeryBody")}
            </p>
            <a href="/bakery" className="reveal delay-300 btn-outline text-flour border-flour/25 hover:bg-flour hover:text-charcoal self-start inline-flex gap-2">
              {t(lang, "bakeryCtaLabel")}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 7h10M8 3l4 4-4 4"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-5">
          <div className="reveal reveal-scale lg:col-span-2 img-zoom aspect-[16/9] lg:aspect-auto lg:h-[480px] rounded overflow-hidden">
            <img src={BAKERY_IMAGE} alt="Deutsche Bäckerei production floor" loading="lazy" className="w-full h-full object-cover" />
          </div>
          <div className="reveal reveal-scale delay-200 flex flex-col gap-4">
            <div className="img-zoom flex-1 rounded overflow-hidden bg-charcoal-soft min-h-[200px]">
              <img src={BAKERY_IMAGE2} alt="Bread on the production line" loading="lazy" className="w-full h-full object-cover" />
            </div>
            {/* Stats card */}
            <div className="rounded bg-flour/5 border border-flour/10 p-6 grid grid-cols-3 gap-4">
              {(["1","2","3"] as const).map((n) => (
                <div key={n} className="text-center">
                  <div className="font-serif text-xl sm:text-2xl text-brand-green font-bold">{t(lang, `bakeryStat${n}Num`)}</div>
                  <div className="section-label text-flour/35 mt-1">{t(lang, `bakeryStat${n}Label`)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
