import React from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Box, IconButton, Tooltip, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import EditIcon from '@/assets/icons/edit_icon.svg'
import RedoIcon from '@/assets/icons/redo_icon.svg'
import mainDictionary from '@/dictionary'

import styles from './EditedBox.module.scss'

const cn = classNames.bind(styles)

type NoteProps = {
  editedText: string
  status: 'edit' | 'reply'
  author?: string
}

export const EditedBox = ({ editedText, status, author }: NoteProps) => (
  <Box className={cn('note-box')}>
    <Box className={cn('note-box__header')}>
      <Box className={cn('note-box__icon-block')}>
        <Box className={cn('note-box__icon')}>{status === 'edit' ? <EditIcon /> : <RedoIcon />}</Box>
      </Box>

      <Box>
        <Typography variant="h4">{status === 'edit' ? mainDictionary.editedText : author}</Typography>

        <Typography variant="subtitle2">{editedText}</Typography>
      </Box>
    </Box>

    <Box>
      <Tooltip title={mainDictionary.cancel}>
        <IconButton sx={{ color: 'var(--badge)', backgroundColor: 'var(--white)' }} color="secondary" size="small">
          <CloseIcon />
        </IconButton>
      </Tooltip>
    </Box>
  </Box>
)
