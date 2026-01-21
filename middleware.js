import { NextResponse } from "next/server";

export function middleware(req) {
  const pathname = req.nextUrl ? req.nextUrl.pathname : new URL(req.url).pathname;
  if (pathname.startsWith("/admin")) {
    return new Response("Not found", { status: 404 });
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*"],
};
