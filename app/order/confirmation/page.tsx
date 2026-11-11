import { getOrder } from "@/lib/data";
import ConfirmationView from "@/components/ConfirmationView";

export default function ConfirmationPage({ searchParams }: { searchParams: { id?: string } }) {
  const order = searchParams.id ? getOrder(searchParams.id) : undefined;
  return <ConfirmationView order={order} />;
}
