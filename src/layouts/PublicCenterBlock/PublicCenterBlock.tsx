import { PropsWithChildren } from 'react'
import { Box, SxProps } from '@mui/material'
import classNames from 'classnames/bind'
import { Logo } from './Logo'
import { Title, TitleProps } from './Title'

import styles from './PublicCenterBlock.module.scss'

const cx = classNames.bind(styles)

type Props = PropsWithChildren &
  TitleProps & {
    sx?: SxProps
  }

export const PublicCenterBlock = ({ children, title, description, sx }: Props) => (
  <Box component="section" className={cx('publicCenterBlock')} sx={sx}>
    <Box className={cx('publicCenterBlock__logo')}>
      <Logo />
    </Box>

    <Box className={cx('publicCenterBlock__center', 'publicCenterBlock--white')}>
      {(title || description) && <Title title={title} description={description} />}

      {children}
    </Box>
  </Box>
)
