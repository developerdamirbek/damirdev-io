import { forwardRef } from 'react'
import MuiTextField, { TextFieldProps } from '@mui/material/TextField'

export const TextField = forwardRef<HTMLDivElement, Omit<TextFieldProps, 'variant'>>((props, ref) => (
  <MuiTextField ref={ref} {...props} variant="outlined" fullWidth />
))

export type { TextFieldProps }
