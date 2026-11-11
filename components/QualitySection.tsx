"use client";

import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/i18n";
import { useReveal } from "@/hooks/useReveal";

const QUALITY_KEYS = ["qual1","qual2","qual3","qual4","qual5","qual6"];

export default function QualitySection() {
  const { lang } = useLanguage();
  const ref = useReveal();
  const titleLines = t(lang, "qualTitle").split("\n");

  return (
    <section ref={ref} className="bg-flour py-20 sm:py-28 lg:py-36">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-14 lg:gap-20">

          {/* Left */}
          <div className="lg:w-2/5">
            <div className="reveal section-label text-brand-green mb-6">{t(lang, "qualLabel")}</div>
            <h2 className="reveal delay-100 font-serif text-display-md text-charcoal leading-none">
              {titleLines.map((line, i) => <span key={i} className="block">{line}</span>)}
            </h2>
          </div>

          {/* Right: quality list */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-charcoal/10">
              {QUALITY_KEYS.map((key, i) => (
                <div
                  key={key}
                  className={`reveal delay-${i * 80 + 100} py-6 pr-6 border-b border-charcoal/10 flex items-start gap-4 ${i % 2 === 0 ? "sm:border-r" : ""}`}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0 mt-2" />
                  <span className="text-sm text-charcoal/70 leading-relaxed">{t(lang, key)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
