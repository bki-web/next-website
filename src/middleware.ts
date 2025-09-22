// middleware.ts

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  // 1. Get the auth token cookie
  const token = request.cookies.get('token')?.value;

  // 2. If there's no token, redirect to the login page
  if (!token) {
    // Get the original URL the user was trying to access
    const from = request.nextUrl.pathname;
    
    // Construct the login URL with the 'from' parameter
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', from);

    return NextResponse.redirect(loginUrl);
  }

  // 3. If the token exists, allow the request to proceed
  return NextResponse.next();
}

// 4. Configure the matcher to run the middleware ONLY on protected routes
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/settings/:path*',
    // '/research/rnd/bki-rules-regulations'
    // Add any other routes you want to protect
  ],
};