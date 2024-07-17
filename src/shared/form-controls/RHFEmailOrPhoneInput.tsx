import React, { useState } from 'react'
import ReactInputMask from 'react-input-mask'
import { FormHelperText } from '@mui/material'
import { RHFTextField, RHFTextFieldProps } from './RHFTextField'

type Props = RHFTextFieldProps

export const RHFEmailOrPhoneInput = (props: Props) => {
  const [inputValue, setInputValue] = useState('')
  const [inputType, setInputType] = useState('')

  const validateInput = (value: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const phoneRegex = /^[0-9()+-\s]+$/

    if (emailRegex.test(value)) {
      setInputType('email')
    } else if (phoneRegex.test(value)) {
      setInputType('phone')
    } else {
      setInputType('')
    }
  }

  const handleChange = (event: any) => {
    const value = event.target.value

    setInputValue(value)
    validateInput(value)
  }

  return (
    <div>
      {inputType === 'phone' ? (
        // @ts-ignore
        <ReactInputMask
          {...props}
          // @ts-ignore
          mask="+\9\98 (99) 999 99 99"
          maskPlaceholder={''}
          value={inputValue}
          onChange={handleChange}
          autoFocus
        >
          {/*// @ts-ignore*/}
          <RHFTextField />
        </ReactInputMask>
      ) : (
        <RHFTextField {...props} value={inputValue} onChange={handleChange} />
      )}
      <FormHelperText>
        {inputType === 'email' && 'Valid Email'}
        {inputType === 'phone' && 'Valid Phone Number'}
        {inputType === '' && inputValue && 'Invalid input'}
      </FormHelperText>
    </div>
  )
}
