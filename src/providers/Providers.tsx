import { PropsWithChildren } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { QueryProvider } from '@/providers/QueryProvider'
import { theme } from '@/styles/mui'

export const Providers = ({ children }: PropsWithChildren<Record<string, unknown>>) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <QueryProvider>{children}</QueryProvider>
  </ThemeProvider>
)
