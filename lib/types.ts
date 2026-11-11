// Client-safe types & helpers — no fs/path imports here.
// This file can be imported from both server and client components.

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  unit: string;
  weight: string;
  shelfLife: string;
  casePack: string;
  tag?: string;
  image: string;
  inStock: boolean;
  // Category for filtering on the catalogue page
  category?: string;        // slug e.g. "talh"
  categoryMn?: string;      // display e.g. "Талх"
  categoryEn?: string;      // display e.g. "Bread"
  // Optional Mongolian translations. If left blank, the site falls back
  // to the English field above — so adding products without translating
  // them never breaks the page, it just won't show Mongolian for that item.
  nameMn?: string;
  taglineMn?: string;
  descriptionMn?: string;
  tagMn?: string;
  shelfLifeMn?: string;
  casePackMn?: string;
  unitMn?: string;
};

export type Lang = "en" | "mn";

const LOCALIZABLE_FIELDS = ["name", "tagline", "description", "tag", "shelfLife", "casePack", "unit"] as const;
type LocalizableField = (typeof LOCALIZABLE_FIELDS)[number];

export function localized(product: Product, field: LocalizableField, lang: Lang): string {
  const record = product as unknown as Record<string, string | undefined>;
  if (lang === "mn") {
    const mnValue = record[`${field}Mn`];
    if (mnValue) return mnValue;
  }
  return record[field] || "";
}

export type OrderItem = {
  productId: string;
  name: string;
  qty: number;
  price: number;
};

export type OrderStatus = "pending" | "confirmed" | "fulfilled" | "cancelled";

export type Order = {
  id: string;
  createdAt: string;
  storeName: string;
  contactName: string;
  phone: string;
  address: string;
  notes?: string;
  items: OrderItem[];
  total: number;
  status: OrderStatus;
};

export function formatPrice(price: number): string {
  return price.toLocaleString("en-US") + "₮";
}
