import { cookies } from 'next/headers'
import { APP_LINK, IS_PROD } from '@/constants'
import { ReqMethods, VERSION } from '@/constants/api'
import { Cookies } from '@/constants/cookies'
import { UserCredentials } from '@/types/users'
import { consoleLog } from './console-log'

type FetchParams = {
  apiEndpoint: string
  method?: ReqMethods
  requestData?: BodyInit
  headers?: HeadersInit
  revalidate?: number
}

class ApiRequest {
  defaultRevalidate: number = IS_PROD ? 3600 : 120
  reqHeaders: HeadersInit = {
    'Content-Type': 'application/json',
  }

  userCredentials: UserCredentials | null = null

  getCookie = () => {
    const cookieStore = cookies()
    const user = cookieStore.get(Cookies.User)?.value

    if (user) {
      return JSON.parse(user)?.accessToken
    }

    return null
  }

  constructor(public apiLink = '') {}

  setUserCredentials(userCredentials: UserCredentials) {
    this.userCredentials = userCredentials
  }

  async fetch<T>({ apiEndpoint, method, requestData, headers, revalidate }: FetchParams): Promise<T | null> {
    const url = `${this.apiLink}${apiEndpoint}`

    try {
      const token = this.getCookie()
      const response = await fetch(url, {
        method,
        body: requestData,
        headers: {
          ...headers,
          ...this.reqHeaders,
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        next: {
          revalidate: revalidate || this.defaultRevalidate,
        },
      })

      if (!response.ok) {
        consoleLog('Debug fetch requestData:', requestData)
      }

      const json = await response.json()

      return json as T
    } catch (error: Error | unknown) {
      console.error(error)
    }

    return null
  }
}

export const apiRequest = new ApiRequest(`${APP_LINK}${VERSION}`)
