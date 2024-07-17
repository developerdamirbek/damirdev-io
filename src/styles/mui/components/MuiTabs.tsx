import { Components } from '@mui/material/styles/components'

export const MuiTabs: Components['MuiTabs'] = {
  styleOverrides: {
    root: () => ({
      minHeight: '38px',
      borderBottom: '1px solid var(--brand-ligth)',

      '.MuiTabs-indicator': {
        backgroundColor: 'var(--brand)',
      },

      '.MuiButtonBase-root': {
        flex: 1,
        minHeight: '38px',
        fontSize: '14px',
        fontWeight: 700,
        whiteSpace: 'nowrap',
        padding: '11px 20px',
        color: 'var(--text)',
        '&.Mui-selected': {
          color: 'var(--brand)',
        },
      },
    }),
  },
}
