'use client'

import { ReactNode, useState } from 'react'
import { useForm } from 'react-hook-form'
import LoadingButton from '@mui/lab/LoadingButton'
import { Alert, Box, Collapse, Stack, Typography, useMediaQuery } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames/bind'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as z from 'zod'
import { LoginType, signIn } from '@/api/auth'
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
  login: string
  password: string
  saved: boolean
}

const formSchema = z
  .object({
    login: z.string().trim().min(5, mainDictionary.minLoginError).max(254, mainDictionary.maxLoginError),
    password: z.string().trim().min(3, mainDictionary.minPasswordError),
  })
  .required({
    login: true,
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
      login: PUBLIC_EMAIL || '',
      password: PUBLIC_PASSWORD || '',
    },
  })

  const {
    setError,
    formState: { isSubmitting },
  } = methods

  const handleError = () => {
    setError('login', { message: '' })
    setError('password', { message: '' })
  }

  const handleSubmit = async (formData: FormValues) => {
    try {
      const response = await signIn({
        login: `998${formData.login.trim()}`,
        loginType: LoginType.Phone,
        password: formData.password,
      })

      if (response?.error) {
        handleError()
        response?.error.errMsg && setAlert(response?.error.errMsg)
      }
    } catch (error) {
      handleError()
      console.error(error)
    }
  }

  const handleFormChange: FormProviderProps['onChange'] = () => {
    setAlert(false)
  }

  return (
    <FormProvider
      methods={methods}
      className={cx('form')}
      onSubmit={handleSubmit}
      onChange={handleFormChange}
      fullWidth
    >
      <FormControlField label={mainDictionary.login}>
        <RHFEmailOrPhoneInput
          name="login"
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

      <LoadingButton variant="contained" loading={isSubmitting} color="secondary" size={isMobile ? 'medium' : 'large'}>
        <Stack direction="row" gap="10px" alignItems="center">
          <GoogleIcon />
          <Box component="span">{mainDictionary.enterForGoogle}</Box>
        </Stack>
      </LoadingButton>

      <Box className={cx('form__forgot')}>
        <Typography className={cx('form__forgot-password')} component={Link} href={ROUTES.forgot}>
          {mainDictionary.forgotPassword}
        </Typography>

        <Typography className={cx('form__forgot-password')} component={Link} href={ROUTES.registry}>
          {mainDictionary.registry}
        </Typography>
      </Box>
    </FormProvider>
  )
}
