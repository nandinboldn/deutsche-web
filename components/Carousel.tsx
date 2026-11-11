"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { GALLERY_SLIDES } from "@/lib/i18n";

export default function Carousel() {
  const { lang } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [activeTouch, setActiveTouch] = useState<number | null>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragRef = useRef<{ down: boolean; startX: number; scrollStart: number }>({
    down: false,
    startX: 0,
    scrollStart: 0,
  });

  const slides = GALLERY_SLIDES;

  function getSlideWidth() {
    const track = trackRef.current;
    if (!track) return 0;
    const gap = parseInt(getComputedStyle(track).gap || "16");
    const first = track.children[0] as HTMLElement | undefined;
    return (first?.offsetWidth || 0) + gap;
  }

  function goTo(idx: number) {
    const track = trackRef.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(idx, slides.length - 1));
    setCurrent(clamped);
    track.scrollTo({ left: clamped * getSlideWidth(), behavior: "smooth" });
  }

  function startAuto() {
    stopAuto();
    autoRef.current = setInterval(() => {
      setCurrent((c) => {
        const next = c < slides.length - 1 ? c + 1 : 0;
        const track = trackRef.current;
        if (track) track.scrollTo({ left: next * getSlideWidth(), behavior: "smooth" });
        return next;
      });
    }, 3500);
  }
  function stopAuto() {
    if (autoRef.current) clearInterval(autoRef.current);
  }

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, [slides.length]);

  function handleScroll() {
    const track = trackRef.current;
    if (!track) return;
    const sw = getSlideWidth();
    if (sw > 0) setCurrent(Math.round(track.scrollLeft / sw));
  }

  function onMouseDown(e: React.MouseEvent) {
    const track = trackRef.current;
    if (!track) return;
    dragRef.current = { down: true, startX: e.pageX - track.offsetLeft, scrollStart: track.scrollLeft };
    stopAuto();
  }
  function onMouseUp() {
    if (dragRef.current.down) {
      dragRef.current.down = false;
      startAuto();
    }
  }
  function onMouseMove(e: React.MouseEvent) {
    const track = trackRef.current;
    if (!track || !dragRef.current.down) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    track.scrollLeft = dragRef.current.scrollStart - (x - dragRef.current.startX) * 1.5;
  }

  return (
    <div>
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onMouseMove={onMouseMove}
        className="flex gap-4 sm:gap-5 px-5 sm:px-12 lg:px-20 overflow-x-auto cursor-grab active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {slides.map((s, i) => (
          <div
            key={i}
            onTouchStart={() => setActiveTouch(i)}
            className="group relative flex-none w-[72vw] sm:w-[45vw] lg:w-[30vw] max-w-[340px] aspect-[3/4] rounded overflow-hidden bg-green-dark"
            style={{ scrollSnapAlign: "start" }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={s.src}
              alt={s.alt}
              loading="lazy"
              className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                activeTouch === i ? "scale-105" : ""
              }`}
            />
            <div
              className={`absolute inset-x-0 bottom-0 px-5 pb-5 pt-14 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 group-hover:opacity-0 ${
                activeTouch === i ? "opacity-0" : ""
              }`}
            >
              <span className="font-serif font-bold text-cream text-base">
                {lang === "mn" ? s.labelMn : s.labelEn}
              </span>
            </div>
            <div
              className={`absolute inset-0 flex flex-col justify-end p-6 opacity-0 translate-y-2 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0 ${
                activeTouch === i ? "!opacity-100 !translate-y-0" : ""
              }`}
              style={{
                background:
                  "linear-gradient(to top, rgba(29,55,32,0.97) 0%, rgba(29,55,32,0.7) 45%, rgba(29,55,32,0) 100%)",
              }}
            >
              <div className="text-[9px] tracking-[3px] uppercase text-orange mb-2">
                {lang === "mn" ? s.tagMn : s.tagEn}
              </div>
              <div className="font-serif font-bold text-cream text-xl mb-2 leading-tight">
                {lang === "mn" ? s.titleMn : s.titleEn}
              </div>
              <div className="text-[12.5px] leading-relaxed text-cream/70">
                {lang === "mn" ? s.textMn : s.textEn}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2.5 px-5 sm:px-12 lg:px-20 mt-5">
        <button
          onClick={() => goTo(current - 1)}
          aria-label="Previous"
          className="w-10 h-10 rounded-full border border-green/20 flex items-center justify-center text-ink hover:bg-green hover:border-green hover:text-cream transition"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={() => goTo(current + 1)}
          aria-label="Next"
          className="w-10 h-10 rounded-full border border-green/20 flex items-center justify-center text-ink hover:bg-green hover:border-green hover:text-cream transition"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
        <div className="flex-1 h-px bg-green/20 rounded relative overflow-hidden">
          <div
            className="absolute left-0 top-0 bottom-0 bg-green rounded transition-all duration-400"
            style={{ width: `${((current + 1) / slides.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
}
