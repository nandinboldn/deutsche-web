"use client";

import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/i18n";
import { useReveal } from "@/hooks/useReveal";
import Footer from "./Footer";

const HERO_IMG = "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1600&q=85";
const PHONE = "+976 9911 2233";

const FROZEN_STEPS = ["frozenStep1","frozenStep2","frozenStep3","frozenStep4","frozenStep5"];
const B2B_PARTNERS = ["b2bPartner1","b2bPartner2","b2bPartner3","b2bPartner4","b2bPartner5","b2bPartner6"];

export default function B2BPageView() {
  const { lang } = useLanguage();
  const ref1 = useReveal();
  const ref2 = useReveal();
  const titleLines = t(lang, "b2bTitle").split("\n");
  const frozenTitleLines = t(lang, "frozenTitle").split("\n");

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[55svh] min-h-[400px] bg-charcoal flex items-end overflow-hidden">
        <img src={HERO_IMG} alt="Deutsche Bäckerei bakery" className="absolute inset-0 w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
        <div className="relative z-10 max-w-screen-xl mx-auto w-full px-6 lg:px-12 pb-14 pt-32">
          <div className="section-label text-brand-green mb-4">{t(lang, "b2bLabel")}</div>
          <h1 className="font-serif text-display-lg text-flour leading-none max-w-xl">
            {titleLines.map((line, i) => <span key={i} className="block">{line}</span>)}
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section ref={ref1} className="bg-flour py-20 sm:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 mb-20">
            <div>
              <p className="reveal text-charcoal/65 text-base leading-relaxed mb-8 max-w-md">{t(lang, "b2bBody")}</p>
              <div className="reveal delay-100 grid grid-cols-1 sm:grid-cols-2 gap-2 mb-10">
                {B2B_PARTNERS.map((key) => (
                  <div key={key} className="flex items-center gap-3 py-3.5 border-b border-charcoal/8">
                    <div className="w-1 h-1 rounded-full bg-brand-green flex-shrink-0" />
                    <span className="text-sm text-charcoal/70">{t(lang, key)}</span>
                  </div>
                ))}
              </div>
              <div className="reveal delay-200 flex flex-wrap gap-4">
                <a href={`tel:${PHONE}`} className="btn-green">{t(lang, "b2bCta2")}</a>
                <a href="/order" className="btn-outline text-charcoal border-charcoal/25 hover:bg-charcoal hover:text-flour inline-flex">{t(lang, "navOrderOnline")}</a>
              </div>
            </div>
            <div className="reveal-right">
              <div className="bg-flour-dark rounded p-8 sm:p-10 border border-charcoal/8">
                <div className="section-label text-grain mb-8">{lang === "mn" ? "Яагаад Deutsche Bäckerei" : "Why Deutsche Bäckerei"}</div>
                {["Reliable at scale — 8,000+ units daily", "Consistent quality, every delivery", "Flexible minimum orders", "Next-day delivery across Ulaanbaatar", "Dedicated account manager", "Frozen bake-off products available"].map((item, i) => (
                  <div key={i} className={`reveal delay-${i * 80 + 100} flex items-start gap-3 py-4 border-b border-charcoal/8 last:border-0`}>
                    <div className="w-4 h-4 rounded-full border border-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                    </div>
                    <span className="text-sm text-charcoal/70">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frozen bake-off */}
      <section ref={ref2} className="bg-charcoal py-20 sm:py-28">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
          <div className="section-label text-brand-green mb-6 reveal">{t(lang, "frozenLabel")}</div>
          <h2 className="reveal delay-100 font-serif text-display-md text-flour leading-none mb-12 max-w-xl">
            {frozenTitleLines.map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
          <p className="reveal delay-200 text-flour/50 text-sm leading-relaxed mb-16 max-w-lg">{t(lang, "frozenBody")}</p>

          {/* Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-0 border-t border-flour/8">
            {FROZEN_STEPS.map((key, i) => (
              <div key={key} className={`reveal delay-${i * 100 + 100} py-8 pr-6 border-b sm:border-b-0 ${i < 4 ? "sm:border-r" : ""} border-flour/8`}>
                <div className="font-serif italic text-brand-green text-sm mb-3">{String(i + 1).padStart(2, "0")}</div>
                <div className="text-sm text-flour/60 leading-relaxed">{t(lang, key)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
