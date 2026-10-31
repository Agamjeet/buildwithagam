import { NextResponse } from "next/server";

const CANONICAL_HOST = "buildwithagam.com";

const redirectHosts = new Set([
  "www.buildwithagam.com",
  "agamjeet.in",
  "www.agamjeet.in",
]);

export function middleware(request) {
  const host = (request.headers.get("host") || "").split(":")[0];

  if (redirectHosts.has(host)) {
    const url = request.nextUrl.clone();
    url.hostname = CANONICAL_HOST;
    url.protocol = "https:";
    url.port = "";
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
