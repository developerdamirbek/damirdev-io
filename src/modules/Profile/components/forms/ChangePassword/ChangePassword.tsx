'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import LoadingButton from '@mui/lab/LoadingButton'
import { Box, Typography } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames/bind'
import { useBoolean } from 'usehooks-ts'
import * as z from 'zod'
import DangerIcon from '@/assets/icons/danger_icon.svg'
import { Modal } from '@/components'
import { changePasswordAttempts, minLength, reTryTime } from '@/constants'
import mainDictionary from '@/dictionary'
import { defaultValue } from '@/modules/Profile/constants'
import { PasswordFormValues } from '@/modules/Profile/types'
import { FormControlField, FormProvider, RHFPasswordTextField } from '@/shared/form-controls'

import styles from './ChangePassword.module.scss'

const cn = classNames.bind(styles)

const formSchema = z
  .object({
    currentPassword: z.string().trim().min(minLength, mainDictionary.minPasswordError),
    newPassword: z.string().trim().min(minLength, mainDictionary.minPasswordError),
    confirmPassword: z.string().trim().min(minLength, mainDictionary.minPasswordError),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: mainDictionary.passwordsDoNotMatchError,
    path: ['confirmPassword'],
  })

const defaultValues = {
  currentPassword: defaultValue.password,
  newPassword: defaultValue.newPassword,
  confirmPassword: defaultValue.confirmPassword,
}

export const ChangePassword = () => {
  const { setFalse: close, setTrue: open, value: isOpen } = useBoolean()

  const [clickCount, setClickCount] = useState(0)

  const methods = useForm<PasswordFormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const {
    formState: { isSubmitting, isValid, dirtyFields },
  } = methods

  const handleClickContinue = () => {
    setClickCount((prevCount) => {
      const newCount = prevCount + 1

      if (newCount >= changePasswordAttempts) {
        open()
        setTimeout(close, reTryTime)
        setClickCount(0)
      }

      return newCount
    })
  }

  const handleTryAgain = () => {
    close()
  }

  const onSubmit = () => {
    // TODO: Submit logic here
  }

  return (
    <Box>
      <Box component={FormProvider} methods={methods} onSubmit={onSubmit} className={cn('form')}>
        <FormControlField label={mainDictionary.currentPassword}>
          <RHFPasswordTextField name="currentPassword" />
        </FormControlField>

        <FormControlField label={mainDictionary.newPassword}>
          <RHFPasswordTextField name="newPassword" />
        </FormControlField>

        <FormControlField label={mainDictionary.confirmPassword}>
          <RHFPasswordTextField name="confirmPassword" />
        </FormControlField>

        <Box>
          <LoadingButton
            fullWidth
            variant="contained"
            type="submit"
            onClick={handleClickContinue}
            loading={isSubmitting}
            disabled={!isValid || Object.keys(dirtyFields).length === 0}
          >
            {mainDictionary.continue}
          </LoadingButton>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={close}>
        <Box className={cn('form__fields')}>
          <Box className={cn('form__warning-icon')}>
            <DangerIcon />
          </Box>

          <Typography className={cn('form__modal-title')} variant="h6">
            {mainDictionary.attemptsReached}
          </Typography>

          <Typography align="center" variant="caption">
            {mainDictionary.tryAgainLater}
          </Typography>

          <LoadingButton onAuxClick={handleTryAgain} fullWidth variant="contained" onClick={handleTryAgain}>
            {mainDictionary.tryAgain}
          </LoadingButton>
        </Box>
      </Modal>
    </Box>
  )
}
