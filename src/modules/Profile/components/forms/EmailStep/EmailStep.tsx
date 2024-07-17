import { FormProvider, useForm } from 'react-hook-form'
import LoadingButton from '@mui/lab/LoadingButton'
import { Box, Typography } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames/bind'
import * as z from 'zod'
import { minEmailLength } from '@/constants'
import mainDictionary from '@/dictionary'
import { defaultValue } from '@/modules/Profile/constants'
import { FormControlField, RHFTextField } from '@/shared/form-controls'
import { useProfileStore } from '@/stores/profile'

import styles from './EmailStep.module.scss'

const cn = classNames.bind(styles)

interface EmailStepProps {
  onContinue: () => void
}

type FormValues = {
  email: string
}

const emailSchema = z.object({
  email: z.string().trim().min(minEmailLength, mainDictionary.minLoginError),
})

const defaultValues = {
  email: defaultValue.email,
}

export const EmailStep = ({ onContinue }: EmailStepProps) => {
  const { setEmail } = useProfileStore((state) => ({
    setEmail: state.setEmail,
  }))

  const methods = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(emailSchema),
    defaultValues,
  })

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods

  const onSubmit = (formData: FormValues) => {
    const { email } = formData

    setEmail(email)
    onContinue()
  }

  return (
    <FormProvider {...methods}>
      <Box className={cn('form')} component="form" onSubmit={handleSubmit(onSubmit)}>
        <FormControlField label={mainDictionary.yourEmail}>
          <RHFTextField name="email" isClearableField={false} disabled={isSubmitting} variant="filled" />
        </FormControlField>
        <FormControlField label="Recaptcha">
          <Typography>Recaptcha will be here later</Typography>
        </FormControlField>
        <Box>
          <LoadingButton fullWidth variant="contained" type="submit" loading={isSubmitting}>
            {mainDictionary.continue}
          </LoadingButton>
        </Box>
      </Box>
    </FormProvider>
  )
}
