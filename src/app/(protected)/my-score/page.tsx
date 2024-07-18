import { Metadata } from 'next'
import { MyScore } from '@/modules/MyScore'

export const metadata: Metadata = {
  title: 'damirdev.io | My score',
  description: 'damirdev.io, My score',
}

export default function HomePage() {
  return <MyScore />
}
