"use client";

import { Order, formatPrice } from "@/lib/types";
import { useLanguage } from "./LanguageProvider";
import { t } from "@/lib/i18n";

const PHONE = "+976 9911 2233";

export default function ConfirmationView({ order }: { order?: Order }) {
  const { lang } = useLanguage();
  return (
    <main className="min-h-screen bg-flour flex flex-col items-center justify-center px-5 py-16 text-center">
      <div className="w-14 h-14 rounded-full bg-charcoal flex items-center justify-center mb-8">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-brand-green" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <div className="section-label text-brand-green mb-4">{t(lang, "orderReceivedEyebrow")}</div>
      <h1 className="font-serif text-display-md text-charcoal mb-6 leading-none">{t(lang, "confirmThankYou")}</h1>
      {order ? (
        lang === "mn" ? (
          <>
            <p className="text-charcoal/55 max-w-sm mb-2">
              <span className="font-medium text-charcoal">#{order.id}</span> дугаартай захиалга,{" "}
              <span className="font-medium text-charcoal">{formatPrice(order.total)}</span> дүнтэйгээр хүлээн авлаа.
            </p>
            <p className="text-charcoal/55 max-w-sm mb-10">
              Бид удахгүй <span className="font-medium text-charcoal">{order.phone}</span> руу утасдах болно.
            </p>
          </>
        ) : (
          <>
            <p className="text-charcoal/55 max-w-sm mb-2">
              Order <span className="font-medium text-charcoal">#{order.id}</span> for{" "}
              <span className="font-medium text-charcoal">{formatPrice(order.total)}</span> has been received.
            </p>
            <p className="text-charcoal/55 max-w-sm mb-10">
              We'll call <span className="font-medium text-charcoal">{order.phone}</span> shortly to confirm.
            </p>
          </>
        )
      ) : (
        <p className="text-charcoal/55 max-w-sm mb-10">
          {lang === "mn" ? "Захиалга хүлээн авлаа. Удахгүй утасдах болно." : "Your order has been received. We'll call you shortly."}
        </p>
      )}
      <div className="flex flex-wrap gap-4 justify-center">
        <a href={`tel:${PHONE}`} className="btn-primary">{t(lang, "confirmCallNow")}</a>
        <a href="/" className="btn-outline text-charcoal border-charcoal/25 hover:bg-charcoal hover:text-flour inline-flex">{t(lang, "confirmBackHome")}</a>
      </div>
    </main>
  );
}
