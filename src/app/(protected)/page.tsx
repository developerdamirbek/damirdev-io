import { Metadata } from 'next'
import { Home } from '@/modules/Home'

export const metadata: Metadata = {
  title: 'damirdev.io',
  description: 'damirdev.io',
}

export default function HomePage() {
  return <Home />
}
