"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";

const PHONE = "+976 9911 2233";
const EMAIL = "info@deutschebaeckerei.mn";

export default function ContactPage() {
  const { lang } = useLanguage();
  const isMn = lang === "mn";

  return (
    <main className="min-h-screen pt-24">

      {/* ── Hero heading ───────────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-12 pt-12 lg:pt-20 pb-14">
        <p className="section-label text-charcoal/40 mb-6">
          {isMn ? "Холбоо барих" : "Contact Us"}
        </p>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b-2 border-charcoal/15">
          <h1 className="font-serif text-[clamp(2.6rem,7vw,6rem)] text-charcoal leading-[0.95] tracking-tight">
            {isMn ? (
              <>Бидэнтэй<br />холбогдоорой.</>
            ) : (
              <>Get in<br />touch with us.</>
            )}
          </h1>
          <p className="text-charcoal/55 text-[15px] leading-relaxed max-w-xs pb-1 lg:text-right">
            {isMn
              ? "Асуулт, санал гомдол болон\nзахиалгын мэдээллийн хувьд\nбидэнтэй холбогдоорой."
              : "Questions, feedback or order inquiries — we’re always ready to help."
            }
          </p>
        </div>
      </section>

      {/* ── Three-column contact grid ───────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-12 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-charcoal/12">

          {/* ── Phone ── */}
          <div className="py-10 sm:pr-10 lg:pr-16">
            <p className="section-label text-charcoal/35 mb-6">
              {isMn ? "Утас" : "Phone"}
            </p>
            <a
              href={`tel:${PHONE}`}
              className="block font-serif text-[2.1rem] text-charcoal hover:text-charcoal/70 transition-colors leading-tight mb-5"
            >
              {PHONE}
            </a>
            <p className="text-[13px] text-charcoal/45 mb-6">
              {isMn ? "Даваа–Бямба, 06:00–20:00" : "Mon–Sat, 06:00–20:00"}
            </p>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2.5 bg-charcoal text-flour text-[11px] font-semibold tracking-[0.14em] uppercase px-6 py-3.5 hover:bg-charcoal/80 transition-colors"
            >
              {/* Phone icon */}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.0 1.19 2 2 0 012 .0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
              </svg>
              {isMn ? "Дуудах" : "Call now"}
            </a>
          </div>

          {/* ── Address ── */}
          <div className="py-10 sm:px-10 lg:px-16">
            <p className="section-label text-charcoal/35 mb-6">
              {isMn ? "Хаяг" : "Address"}
            </p>
            <address className="not-italic font-serif text-[1.75rem] text-charcoal leading-snug mb-6">
              {isMn ? (
                <>
                  Хан-Уул<br />
                  дүүрэг,<br />
                  Улаанбаатар
                </>
              ) : (
                <>
                  Khan-Uul<br />
                  District,<br />
                  Ulaanbaatar
                </>
              )}
            </address>
            <a
              href="https://maps.google.com/?q=Khan-Uul+District+Ulaanbaatar+Mongolia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-charcoal/50 text-[11px] font-semibold tracking-[0.12em] uppercase hover:text-charcoal transition-colors"
            >
              {/* Map pin icon */}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              {isMn ? "Газрын зураг" : "View on map"}
            </a>
          </div>

          {/* ── Email + Hours ── */}
          <div className="py-10 sm:pl-10 lg:pl-16">
            <p className="section-label text-charcoal/35 mb-6">
              {isMn ? "Имэйл" : "Email"}
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className="block font-serif text-[1.4rem] text-charcoal hover:text-charcoal/70 transition-colors leading-tight mb-8 break-all"
            >
              {EMAIL}
            </a>

            <p className="section-label text-charcoal/35 mb-4">
              {isMn ? "Ажлын цаг" : "Working Hours"}
            </p>
            <div className="text-charcoal/70 text-[14px] leading-relaxed">
              <p className="font-semibold text-charcoal text-[16px] mb-0.5">
                {isMn ? "Даваа — Бямба" : "Monday — Saturday"}
              </p>
              <p className="font-serif text-[1.4rem] text-charcoal">06:00 — 20:00</p>
              <p className="mt-2 text-charcoal/40 text-[12px] tracking-wide uppercase font-medium">
                {isMn ? "Ням гараг амарна" : "Closed on Sundays"}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── Wholesale CTA strip ─────────────────────────── */}
      <section className="max-w-screen-xl mx-auto px-6 lg:px-12 pb-20">
        <div className="border-t-2 border-charcoal/15 pt-12">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">

            <div className="max-w-lg">
              <p className="section-label text-charcoal/35 mb-3">
                {isMn ? "Бизнес захиалга" : "Trade & Wholesale"}
              </p>
              <h2 className="font-serif text-[clamp(1.6rem,3.5vw,2.4rem)] text-charcoal leading-tight mb-2">
                {isMn ? "Бөөний захиалга өгнө үү." : "Order for your business."}
              </h2>
              <p className="text-charcoal/50 text-[14px] leading-relaxed">
                {isMn
                  ? "Ресторан, зочид буудал, дэлгүүр болон бизнес байгууллагуудад тусгай нөхцөл."
                  : "Special terms available for restaurants, hotels, shops and businesses."
                }
              </p>
            </div>

            <div className="flex flex-col xs:flex-row gap-3 flex-shrink-0">
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 border-2 border-charcoal text-charcoal text-[11px] font-semibold tracking-[0.14em] uppercase px-6 py-3.5 hover:bg-charcoal/8 transition-colors"
              >
                {isMn ? "Дуудах" : "Call us"}
              </a>
              <Link
                href="/order"
                className="inline-flex items-center justify-center gap-2 bg-charcoal text-flour text-[11px] font-semibold tracking-[0.14em] uppercase px-7 py-3.5 hover:bg-charcoal/80 transition-colors"
              >
                {isMn ? "Захиалга өгөх →" : "Place an order →"}
              </Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
