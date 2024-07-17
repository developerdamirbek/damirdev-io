import { Components } from '@mui/material/styles/components'

export const MuiAccordion: Components['MuiAccordion'] = {
  styleOverrides: {
    root: {
      ':last-of-type': {
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px',
      },
      ':first-of-type': {
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
      },
      boxShadow: 'none',
      '.MuiAccordionSummary-expandIconWrapper': {
        color: 'var(--brand)',
      },
    },
  },
}
