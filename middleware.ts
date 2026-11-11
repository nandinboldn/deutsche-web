import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtected = pathname.startsWith("/admin") && pathname !== "/admin/login";

  if (isProtected) {
    const session = request.cookies.get("db_admin_session");
    if (session?.value !== "authenticated") {
      const url = new URL("/admin/login", request.url);
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
