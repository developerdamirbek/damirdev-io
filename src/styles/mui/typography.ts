import { ThemeOptions } from '@mui/material/styles/createTheme'
import { Roboto } from 'next/font/google'

// eslint-disable-next-line new-cap
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
  display: 'swap',
})

export const typography: ThemeOptions['typography'] = {
  fontFamily: roboto.style.fontFamily,
  fontSize: 14,
  htmlFontSize: 14,

  h1: {
    fontWeight: 600,
    fontSize: 'clamp(1.625rem, 1.2083rem + 0.8681vw, 2.25rem)',
  },

  h2: {
    fontWeight: 600,
    fontSize: 'clamp(1.4rem, 1.4681rem + 0.1307vw, 1.625rem)',
    lineHeight: '2',
  },

  h3: {
    fontWeight: 700,
    fontSize: 'clamp(24px, 2vw, 26px)',
  },

  h4: {
    fontWeight: 700,
    fontSize: 'clamp(16px, 2vw, 20px)',
  },

  h5: {
    fontWeight: 600,
    fontSize: 'clamp(1.125rem, 1.0613rem + 0.2614vw, 1.375rem)',
  },

  h6: {
    fontWeight: 600,
    fontSize: 'clamp(1rem, 0.347vw + 0.833rem, 1.25rem)',
  },

  subtitle1: {
    fontSize: '16px',
    color: '#828282',
  },

  button: {
    fontWeight: 400,
    fontSize: 'clamp(14px, 1vw, 16px)',
    textTransform: 'none',
  },

  subtitle2: {
    fontWeight: 400,
    fontSize: '14px',
  },
  body1: {
    fontSize: 'clamp(14px, 2vw, 16px)',
  },

  body2: {
    fontSize: '12px',
    color: 'var(--text)',
  },

  caption: {
    fontSize: '16px',
    color: 'var(--brand)',
    fontWeight: 400,
  },
}
