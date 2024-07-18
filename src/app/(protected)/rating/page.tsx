import { Metadata } from 'next'
import { Rating } from '@/modules/Rating'

export const metadata: Metadata = {
  title: 'damirdev.io | Rating',
  description: 'damirdev.io, Rating',
}

export default function RatingPage() {
  return <Rating />
}
