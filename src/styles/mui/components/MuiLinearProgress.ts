import { linearProgressClasses } from '@mui/material/LinearProgress'
import { Components } from '@mui/material/styles/components'

export const MuiLinearProgress: Components['MuiLinearProgress'] = {
  styleOverrides: {
    root: () => ({
      height: 10,
      borderRadius: 5,
      [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: 'var(--green-light)',
      },
      [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: 'var(--green)',
      },
    }),
  },
}
