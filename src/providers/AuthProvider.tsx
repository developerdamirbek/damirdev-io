import React, { PropsWithChildren } from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { ROUTES } from '@/constants/routes'

export const AuthProvider = ({ children }: PropsWithChildren<Record<string, unknown>>) => {
  const cookieStore = cookies()
  const token = cookieStore.get('refresh')

  if (!token) {
    redirect(ROUTES.login)
  }

  return <>{children}</>
}
