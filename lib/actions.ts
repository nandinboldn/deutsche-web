"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { randomUUID } from "crypto";
import {
  addProduct,
  updateProduct,
  deleteProduct,
  addOrder,
  updateOrderStatus,
  Product,
  OrderItem,
  OrderStatus,
} from "./data";
import { SESSION_COOKIE, ADMIN_PASSWORD } from "./auth";

// ───────── Auth ─────────

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") || "");
  if (password === ADMIN_PASSWORD) {
    cookies().set(SESSION_COOKIE, "authenticated", {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });
    redirect("/admin");
  }
  redirect("/admin/login?error=1");
}

export async function logoutAction() {
  cookies().delete(SESSION_COOKIE);
  redirect("/admin/login");
}

// ───────── Products (admin only — protected by middleware) ─────────

function readProductForm(formData: FormData): Omit<Product, "id"> {
  return {
    name: String(formData.get("name") || ""),
    tagline: String(formData.get("tagline") || ""),
    description: String(formData.get("description") || ""),
    price: parseFloat(String(formData.get("price") || "0")) || 0,
    unit: String(formData.get("unit") || "per case"),
    weight: String(formData.get("weight") || ""),
    shelfLife: String(formData.get("shelfLife") || ""),
    casePack: String(formData.get("casePack") || ""),
    tag: String(formData.get("tag") || ""),
    image: String(formData.get("image") || ""),
    inStock: formData.get("inStock") === "on",
    category: String(formData.get("category") || "other"),
    categoryMn: String(formData.get("categoryMn") || ""),
    categoryEn: String(formData.get("categoryEn") || ""),
    nameMn: String(formData.get("nameMn") || ""),
    taglineMn: String(formData.get("taglineMn") || ""),
    descriptionMn: String(formData.get("descriptionMn") || ""),
    tagMn: String(formData.get("tagMn") || ""),
    shelfLifeMn: String(formData.get("shelfLifeMn") || ""),
    casePackMn: String(formData.get("casePackMn") || ""),
    unitMn: String(formData.get("unitMn") || ""),
  };
}

export async function createProductAction(formData: FormData) {
  const product: Product = { id: randomUUID(), ...readProductForm(formData) };
  addProduct(product);
  revalidatePath("/");
  revalidatePath("/admin/products");
  redirect("/admin/products");
}

export async function updateProductAction(formData: FormData) {
  const id = String(formData.get("id"));
  updateProduct(id, readProductForm(formData));
  revalidatePath("/");
  revalidatePath("/admin/products");
  redirect("/admin/products");
}

export async function deleteProductAction(formData: FormData) {
  const id = String(formData.get("id"));
  deleteProduct(id);
  revalidatePath("/");
  revalidatePath("/admin/products");
}

// ───────── Orders ─────────

export async function submitOrderAction(formData: FormData) {
  const itemsJson = String(formData.get("items") || "[]");
  let items: OrderItem[] = [];
  try {
    items = JSON.parse(itemsJson);
  } catch {
    items = [];
  }
  items = items.filter((i) => i.qty > 0);

  if (items.length === 0) {
    redirect("/order?error=empty");
  }

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);
  const order = {
    id: randomUUID().slice(0, 6).toUpperCase(),
    createdAt: new Date().toISOString(),
    storeName: String(formData.get("storeName") || ""),
    contactName: String(formData.get("contactName") || ""),
    phone: String(formData.get("phone") || ""),
    address: String(formData.get("address") || ""),
    notes: String(formData.get("notes") || ""),
    items,
    total,
    status: "pending" as OrderStatus,
  };
  addOrder(order);
  revalidatePath("/admin/orders");
  redirect(`/order/confirmation?id=${order.id}`);
}

export async function updateOrderStatusAction(formData: FormData) {
  const id = String(formData.get("id"));
  const status = String(formData.get("status")) as OrderStatus;
  updateOrderStatus(id, status);
  revalidatePath("/admin/orders");
}
