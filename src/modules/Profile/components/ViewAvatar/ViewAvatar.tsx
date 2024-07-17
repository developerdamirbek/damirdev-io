'use client'

import { Box, IconButton, Tooltip } from '@mui/material'
import classNames from 'classnames/bind'
import ViewIcon from '@/assets/icons/eye_icon.svg'
import mainDictionary from '@/dictionary'

import styles from './ViewAvatar.module.scss'

const cn = classNames.bind(styles)

export const ViewAvatar = () => (
  <Box>
    <Tooltip title={mainDictionary.view}>
      <Box className={cn('icon')}>
        <IconButton color="info" size="small">
          <ViewIcon />
        </IconButton>
      </Box>
    </Tooltip>
  </Box>
)
