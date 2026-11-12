"use client";

import { createPortal } from "react-dom";
import { useMemo, useEffect, useRef, useState } from "react";
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

  const formRef = useRef<HTMLFormElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  // Portal mount — avoids transform-ancestor breaking position:fixed
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

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

  function handleOrderClick() {
    if (!formRef.current) return;

    // Check if required contact fields are filled
    const storeName = formRef.current.querySelector('[name="storeName"]') as HTMLInputElement | null;
    const phoneField = formRef.current.querySelector('[name="phone"]') as HTMLInputElement | null;
    const address = formRef.current.querySelector('[name="address"]') as HTMLInputElement | null;

    const isContactFilled =
      storeName?.value?.trim() &&
      phoneField?.value?.trim() &&
      address?.value?.trim();

    if (!isContactFilled) {
      contactRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    formRef.current.requestSubmit();
  }

  return (
    <>
      <form
        ref={formRef}
        action={submitOrderAction}
        className="max-w-screen-xl mx-auto pb-24"
      >
        <input type="hidden" name="items" value={JSON.stringify(items)} />

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
                            <div className="text-xs text-charcoal/45 mt-0.5">{formatPrice(p.price)} · {unit}</div>
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
        <div ref={contactRef} className="px-5 sm:px-12 lg:px-20 mb-10 scroll-mt-24">
          <div className="section-label text-charcoal/40 mb-6 flex items-center gap-4">
            {t(lang, "yourDetailsLabel")}
            <span className="flex-1 h-px bg-charcoal/8" />
          </div>
          <div className="space-y-4 max-w-xl">
            <Field label={`${t(lang, "fieldStoreLabel")} *`} name="storeName" required placeholder={t(lang, "fieldStorePlaceholder")} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
      </form>

      {/* Portal renders outside the page-enter transform wrapper so position:fixed works correctly */}
      {mounted && createPortal(
        <div className="fixed bottom-0 inset-x-0 z-[9999] shadow-[0_-6px_32px_rgba(0,0,0,0.18)]">
          <div className="bg-charcoal text-flour flex items-stretch">

            {/* Left: Call button — always enabled */}
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-2.5 px-5 sm:px-8 py-4 border-r border-flour/10 hover:bg-flour/5 active:bg-flour/10 transition-colors flex-shrink-0"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className="hidden sm:block">
                <div className="section-label text-flour/40 leading-none mb-0.5">{lang === "mn" ? "Утасдах" : "Call"}</div>
                <div className="text-[13px] font-semibold tracking-wide">{phone}</div>
              </div>
              <span className="sm:hidden section-label text-flour/60">{lang === "mn" ? "Дуудлах" : "Call"}</span>
            </a>

            {/* Right: Cart summary + submit */}
            <div className="flex-1 flex items-center gap-3 sm:gap-5 px-4 sm:px-8 py-3">
              {/* Cart info */}
              <div className="flex-1 min-w-0">
                {itemCount > 0 ? (
                  <>
                    <div className="section-label text-flour/40 leading-none mb-0.5">
                      {itemsSelectedText(lang, itemCount)}
                    </div>
                    <div className="font-serif font-bold text-base sm:text-lg tabular-nums leading-none">
                      {formatPrice(total)}
                    </div>
                  </>
                ) : (
                  <div className="section-label text-flour/30 leading-none">
                    {lang === "mn" ? "Бүтээгдэхүүн сонгоогүй байна" : "No items selected"}
                  </div>
                )}
              </div>

              {/* Count badge */}
              {itemCount > 0 && (
                <span className="w-7 h-7 rounded-full bg-brand-green text-brand-cream flex items-center justify-center font-bold text-xs tabular-nums flex-shrink-0">
                  {itemCount}
                </span>
              )}

              {/* Submit */}
              <button
                type="button"
                onClick={handleOrderClick}
                disabled={itemCount === 0}
                className="btn-green flex-shrink-0 py-3 sm:py-3.5 disabled:opacity-30 disabled:pointer-events-none transition-opacity duration-300"
              >
                {t(lang, "submitOrderBtn")}
                {itemCount > 0 && (
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>,
        document.body
      )}
    </>
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
