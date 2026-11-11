import { logoutAction } from "@/lib/actions";

export default function AdminNav({ active }: { active: "dashboard" | "products" | "orders" }) {
  const links = [
    { key: "dashboard", href: "/admin", label: "Хяналтын самбар" },
    { key: "products", href: "/admin/products", label: "Бүтээгдэхүүн" },
    { key: "orders", href: "/admin/orders", label: "Захиалга" },
  ];

  return (
    <div className="bg-ink text-cream">
      <div className="px-5 sm:px-12 lg:px-20 py-4 flex items-center justify-between">
        <a href="/admin" className="flex items-baseline gap-1.5 font-serif">
          <span className="font-extrabold text-base">Deutsche</span>
          <span className="font-bold text-cream/60 text-sm">Admin</span>
        </a>
        <form action={logoutAction}>
          <button className="text-[10px] tracking-[2px] uppercase text-cream/50 hover:text-cream transition">
            Гарах
          </button>
        </form>
      </div>
      <div className="px-5 sm:px-12 lg:px-20 flex gap-1 border-t border-white/10 overflow-x-auto">
        {links.map((l) => (
          <a
            key={l.key}
            href={l.href}
            className={`text-[12px] px-4 py-3 border-b-2 whitespace-nowrap transition ${
              active === l.key
                ? "border-orange text-cream"
                : "border-transparent text-cream/45 hover:text-cream/80"
            }`}
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}
