'use server'

import { cookies } from 'next/headers'
import { Cookies } from '@/constants/cookies'
import { apiRequest } from '@/helpers/utils/apiRequest'
import { Response } from '../types'
import { UserResponse } from './types'

const endpoints = {
  user: (id: string | number) => `/user/${id}`,
}

export const getUser = async (userId: string) => {
  if (!userId) {
    return Promise.reject(null)
  }

  return await apiRequest.fetch<Response<UserResponse>>({
    apiEndpoint: endpoints.user(userId),
  })
}

export const logOut = async () => {
  cookies().delete(Cookies.User)
}
