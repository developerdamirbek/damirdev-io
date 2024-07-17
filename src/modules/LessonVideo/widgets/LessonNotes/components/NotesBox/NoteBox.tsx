'use client'

import React from 'react'
import { Box, Button, Chip, IconButton, Tooltip, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import { useBoolean } from 'usehooks-ts'
import DeleteIcon from '@/assets/icons/delete_icon.svg'
import EditIcon from '@/assets/icons/edit_icon.svg'
import { Modal } from '@/components'
import mainDictionary from '@/dictionary'

import styles from './NoteBox.module.scss'

const cn = classNames.bind(styles)

type NoteProps = {
  sentTime: string
  lessonTitle: string
  note: string
}

export const NoteBox = ({ sentTime, lessonTitle, note }: NoteProps) => {
  const { setFalse: close, setTrue: open, value: isOpen } = useBoolean()

  return (
    <Box className={cn('note-box')}>
      <Box className={cn('note-box__header')}>
        <Box className={cn('note-box__info')}>
          <Chip variant="filled" color="primary" label={sentTime} />
          <Typography variant="h4" className={cn('note-box__time')}>
            {lessonTitle}
          </Typography>
        </Box>
        <Box className={cn('note-box__actions')}>
          <Tooltip title={mainDictionary.edit}>
            <IconButton color="secondary" size="small">
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title={mainDictionary.delete}>
            <IconButton onClick={open} sx={{ color: 'var(--badge)' }} color="secondary" size="small">
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>
      <Box>
        <Typography variant="subtitle2">{note}</Typography>
      </Box>
      <Modal isOpen={isOpen} onClose={close} title="Siz haqiqatdan ham bu qaydni o‘chirishni xohlaysizmi?">
        <Box className={cn('note-box__modal')}>
          <Button fullWidth variant="contained" color="secondary">
            {mainDictionary.no}
          </Button>
          <Button fullWidth variant="contained" color="primary">
            {mainDictionary.yes}
          </Button>
        </Box>
      </Modal>
    </Box>
  )
}
