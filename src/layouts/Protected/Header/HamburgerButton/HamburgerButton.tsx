'use client'

import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import { Button } from '@mui/material'
import { useAppStore } from '@/stores/app'

export const HamburgerButton = () => {
  const toggleSidebar = useAppStore((state) => state.toggleSidebar)

  const handleClick = () => {
    toggleSidebar()
  }

  return (
    <Button onClick={handleClick}>
      <MenuOpenIcon />
    </Button>
  )
}
