'use client'

import { Controller, useFormContext } from 'react-hook-form'
import { FormHelperText, Slider, SliderProps } from '@mui/material'

type Props = SliderProps & {
  name: string
  helperText?: React.ReactNode
}

export const RHFSlider = ({ name, helperText, ...other }: Props) => {
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Slider {...field} valueLabelDisplay="auto" {...other} />

          {(!!error || helperText) && (
            <FormHelperText error={!!error}>{error ? error?.message : helperText}</FormHelperText>
          )}
        </div>
      )}
    />
  )
}
