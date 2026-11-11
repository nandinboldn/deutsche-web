import { cookies } from "next/headers";

export const SESSION_COOKIE = "db_admin_session";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "changeme123";

export function isAuthenticated(): boolean {
  const cookie = cookies().get(SESSION_COOKIE);
  return cookie?.value === "authenticated";
}
