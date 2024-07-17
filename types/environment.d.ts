declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_APP_FETCH: string
      NEXT_PUBLIC_UPLOAD: string
      NEXT_PUBLIC_PHONE: string
      NEXT_PUBLIC_EMAIL: string
      NEXT_PUBLIC_DESCRIPTION: string
      NEXT_PUBLIC_KEYWORD: string
      NEXT_PUBLIC_TITLE: string
    }
  }
}
