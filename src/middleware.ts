// middleware.ts
// Changing countries ✅
// import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
// const RESTRICTED_COUNTRIES = ["PH", "US"];
// export async function middleware(request: NextRequest, _next: NextFetchEvent) {
//   const country = request.headers.get("cloudfront-viewer-country") ?? "";
//   if (RESTRICTED_COUNTRIES.includes(country)) {
//     return NextResponse.rewrite(new URL("/restricted", request.url));
//   }
//   // return res;
// }

import { NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://www.yoursite.com", "https://yoursite.com"]
    : ["http://localhost:3000"];

export function middleware(request: Request) {
  const origin = request.headers.get("origin");
  console.log("ORIGIN", origin);

  if (origin && !allowedOrigins.includes(origin)) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  // console.log("Middleware!");

  // console.log(request.method);
  // console.log(request.url);

  return NextResponse.next();
}

//Any route in api folder would have middleware ran before it
export const config = {
  matcher: "/api/:path*",
};

// or if (req.url.includes("/api")) then put logic inside

// rate limiter prevents api from being abused with request

// middleware runs in edge runtime
