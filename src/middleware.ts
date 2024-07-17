import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { getUser } from '@/api/users'
import { ROUTES } from '@/constants'
import { apiRequest, getUserCredentials } from '@/helpers/utils'
import { useUserStore } from '@/stores/user'

export async function middleware(request: NextRequest) {
  const userCredentials = getUserCredentials(request)
  const redirectLogin = NextResponse.redirect(new URL(ROUTES.login, request.url))
  const redirectHome = NextResponse.redirect(new URL(ROUTES.home, request.url))
  const isPublicLink = request.url.includes(ROUTES.login) || request.url.includes(ROUTES.forgot)

  if (userCredentials?.accessToken && !isPublicLink) {
    return redirectLogin
  } else if (userCredentials?.accessToken) {
    if (!apiRequest.userCredentials) {
      apiRequest.setUserCredentials(userCredentials)
    }

    if (!useUserStore.getState().user) {
      const userResponse = await getUser(userCredentials.id.toString())

      if (userResponse && userResponse?.success && userResponse.data) {
        useUserStore.getState().setUser(userResponse.data)
      }
    }

    if (request.url.includes(ROUTES.login)) {
      return redirectHome
    }
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
