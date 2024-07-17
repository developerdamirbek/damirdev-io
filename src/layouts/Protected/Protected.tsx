'use client'

import { PropsWithChildren } from 'react'
import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import { useAppStore } from '@/stores/app'
import { Header } from './Header'

import styles from './Protected.module.scss'

const cx = classNames.bind(styles)

export const Protected = ({ children }: PropsWithChildren) => {
  const toggleSidebar = useAppStore((state) => state.toggleSidebar)
  const isSidebarMini = useAppStore((state) => state.isSidebarMini)

  return (
    <Box component="section" className={cx('protected')}>
      <Box className={cx('protected__content')}>
        <Header />

        <Box component="main" className={cx('protected__main', 'protected__white-bg')}>
          <Box component="section" className={cx('protected__main-content')}>
            {children}
          </Box>
        </Box>
      </Box>

      <Box
        className={cx('protected__black-bg', { 'protected__black-bg--active': isSidebarMini })}
        onClick={toggleSidebar}
      />
    </Box>
  )
}
