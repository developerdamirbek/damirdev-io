import { Box } from '@mui/material'
import { Metadata } from 'next'
import { DetailPage } from '@/modules/Notifications/detail-page'

export const metadata: Metadata = {
  title: 'EdFix | Notifications',
  description: 'EdFix, Notifications',
}

export default function NotificationsDetail() {
  return (
    <Box>
      <DetailPage />
    </Box>
  )
}
