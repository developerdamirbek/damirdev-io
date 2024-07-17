import { Components } from '@mui/material/styles/components'

export const MuiPagination: Components['MuiPagination'] = {
  styleOverrides: {
    root: () => ({
      '&.MuiPagination-outlined': {
        '.MuiPagination-ul': {
          gap: '6px',
          justifyContent: 'center',
          '.MuiPaginationItem-root': {
            margin: 0,
            height: '38px',
            minWidth: '38px',
            fontSize: '14px',
            borderRadius: '50%',
            lineHeight: '14.06px',
            border: '1px solid var(--separator)',
          },
          '.Mui-selected': {
            border: 'none',
            color: 'var(--white)',
            background: 'var(--brand)',
          },
          '.MuiPaginationItem-ellipsis': {
            height: 'auto',
            border: 'none',
            fontSize: '12px',
          },
          '.MuiPaginationItem-icon': {
            fontSize: '18px',
            color: 'var(--brand)',
          },
          'li:first-child, li:last-child': {
            '.MuiPaginationItem-root': {
              border: 'none',
              background: 'var(--separator)',
            },
          },
        },
      },
    }),
  },
}
