import { useEffect } from 'react'
import { useMediaQuery } from '@mui/material'
import { useAppStore } from '@/stores/app'

const useResponsive = () => {
  const isSidebarMini = useAppStore((state) => state.isSidebarMini)
  const toggleSidebar = useAppStore((state) => state.toggleSidebar)

  const matches = useMediaQuery('(max-width:1044px)')

  useEffect(() => {
    if ((matches && !isSidebarMini) || (!matches && isSidebarMini)) {
      toggleSidebar()
    }
  }, [matches, isSidebarMini, toggleSidebar])
}

export default useResponsive
