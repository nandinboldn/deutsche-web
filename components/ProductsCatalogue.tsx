"use client";

import { useState, useMemo } from "react";
import { Product, Lang } from "@/lib/types";
import { useLanguage } from "@/components/LanguageProvider";

// ─── helpers ────────────────────────────────────────────────────────────────

function productName(p: Product, lang: Lang) {
  return lang === "mn" && p.nameMn ? p.nameMn : p.name;
}
function productTagline(p: Product, lang: Lang) {
  return lang === "mn" && p.taglineMn ? p.taglineMn : p.tagline || "";
}

// placeholder gradient colours by category
const CATEGORY_GRADIENTS: Record<string, string> = {
  talh:        "from-amber-100 to-amber-50",
  jignmeg:     "from-orange-100 to-orange-50",
  "naiin-boov":"from-yellow-100 to-yellow-50",
  bialuu:      "from-rose-100 to-rose-50",
  belen:       "from-stone-100 to-stone-50",
  other:       "from-neutral-100 to-neutral-50",
};

// ─── category tab data ───────────────────────────────────────────────────────

type CategoryTab = { code: string; labelMn: string; labelEn: string };

const ALL_TAB: CategoryTab = { code: "all", labelMn: "Бүгд", labelEn: "All" };

// ─── product card ─────────────────────────────────────────────────────────────

function ProductCard({ product, lang }: { product: Product; lang: Lang }) {
  const disabled = !product.inStock;
  const name     = productName(product, lang);
  const tagline  = productTagline(product, lang);
  const gradient = CATEGORY_GRADIENTS[product.category ?? "other"];

  return (
    <article
      className={`group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300
        ${disabled
          ? "border-black/8 bg-white opacity-55 cursor-not-allowed"
          : "border-black/8 bg-white hover:shadow-lg hover:-translate-y-0.5 hover:border-black/15"
        }`}
    >
      {/* image */}
      <div className={`relative aspect-[4/3] bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        {product.image ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={product.image}
            alt={name}
            className={`w-full h-full object-cover transition-transform duration-500
              ${disabled ? "grayscale" : "group-hover:scale-105"}`}
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-black/20 p-6 text-center">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <circle cx="8.5" cy="8.5" r="1.5"/>
              <path d="m21 15-5-5L5 21"/>
            </svg>
            <span className="text-[11px] tracking-wider uppercase">Зураг удахгүй</span>
          </div>
        )}

        {/* weight badge */}
        {product.weight && product.weight !== "—" && (
          <span className="absolute bottom-2 left-2 bg-black/60 text-white text-[10px] font-medium px-2 py-0.5 rounded-full backdrop-blur-sm">
            {product.weight}
          </span>
        )}

        {/* tag badge */}
        {!disabled && product.tagMn && (
          <span className="absolute top-2 right-2 bg-[#468456] text-white text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide">
            {lang === "mn" ? product.tagMn : product.tag}
          </span>
        )}

        {/* OUT OF STOCK overlay */}
        {disabled && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="bg-black/50 text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1.5 rounded-full backdrop-blur-sm">
              {lang === "mn" ? "Захиалах боломжгүй" : "Unavailable"}
            </span>
          </div>
        )}
      </div>

      {/* content */}
      <div className="flex flex-col flex-1 p-4 gap-1.5">
        {/* category label */}
        <span className="text-[9px] tracking-[2px] uppercase text-[#468456] font-semibold">
          {lang === "mn" ? (product.categoryMn ?? "") : (product.categoryEn ?? "")}
        </span>

        <h3 className={`font-semibold text-[15px] leading-snug transition-colors
          ${disabled ? "text-black/40" : "text-charcoal group-hover:text-[#468456]"}`}>
          {name}
        </h3>

        {tagline && (
          <p className={`text-[13px] leading-relaxed ${disabled ? "text-black/30" : "text-ink/55"}`}>
            {tagline}
          </p>
        )}

        <div className="mt-auto pt-3 flex items-center justify-between">
          {product.price > 0 ? (
            <span className={`text-[14px] font-semibold tabular-nums ${disabled ? "text-black/30" : "text-charcoal"}`}>
              {product.price.toLocaleString()}₮
            </span>
          ) : (
            <span className="text-[12px] text-black/30">—</span>
          )}

          {disabled ? (
            <span className="text-[11px] text-black/30 font-medium">
              {lang === "mn" ? "Одоо байхгүй" : "Out of stock"}
            </span>
          ) : (
            <a
              href="/order"
              className="text-[12px] font-semibold text-[#468456] hover:text-[#FE770D] transition-colors"
            >
              {lang === "mn" ? "Захиалах →" : "Order →"}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

// ─── main catalogue component ─────────────────────────────────────────────────

export default function ProductsCatalogue({ products }: { products: Product[] }) {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");

  // Build tab list dynamically from products (preserve natural order of first appearance)
  const tabs = useMemo<CategoryTab[]>(() => {
    const seen = new Map<string, CategoryTab>();
    for (const p of products) {
      const code = p.category ?? "other";
      if (!seen.has(code)) {
        seen.set(code, {
          code,
          labelMn: p.categoryMn ?? "Бусад",
          labelEn: p.categoryEn ?? "Other",
        });
      }
    }
    return [ALL_TAB, ...seen.values()];
  }, [products]);

  const filtered = useMemo(
    () => activeTab === "all" ? products : products.filter(p => (p.category ?? "other") === activeTab),
    [products, activeTab]
  );

  const inStockCount  = filtered.filter(p => p.inStock).length;
  const outStockCount = filtered.filter(p => !p.inStock).length;

  return (
    <div className="min-h-screen pt-24 pb-20">

      {/* ── Page header ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
        <p className="section-label mb-3 text-flour/55">
          {lang === "mn" ? "Бүтээгдэхүүн" : "Products"}
        </p>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-flour leading-tight">
          {lang === "mn" ? "Манай бүтээгдэхүүнүүд" : "Our Products"}
        </h1>
        <p className="mt-4 text-[16px] text-flour/60 max-w-xl">
          {lang === "mn"
            ? `${products.length} бүтээгдэхүүн — ${inStockCount + outStockCount} нийт, ${inStockCount} нь захиалах боломжтой`
            : `${products.length} products — ${inStockCount} available to order`}
        </p>
      </div>

      {/* ── Category tabs ── */}
      <div className="sticky top-16 z-30 bg-[#3c7549]/90 backdrop-blur border-b border-flour/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto scrollbar-none -mx-1">
            {tabs.map(tab => {
              const count = tab.code === "all"
                ? products.length
                : products.filter(p => (p.category ?? "other") === tab.code).length;
              const isActive = activeTab === tab.code;
              return (
                <button
                  key={tab.code}
                  onClick={() => setActiveTab(tab.code)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-4 py-3.5 text-[13px] font-semibold tracking-wide border-b-2 transition-all whitespace-nowrap
                    ${isActive
                      ? "border-flour text-flour"
                      : "border-transparent text-flour/40 hover:text-flour hover:border-flour/25"
                    }`}
                >
                  {lang === "mn" ? tab.labelMn : tab.labelEn}
                  <span className={`text-[11px] rounded-full px-1.5 py-0.5 font-normal
                    ${isActive ? "bg-flour/18 text-flour" : "bg-flour/10 text-flour/40"}`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Product grid ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">

        {/* in-stock section */}
        {inStockCount > 0 && (
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filtered.filter(p => p.inStock).map(p => (
                <ProductCard key={p.id} product={p} lang={lang} />
              ))}
            </div>
          </div>
        )}

        {/* out-of-stock section */}
        {outStockCount > 0 && (
          <div className={inStockCount > 0 ? "mt-10" : ""}>
            {inStockCount > 0 && (
              <div className="flex items-center gap-4 mb-5">
                <div className="h-px flex-1 bg-flour/20" />
                <span className="text-[11px] tracking-[2px] uppercase text-flour/40 font-medium">
                  {lang === "mn" ? "Одоо захиалах боломжгүй" : "Currently unavailable"}
                </span>
                <div className="h-px flex-1 bg-flour/20" />
              </div>
            )}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {filtered.filter(p => !p.inStock).map(p => (
                <ProductCard key={p.id} product={p} lang={lang} />
              ))}
            </div>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="text-center py-24 text-flour/45">
            <p className="text-lg">{lang === "mn" ? "Бүтээгдэхүүн олдсонгүй" : "No products found"}</p>
          </div>
        )}
      </div>
    </div>
  );
}
