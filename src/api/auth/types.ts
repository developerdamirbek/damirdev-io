import { User } from '@/types/users'

export type SignInResponse = {
  accessToken: string
  refreshToken: string
  user: User
}

export type ResetPasswordResponse = {
  success: boolean
}

export const enum LoginType {
  Phone = 'phone',
  Email = 'email',
}
