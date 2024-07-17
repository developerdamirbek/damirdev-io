import React, { ReactNode } from 'react'
import { Box, Button, Chip, InputBase } from '@mui/material'
import classNames from 'classnames/bind'
import SendMessageIcon from '@/assets/icons/send_message_icon.svg'
import UploadIcon from '@/assets/icons/upload_icon.svg'

import styles from './Inbox.module.scss'

const cn = classNames.bind(styles)

type InboxProps = {
  fileUpload?: ReactNode
  timer?: string
  placeholder?: string

  onClick?: () => void
}

export const Inbox = ({ fileUpload, timer, onClick, placeholder }: InboxProps) => (
  <Box className={cn('inbox')}>
    {timer && (
      <Box className={cn('inbox__timer-wrapper')}>
        <Chip color="primary" className={cn('inbox__timer')} label={timer} />
      </Box>
    )}

    <Box className={cn('inbox__input')}>
      <InputBase fullWidth placeholder={placeholder} />
    </Box>

    <Box className={cn('inbox__actions')}>
      {fileUpload && (
        <Box className={cn('inbox__file-upload')} component="label">
          <input hidden type="file" />
          <UploadIcon />
        </Box>
      )}

      <Button onClick={onClick}>
        <SendMessageIcon />
      </Button>
    </Box>
  </Box>
)
