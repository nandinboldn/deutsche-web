import { getProduct } from "@/lib/data";
import AdminNav from "@/components/AdminNav";
import ProductFormFields from "@/components/ProductFormFields";
import { updateProductAction } from "@/lib/actions";
import { notFound } from "next/navigation";

export default function EditProductPage({ params }: { params: { id: string } }) {
  const product = getProduct(params.id);
  if (!product) notFound();

  return (
    <main className="min-h-screen">
      <AdminNav active="products" />
      <div className="px-5 sm:px-12 lg:px-20 py-10">
        <a href="/admin/products" className="text-[11px] text-ink/50 hover:text-ink mb-5 inline-block">
          ← Бүтээгдэхүүн рүү буцах
        </a>
        <h1 className="font-serif font-extrabold text-2xl mb-8">Бүтээгдэхүүн засах</h1>

        <form action={updateProductAction}>
          <input type="hidden" name="id" value={product.id} />
          <ProductFormFields product={product} />
          <button
            type="submit"
            className="mt-8 bg-green text-cream px-7 py-3.5 rounded text-[11px] font-medium tracking-[2px] uppercase hover:bg-green-dark transition"
          >
            Хадгалах
          </button>
        </form>
      </div>
    </main>
  );
}
