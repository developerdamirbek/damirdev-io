import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { User } from '@/types'

type UserStore = {
  user: User | null
  setUser: (user: User) => void
}

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,

        setUser: (user: User) =>
          set({
            user,
          }),
      }),
      {
        name: 'userStore',
      },
    ),
  ),
)

export const useUserStoreActions = () =>
  useUserStore((state) => ({
    setUser: state.setUser,
  }))

export const useUser = () => useUserStore((state) => state.user)

export const getUserFromServer = () => useUserStore.getState().user
