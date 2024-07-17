import { ReactNode } from 'react'
import { Box } from '@mui/material'
import classNames from 'classnames/bind'

import styles from './Public.module.scss'

const cn = classNames.bind(styles)

type Props = {
  children: ReactNode
}

export const Public = ({ children }: Props) => (
  <Box component="section" className={cn('section')}>
    <Box className={cn('section__content')}>{children}</Box>
  </Box>
)
