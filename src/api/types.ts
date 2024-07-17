export type ResponseError = {
  errId: number
  errMsg: string
}

export type Response<T> = {
  data: T | null
  error: ResponseError | null
  success: boolean
}
