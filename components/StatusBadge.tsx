const STATUS_LABELS: Record<string, string> = {
  pending:   "Хүлээгдэж байна",
  confirmed: "Баталсан",
  fulfilled: "Биелүүлсэн",
  cancelled: "Цуцалсан",
};

export default function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    pending:   "bg-orange/10 text-orange",
    confirmed: "bg-green/10 text-green",
    fulfilled: "bg-black/5 text-ink/50",
    cancelled: "bg-red-50 text-red-400",
  };
  return (
    <span className={`text-[10px] tracking-wide px-2.5 py-1 rounded-full ${styles[status] || ""}`}>
      {STATUS_LABELS[status] ?? status}
    </span>
  );
}
