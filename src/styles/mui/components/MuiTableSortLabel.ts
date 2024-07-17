import { Components } from '@mui/material/styles/components'

export const MuiTableSortLabel: Components['MuiTableSortLabel'] = {
  styleOverrides: {
    icon: {
      background: 'var(--brand-lighter)',
      color: 'var(--brand)',
      borderRadius: '100px',
      padding: '2px',
      width: '28px',
      height: '28px',
    },
  },
}
