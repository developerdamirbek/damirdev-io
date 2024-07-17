import { FormLabel, FormLabelProps, Typography } from '@mui/material'

export type CustomFormLabelProps = FormLabelProps & {
  isRequired?: boolean
}

export const CustomFormLabel = (props: CustomFormLabelProps) => {
  const { isRequired, children, ...restOfProps } = props

  return (
    <FormLabel {...restOfProps}>
      {children}{' '}
      {isRequired && (
        <Typography component="span" variant="inherit" color="error.main">
          *
        </Typography>
      )}
    </FormLabel>
  )
}
