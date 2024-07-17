import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type ProfileStore = {
  email: string
  setEmail: (email: string) => void
  phone: string
  setPhone: (phone: string) => void
}

export const useProfileStore = create<ProfileStore>()(
  devtools(
    persist(
      (set) => ({
        email: '',
        phone: '',
        setEmail: (email: string) => set({ email }),
        setPhone: (phone: string) => set({ phone }),
      }),
      {
        name: 'profile',
      },
    ),
  ),
)
