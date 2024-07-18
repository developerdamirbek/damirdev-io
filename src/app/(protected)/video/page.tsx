import { Box } from '@mui/material'
import { Metadata } from 'next'
import { LessonVideo } from '@/modules/LessonVideo'

export const metadata: Metadata = {
  title: 'damirdev.io | Video',
  description: 'damirdev.io, Video',
}

export default function HomePage() {
  return (
    <Box maxWidth="1800px" mx="auto">
      <LessonVideo />
    </Box>
  )
}
