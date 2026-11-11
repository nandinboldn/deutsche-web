import { getInStockProducts } from "@/lib/data";
import OrderPageView from "@/components/OrderPageView";

export default function OrderPage({
  searchParams,
}: {
  searchParams: { product?: string; error?: string };
}) {
  const products = getInStockProducts();

  return (
    <OrderPageView
      products={products}
      initialProductId={searchParams.product}
      hasError={searchParams.error === "empty"}
    />
  );
}
