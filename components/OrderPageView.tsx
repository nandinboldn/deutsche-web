"use client";

import { Product } from "@/lib/types";
import OrderForm from "@/components/OrderForm";
import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/i18n";

const PHONE = "+976 9911 2233";

export default function OrderPageView({ products, initialProductId, hasError }: {
  products: Product[];
  initialProductId?: string;
  hasError?: boolean;
}) {
  const { lang } = useLanguage();
  return (
    <main className="min-h-screen bg-flour">
      {/* Header */}
      <div className="max-w-screen-xl mx-auto px-5 sm:px-12 lg:px-20 pt-24 pb-8 flex items-center justify-between">

        <a href="/" className="section-label text-charcoal/40 hover:text-charcoal transition-colors">
          ← {t(lang, "backLink")}
        </a>
      </div>

      <div className="max-w-screen-xl mx-auto px-5 sm:px-12 lg:px-20 mb-10">
        <div className="section-label text-brand-green mb-4">{t(lang, "orderEyebrow")}</div>
        <h1 className="font-serif text-display-md text-charcoal leading-none">{t(lang, "orderTitle")}</h1>
        {hasError && <p className="mt-4 text-sm text-muted-red">{t(lang, "orderErrorMsg")}</p>}
      </div>

      <OrderForm products={products} initialProductId={initialProductId} phone={PHONE} />
    </main>
  );
}
