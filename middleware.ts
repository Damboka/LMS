import { authMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default authMiddleware({ afterAuth(auth, req) {
  if (req.nextUrl.pathname === "/api/uploadthing") {
    return;
  }
  const signInUrl = new URL('/sign-in', req.nextUrl.origin);
  const homeUrl = new URL('/', req.nextUrl.origin);
  if (!auth.userId && req.nextUrl.pathname !== '/sign-in') {
    return NextResponse.redirect(signInUrl);
  }
},
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};