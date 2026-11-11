import { getProducts } from "@/lib/data";
import ProductsCatalogue from "@/components/ProductsCatalogue";

export const metadata = {
  title: "Бүтээгдэхүүн | Deutsche Bäckerei",
  description: "Deutsche Bäckerei-н бүрэн бүтээгдэхүүний жагсаалт.",
};

export default function ProductsPage() {
  const products = getProducts();
  return <ProductsCatalogue products={products} />;
}
