import { Components } from '@mui/material/styles/components'

export const MuiAlert: Components['MuiAlert'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      padding: '16px',

      ...(ownerState.severity === 'info' && {
        backgroundColor: '#60a5fa',
      }),

      '& .MuiAlert-message': {
        // padding: 0,
      },
    }),
  },
}
