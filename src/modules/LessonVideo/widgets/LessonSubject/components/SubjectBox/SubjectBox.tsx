import React from 'react'
import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import DocumentLeftIcon from '@/assets/icons/document_left_icon.svg'
import mainDictionary from '@/dictionary'

import styles from './SubjectBox.module.scss'

const cn = classNames.bind(styles)

type SubjectProps = {
  title: string
  filesCount: number
  type: 'mytask' | 'teachertask'
  sendTime?: string
  fileName?: string
}

export const SubjectBox = ({ title, filesCount, fileName, sendTime, type }: SubjectProps) => (
  <Box className={cn('subject-box')}>
    <Box className={cn('subject-box__header')}>
      <Box>
        <Typography variant="h4">{type === 'mytask' ? mainDictionary.myHomework : mainDictionary.homework}</Typography>
        <Typography variant="subtitle2">{title}</Typography>
      </Box>
      <Box>
        <Typography variant="caption">
          {mainDictionary.filesCount}: <span>{filesCount}</span>
        </Typography>
      </Box>
    </Box>
    <Box className={cn('subject-box__file-boxes')}>
      {Array.from({ length: 3 }).map((_, index) => (
        <Box key={index.toString()} className={cn('subject-box__file-box')}>
          <DocumentLeftIcon />
          <Typography variant="subtitle2">89-95 (3).docx</Typography>
        </Box>
      ))}
    </Box>
    {type === 'mytask' && (
      <Box>
        <Typography variant="caption">
          {mainDictionary.sendTime}: {sendTime}
        </Typography>
      </Box>
    )}
  </Box>
)
