'use client'

import React, { useState } from 'react'
import { Box, IconButton, Menu, MenuItem, Tooltip } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { logOut } from '@/api/users'
import AllCoursesIcon from '@/assets/icons/all-courses.svg'
import ExitIcon from '@/assets/icons/exit.svg'
import MyCertificatesIcon from '@/assets/icons/my-certificates.svg'
import UserIcon from '@/assets/icons/user.svg'
import { Avatar, AvatarType } from '@/components'
import { ROUTES } from '@/constants'
import mainDictionary from '@/dictionary'
import { useHomeStore } from '@/stores/home'
import { useUser } from '@/stores/user'
import { paperProps } from './paperProps'

import styles from './User.module.scss'

const cn = classNames.bind(styles)

export const User = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const user = useUser()
  const router = useRouter()
  const setLoader = useHomeStore((state) => state.setIsLoading)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleExitButtonClick = async () => {
    setAnchorEl(null)

    setLoader(true)
    logOut().finally(() => {
      router.push(ROUTES.login)

      setTimeout(() => {
        setLoader(false)
      }, 1_000)
    })
  }

  return (
    <>
      <Tooltip title="Настройки учетной записи">
        <IconButton
          onClick={handleClick}
          size="medium"
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar firstName={user?.firstName[0]} lastName={user?.lastName[0]} size={AvatarType.Medium} isBorder />
        </IconButton>
      </Tooltip>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{ paper: paperProps }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <div className={cn('user__profile')}>
          <div className={cn('user__name')}>
            {user?.firstName} {user?.lastName}
          </div>

          <span className={cn('user__email')}>{user?.email}</span>
        </div>

        <MenuItem component={Link} href={ROUTES.allCourses} className={cn('user__menu')}>
          <Box className={cn('user__menu-item')}>
            <AllCoursesIcon width={22} height={22} />

            <span>{mainDictionary.allCourses}</span>
          </Box>
        </MenuItem>

        <MenuItem component={Link} href={ROUTES.myCertificates} className={cn('user__menu')}>
          <Box className={cn('user__menu-item')}>
            <MyCertificatesIcon width={24} height={24} />

            <span>{mainDictionary.myCertificates}</span>
          </Box>
        </MenuItem>

        <MenuItem component={Link} href={ROUTES.profile} className={cn('user__menu')}>
          <Box className={cn('user__menu-item')}>
            <UserIcon width={22} height={22} />

            <span>{mainDictionary.personalData}</span>
          </Box>
        </MenuItem>

        <div className={cn('user__behavior')} />

        <MenuItem onClick={handleExitButtonClick} className={cn('user__log-out')}>
          <Box className={cn('user__menu-item')}>
            <ExitIcon width={21} height={20} />

            <span>{mainDictionary.exit}</span>
          </Box>
        </MenuItem>
      </Menu>
    </>
  )
}
