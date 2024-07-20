'use client'

import React, { ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'
import LoadingButton from '@mui/lab/LoadingButton'
import { Alert, Box, Collapse, Stack, Typography, useMediaQuery } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames/bind'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import * as z from 'zod'
import GoogleIcon from '@/assets/icons/google_icon.svg'
import WarningIcon from '@/assets/icons/warning.svg'
import { ROUTES } from '@/constants'
import mainDictionary from '@/dictionary'
import { auth } from '@/firebaseConfig'
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
  email: string
  password: string
  confirmPassword: string
}

const formSchema = z
  .object({
    email: z.string({ required_error: mainDictionary.requiredEmail }).email(),
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
  const router = useRouter()

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
    setError('email', { message: '' })
    setError('password', { message: '' })
    setError('confirmPassword', { message: '' })
  }

  const onSubmit = async (formData: FormValues) => {
    try {
      const { email, password } = formData

      await createUserWithEmailAndPassword(auth, email, password)

      methods.reset()
      setAlert(<Alert severity="success">Registration successful!</Alert>)
      router.push(ROUTES.home) // Navigate to home on successful registration
    } catch (error) {
      handleError()
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
      <FormControlField label={mainDictionary.email}>
        <RHFTextField
          name="email"
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

      <Box className={cx('form__submit', { 'form__submit--has-gap': Boolean(alert) })}>
        <Collapse in={Boolean(alert)}>{alert}</Collapse>

        <LoadingButton size={isMobile ? 'medium' : 'large'} variant="contained" type="submit" loading={isSubmitting}>
          {mainDictionary.registry}
        </LoadingButton>
      </Box>

      <LoadingButton
        variant="contained"
        onClick={() => signIn('google')}
        loading={isSubmitting}
        color="secondary"
        size={isMobile ? 'medium' : 'large'}
      >
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
