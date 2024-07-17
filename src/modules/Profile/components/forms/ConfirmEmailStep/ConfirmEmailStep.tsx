import { useForm } from 'react-hook-form'
import LoadingButton from '@mui/lab/LoadingButton'
import { Box, Chip, IconButton, InputAdornment } from '@mui/material'
import { zodResolver } from '@hookform/resolvers/zod'
import classNames from 'classnames/bind'
import * as z from 'zod'
import EditIcon from '@/assets/icons/edit_icon.svg'
import { minLength } from '@/constants'
import mainDictionary from '@/dictionary'
import { defaultValue } from '@/modules/Profile/constants'
import { FormControlField, FormProvider, RHFTextField } from '@/shared/form-controls'
import { useProfileStore } from '@/stores/profile'

import styles from './ConfirmEmailStep.module.scss'

const cn = classNames.bind(styles)

interface CodeStepProps {
  handleEditEmail: () => void
}

const codeSchema = z.object({
  email: z.string(),
  code: z.string().nonempty(mainDictionary.enterSpecialCode).min(minLength, mainDictionary.minCodeError),
})

const defaultValues = {
  email: defaultValue.email,
  code: defaultValue.code,
}

export const ConfirmEmailStep = ({ handleEditEmail }: CodeStepProps) => {
  const methods = useForm({
    mode: 'onSubmit',
    resolver: zodResolver(codeSchema),
    defaultValues,
  })

  const { email } = useProfileStore()

  const {
    formState: { isSubmitting },
  } = methods

  const onSubmit = () => {
    // TODO: Submit logic here
  }

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Box className={cn('form')}>
        <FormControlField label={mainDictionary.email}>
          <RHFTextField
            name="email"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton color="primary" onClick={handleEditEmail}>
                    <EditIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            isClearableField={false}
            disabled={isSubmitting}
            variant="filled"
            value={email}
          />
        </FormControlField>
        <FormControlField label={mainDictionary.speacialCode}>
          <RHFTextField
            name="code"
            placeholder={mainDictionary.enterSpecialCode}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Chip variant="filled" size="small" color="primary" label="02:00" />
                </InputAdornment>
              ),
            }}
            isClearableField={false}
            disabled={isSubmitting}
            variant="filled"
          />
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
