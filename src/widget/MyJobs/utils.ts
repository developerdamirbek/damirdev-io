import { StaticImageData } from 'next/image'
import img1 from './assets/img1.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'

type MyJobs = {
  id: number
  name: string
  image: StaticImageData // this should be string after testing when backend will be ready
  href: string
}

export const myJobsData: MyJobs[] = [
  {
    id: 1,
    name: 'SMM onlayn',
    image: img1,
    href: '/my-jobs/1',
  },
  {
    id: 2,
    name: 'Grafik Dizayn',
    image: img2,
    href: '/my-jobs/2',
  },
  {
    id: 3,
    name: 'Frontend Dasturlash',
    image: img3,
    href: '/my-jobs/3',
  },
]
