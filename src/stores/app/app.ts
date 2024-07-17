import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

type AppStore = {
  isSidebarMini: boolean

  toggleSidebar: VoidFunction
}

export const useAppStore = create<AppStore>()(
  devtools(
    persist(
      (set) => ({
        isSidebarMini: false,

        toggleSidebar: () => set((state) => ({ isSidebarMini: !state.isSidebarMini })),
      }),
      {
        name: 'appStore',
      },
    ),
  ),
)

export const getAppSidebarStatus = () => useAppStore.getState().isSidebarMini
