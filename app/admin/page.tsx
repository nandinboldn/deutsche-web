import { getProducts, getOrders, formatPrice } from "@/lib/data";
import AdminNav from "@/components/AdminNav";
import StatusBadge from "@/components/StatusBadge";

export default function AdminDashboard() {
  const products = getProducts();
  const orders = getOrders();
  const pending = orders.filter((o) => o.status === "pending").length;
  const recent = orders.slice(0, 5);

  return (
    <main className="min-h-screen">
      <AdminNav active="dashboard" />

      <div className="px-5 sm:px-12 lg:px-20 py-10">
        <h1 className="font-serif font-extrabold text-2xl mb-8">Хяналтын самбар</h1>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-12">
          <StatCard label="Нийт бүтээгдэхүүн" value={String(products.length)} />
          <StatCard label="Хүлээгдэж буй захиалга" value={String(pending)} highlight={pending > 0} />
          <StatCard label="Нийт захиалга" value={String(orders.length)} />
          <StatCard
            label="Нийт орлого"
            value={formatPrice(orders.reduce((s, o) => s + o.total, 0))}
          />
        </div>

        <div className="flex items-center justify-between mb-5">
          <h2 className="text-[9px] tracking-[4px] uppercase text-green font-medium">Сүүлийн захиалгууд</h2>
          <a href="/admin/orders" className="text-[11px] text-green hover:underline">
            Бүгдийг харах →
          </a>
        </div>

        {recent.length === 0 ? (
          <p className="text-ink/40 text-sm">Одоогоор захиалга алга.</p>
        ) : (
          <div className="border border-black/10 rounded-lg overflow-hidden">
            {recent.map((o) => (
              <a
                key={o.id}
                href="/admin/orders"
                className="flex items-center justify-between gap-4 px-5 py-4 border-b border-black/10 last:border-b-0 hover:bg-black/[0.02] transition"
              >
                <div>
                  <div className="font-medium text-sm">{o.storeName}</div>
                  <div className="text-xs text-ink/40">{o.phone} · {new Date(o.createdAt).toLocaleDateString()}</div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-serif font-bold text-sm">{formatPrice(o.total)}</span>
                  <StatusBadge status={o.status} />
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}

function StatCard({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className={`rounded-lg border p-5 ${highlight ? "border-orange bg-orange/5" : "border-black/10"}`}>
      <div className="text-[9px] tracking-wider uppercase text-ink/40 mb-2">{label}</div>
      <div className="font-serif font-bold text-2xl">{value}</div>
    </div>
  );
}

