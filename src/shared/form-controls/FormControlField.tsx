import { PropsWithChildren } from 'react'
import { FormControl } from '@mui/material'
import { CustomFormLabel, CustomFormLabelProps } from './CustomFormLabel'

type Props = PropsWithChildren & {
  labelProps?: CustomFormLabelProps
  label: string
}

export const FormControlField = ({ label, labelProps, children }: Props) => (
  <FormControl fullWidth>
    <CustomFormLabel
      {...labelProps}
      sx={{ paddingLeft: 'var(--field-padding-left)', paddingBottom: 'calc(var(--field-padding-top) / 2)' }}
    >
      {label}
    </CustomFormLabel>

    {children}
  </FormControl>
)
