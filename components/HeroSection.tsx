"use client";

import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/i18n";
import { useEffect, useState } from "react";

const HERO_IMAGE = "/pictures/img1.jpg"

export default function HeroSection() {
  const { lang } = useLanguage();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // slight delay to let fonts load before reveal
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-[100svh] min-h-[600px] overflow-hidden bg-charcoal flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Freshly baked artisan bread — Deutsche Bäckerei"
          className={`w-full h-full object-cover transition-all duration-[2000ms] ease-soft ${loaded ? "opacity-60 scale-100" : "opacity-0 scale-105"}`}
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal from-10% via-charcoal/30 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col justify-end-safe h-full max-w-screen-xl mx-auto w-full px-6 lg:px-12 pt-28 sm:pt-32 pb-14">
          
        {/* Headline */}
        <div className="flex-1 flex flex-col justify-center">
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          <h1 className={`font-serif text-6xl text-flour leading-none tracking-tight max-w-2xl transition-all duration-1000 delay-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            {t(lang, "heroTitle1")}
            <br/>
            <em className="italic text-flour/30">{t(lang, "heroTitle2")}</em>
          </h1>




          {/* <p className={`mt-6 sm:mt-8 text-flour/55 text-sm sm:text-base font-light max-w-xs sm:max-w-sm leading-relaxed transition-all duration-1000 delay-700 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {t(lang, "heroSubtitle")}
          </p> */}

          {/* CTAs */}
          <div className={`mt-10 sm:mt-12 flex flex-wrap gap-4 transition-all duration-1000 delay-[900ms] ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <a href="/products" className="btn-green">
              {t(lang, "heroCta1")}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 7h10M8 3l4 4-4 4"/>
              </svg>
            </a>
            <a href="/story" className="btn-outline text-flour border-flour/30 hover:bg-flour hover:text-charcoal">
              {t(lang, "heroCta2")}
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className={`flex items-end justify-end transition-all duration-1000 delay-[1100ms] ${loaded ? "opacity-100" : "opacity-0"}`}>
 
          {/* label */}
        {/* <div className={`transition-all duration-1000 delay-300 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          <div className="sticky r-0 section-label text-brand-green">{t(lang, "heroLabel")}</div>
        </div> */}

          {/* <div className="hidden sm:flex flex-col items-center gap-2 opacity-30">
            <div className="w-px h-10 bg-flour relative overflow-hidden">
              <div className="absolute top-0 w-full bg-flour/60 animate-[scrollLine_2s_ease-in-out_infinite]" style={{ height: "40%", animation: "scrollLine 2s ease-in-out infinite" }} />
            </div>
          </div> */}
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </section>
  );
}
