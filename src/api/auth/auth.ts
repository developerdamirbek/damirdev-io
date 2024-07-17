'use server'

import { ReqMethods } from '@/constants'
import { setUserCredentialsTokens } from '@/helpers/actions'
import { apiRequest } from '@/helpers/utils'
import { Response } from '../types'
import { LoginType, ResetPasswordResponse, SignInResponse } from './types'

const endpoints = {
  signIn: '/student/signin',
  resetPassword: '/auth/reset-password',
}

type SignInParams = {
  login: string
  loginType: LoginType
  password: string
}

export const signIn = async (params: SignInParams) => {
  const requestData = JSON.stringify(params)

  return await apiRequest
    .fetch<Response<SignInResponse>>({
      apiEndpoint: endpoints.signIn,
      requestData,
      method: ReqMethods.Post,
    })
    .then((response) => {
      if (response?.success && response.data) {
        setUserCredentialsTokens(response.data)
      }

      return response
    })
}

export const resetPassword = async (email: string) => {
  const requestData = JSON.stringify({ email })

  return await apiRequest.fetch<Response<ResetPasswordResponse>>({
    apiEndpoint: endpoints.resetPassword,
    requestData,
    method: ReqMethods.Put,
  })
}
