import { Metadata } from 'next'
import { Home } from '@/modules/Home'

export const metadata: Metadata = {
  title: 'EdFix',
  description: 'EdFix',
}

export default function HomePage() {
  return <Home />
}
