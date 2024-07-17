import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Link from 'next/link'
import { WidgetHeaderType } from './types'

import styles from './WidgetHeader.module.scss'

const cn = classNames.bind(styles)

type Props = {
  title: string
  goBackTitle?: string
  actions?: React.ReactNode
  type?: WidgetHeaderType
}

export const WidgetHeader = ({ title, actions, goBackTitle, type = WidgetHeaderType.Column }: Props) => (
  <Box className={cn(type)}>
    <Box className={cn('title')}>
      {goBackTitle && (
        <Link className={cn('go-back')} href="/">
          <ArrowBackRoundedIcon />

          <Typography variant="h6">{goBackTitle}</Typography>
        </Link>
      )}

      <Typography variant="h2">{title}</Typography>
    </Box>

    {actions && <Box>{actions}</Box>}
  </Box>
)
