"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/i18n";

const STAGES = [
  {
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1920&q=80",
    labelKey: "j1Label", titleKey: "j1Title", bodyKey: "j1Body",
  },
  {
    image: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=1920&q=80",
    labelKey: "j2Label", titleKey: "j2Title", bodyKey: "j2Body",
  },
  {
    image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=1920&q=80",
    labelKey: "j3Label", titleKey: "j3Title", bodyKey: "j3Body",
  },
  {
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=1920&q=80",
    labelKey: "j4Label", titleKey: "j4Title", bodyKey: "j4Body",
  },
  {
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&q=80",
    labelKey: "j5Label", titleKey: "j5Title", bodyKey: "j5Body",
  },
];

export default function JourneySection() {
  const { lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(1, scrolled / total));
      setProgress(p);
      setActiveIndex(Math.min(STAGES.length - 1, Math.floor(p * STAGES.length)));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const titleLines = t(lang, "journeyTitle").split("\n");

  return (
    <div ref={containerRef} style={{ height: `${STAGES.length * 100}vh` }}>
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-charcoal">

        {/* Crossfading background images */}
        {STAGES.map((s, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-[1200ms] ease-soft"
            style={{ opacity: i === activeIndex ? 1 : 0 }}
          >
            <img
              src={s.image}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/65" />
          </div>
        ))}

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col max-w-screen-xl mx-auto px-6 lg:px-12 py-20 justify-between">

          {/* Section header */}
          <div>
            <div className="section-label text-brand-green">{t(lang, "journeyLabel")}</div>
            <h2 className="font-serif text-display-md text-flour mt-4 leading-none">
              {titleLines.map((line, i) => <span key={i} className="block">{line}</span>)}
            </h2>
          </div>

          {/* Stage content */}
          <div className="max-w-lg">
            {STAGES.map((s, i) => (
              <div
                key={i}
                className="transition-all duration-700 ease-expo"
                style={{
                  position: i === activeIndex ? "relative" : "absolute",
                  opacity: i === activeIndex ? 1 : 0,
                  transform: i === activeIndex ? "none" : "translateY(24px)",
                  pointerEvents: i === activeIndex ? "auto" : "none",
                }}
              >
                <div className="section-label text-brand-green mb-4">{t(lang, s.labelKey)}</div>
                <h3 className="font-serif text-display-sm text-flour leading-tight mb-4">
                  {t(lang, s.titleKey)}
                </h3>
                <p className="text-flour/55 text-sm leading-relaxed">{t(lang, s.bodyKey)}</p>
              </div>
            ))}
          </div>

          {/* Progress indicators */}
          <div className="flex items-center gap-3">
            {STAGES.map((_, i) => (
              <div key={i} className={`h-px flex-1 transition-all duration-600 ${i <= activeIndex ? "bg-brand-green" : "bg-flour/20"}`} />
            ))}
            <span className="section-label text-flour/35 ml-2 tabular-nums">
              {String(activeIndex + 1).padStart(2, "0")} / {String(STAGES.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
