import { getProducts, formatPrice } from "@/lib/data";
import AdminNav from "@/components/AdminNav";
import { deleteProductAction } from "@/lib/actions";

export default function AdminProductsPage() {
  const products = getProducts();

  return (
    <main className="min-h-screen">
      <AdminNav active="products" />

      <div className="px-5 sm:px-12 lg:px-20 py-10">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-serif font-extrabold text-2xl">Бүтээгдэхүүн</h1>
          <a
            href="/admin/products/new"
            className="bg-green text-cream px-5 py-2.5 rounded text-[11px] font-medium tracking-[2px] uppercase hover:bg-green-dark transition"
          >
            + Бүтээгдэхүүн нэмэх
          </a>
        </div>

        <div className="space-y-3">
          {products.map((p) => (
            <div
              key={p.id}
              className="flex items-center gap-4 border border-black/10 rounded-lg p-4 flex-wrap sm:flex-nowrap"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.name} className="w-14 h-14 rounded object-cover flex-shrink-0" />

              <div className="flex-1 min-w-[160px]">
                <div className="flex items-center gap-2">
                  <span className="font-serif font-bold text-[15px]">{p.name}</span>
                  {p.tag && (
                    <span className="text-[9px] uppercase tracking-wide text-orange border border-orange/30 rounded px-1.5 py-0.5">
                      {p.tag}
                    </span>
                  )}
                  {!p.inStock && (
                    <span className="text-[9px] uppercase tracking-wide text-ink/40 border border-black/15 rounded px-1.5 py-0.5">
                      Нөөцгүй
                    </span>
                  )}
                </div>
                <div className="text-xs text-ink/40 mt-0.5">
                  {p.weight} · {p.casePack}
                </div>
              </div>

              <div className="font-serif font-bold text-sm whitespace-nowrap">
                {formatPrice(p.price)}
                <span className="text-ink/40 font-sans font-normal text-xs ml-1">{p.unit}</span>
              </div>

              <div className="flex items-center gap-2 ml-auto">
                <a
                  href={`/admin/products/${p.id}`}
                  className="text-[11px] tracking-wider uppercase text-green border border-green/30 rounded px-3.5 py-2 hover:bg-green hover:text-cream transition"
                >
                  Засах
                </a>
                <form action={deleteProductAction}>
                  <input type="hidden" name="id" value={p.id} />
                  <button
                    className="text-[11px] tracking-wider uppercase text-orange/80 border border-orange/25 rounded px-3.5 py-2 hover:bg-orange hover:text-white transition"
                  >
                    Устгах
                  </button>
                </form>
              </div>
            </div>
          ))}

          {products.length === 0 && (
            <p className="text-ink/40 text-sm py-10 text-center">Одоогоор бүтээгдэхүүн алга.</p>
          )}
        </div>
      </div>
    </main>
  );
}
