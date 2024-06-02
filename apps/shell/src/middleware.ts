import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/about-us/')) {
    return NextResponse.rewrite(new URL('/about-us', request.url))
  }
}