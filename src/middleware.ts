// middleware.ts
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { ROUTES } from '@/constants'

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request })
  const isAuthPage = [ROUTES.login, ROUTES.register].some((path) => request.nextUrl.pathname.startsWith(path))

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL(ROUTES.login, request.url))
  }

  if (token && isAuthPage) {
    return NextResponse.redirect(new URL(ROUTES.home, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
