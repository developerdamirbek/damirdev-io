import { Box } from '@mui/material'
import { Metadata } from 'next'
import { Profile } from '@/modules/Profile'

export const metadata: Metadata = {
  title: 'damirdev.io | Profile',
  description: 'damirdev.io, Profile',
}

export default function ProfilePage() {
  return (
    <Box>
      <Profile />
    </Box>
  )
}
