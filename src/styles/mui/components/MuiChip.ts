import { Components } from '@mui/material/styles/components'

declare module '@mui/material/Chip' {
  interface ChipPropsSizeOverrides {
    large: true
  }
}

const chipColor: Record<'default' | 'primary' | 'secondary' | 'error' | 'success' | 'info' | 'warning', string> = {
  default: '',
  primary: 'var(--brand)',
  secondary: 'var(--yellow)',
  error: '#FF8870',
  success: 'var(--green)',
  info: 'var(--info)',
  warning: '',
}

const muiChipBorderRadius = '100px'

const chipSize: Record<'small' | 'medium' | 'large', string> = {
  small: '5px 10px',
  medium: '10px 20px',
  large: '20px 40px',
}

export const MuiChip: Components['MuiChip'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      borderRadius: muiChipBorderRadius,
      cursor: 'default',
      fontWeight: 400,
      fontSize: ownerState.size === chipSize.small ? '12px' : ownerState.size === chipSize.large ? '16px' : '16px',
      height: 'fit-content',
      lineHeight: ownerState.size === 'small' ? '14px' : '16px',

      '.MuiChip-label': {
        padding: ownerState.size ? chipSize[ownerState.size] : {},
      },

      '&.MuiChip-outlined': {
        color: 'var(--text)',
        ...(ownerState.color ? { border: `1px solid ${chipColor[ownerState.color]}` } : {}),
      },

      '&.MuiChip-filled': {
        ...(ownerState.color ? { backgroundColor: chipColor[ownerState.color] } : {}),
      },

      '&.MuiChip-custom--brand': {
        ...(ownerState.color
          ? { border: `1px solid ${chipColor[ownerState.color]}`, color: chipColor[ownerState.color] }
          : {}),
      },
    }),

    colorSecondary: {
      '&.white': {
        color: 'var(--white)',
      },
    },
  },
}
