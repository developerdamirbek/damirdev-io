import { PropsWithChildren } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Box, IconButton, Modal as MuiModal, Typography } from '@mui/material'
import classNames from 'classnames/bind'

import styles from './Modal.module.scss'

const cn = classNames.bind(styles)

type ReusableModalProps = PropsWithChildren & {
  isOpen: boolean
  title?: string
  onClose: () => void
}

export const Modal = ({ isOpen, onClose, title, children }: ReusableModalProps) => (
  <MuiModal open={isOpen} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
    <Box className={cn('modal__content')}>
      <Box className={cn('modal__content-header')} justifyContent={title ? 'space-between' : 'end'}>
        {title && <Typography variant="h3">{title}</Typography>}

        <IconButton size="small" aria-label="close" color="primary" onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>

      <Box>{children}</Box>
    </Box>
  </MuiModal>
)
