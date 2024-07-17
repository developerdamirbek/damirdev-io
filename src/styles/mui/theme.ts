'use client'

import { createTheme } from '@mui/material/styles'
import { colors } from './colors'
import { components } from './components'
import { palette } from './palette'
import { typography } from './typography'

export const theme = createTheme({
  palette,
  typography,
  components,
  colors,
})
