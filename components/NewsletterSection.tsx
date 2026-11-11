"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/i18n";
import { useReveal } from "@/hooks/useReveal";

export default function NewsletterSection() {
  const { lang } = useLanguage();
  const ref = useReveal();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const titleLines = t(lang, "nlTitle").split("\n");

  return (
    <section ref={ref} className="bg-charcoal py-20 sm:py-28">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="max-w-xl">
          <h2 className="reveal font-serif text-display-md text-flour leading-none mb-5">
            {titleLines.map((line, i) => <span key={i} className="block">{line}</span>)}
          </h2>
          <p className="reveal delay-100 text-flour/45 text-sm mb-10">{t(lang, "nlBody")}</p>
          {submitted ? (
            <div className="reveal text-brand-green section-label py-4">
              {lang === "mn" ? "Баярлалаа! Та бүртгүүллээ." : "Thank you. You're subscribed."}
            </div>
          ) : (
            <form
              className="reveal delay-200 flex flex-col sm:flex-row gap-3"
              onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t(lang, "nlPlaceholder")}
                className="flex-1 bg-flour/8 border border-flour/15 px-4 py-3.5 text-sm text-flour placeholder-flour/35 focus:outline-none focus:border-brand-green transition-colors"
                required
              />
              <button type="submit" className="btn-green flex-shrink-0">
                {t(lang, "nlCta")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
