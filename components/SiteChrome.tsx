"use client";

import { usePathname } from "next/navigation";
import { LanguageProvider } from "./LanguageProvider";
import Nav from "./Nav";

type PageTheme = "default" | "products" | "contact";

function getPageTheme(pathname: string | null): PageTheme {
  if (!pathname) return "default";
  if (pathname.startsWith("/products")) return "products";
  if (pathname.startsWith("/contact")) return "contact";
  return "default";
}

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");
  const theme = isAdmin ? "admin" : getPageTheme(pathname);

  return (
    <LanguageProvider>
      {/* Persistent outer wrapper — NOT keyed, so it survives route changes.
          data-theme drives CSS variable transitions for smooth bg color shifts. */}
      <div data-theme={theme} className="theme-wrapper">
        {!isAdmin && <Nav />}
        {/* key={pathname} remounts this div on route change → triggers pageEnter fade */}
        <div key={pathname} className="page-enter">
          {children}
        </div>
      </div>
    </LanguageProvider>
  );
}
