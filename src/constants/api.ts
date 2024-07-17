import { API_VERSION } from '@/constants/env'

export const VERSION = API_VERSION || ''

export const enum ReqMethods {
  Post = 'POST',
  Get = 'GET',
  Put = 'PUT',
  Delete = 'DELETE',
}
