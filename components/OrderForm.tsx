"use client";

import { useMemo, useState } from "react";
import { Product, formatPrice, localized } from "@/lib/types";
import { submitOrderAction } from "@/lib/actions";
import { useLanguage } from "./LanguageProvider";
import { t, itemsSelectedText } from "@/lib/i18n";

// Desired display order for categories on the order page
const CATEGORY_ORDER = ["talh", "naiin-boov", "jignmeg", "bialuu", "belen"];

export default function OrderForm({ products, initialProductId, phone }: {
  products: Product[];
  initialProductId?: string;
  phone: string;
}) {
  const { lang } = useLanguage();
  const [qty, setQty] = useState<Record<string, number>>(() =>
    initialProductId ? { [initialProductId]: 1 } : {}
  );

  const items = useMemo(() =>
    products.filter((p) => (qty[p.id] || 0) > 0)
      .map((p) => ({ productId: p.id, name: p.name, qty: qty[p.id], price: p.price })),
    [qty, products]
  );

  // Group products by category, sorted by CATEGORY_ORDER
  const grouped = useMemo(() => {
    const groups = new Map<string, Product[]>();
    for (const p of products) {
      const cat = p.category ?? "other";
      if (!groups.has(cat)) groups.set(cat, []);
      groups.get(cat)!.push(p);
    }
    return [...groups.entries()].sort(([a], [b]) => {
      const ia = CATEGORY_ORDER.indexOf(a);
      const ib = CATEGORY_ORDER.indexOf(b);
      return (ia === -1 ? 99 : ia) - (ib === -1 ? 99 : ib);
    });
  }, [products]);

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const itemCount = items.reduce((sum, i) => sum + i.qty, 0);

  function setQuantity(id: string, value: number) {
    setQty((prev) => ({ ...prev, [id]: Math.max(0, value) }));
  }

  return (
    <form action={submitOrderAction} className="pb-28 sm:pb-16 max-w-screen-xl mx-auto">
      <input type="hidden" name="items" value={JSON.stringify(items)} />

      {/* Call card */}
      {/* <div className="mx-5 sm:mx-12 lg:mx-20 mb-10 bg-charcoal text-flour p-6 sm:p-8 flex items-center justify-between gap-4 flex-wrap">
        <div>
          <div className="section-label text-flour/40 mb-2">{t(lang, "callCardLabel")}</div>
          <div className="font-serif text-xl sm:text-2xl font-bold">{phone}</div>
        </div>
        <a href={`tel:${phone}`} className="btn-green">{t(lang, "callNowBtn")}</a>
      </div> */}

      {/* Product selection */}
      <div className="px-5 sm:px-12 lg:px-20 mb-10">
        <div className="section-label text-charcoal/40 mb-6 flex items-center gap-4">
          {t(lang, "selectProductsLabel")}
          <span className="flex-1 h-px bg-charcoal/8" />
        </div>
        <div className="space-y-8">
          {grouped.map(([cat, catProducts]) => {
            const first = catProducts[0];
            const catLabel = lang === "mn"
              ? (first.categoryMn ?? cat)
              : (first.categoryEn ?? cat);
            return (
              <div key={cat}>
                {/* Category header */}
                <div className="section-label text-charcoal/35 mb-3 flex items-center gap-3">
                  {catLabel}
                  <span className="flex-1 h-px bg-charcoal/8" />
                  <span className="text-charcoal/20 normal-case font-normal">
                    {catProducts.length}
                  </span>
                </div>
                {/* Products in this category */}
                <div className="space-y-3">
                  {catProducts.map((p) => {
                    const q = qty[p.id] || 0;
                    const name = localized(p, "name", lang);
                    const unit = localized(p, "unit", lang);
                    return (
                      <div key={p.id} className={`flex items-center gap-4 border p-4 sm:p-5 transition-all duration-200 ${
                        q > 0 ? "border-brand-green bg-brand-green/5" : "border-charcoal/10 bg-white"
                      } ${!p.inStock ? "opacity-40 pointer-events-none" : ""}`}>
                        <img src={p.image} alt={name} className="w-14 h-14 sm:w-16 sm:h-16 object-cover flex-shrink-0 rounded" />
                        <div className="flex-1 min-w-0">
                          <div className="font-serif font-bold text-[15px] text-charcoal truncate">{name}</div>
                          <div className="text-xs text-charcoal/45 mt-0.5">{formatPrice(p.price)} · </div>
                        </div>
                        <div className="flex items-center gap-3 flex-shrink-0">
                          <button type="button" onClick={() => setQuantity(p.id, q - 1)}
                            className="w-9 h-9 border border-charcoal/15 flex items-center justify-center text-lg text-charcoal hover:bg-charcoal/5 transition-colors">−</button>
                          <span className="w-6 text-center font-medium text-sm tabular-nums text-charcoal">{q}</span>
                          <button type="button" onClick={() => setQuantity(p.id, q + 1)}
                            className="w-9 h-9 bg-charcoal text-flour flex items-center justify-center text-lg hover:bg-charcoal-soft transition-colors">+</button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Contact details */}
      <div className="px-5 sm:px-12 lg:px-20 mb-10">
        <div className="section-label text-charcoal/40 mb-6 flex items-center gap-4">
          {t(lang, "yourDetailsLabel")}
          <span className="flex-1 h-px bg-charcoal/8" />
        </div>
        <div className="space-y-4 max-w-xl">
          <Field label={`${t(lang, "fieldStoreLabel")} *`} name="storeName" required placeholder={t(lang, "fieldStorePlaceholder")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* <Field label={`${t(lang, "fieldContactNameLabel")} *`} name="contactName" required placeholder={t(lang, "fieldContactNamePlaceholder")} /> */}
            <Field label={`${t(lang, "fieldPhoneLabel")} *`} name="phone" required type="tel" placeholder="+976 9911 2233" inputMode="tel" />
          </div>
          <Field label={`${t(lang, "fieldAddressLabel")} *`} name="address" required placeholder={t(lang, "fieldAddressPlaceholder")} />
          <div>
            <label className="block section-label text-charcoal/40 mb-2">
              {t(lang, "fieldNotesLabel")} <span className="normal-case text-charcoal/25">({t(lang, "fieldOptional")})</span>
            </label>
            <textarea name="notes" rows={3} placeholder={t(lang, "fieldNotesPlaceholder")}
              className="w-full border border-charcoal/12 px-4 py-3 text-[15px] text-charcoal focus:outline-none focus:border-brand-green bg-white transition-colors" />
          </div>
        </div>
      </div>

      {/* Desktop submit */}
      <div className="hidden sm:flex px-12 lg:px-20 max-w-xl items-center justify-between bg-charcoal text-flour px-6 py-5 mx-5 sm:mx-12 lg:mx-20">
        <div>
          <div className="section-label text-flour/40 mb-1">{itemsSelectedText(lang, itemCount)}</div>
          <div className="font-serif font-bold text-xl">{formatPrice(total)}</div>
        </div>
        <button type="submit" disabled={itemCount === 0}
          className="btn-green disabled:opacity-30 disabled:pointer-events-none">
          {t(lang, "submitOrderBtn")}
        </button>
      </div>

      {/* Mobile sticky submit */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-charcoal text-flour px-5 py-4 flex items-center justify-between gap-4 shadow-[0_-4px_24px_rgba(0,0,0,0.25)]">
        <div>
          <div className="section-label text-flour/40 mb-0.5">{itemsSelectedText(lang, itemCount)}</div>
          <div className="font-serif font-bold text-base">{formatPrice(total)}</div>
        </div>
        <button type="submit" disabled={itemCount === 0}
          className="btn-green disabled:opacity-30 disabled:pointer-events-none">
          {t(lang, "submitOrderBtn")}
        </button>
      </div>
    </form>
  );
}

function Field({ label, name, required, placeholder, type = "text", inputMode }: {
  label: string; name: string; required?: boolean; placeholder?: string; type?: string; inputMode?: "tel" | "text" | "numeric";
}) {
  return (
    <div>
      <label className="block section-label text-charcoal/40 mb-2">{label}</label>
      <input type={type} name={name} required={required} placeholder={placeholder} inputMode={inputMode}
        className="w-full border border-charcoal/12 px-4 py-3 text-[15px] text-charcoal focus:outline-none focus:border-brand-green bg-white transition-colors" />
    </div>
  );
}
