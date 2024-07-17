export const IS_PROD = process.env.NODE_ENV === 'production'
export const IS_DEV = process.env.NODE_ENV === 'development'

export const SHOW_CONSOLE_LOG = IS_DEV ? true : process.env.NEXT_PUBLIC_SHOW_LOGGER === 'true' ?? false

export const APP_LINK = process.env.NEXT_PUBLIC_APP_FETCH || ''
export const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION || ''
export const PUBLIC_EMAIL = IS_DEV ? process.env.NEXT_PUBLIC_EMAIL || '' : null
export const PUBLIC_PASSWORD = IS_DEV ? process.env.NEXT_PUBLIC_PASSWORD || '' : null
