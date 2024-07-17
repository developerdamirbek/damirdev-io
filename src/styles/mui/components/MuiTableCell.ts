import { Components } from '@mui/material/styles/components'

export const MuiTableCell: Components['MuiTableCell'] = {
  styleOverrides: {
    root: {
      borderBottom: '1px solid var(--border-color)',
      fontSize: '16px',
      '@media (max-width: 500px)': {
        padding: '5px',
      },
    },
  },
}
