"use client";

import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/i18n";
import { useReveal } from "@/hooks/useReveal";

const B2B_PARTNERS = ["b2bPartner1","b2bPartner2","b2bPartner3","b2bPartner4","b2bPartner5","b2bPartner6"];
const B2B_IMAGE = "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900&q=85";

export default function B2BSection() {
  const { lang } = useLanguage();
  const ref = useReveal();
  const titleLines = t(lang, "b2bTitle").split("\n");

  return (
    <section ref={ref} className="bg-flour-dark py-20 sm:py-28 lg:py-36">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left: text */}
          <div>
            <div className="reveal section-label text-grain mb-6">{t(lang, "b2bLabel")}</div>
            <h2 className="reveal delay-100 font-serif text-display-lg text-charcoal leading-none mb-8">
              {titleLines.map((line, i) => <span key={i} className="block">{line}</span>)}
            </h2>
            <p className="reveal delay-200 text-charcoal/55 text-sm leading-relaxed mb-10 max-w-md">
              {t(lang, "b2bBody")}
            </p>

            {/* Partner types */}
            <div className="reveal delay-300 grid grid-cols-2 gap-3 mb-10">
              {B2B_PARTNERS.map((key) => (
                <div key={key} className="flex items-center gap-2.5 py-3 border-b border-charcoal/10">
                  <div className="w-1 h-1 rounded-full bg-brand-green flex-shrink-0" />
                  <span className="text-sm text-charcoal/70">{t(lang, key)}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="reveal delay-400 flex flex-wrap gap-4">
              <a href="/b2b" className="btn-green">
                {t(lang, "b2bCta")}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 7h10M8 3l4 4-4 4"/>
                </svg>
              </a>
              <a href="/order" className="btn-outline text-charcoal border-charcoal/25 hover:bg-charcoal hover:text-flour inline-flex">
                {t(lang, "navOrderOnline")}
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="reveal-right img-zoom aspect-[4/5] rounded overflow-hidden">
            <img
              src={B2B_IMAGE}
              alt="Deutsche Bäckerei wholesale bread"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
