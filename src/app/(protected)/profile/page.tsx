import { Box } from '@mui/material'
import { Metadata } from 'next'
import { Profile } from '@/modules/Profile'

export const metadata: Metadata = {
  title: 'EdFix | Profile',
  description: 'EdFix, Profile',
}

export default function ProfilePage() {
  return (
    <Box>
      <Profile />
    </Box>
  )
}
