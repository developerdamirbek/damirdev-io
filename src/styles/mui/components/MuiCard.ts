import { Components } from '@mui/material/styles/components'

export const MuiCard: Components['MuiCard'] = {
  styleOverrides: {
    root: () => ({
      borderRadius: '15px',
      boxShadow: 'none',
      margin: 0,
    }),
  },
}
