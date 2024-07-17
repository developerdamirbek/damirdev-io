import { ROUTES } from '@/constants'
import mainDictionary from '@/dictionary'

type LessonCard = {
  id: number
  href?: string
  notComplete?: string
}

export const taskCard: LessonCard[] = [
  {
    id: 1,
    notComplete: mainDictionary.certificateComplete,
  },
  {
    id: 2,
    notComplete: mainDictionary.certificateDontBuyCourse,
  },
  {
    id: 3,
    href: `${ROUTES.myCertificates}/12`,
  },
  {
    id: 4,
    href: `${ROUTES.myCertificates}/12`,
  },
]
