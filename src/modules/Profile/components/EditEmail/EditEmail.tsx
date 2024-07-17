'use client'

import { useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { useBoolean } from 'usehooks-ts'
import EditIcon from '@/assets/icons/edit_icon.svg'
import { Modal } from '@/components'
import { stepCode, stepEmail } from '@/constants'
import mainDictionary from '@/dictionary'
import { ConfirmEmailStep, EmailStep } from '../forms'

enum Step {
  Email = stepEmail,
  Code = stepCode,
}

export const EditEmail = () => {
  const { setFalse: close, setTrue: open, value: isOpen } = useBoolean()
  const [step, setStep] = useState(Step.Email)

  const handleContinue = () => {
    setStep(Step.Code)
  }

  const handleEditEmail = () => {
    setStep(Step.Email)
  }

  return (
    <Box>
      <IconButton size="medium" color="secondary" onClick={open}>
        <EditIcon />
      </IconButton>

      <Modal
        isOpen={isOpen}
        onClose={close}
        title={step === Step.Email ? mainDictionary.newEmail : mainDictionary.changeEmail}
      >
        {step === Step.Email ? (
          <EmailStep onContinue={handleContinue} />
        ) : (
          <ConfirmEmailStep handleEditEmail={handleEditEmail} />
        )}
      </Modal>
    </Box>
  )
}
