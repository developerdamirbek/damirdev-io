import { Box, Button, Typography } from '@mui/material'
import classNames from 'classnames/bind'

import styles from './EmptyWidget.module.scss'

const cx = classNames.bind(styles)

type Props = {
  title: string
  actionButton: string
}

export const EmptyWidget = ({ title, actionButton }: Props) => (
  <Box component="section" className={cx('empty-widget')}>
    <Box className={cx('empty-widget__container')}>
      <Typography variant="h5">{title}</Typography>

      <Button variant="contained" size="large" className={cx('empty-widget__container-button')}>
        {actionButton}
      </Button>
    </Box>
  </Box>
)
