import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

// ✅ Let Clerk run on all routes
export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)", // exclude static files
  ],
};
