# Deutsche Bäckerei — Wholesale Ordering Site

A Next.js 14 site for the bakery's wholesale brochure, supermarket ordering flow, and an admin
dashboard to manage products, prices, and incoming orders.

## What's included

- **Public site (`/`)** — brand brochure: hero, photo gallery carousel, product range with live
  prices, "why partner with us," and contact section. Fully responsive (mobile, tablet, desktop).
- **Bilingual (Mongolian / English)** — a language toggle in the top-right corner switches the
  whole public site instantly. **Mongolian is the default** for every visitor; English is one tap
  away. See "Managing translations" below for how product text is handled.
- **Order page (`/order`)** — the main way supermarkets place orders online: tap +/- steppers to
  pick products and quantities, fill in store/contact details, and submit. A prominent "Call to
  Order" card and a sticky bottom call/order bar are always visible on mobile, since most orders
  come in by phone.
- **Admin dashboard (`/admin`)** — password-protected, English-only (internal tool). Add, edit,
  and delete products (including price, stock status, weight, shelf life, and both English and
  Mongolian text for each), and view/manage incoming orders.

## Getting started

```bash
npm install
cp .env.example .env.local
```

Open `.env.local` and set a real admin password:

```
ADMIN_PASSWORD=your-real-password-here
```

Then run it locally:

```bash
npm run dev
```

Visit `http://localhost:3000` for the public site, and `http://localhost:3000/admin/login` for
the admin dashboard.

## Deploying

Run a production build and start it:

```bash
npm run build
npm start
```

**Important:** Products and orders are stored as JSON files on disk (`data/products.json`,
`data/orders.json`) rather than in a database — simple and dependency-free, but it means the
app needs a **persistent filesystem**. Deploy this on a regular Node server (a VPS, for example)
rather than a serverless/edge platform like Vercel's default setup, where the filesystem resets
between requests and your edits/orders would be lost.

## Managing translations

- **Fixed site copy** (hero text, section headings, form labels, etc.) lives in `lib/i18n.ts` as
  a single English/Mongolian dictionary. Edit the strings there if you want to reword anything.
- **Product text** (name, tagline, description, tag, shelf life, case pack, unit) is bilingual
  *per product*, editable from `/admin/products`. Each product's edit form has an "English"
  section and a "Mongolian (optional)" section. If you leave a Mongolian field blank, that
  product automatically falls back to showing the English text — so adding a new product without
  translating it right away never breaks the page.
- The language toggle remembers the visitor's last choice (via browser storage), but **every new
  visitor sees Mongolian first**, per how it's set up.

## Customizing

- **Products & prices** — edit directly from `/admin/products`, no code changes needed.
- **Contact phone/email/address** — currently set as placeholders (Ulaanbaatar, Mongolia). Search
  for `PHONE` in `app/page.tsx` and `app/order/page.tsx` to update the phone number, and edit the
  contact section in `app/page.tsx` for email/address.
- **Currency** — prices are formatted in Mongolian Tögrög (₮) via `formatPrice()` in `lib/types.ts`.
  Change the suffix/locale there if needed.
- **Gallery photos** — the homepage carousel uses placeholder Unsplash images. Swap the `src` URLs
  in the `slides` array in `app/page.tsx` for real bakery photos.
- **Default admin password** is `changeme123` if you don't set `.env.local` — change this before
  deploying anywhere public.

## Project structure

```
app/
  page.tsx                 → server data-fetch for homepage → renders HomeView
  order/page.tsx           → server data-fetch for order page → renders OrderPageView
  order/confirmation/      → server data-fetch → renders ConfirmationView
  admin/                   → dashboard, products, orders (password protected, English-only)
lib/
  i18n.ts                  → fixed UI copy dictionary (EN/MN) + gallery slides + "why us" pillars
  types.ts                 → Product type (with optional *Mn fields) + localized() helper
  data.ts                  → server-only JSON file read/write
  actions.ts                → server actions (create/update/delete product, submit order, login)
components/
  LanguageProvider.tsx      → React context holding current language, defaults to "mn"
  LanguageToggle.tsx        → the MN/EN pill button, fixed top-right
  SiteChrome.tsx            → wraps every page in the provider; hides the toggle on /admin
  HomeView.tsx, OrderPageView.tsx, ConfirmationView.tsx → translated client views
  Carousel.tsx, ProductCard.tsx, OrderForm.tsx, etc.    → translated UI pieces
data/                      → products.json (now with *Mn fields), orders.json
```
