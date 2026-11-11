"use client";

import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/i18n";
import { useReveal } from "@/hooks/useReveal";
import { Product, formatPrice, localized } from "@/lib/types";

const PRODUCT_IMAGES = [
  "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&q=85",
  "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600&q=85",
  "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=85",
  "https://images.unsplash.com/photo-1549931319-a545dcf3bc7c?w=600&q=85",
  "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?w=600&q=85",
];

export default function ProductsFeature({ products }: { products: Product[] }) {
  const { lang } = useLanguage();
  const ref = useReveal();
  const featured = products.filter((p) => p.inStock).slice(0, 4);

  const titleLines = t(lang, "pfTitle").split("\n");

  return (
    <section ref={ref} className="bg-charcoal py-20 sm:py-28 lg:py-36 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 sm:mb-20">
          <div>
            <div className="reveal section-label text-brand-green mb-6">{t(lang, "pfLabel")}</div>
            <h2 className="reveal delay-100 font-serif text-display-md text-flour leading-none">
              {titleLines.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h2>
          </div>
          <div className="lg:max-w-xs">
            <p className="reveal delay-200 text-flour/45 text-sm leading-relaxed mb-6">
              {t(lang, "pfBody")}
            </p>
            <a href="/products" className="reveal delay-300 btn-outline text-flour border-flour/25 hover:bg-flour hover:text-charcoal inline-flex">
              {t(lang, "pfCta")}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" className="ml-2">
                <path d="M2 7h10M8 3l4 4-4 4"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Product cards — horizontal scroll on mobile */}
        <div className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4">
          {featured.map((p, i) => {
            const name = localized(p, "name", lang);
            const tagline = localized(p, "tagline", lang);
            const imgSrc = p.image || PRODUCT_IMAGES[i % PRODUCT_IMAGES.length];

            return (
              <a
                key={p.id}
                href={`/order?product=${p.id}`}
                className={`reveal delay-${i * 100 + 100} img-zoom group flex-none w-[68vw] sm:w-[42vw] lg:w-auto relative rounded overflow-hidden aspect-[3/4] bg-charcoal-soft block`}
              >
                <img
                  src={imgSrc}
                  alt={name}
                  loading="lazy"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-500"
                />
                {/* Bottom info */}
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-charcoal/90 to-transparent">
                  {p.tag && (
                    <div className="section-label text-brand-green mb-2">{localized(p, "tag", lang) || p.tag}</div>
                  )}
                  <div className="font-serif text-flour text-lg leading-tight">{name}</div>
                  <div className="text-flour/45 text-xs mt-1 font-light truncate">{tagline}</div>
                  <div className="mt-3 text-flour/70 text-sm font-medium">{formatPrice(p.price)}</div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
