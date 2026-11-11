// Server-only data access (uses Node's fs/path). Never import this file
// from a "use client" component — import from "@/lib/types" instead.

import fs from "fs";
import path from "path";
import { Product, Order, OrderStatus } from "./types";

export { formatPrice } from "./types";
export type { Product, Order, OrderItem, OrderStatus } from "./types";

const dataDir = path.join(process.cwd(), "data");
const productsFile = path.join(dataDir, "products.json");
const ordersFile = path.join(dataDir, "orders.json");

function readJSON<T>(file: string, fallback: T): T {
  try {
    if (!fs.existsSync(file)) return fallback;
    const raw = fs.readFileSync(file, "utf-8");
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(file: string, data: unknown) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// ───────── Products ─────────

export function getProducts(): Product[] {
  return readJSON<Product[]>(productsFile, []);
}

export function getInStockProducts(): Product[] {
  return getProducts().filter((p) => p.inStock);
}

export function getProduct(id: string): Product | undefined {
  return getProducts().find((p) => p.id === id);
}

export function saveProducts(products: Product[]) {
  writeJSON(productsFile, products);
}

export function addProduct(product: Product) {
  const products = getProducts();
  products.push(product);
  saveProducts(products);
}

export function updateProduct(id: string, updates: Partial<Product>) {
  const products = getProducts();
  const idx = products.findIndex((p) => p.id === id);
  if (idx === -1) return;
  products[idx] = { ...products[idx], ...updates };
  saveProducts(products);
}

export function deleteProduct(id: string) {
  const products = getProducts().filter((p) => p.id !== id);
  saveProducts(products);
}

// ───────── Orders ─────────

export function getOrders(): Order[] {
  const orders = readJSON<Order[]>(ordersFile, []);
  return orders.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getOrder(id: string): Order | undefined {
  return getOrders().find((o) => o.id === id);
}

export function addOrder(order: Order) {
  const orders = readJSON<Order[]>(ordersFile, []);
  orders.push(order);
  writeJSON(ordersFile, orders);
}

export function updateOrderStatus(id: string, status: OrderStatus) {
  const orders = readJSON<Order[]>(ordersFile, []);
  const idx = orders.findIndex((o) => o.id === id);
  if (idx === -1) return;
  orders[idx].status = status;
  writeJSON(ordersFile, orders);
}

export function getPendingOrderCount(): number {
  return getOrders().filter((o) => o.status === "pending").length;
}
