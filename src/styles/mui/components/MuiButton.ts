import { Components } from '@mui/material/styles/components'

const buttonSize: Record<'small' | 'medium' | 'large', number> = {
  small: 38,
  medium: 60,
  large: 60,
}

export const MuiButton: Components['MuiButton'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      borderRadius: 'var(--field-border-radius)',
      ...(ownerState.size ? { height: buttonSize[ownerState.size] } : {}),
      boxShadow: 'none',
      textTransform: 'capitalize',
      border: 'none', // This removes the border for all button variants
    }),

    contained: {
      border: 'none',
      boxShadow: 'none',
    },
    outlined: {
      border: 'none',
      boxShadow: 'none',
    },
    text: {
      border: 'none',
      boxShadow: 'none',
    },
    colorSecondary: {
      border: 'none',
      boxShadow: 'none',
    },
    colorError: {
      border: 'none',
      boxShadow: 'none',
      color: 'var(--badge)',
    },
  },
}
