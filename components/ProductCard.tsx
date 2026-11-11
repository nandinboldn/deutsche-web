"use client";

import { Product, formatPrice, localized } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/i18n";

export default function ProductCard({ product }: { product: Product }) {
  const { lang } = useLanguage();

  const name = localized(product, "name", lang);
  const tagline = localized(product, "tagline", lang);
  const description = localized(product, "description", lang);
  const tag = localized(product, "tag", lang);
  const shelfLife = localized(product, "shelfLife", lang);
  const casePack = localized(product, "casePack", lang);
  const unit = localized(product, "unit", lang);

  return (
    <div className={`py-9 border-b border-green/10 last:border-b-0 ${!product.inStock ? "opacity-50" : ""}`}>
      <div className="flex justify-between items-start gap-3 mb-2.5">
        <h3 className="font-serif font-bold text-xl leading-tight max-w-[220px]">{name}</h3>
        {tag ? (
          <span
            className={`text-[9px] tracking-wider uppercase border rounded px-2.5 py-1 flex-shrink-0 mt-0.5 ${
              product.tag === "Organic"
                ? "text-green border-green/35"
                : "text-orange border-orange/35"
            }`}
          >
            {tag}
          </span>
        ) : null}
      </div>
      <div className="font-serif italic text-[12.5px] text-green/60 mb-3">{tagline}</div>
      <p className="text-[13.5px] leading-relaxed text-ink/70 mb-5 max-w-xl">{description}</p>

      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-5">
        <Spec label={t(lang, "specWeightLabel")} value={product.weight} />
        <Spec label={t(lang, "specShelfLabel")} value={shelfLife} />
        <Spec label={t(lang, "specCaseLabel")} value={casePack} />
      </div>

      <div className="flex items-center justify-between gap-4">
        <div>
          <span className="font-serif font-bold text-lg">{formatPrice(product.price)}</span>
          <span className="text-xs text-ink/40 ml-1.5">{unit}</span>
        </div>
        {product.inStock ? (
          <a
            href={`/order?product=${product.id}`}
            className="text-[11px] font-medium tracking-[1.5px] uppercase text-green border border-green/30 rounded px-4 py-2.5 hover:bg-green hover:text-cream hover:border-green transition flex-shrink-0"
          >
            {t(lang, "orderThis")}
          </a>
        ) : (
          <span className="text-[11px] tracking-[1.5px] uppercase text-ink/40">{t(lang, "outOfStock")}</span>
        )}
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div className="pr-4 border-r border-green/10 last:border-r-0 last:pr-0">
      <span className="block text-[9px] tracking-wider uppercase text-green/50 mb-0.5">{label}</span>
      <span className="text-[13px] font-medium">{value}</span>
    </div>
  );
}
