import * as React from 'react'
import { ForwardedRef, forwardRef } from 'react'
import { ReCAPTCHA } from 'react-google-recaptcha'
import { Box } from '@mui/material'
import classNames from 'classnames/bind'

import styles from './GoogleReCaptcha.module.scss'

type GoogleReCaptchaProps = {
  onChange?: (value: string | null) => void
  isError?: boolean
}

declare global {
  interface Window {
    grecaptcha: any
  }
}

const cx = classNames.bind(styles)

export const GoogleReCaptcha = forwardRef<ReCAPTCHA, GoogleReCaptchaProps>(
  ({ onChange, isError }, ref: ForwardedRef<ReCAPTCHA>) => {
    const errMessage = 'Robot emasligingizni isbotlang.'
    const captchaSiteKey = '6LddxAUpAAAAAC9s6PpwVMWD6c46Zr35jI2apUv5'

    return (
      <Box className={cx('recaptcha')}>
        <ReCAPTCHA
          ref={ref}
          sitekey={captchaSiteKey}
          size="normal"
          hl={'uz'}
          onChange={onChange}
          grecaptcha={typeof window !== 'undefined' && window.grecaptcha}
        />
        {isError && <Box className={cx('recaptcha__error-message')}>{errMessage}</Box>}
      </Box>
    )
  },
)
