import { Components } from '@mui/material/styles/components'

export const MuiTable: Components['MuiTable'] = {
  styleOverrides: {
    root: {
      borderCollapse: 'separate',
      border: '1px solid var(--border-color)',
      borderRadius: '15px',
      overflow: 'hidden',
    },
  },
}
