import { ReactNode } from 'react'
import { Box } from '@mui/material'
import classNames from 'classnames/bind'

import styles from './Main.module.scss'

const cn = classNames.bind(styles)

type Props = {
  children: ReactNode
}

export const Main = ({ children }: Props) => (
  <Box component="main" className={cn('main')}>
    {children}
  </Box>
)
