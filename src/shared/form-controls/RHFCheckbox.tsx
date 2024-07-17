'use client'

import { ReactNode } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { Box, Checkbox, CheckboxProps, FormControlLabel, FormControlLabelProps, FormHelperText } from '@mui/material'

type RHFCheckboxProps = Omit<FormControlLabelProps, 'control' | 'color'> &
  Pick<CheckboxProps, 'color'> & {
    name: string
    helperText?: ReactNode
    className?: string
  }

export const RHFCheckbox = ({ name, helperText, color, className, ...other }: RHFCheckboxProps) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box className={className}>
          <FormControlLabel control={<Checkbox {...field} checked={field.value} color={color} />} {...other} />

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>{error ? error?.message : helperText}</FormHelperText>
          )}
        </Box>
      )}
    />
  )
}
