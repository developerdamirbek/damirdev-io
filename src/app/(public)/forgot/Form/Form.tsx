'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import LoadingButton from '@mui/lab/LoadingButton'
import { Alert, Box, Collapse, Typography, useMediaQuery } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import classNamesBind from 'classnames/bind'
import Link from 'next/link'
import * as z from 'zod'
import { resetPassword } from '@/api/auth'
import { PUBLIC_EMAIL, ROUTES } from '@/constants'
import mainDictionary from '@/dictionary'
import { FormProvider, RHFTextField } from '@/shared/form-controls'
import { SuccessAlert } from './SuccessAlert'

import styles from './Form.module.scss'

const cx = classNamesBind.bind(styles)

type FormValues = {
  email: string
}

const formSchema = z.object({
  email: z
    .string()
    .trim()
    .min(5, mainDictionary.minLoginError)
    .max(254, mainDictionary.maxLoginError)
    .email(mainDictionary.loginError),
})

export const Form = () => {
  const [alert, setAlert] = useState<string>('')
  const [resetEmail, setResetEmail] = useState<string | null>(null)
  const isMobile = useMediaQuery('(max-width:600px)')

  const methods = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: PUBLIC_EMAIL || '',
    },
  })

  const {
    setError,
    formState: { isSubmitting },
  } = methods

  const handleError = () => {
    setError('email', { message: '' })
  }

  const handleSubmit = async (formData: FormValues) => {
    try {
      const response = await resetPassword(formData.email)

      if (response?.success && response.data?.success) {
        setResetEmail(formData.email)
      }

      if (response?.error) {
        handleError()
        response?.error.errMsg && setAlert(response?.error.errMsg)
      }
    } catch (error) {
      console.log(error)
    }
  }

  if (resetEmail) {
    return (
      <>
        <SuccessAlert email={resetEmail} />

        <Box className={cx('form__forgot')}>
          <Typography>{mainDictionary.toPage}</Typography>

          <Typography component={Link} href={ROUTES.login}>
            {mainDictionary.toLoginPage}
          </Typography>
        </Box>
      </>
    )
  }

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit} className={cx('form')} fullWidth>
      <RHFTextField
        size={isMobile ? 'small' : 'medium'}
        label={mainDictionary.email}
        name="email"
        isClearableField
        disabled={isSubmitting}
      />

      <Box className={cx('form__submit', { 'form__submit--has-gap': Boolean(alert) })}>
        <Collapse in={Boolean(alert)}>
          <Alert severity="error">{alert}</Alert>
        </Collapse>

        <LoadingButton size={isMobile ? 'small' : 'medium'} variant="contained" type="submit" loading={isSubmitting}>
          {mainDictionary.throwOff}
        </LoadingButton>
      </Box>

      <Box className={cx('form__forgot')}>
        <Typography>{mainDictionary.toPage}</Typography>

        <Typography component={Link} href={ROUTES.login}>
          {mainDictionary.toLoginPage}
        </Typography>
      </Box>
    </FormProvider>
  )
}
