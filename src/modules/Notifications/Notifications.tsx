import { Box, Pagination } from '@mui/material'
import classNames from 'classnames/bind'
import { Select, WidgetHeader } from '@/components'
import { ROUTES } from '@/constants'
import { NotificationItem } from './NotificationItem'
import { notificationsData } from './utils/utils'

import styles from './Notifications.module.scss'

const cn = classNames.bind(styles)

const options: { value: string; label: string }[] = [
  {
    value: 'all',
    label: 'Barcha turlar bo`yicha',
  },
  {
    value: 'all',
    label: 'Barcha turlar bo`yicha',
  },
  {
    value: 'all',
    label: 'Barcha turlar bo`yicha',
  },
]

export const Notifications = () => (
  <Box display="flex" flexDirection="column" gap="20px">
    <WidgetHeader title="Xabarnomalar" actions={<Select option={options} />} />

    <Box>
      <Box className={cn('notifications__list')}>
        {notificationsData.map((item) => (
          <NotificationItem key={item.id} text={item.text} date={item.date} href={ROUTES.notifications} />
        ))}
      </Box>
    </Box>

    <Box width={'100%'} justifyContent="end" display="flex">
      <Pagination count={10} variant="outlined" page={1} color="primary" size="medium" />
    </Box>
  </Box>
)
