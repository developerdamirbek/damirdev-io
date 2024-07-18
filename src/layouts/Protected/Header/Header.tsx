import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import Link from 'next/link'
import useResponsive from '@/helpers/hooks/useResponsive'
import { getAppSidebarStatus } from '@/stores/app'
import { Actions } from './Actions'
import { Menus } from './Menus'

import styles from './Header.module.scss'

const cx = classNames.bind(styles)

export const Header = () => {
  useResponsive()

  const isSidebarMini = getAppSidebarStatus()

  return (
    <Box component="header" className={cx('header')}>
      <Link href="/">
        <Image src="/damirdev.svg" alt="logo" height={60} width={140} priority />
      </Link>

      {!isSidebarMini && <Menus />}

      <Actions />
    </Box>
  )
}
