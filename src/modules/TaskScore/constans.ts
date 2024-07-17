import mainDictionary from '@/dictionary'
import { CardProps, Header, Modules, TaskScoreProps } from './types'

export const header: Header[] = [
  {
    value: mainDictionary.myScoreLesson,
    label: mainDictionary.myScoreLesson,
  },
  {
    value: mainDictionary.myScoreStatus,
    label: mainDictionary.myScoreStatus,
  },
]

export const taskScore: TaskScoreProps[] = [
  {
    id: 1,
    title: '1-modul: Obyektga yo‘naltirilgan dasturlash',
    table: [
      {
        lesson: '1- mavzu: Python dasturlash tiliga kirish',
        status: 'Qabul qillingan',
      },
      {
        lesson: '1- mavzu: Python dasturlash tiliga kirish',
        status: 'Bajarilmagan',
      },
      {
        lesson: '1- mavzu: Python dasturlash tiliga kirish',
        status: 'Qaytarilgan',
      },
      {
        lesson: '1- mavzu: Python dasturlash tiliga kirish',
        status: 'Kutayotgan',
      },
    ],
  },
  {
    id: 2,
    title: '1-modul: Obyektga yo‘naltirilgan dasturlash',
    table: [
      {
        lesson: '1- mavzu: Python dasturlash tiliga kirish',
        status: 'Kutayotgan',
      },
      {
        lesson: '1- mavzu: Python dasturlash tiliga kirish',
        status: 'Qabul qillingan',
      },
      {
        lesson: '1- mavzu: Python dasturlash tiliga kirish',
        status: 'Bajarilmagan',
      },
    ],
  },
  {
    id: 3,
    title: '1-modul: Obyektga yo‘naltirilgan dasturlash',
    table: [
      {
        lesson: '1- mavzu: Python dasturlash tiliga kirish',
        status: 'Qabul qillingan',
      },
      {
        lesson: '1- mavzu: Python dasturlash tiliga kirish',
        status: 'Qabul qillingan',
      },
    ],
  },
  {
    id: 4,
    title: '1-modul: Obyektga yo‘naltirilgan dasturlash',
    table: [
      {
        lesson: '1- mavzu: Python dasturlash tiliga kirish',
        status: 'Qabul qillingan',
      },
      {
        lesson: '1- mavzu: Python dasturlash tiliga kirish',
        status: 'Qabul qillingan',
      },
    ],
  },
]

export const taskScoreCard: CardProps[] = [
  {
    title: 'Modullar soni',
    text: '2/2',
  },
  {
    title: 'Darslar soni',
    text: '5/5',
  },
  {
    title: 'Asosiy vazifalar',
    text: '2/0',
  },
  {
    title: 'Boshlash vaqti',
    text: '2 noyabr, 2023',
  },
  {
    title: 'Tugatish vaqti',
    text: '21 noyabr, 2023',
  },
]

export const modules: Modules[] = [
  {
    id: 1,
    title: '1. Moushn dizayn basics',
  },
  {
    id: 2,
    title: '2. TestNo.001',
  },
]
