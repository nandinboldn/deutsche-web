"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue>({
  lang: "mn",
  setLang: () => {},
});

const STORAGE_KEY = "db_lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Default language is Mongolian. We read any saved preference after
  // mount (client-only) so the very first paint — including for users
  // who haven't visited before — is always Mongolian.
  const [lang, setLangState] = useState<Lang>("mn");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "mn") setLangState(stored);
  }, []);

  function setLang(next: Lang) {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
    document.documentElement.lang = next;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
