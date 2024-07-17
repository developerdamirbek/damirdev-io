'use client'

import React from 'react'
import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import HourGlassIcon from '@/assets/icons/hourglass_icon.svg'
import mainDictionary from '@/dictionary'

import styles from './StatusBox.module.scss'

const cn = classNames.bind(styles)

type StatusBoxProps = {
  status: 'pending' | 'approved' | 'rejected'
}

export const StatusBox = ({ status }: StatusBoxProps) => (
  <Box className={cn('status-box', status)}>
    {status === 'pending' && (
      <Box className={cn('status-box__pending')}>
        <HourGlassIcon />
        <Typography>{mainDictionary.taskWillBeChecked}</Typography>
      </Box>
    )}
  </Box>
)
