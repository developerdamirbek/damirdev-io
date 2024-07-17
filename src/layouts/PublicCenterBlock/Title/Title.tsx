import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'

import styles from './Title.module.scss'

const cx = classNames.bind(styles)

export type TitleProps = {
  title?: string
  description?: string
}

export const Title = ({ description, title }: TitleProps) => (
  <Box className={cx('title')}>
    {title && (
      <Typography variant="h2" className={cx('title__main-text')}>
        {title}
      </Typography>
    )}
    {description && <Typography variant="subtitle1">{description}</Typography>}
  </Box>
)
