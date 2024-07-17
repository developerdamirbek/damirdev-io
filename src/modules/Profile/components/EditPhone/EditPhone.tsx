'use client'

import { useState } from 'react'
import { Box, IconButton } from '@mui/material'
import { useBoolean } from 'usehooks-ts'
import EditIcon from '@/assets/icons/edit_icon.svg'
import { Modal } from '@/components'
import { stepCode, stepPhone } from '@/constants'
import mainDictionary from '@/dictionary'
import { ConfirmPhoneStep, PhoneStep } from '../forms'

enum Step {
  Phone = stepPhone,
  Code = stepCode,
}

export const EditPhone = () => {
  const { setFalse: close, setTrue: open, value: isOpen } = useBoolean()

  const [step, setStep] = useState(Step.Phone)

  const handleContinue = () => {
    setStep(Step.Code)
  }

  const handleEditPhone = () => {
    setStep(Step.Phone)
  }

  return (
    <Box>
      <IconButton size="medium" color="secondary" onClick={open}>
        <EditIcon />
      </IconButton>

      <Modal
        isOpen={isOpen}
        onClose={close}
        title={step === Step.Phone ? mainDictionary.changePhoneNumber : mainDictionary.confirmPhoneNumber}
      >
        {step === Step.Phone ? (
          <PhoneStep onContinue={handleContinue} />
        ) : (
          <ConfirmPhoneStep handleEditPhone={handleEditPhone} />
        )}
      </Modal>
    </Box>
  )
}
