"use client";

import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/i18n";
import { useReveal } from "@/hooks/useReveal";

const PRINCIPLES = [
  { numKey: "01", titleKey: "p1Title", bodyKey: "p1Body" },
  { numKey: "02", titleKey: "p2Title", bodyKey: "p2Body" },
  { numKey: "03", titleKey: "p3Title", bodyKey: "p3Body" },
  { numKey: "04", titleKey: "p4Title", bodyKey: "p4Body" },
];

export default function PhilosophySection() {
  const { lang } = useLanguage();
  const ref = useReveal();
  const titleLines = t(lang, "philTitle").split("\n");

  return (
    <section ref={ref} className="bg-flour py-20 sm:py-28 lg:py-36">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

        {/* Label + headline */}
        <div className="mb-16 sm:mb-20 lg:mb-24">
          <div className="reveal section-label text-grain mb-6">{t(lang, "philLabel")}</div>
          <h2 className="reveal delay-100 font-serif text-display-lg text-charcoal leading-none max-w-2xl">
            {titleLines.map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
        </div>

        {/* Principles grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border-t border-charcoal/10">
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.numKey}
              className={`reveal delay-${i * 100 + 100} py-10 sm:py-12 pr-8 lg:pr-16 ${
                i % 2 === 0 ? "sm:border-r border-charcoal/10" : ""
              } border-b border-charcoal/10`}
            >
              <div className="font-serif italic text-brand-green text-sm mb-5">{p.numKey}</div>
              <h3 className="font-serif text-display-sm text-charcoal mb-4 leading-tight">
                {t(lang, p.titleKey)}
              </h3>
              <p className="text-charcoal/55 text-sm leading-relaxed max-w-sm">
                {t(lang, p.bodyKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
