import { useForm } from 'react-hook-form'
import LoadingButton from '@mui/lab/LoadingButton'
import { Box, Typography } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames/bind'
import * as z from 'zod'
import { phoneNumberRegex } from '@/constants'
import mainDictionary from '@/dictionary'
import { defaultValue } from '@/modules/Profile/constants'
import { FormControlField, FormProvider, RHFTextField } from '@/shared/form-controls'
import { useProfileStore } from '@/stores/profile'

import styles from './PhoneStep.module.scss'

const cn = classNames.bind(styles)

interface PhoneStepProps {
  onContinue: () => void
}

type FormValues = {
  phone: string
}

const phoneSchema = z.object({
  phone: z
    .string()
    .nonempty(mainDictionary.enterPhoneNumber)
    .regex(phoneNumberRegex, { message: mainDictionary.errorPhoneNumber }),
})

const defaultValues = {
  phone: defaultValue.phone,
}

export const PhoneStep = ({ onContinue }: PhoneStepProps) => {
  const { setPhone } = useProfileStore((state) => ({
    setPhone: state.setPhone,
  }))

  const methods = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(phoneSchema),
    defaultValues,
  })

  const {
    formState: { isSubmitting },
  } = methods

  const onSubmit = (formData: FormValues) => {
    const { phone } = formData

    setPhone(phone)
    onContinue()
  }

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Box className={cn('form')}>
        <Typography variant="caption">{mainDictionary.newPhoneNumber}</Typography>
        <FormControlField label={mainDictionary.phone}>
          <RHFTextField name="phone" isClearableField={false} disabled={isSubmitting} variant="filled" />
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
