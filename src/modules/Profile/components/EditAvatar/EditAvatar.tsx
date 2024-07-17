'use client'

import { Box, IconButton, Tooltip } from '@mui/material'
import classNames from 'classnames/bind'
import EditIcon from '@/assets/icons/edit_icon.svg'
import mainDictionary from '@/dictionary'

import styles from './EditAvatar.module.scss'

const cn = classNames.bind(styles)

export const EditAvatar = () => (
  <Box>
    <Tooltip title={mainDictionary.edit}>
      <Box className={cn('icon')}>
        <IconButton size="small" color="warning">
          <EditIcon />
        </IconButton>
      </Box>
    </Tooltip>
  </Box>
)
