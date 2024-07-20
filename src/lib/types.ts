// lib/types.ts
export interface AdapterUser {
  id: string
  name?: string | null
  email: string // Ensure this is a string, not nullable
  emailVerified?: Date | null
  image?: string | null
}
