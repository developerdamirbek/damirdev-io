'use client'

import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { IconButton, InputAdornment, TextFieldProps } from '@mui/material'
import { useBoolean } from 'usehooks-ts'
import { RHFTextField } from './RHFTextField'

type Props = TextFieldProps & {
  name: string
}

export const RHFPasswordTextField = (props: Props) => {
  const { name, label, InputProps, ...restProps } = props
  const { value: isPasswordVisible, toggle: setPasswordVisible } = useBoolean(false)
  const inputType = isPasswordVisible ? 'text' : 'password'

  const handlePasswordVisibility = () => {
    setPasswordVisible()
  }

  return (
    <RHFTextField
      name={name}
      label={label}
      type={inputType}
      InputProps={{
        ...InputProps,
        endAdornment: (
          <InputAdornment position="end">
            <IconButton onClick={handlePasswordVisibility} color="primary" edge="end">
              {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
      {...restProps}
    />
  )
}
