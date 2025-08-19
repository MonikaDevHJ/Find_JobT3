// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/api/employer",
  "/api/candidate",
  "/sign_in(.*)",   // 👈 allow sign-in page
  "/sign_up(.*)",   // 👈 allow sign-up page
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  // ✅ allow public routes
  if (isPublicRoute(req)) return;

  // 🚫 block unauthenticated users from private routes
  if (!userId) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], 
};
