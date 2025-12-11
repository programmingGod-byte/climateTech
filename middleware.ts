import { NextRequest, NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// 1. Initialize Redis
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// 2. Define your Rate Limits
// Limit: 5 requests per 60 seconds (Good for contact forms & login)
const strictRatelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(5, "60 s"),
  analytics: true,
});

// Limit: 50 requests per 60 seconds (Good for general admin dashboard usage)
const generalRatelimit = new Ratelimit({
  redis: redis,
  limiter: Ratelimit.slidingWindow(50, "60 s"),
  analytics: true,
});

export default async function middleware(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
  const path = request.nextUrl.pathname;

  // 3. Decide which limiter to use based on the path
  let limitResult;

  if (path.startsWith("/api/contact") || path.startsWith("/api/admin/login")) {
    // STRICT limit for contact form and login (prevents spam/brute force)
    limitResult = await strictRatelimit.limit(ip);
  } else if (path.startsWith("/api/admin")) {
    // RELAXED limit for the admin dashboard data fetching
    limitResult = await generalRatelimit.limit(ip);
  } else {
    // No limit for other pages (like the homepage, assets, etc.)
    return NextResponse.next();
  }

  // 4. Check if they passed the limit
  if (!limitResult.success) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  // 5. Add headers (optional, helps the client know how many requests they have left)
  const res = NextResponse.next();
  res.headers.set("X-RateLimit-Limit", limitResult.limit.toString());
  res.headers.set("X-RateLimit-Remaining", limitResult.remaining.toString());
  
  return res;
}

// 6. Configure which paths run through this middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};