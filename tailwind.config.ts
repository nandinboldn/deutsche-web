import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── BRAND COLOURS (extracted from actual logo) ────────
        "brand-green":  "#468456",   // exact green from logo
        "brand-orange": "#FE770D",   // exact orange from logo
        "brand-cream":  "#E8DDBF",   // logo text cream

        // ── SITE PALETTE ──────────────────────────────────────
        flour:          "#F4F1EA",   // warm off-white background
        charcoal:       "#191918",   // deep charcoal text / dark bg
        wheat:          "#C7A56A",   // warm gold — secondary accent
        grain:          "#5A4635",   // dark grain brown
        "muted-red":    "#8E2929",   // sparse red
        field:          "#344635",   // deep muted green
        "flour-dark":   "#E8E2D6",
        "charcoal-soft":"#2A2A28",

        // ── LEGACY ADMIN (keep for admin pages) ───────────────
        green:   { DEFAULT: "#3e8049", dark: "#2d5e36", light: "#4a9457" },
        orange:  { DEFAULT: "#f57300" },
        cream:   "#f5ede0",
        ink:     "#1c2b1e",
        canvas:  "#f0ece4",
      },
      fontFamily: {
        serif: ["Playfair Display", "Georgia", "serif"],
        sans:  ["Manrope", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3.5rem,9vw,8rem)",  { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.8rem,7vw,6.5rem)", { lineHeight: "0.97", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(2rem,5vw,4.5rem)",   { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-sm": ["clamp(1.6rem,3.5vw,3rem)", { lineHeight: "1.1",  letterSpacing: "-0.01em" }],
        "label":      ["0.6875rem",                { lineHeight: "1",    letterSpacing: "0.18em" }],
      },
      transitionTimingFunction: {
        "expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "soft": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transitionDuration: {
        "600": "600ms",
        "800": "800ms",
        "1000": "1000ms",
        "1200": "1200ms",
      },
    },
  },
  plugins: [],
};

export default config;
