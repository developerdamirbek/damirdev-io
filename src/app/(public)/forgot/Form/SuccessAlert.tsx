import { Alert } from '@mui/material'

type Props = {
  email: string
}

export const SuccessAlert = ({ email }: Props) => {
  const domain = email.split('@')?.[1]

  return (
    <Alert sx={{ fontSize: '20px' }}>
      отправлено письмо с ссылкой на сброс пароля по электронной почте{' '}
      <b>
        {domain ? (
          <a target="_blank" href={`https://${domain}`} rel="noreferrer">
            {domain}
          </a>
        ) : (
          <a href={`mailto:${email}`}>{email}</a>
        )}
      </b>
    </Alert>
  )
}
