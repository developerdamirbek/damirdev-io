import { Metadata } from 'next'
import { Rating } from '@/modules/Rating'

export const metadata: Metadata = {
  title: 'EdFix | Rating',
  description: 'EdFix, Rating',
}

export default function RatingPage() {
  return <Rating />
}
