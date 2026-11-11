import AdminNav from "@/components/AdminNav";
import ProductFormFields from "@/components/ProductFormFields";
import { createProductAction } from "@/lib/actions";

export default function NewProductPage() {
  return (
    <main className="min-h-screen">
      <AdminNav active="products" />
      <div className="px-5 sm:px-12 lg:px-20 py-10">
        <a href="/admin/products" className="text-[11px] text-ink/50 hover:text-ink mb-5 inline-block">
          ← Бүтээгдэхүүн рүү буцах
        </a>
        <h1 className="font-serif font-extrabold text-2xl mb-8">Бүтээгдэхүүн нэмэх</h1>

        <form action={createProductAction}>
          <ProductFormFields />
          <button
            type="submit"
            className="mt-8 bg-green text-cream px-7 py-3.5 rounded text-[11px] font-medium tracking-[2px] uppercase hover:bg-green-dark transition"
          >
            Үүсгэх
          </button>
        </form>
      </div>
    </main>
  );
}
