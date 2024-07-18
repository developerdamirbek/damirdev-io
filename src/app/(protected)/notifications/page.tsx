import { Box } from '@mui/material'
import { Metadata } from 'next'
import { Notifications } from '@/modules/Notifications'

export const metadata: Metadata = {
  title: 'damirdev.io | Notifications',
  description: 'damirdev.io, Notifications',
}

export default function NotificationsPage() {
  return (
    <Box>
      <Notifications />
    </Box>
  )
}
