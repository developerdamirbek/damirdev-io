import { ArrowDropDown } from '@mui/icons-material'
import { Components } from '@mui/material/styles/components'

export const MuiSelect: Components['MuiSelect'] = {
  defaultProps: {
    IconComponent: ArrowDropDown,
  },
  styleOverrides: {
    root: () => ({
      border: '1px solid var(--separator)',
      fontSize: '16px',
      borderRadius: '100px',
    }),
    icon: {
      color: 'var(--brand)',
    },
  },
}
