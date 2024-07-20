'use client'

import { ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'
import LoadingButton from '@mui/lab/LoadingButton'
import { Alert, Box, Collapse, Stack, Typography, useMediaQuery } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames/bind'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import * as z from 'zod'
import { LoginType } from '@/api/auth'
import GoogleIcon from '@/assets/icons/google_icon.svg'
import { PUBLIC_EMAIL, PUBLIC_PASSWORD, ROUTES } from '@/constants'
import mainDictionary from '@/dictionary'
import {
  FormControlField,
  FormProvider,
  FormProviderProps,
  RHFEmailOrPhoneInput,
  RHFPasswordTextField,
} from '@/shared/form-controls'
import { useUserStoreActions } from '@/stores/user'

import styles from './Form.module.scss'

const cx = classNames.bind(styles)

type FormValues = {
  email: string
  password: string
}

const formSchema = z
  .object({
    email: z.string().trim(),
    password: z.string().trim().min(3, mainDictionary.minPasswordError),
  })
  .required({
    email: true,
    password: true,
  })

export const Form = () => {
  const { setUser } = useUserStoreActions()
  const router = useRouter()
  const isMobile = useMediaQuery('(max-width:600px)')
  const [alert, setAlert] = useState<ReactNode>(null)

  const methods = useForm<FormValues>({
    mode: 'onSubmit',
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: PUBLIC_EMAIL || '',
      password: PUBLIC_PASSWORD || '',
    },
  })

  const {
    setError,
    formState: { isSubmitting },
  } = methods

  const handleError = () => {
    setError('email', { message: '' })
    setError('password', { message: '' })
  }

  const handleSubmit = async (formData: FormValues) => {
    try {
      const response = await signIn('credentials', {
        email: formData.email,
        password: formData.password,
        redirect: false,
      })

      if (response?.error) {
        handleError()
        setAlert(response.error)
      } else if (response?.ok) {
        // Assuming successful login
        setUser({ email: formData.email }) // Set user details in your store if needed
        router.push(ROUTES.home) // Redirect after successful login
      }
    } catch (error) {
      handleError()
      console.error('Login error:', error)
    }
  }

  const handleFormChange: FormProviderProps['onChange'] = () => {
    setAlert(null)
  }

  return (
    <FormProvider
      methods={methods}
      className={cx('form')}
      onSubmit={methods.handleSubmit(handleSubmit)}
      onChange={handleFormChange}
    >
      <FormControlField label={mainDictionary.login}>
        <RHFEmailOrPhoneInput
          name="email"
          size={isMobile ? 'small' : 'medium'}
          isClearableField
          disabled={isSubmitting}
          variant="filled"
        />
      </FormControlField>

      <FormControlField label={mainDictionary.password}>
        <RHFPasswordTextField size={isMobile ? 'small' : 'medium'} name="password" disabled={isSubmitting} />
      </FormControlField>

      <Box className={cx('form__submit', { 'form__submit--has-gap': Boolean(alert) })}>
        <Collapse in={Boolean(alert)}>
          <Alert severity="error">{alert}</Alert>
        </Collapse>

        <LoadingButton size={isMobile ? 'medium' : 'large'} variant="contained" type="submit" loading={isSubmitting}>
          {mainDictionary.enter}
        </LoadingButton>
      </Box>

      <LoadingButton
        variant="contained"
        loading={isSubmitting}
        onClick={() => signIn('google')}
        color="secondary"
        size={isMobile ? 'medium' : 'large'}
      >
        <Stack direction="row" gap="10px" alignItems="center">
          <GoogleIcon />
          <Box component="span">{mainDictionary.enterForGoogle}</Box>
        </Stack>
      </LoadingButton>

      <Box className={cx('form__forgot')}>
        <Typography className={cx('form__forgot-password')} component={Link} href={ROUTES.forgot}>
          {mainDictionary.forgotPassword}
        </Typography>

        <Typography className={cx('form__forgot-password')} component={Link} href={ROUTES.register}>
          {mainDictionary.registry}
        </Typography>
      </Box>
    </FormProvider>
  )
}
