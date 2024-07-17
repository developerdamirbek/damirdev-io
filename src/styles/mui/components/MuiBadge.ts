import { Components } from '@mui/material/styles/components'

export const MuiBadge: Components['MuiBadge'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      '&.circle': {},
    }),

    colorError: {
      color: 'var(--white)',
    },
  },
}
