import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { TVideo } from './types'

type HomeStore = {
  videos: TVideo[] | null
  setVideos: (videos: any) => void
  isLoading: boolean
  setIsLoading: (params: boolean) => void
}

export const useHomeStore = create<HomeStore>()(
  devtools(
    persist(
      (set) => ({
        videos: null,
        isLoading: false,
        setIsLoading: (params: boolean) => set({ isLoading: params }),
        setVideos: (videos: TVideo[]) => set({ videos }),
      }),
      {
        name: 'homeStore',
      },
    ),
  ),
)
