import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // this makes the get request accessable to public with out auth
  publicRoutes: ["/api/:path*"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
