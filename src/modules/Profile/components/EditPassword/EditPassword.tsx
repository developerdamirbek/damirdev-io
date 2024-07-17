'use client'

import { Box, IconButton } from '@mui/material'
import { useBoolean } from 'usehooks-ts'
import EditIcon from '@/assets/icons/edit_icon.svg'
import { Modal } from '@/components'
import mainDictionary from '@/dictionary'
import { ChangePassword } from '../forms'

export const EditPassword = () => {
  const { setFalse: close, setTrue: open, value: isOpen } = useBoolean()

  return (
    <Box>
      <IconButton size="medium" color="secondary" onClick={open}>
        <EditIcon />
      </IconButton>
      <Modal isOpen={isOpen} onClose={close} title={mainDictionary.changePassword}>
        <ChangePassword />
      </Modal>
    </Box>
  )
}
