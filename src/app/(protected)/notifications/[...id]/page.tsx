import { Box } from '@mui/material'
import { Metadata } from 'next'
import { DetailPage } from '@/modules/Notifications/detail-page'

export const metadata: Metadata = {
  title: 'damirdev.io | Notifications',
  description: 'damirdev.io, Notifications',
}

export default function NotificationsDetail() {
  return (
    <Box>
      <DetailPage />
    </Box>
  )
}
