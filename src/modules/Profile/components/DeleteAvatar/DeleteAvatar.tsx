'use client'

import { Box, IconButton, Tooltip } from '@mui/material'
import classNames from 'classnames/bind'
import DeleteIcon from '@/assets/icons/delete_icon.svg'
import mainDictionary from '@/dictionary'

import styles from './DeleteAvatar.module.scss'

const cn = classNames.bind(styles)

export const DeleteAvatar = () => (
  <Tooltip title={mainDictionary.delete}>
    <Box className={cn('icon')}>
      <IconButton className={cn('icon_content')} size="small" color="error">
        <DeleteIcon />
      </IconButton>
    </Box>
  </Tooltip>
)
