'use client'

import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import LogoIcon from '@/assets/monochrome_logo.svg'

import styles from './PublicCenterBlock.module.scss'

const cx = classNames.bind(styles)

export const Logo = () => (
  <Box className={cx('publicCenterBlock__logo')}>
    <LogoIcon />
  </Box>
)
