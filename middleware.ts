import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({ afterAuth(auth, req) {
  if (req.nextUrl.pathname === "/api/uploadthing") {
    return;
  }

  if (!auth.userId) {
    return new Response(null, { status: 401 });
  }
},
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};