"use client";

import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/i18n";
import { useReveal } from "@/hooks/useReveal";

export default function StorySection() {
  const { lang } = useLanguage();
  const ref = useReveal();

  return (
    <section ref={ref} className="bg-charcoal py-20 sm:py-28 lg:py-36">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <div className="reveal section-label text-brand-green mb-8">{t(lang, "storyLabel")}</div>
          <blockquote className="reveal delay-100 font-serif text-display-md text-flour/30 italic leading-tight mb-8">
            &ldquo;{t(lang, "storyQuote")}&rdquo;
          </blockquote>
          <h2 className="reveal delay-200 font-serif text-display-md text-flour leading-none mb-8">
            {t(lang, "storyTitle")}
          </h2>
          <p className="reveal delay-300 text-flour/50 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            {t(lang, "storyBody")}
          </p>
          <a href="/story" className="reveal delay-400 btn-outline text-flour border-flour/25 hover:bg-flour hover:text-charcoal inline-flex gap-2">
            {t(lang, "storyCta")}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M2 7h10M8 3l4 4-4 4"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
