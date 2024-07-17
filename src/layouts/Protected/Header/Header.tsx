import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import Link from 'next/link'
import { Actions } from './Actions'
import { Menus } from './Menus'

import styles from './Header.module.scss'

const cx = classNames.bind(styles)

export const Header = () => (
  <Box component="header" className={cx('header')}>
    <Link href="/">
      <Image src="/edfix-logo.svg" alt="logo" height={60} width={139} priority />
    </Link>

    <Menus />

    <Actions />
  </Box>
)
