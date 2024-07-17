import { Theme as MuiTheme, ThemeOptions as MuiThemeOptions } from '@mui/material/styles/createTheme'
import { colors } from '@/styles/colors'

declare module '@mui/material/styles' {
  interface Theme extends MuiTheme {
    colors?: typeof colors
  }

  interface ThemeOptions extends MuiThemeOptions {
    colors?: typeof colors
  }
}
