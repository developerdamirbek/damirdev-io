import { Box, CircularProgress } from '@mui/material'
import classNames from 'classnames/bind'

import styles from './Spinner.module.scss'

const cn = classNames.bind(styles)

export const Spinner = () => (
  <Box className={cn('spinner')}>
    <CircularProgress />
  </Box>
)
