import { Metadata } from 'next'
import { MyScore } from '@/modules/MyScore'

export const metadata: Metadata = {
  title: 'EdFix | My score',
  description: 'EdFix, My score',
}

export default function HomePage() {
  return <MyScore />
}
