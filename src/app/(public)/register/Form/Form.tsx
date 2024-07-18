'use client'

import { ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'
import LoadingButton from '@mui/lab/LoadingButton'
import { Alert, Box, Collapse, Stack, Typography, useMediaQuery } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames/bind'
import { createUserWithEmailAndPassword } from 'firebase/auth' // Firebase auth functions
import Link from 'next/link'
import * as z from 'zod'
import GoogleIcon from '@/assets/icons/google_icon.svg'
import WarningIcon from '@/assets/icons/warning.svg'
import { GoogleReCaptcha } from '@/components/GoogleReCaptcha'
import { ROUTES } from '@/constants'
import mainDictionary from '@/dictionary'
import {
  FormControlField,
  FormProvider,
  FormProviderProps,
  RHFPasswordTextField,
  RHFTextField,
} from '@/shared/form-controls'

import styles from './Form.module.scss'

const cx = classNames.bind(styles)

type FormValues = {
  name: string
  phone: string
  password: string
  confirmPassword: string
}

const formSchema = z
  .object({
    name: z.string({ required_error: mainDictionary.requiredName }).min(3, mainDictionary.minName),
    phone: z
      .string({ required_error: mainDictionary.requiredPhone })
      .regex(/^\+998(-)?( )?/, mainDictionary.wrongFormatPhone),
    password: z.string({ required_error: mainDictionary.requiredPassword }).min(8, mainDictionary.passwordRequirement),
    confirmPassword: z.string({ required_error: mainDictionary.requiredPassword }).min(8),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: mainDictionary.notCompatiblePassword,
    path: ['confirmPassword'],
  })

export const Form = () => {
  const isMobile = useMediaQuery('(max-width:600px)')
  const [alert, setAlert] = useState<ReactNode>(null)

  const methods = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(formSchema),
  })

  const {
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = methods

  const handleError = () => {
    setError('name', { message: '' })
    setError('phone', { message: '' })
    setError('password', { message: '' })
    setError('confirmPassword', { message: '' })
  }

  const onSubmit = async (formData: FormValues) => {
    try {
      const { phone, password } = formData

      const userCredential = await createUserWithEmailAndPassword(auth, `${phone}@example.com`, password)

      methods.reset()
      setAlert(<Alert severity="success">Registration successful!</Alert>)
    } catch (error) {
      handleError()
      console.error('Error registering user:', error)
      setAlert(<Alert severity="error">Failed to register user. Please try again later.</Alert>)
    }
  }

  const handleFormChange: FormProviderProps['onChange'] = () => {
    setAlert(null) // Clear alert on form change
  }

  return (
    <FormProvider
      methods={methods}
      className={cx('form')}
      onSubmit={handleSubmit(onSubmit)}
      onChange={handleFormChange}
      fullWidth
    >
      <FormControlField label={mainDictionary.name}>
        <RHFTextField
          name="name"
          size={isMobile ? 'small' : 'medium'}
          isClearableField
          disabled={isSubmitting}
          variant="filled"
        />
      </FormControlField>

      <FormControlField label={mainDictionary.phoneOrEmail}>
        <RHFTextField
          name="phone"
          size={isMobile ? 'small' : 'medium'}
          isClearableField
          disabled={isSubmitting}
          variant="filled"
        />
      </FormControlField>

      <FormControlField label={mainDictionary.password}>
        <RHFPasswordTextField name="password" size={isMobile ? 'small' : 'medium'} disabled={isSubmitting} />
      </FormControlField>

      <FormControlField label={mainDictionary.confirmPassword}>
        <RHFPasswordTextField name="confirmPassword" size={isMobile ? 'small' : 'medium'} disabled={isSubmitting} />
      </FormControlField>

      <Stack direction="row" gap="10px">
        <WarningIcon />
        <Typography
          className={cx('form__offer-text')}
          variant="caption"
          dangerouslySetInnerHTML={{ __html: mainDictionary.warning('https://support.example.com') }}
        />
      </Stack>

      <Box className={cx('form__google-recaptcha')}>
        <GoogleReCaptcha />
      </Box>

      <Box className={cx('form__submit', { 'form__submit--has-gap': Boolean(alert) })}>
        <Collapse in={Boolean(alert)}>{alert}</Collapse>

        <LoadingButton size={isMobile ? 'medium' : 'large'} variant="contained" type="submit" loading={isSubmitting}>
          {mainDictionary.registry}
        </LoadingButton>
      </Box>

      <LoadingButton variant="contained" loading={isSubmitting} color="secondary" size={isMobile ? 'medium' : 'large'}>
        <Stack direction="row" gap="10px" alignItems="center">
          <GoogleIcon />
          <Box component="span">{mainDictionary.enterForGoogle}</Box>
        </Stack>
      </LoadingButton>

      <Typography
        className={cx('form__offer-text')}
        variant="caption"
        dangerouslySetInnerHTML={{ __html: mainDictionary.offer('https://support.example.com', 'https://google.com') }}
      />

      <Box className={cx('form__login')}>
        <Typography className={cx('form__login-link')} variant="subtitle2">
          {mainDictionary.registered}
        </Typography>

        <Typography className={cx('form__login-link')} component={Link} variant="subtitle2" href={ROUTES.login}>
          {mainDictionary.loginToProfile}
        </Typography>
      </Box>
    </FormProvider>
  )
}
