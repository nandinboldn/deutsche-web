"use client";

import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle({ compact }: { compact?: boolean }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-0.5">
      {(["mn", "en"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`lang-btn-adaptive text-[10px] font-semibold tracking-[0.12em] uppercase px-2.5 py-1.5 rounded-full ${
            lang === l
              ? "lang-selected"
              : "text-flour/40 hover:text-flour/80"
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
