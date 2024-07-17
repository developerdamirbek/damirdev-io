import { NotificationsActive } from '@mui/icons-material'
import { Badge, Box, ListItemAvatar, Stack, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Link from 'next/link'

import styles from './NotificationItem.module.scss'

const cn = classNames.bind(styles)

type Props = {
  date: string
  text: string
  href: string
}

export const NotificationItem = ({ date, text, href }: Props) => (
  <Box component={Link} href={href} className={cn('item')}>
    <Stack direction="row" gap="10px" alignItems="center">
      <ListItemAvatar className={cn('item__avatar')}>
        <NotificationsActive fontSize="small" color="primary" />
      </ListItemAvatar>

      <Box display="flex" flexDirection="column" gap="6px">
        <Typography variant="subtitle2" className={cn('item__date')}>
          {date}
        </Typography>

        <Typography variant="body1" className={cn('item__title')}>
          {text}
        </Typography>
      </Box>
    </Stack>

    <Badge className={cn('item__badge')} variant="dot" />
  </Box>
)
