import { getOrders, formatPrice, OrderStatus } from "@/lib/data";
import AdminNav from "@/components/AdminNav";
import { updateOrderStatusAction } from "@/lib/actions";
import StatusBadge from "@/components/StatusBadge";

const STATUSES: OrderStatus[] = ["pending", "confirmed", "fulfilled", "cancelled"];

export default function AdminOrdersPage() {
  const orders = getOrders();

  return (
    <main className="min-h-screen">
      <AdminNav active="orders" />

      <div className="px-5 sm:px-12 lg:px-20 py-10">
        <h1 className="font-serif font-extrabold text-2xl mb-8">Захиалгууд</h1>

        {orders.length === 0 ? (
          <p className="text-ink/40 text-sm py-10 text-center">Одоогоор захиалга алга.</p>
        ) : (
          <div className="space-y-4">
            {orders.map((o) => (
              <div key={o.id} className="border border-black/10 rounded-lg p-5">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-serif font-bold text-base">{o.storeName}</span>
                      <span className="text-xs text-ink/30">#{o.id}</span>
                    </div>
                    <div className="text-xs text-ink/50">
                      {o.contactName} · {o.phone} · {o.address}
                    </div>
                    <div className="text-xs text-ink/30 mt-0.5">
                      {new Date(o.createdAt).toLocaleString()}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-serif font-bold text-lg">{formatPrice(o.total)}</span>
                    <StatusBadge status={o.status} />
                  </div>
                </div>

                <div className="bg-black/[0.03] rounded p-3 mb-4 space-y-1.5">
                  {o.items.map((item) => (
                    <div key={item.productId} className="flex justify-between text-sm">
                      <span>
                        {item.qty} × {item.name}
                      </span>
                      <span className="text-ink/50">{formatPrice(item.price * item.qty)}</span>
                    </div>
                  ))}
                </div>

                {o.notes && (
                  <p className="text-xs text-ink/50 italic mb-4">Тэмдэглэл: {o.notes}</p>
                )}

                <form action={updateOrderStatusAction} className="flex items-center gap-2">
                  <input type="hidden" name="id" value={o.id} />
                  <select
                    name="status"
                    defaultValue={o.status}
                    className="text-[12px] border border-black/15 rounded px-3 py-2 bg-white"
                  >
                    <option value="pending">Хүлээгдэж байна</option>
                    <option value="confirmed">Баталсан</option>
                    <option value="fulfilled">Биелүүлсэн</option>
                    <option value="cancelled">Цуцалсан</option>
                  </select>
                  <button className="text-[11px] tracking-wider uppercase text-green border border-green/30 rounded px-4 py-2 hover:bg-green hover:text-cream transition">
                    Статус шинэчлэх
                  </button>
                  <a
                    href={`tel:${o.phone}`}
                    className="text-[11px] tracking-wider uppercase text-ink/50 border border-black/15 rounded px-4 py-2 hover:bg-black/5 transition ml-auto"
                  >
                    Дэлгүүр рүү залгах
                  </a>
                </form>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
