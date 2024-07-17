import React from 'react'
import { Box } from '@mui/material'
import classNames from 'classnames/bind'

import styles from './Video.module.scss'

const cn = classNames.bind(styles)

type VideoProps = {
  src: string
}

export const Video = ({ src }: VideoProps) => (
  <Box className={cn('video')}>
    <video className={cn('video__content')} controls>
      <source src={src} />
    </video>
  </Box>
)
