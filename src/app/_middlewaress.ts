// import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// // This function can be marked `async` if using `await` inside
// export function middleware(request: NextRequest) {
//   console.log(request.url);
//   return NextResponse.redirect(new URL("/home", request.url));
// }

// // See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };

// middleware.ts
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
const RESTRICTED_COUNTRIES = ["PH", "US", "NG", "NIG"];
export async function middleware(request: NextRequest, _next: NextFetchEvent) {
  console.log("REQUEST OBJECT", request);
  const res = NextResponse.next();
  const country = request.geo?.country ?? "";
  if (RESTRICTED_COUNTRIES.includes(country)) {
    return NextResponse.rewrite(new URL("/restricted", request.url));
  }
  return res;
}

// middleware and edge functions

//Middleware: a function that runs before a request is completed. i.e geolocation

// Edge functions: serverless functions that runs close to the user making the request very fast

// middleware usage: headers.get("authorization"), response.next()

// Promotes DRY code by not allowing check logic in all routes i.e user === "Admin" etc.
