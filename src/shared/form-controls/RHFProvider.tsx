import { FormProvider as Form, SubmitHandler, UseFormReturn } from 'react-hook-form'
import { Box, BoxProps } from '@mui/material'

export type FormProviderProps = Omit<BoxProps, 'onSubmit'> & {
  methods: UseFormReturn<any>
  onSubmit: SubmitHandler<any>
  fullWidth?: boolean
}

export const FormProvider = (props: FormProviderProps) => {
  const { methods, onSubmit, children, fullWidth, ...restOfProps } = props
  const { handleSubmit } = methods

  return (
    <Form {...methods}>
      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        {...restOfProps}
        style={fullWidth ? { width: '100%' } : {}}
      >
        {children}
      </Box>
    </Form>
  )
}
