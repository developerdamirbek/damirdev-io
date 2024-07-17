'use server'

import { cookies } from 'next/headers'
import { SignInResponse } from '@/api/auth/types'
import { Cookies } from '@/constants/cookies'
import { UserCredentials } from '@/types/users'

export const setUserCredentialsTokens = async (authResponse: SignInResponse) => {
  const userCredentials: UserCredentials = {
    accessToken: authResponse.accessToken,
    refreshToken: authResponse.refreshToken,
    id: authResponse.user.id,
  }

  cookies().set(Cookies.User, JSON.stringify(userCredentials), { httpOnly: true })
}
