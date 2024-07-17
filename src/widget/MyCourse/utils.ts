import { StaticImageData } from 'next/image'
import Image from '@/assets/test-img.png'

type Courses = {
  name: string
  id: number
  category?: string
  lessonsCount?: number
  progress?: number
  image?: StaticImageData // this should be string after testing when backend will be ready
  href: string
}

export const coursesData: Courses[] = [
  {
    id: 1,
    name: 'SMM Marketing',
    category: 'Marketing',
    lessonsCount: 4,
    progress: 23,
    image: Image,
    href: `/my-courses/1`,
  },

  {
    id: 2,
    name: 'Dasturlash Foundation',
    category: 'Dasturlash',
    progress: 67,
    lessonsCount: 6,
    image: Image,
    href: `/my-courses/2`,
  },

  {
    id: 3,
    name: 'Frontend Dasturlash',
    category: 'Dasturlash',
    progress: 38,
    lessonsCount: 5,
    image: Image,
    href: `/my-courses/3`,
  },
]
