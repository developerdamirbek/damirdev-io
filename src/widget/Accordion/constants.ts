import { TableHeader } from '@/components'
import mainDictionary from '@/dictionary'
import { AccordionItem } from './types'

export const accordionConstant: AccordionItem[] = [
  {
    id: 1,
    title: mainDictionary.accordionTitle,
    courses: [
      {
        id: 12,
        title: mainDictionary.accordionTaskScoreTitle,
        totalScore: 43,
        module: [
          {
            id: 123,
            title: 'Task Module 1',
            table: [
              {
                id: 323,
                lessonName: '1- mavzu: Python dasturlash tiliga kirish',
                status: 'Qabul qilingan',
                statusColor: 'success',
                score: 2,
                time: '12.07.2023 16:34',
              },
              {
                id: 32,
                lessonName: '1- mavzu: Python dasturlash tiliga kirish',
                status: 'Qabul qilingan',
                statusColor: 'success',
                score: 2,
                time: '12.07.2023 16:34',
              },
              {
                id: 1243,
                lessonName: '1- mavzu: Python dasturlash tiliga kirish',
                status: 'Qabul qilingan',
                statusColor: 'secondary',
                score: 2,
                time: '12.07.2023 16:34',
              },
              {
                id: 12430,
                lessonName: '1- mavzu: Python dasturlash tiliga kirish',
                status: 'Qabul qilingan',
                statusColor: 'success',
                score: 2,
                time: '12.07.2023 16:34',
              },
            ],
          },
          {
            id: 124,
            title: 'Task Module 2',
            table: [
              {
                id: 143,
                lessonName: '1- mavzu: Python dasturlash tiliga kirish',
                status: 'Qabul qilingan',
                statusColor: 'success',
                score: 2,
                time: '12.07.2023 16:34',
              },
              {
                id: 124,
                lessonName: '1- mavzu: Python dasturlash tiliga kirish',
                status: 'Qabul qilingan',
                statusColor: 'error',
                score: 2,
                time: '12.07.2023 16:34',
              },
              {
                id: 243,
                lessonName: '1- mavzu: Python dasturlash tiliga kirish',
                status: 'Qabul qilingan',
                statusColor: 'error',
                score: 2,
                time: '12.07.2023 16:34',
              },
              {
                id: 123,
                lessonName: '1- mavzu: Python dasturlash tiliga kirish',
                status: 'Qabul qilingan',
                statusColor: 'error',
                score: 2,
                time: '12.07.2023 16:34',
              },
            ],
          },
        ],
      },
      {
        id: 13,
        title: mainDictionary.accordionVideoScoreTitle,
        totalScore: 43,
        module: [
          {
            id: 125,
            title: 'Video Module 1',
            table: [
              {
                id: 124335,
                lessonName: '1- mavzu: Python dasturlash tiliga kirish',
                status: 'Qabul qilingan',
                statusColor: 'error',
                score: 2,
                time: '12.07.2023 16:34',
              },
              {
                id: 103243,
                lessonName: '1- mavzu: Python dasturlash tiliga kirish',
                status: 'Qabul qilingan',
                statusColor: 'error',
                score: 2,
                time: '12.07.2023 16:34',
              },
              {
                id: 131243,
                lessonName: '1- mavzu: Python dasturlash tiliga kirish',
                status: 'Qabul qilingan',
                statusColor: 'error',
                score: 2,
                time: '12.07.2023 16:34',
              },
              {
                id: 515243,
                lessonName: '1- mavzu: Python dasturlash tiliga kirish',
                status: 'Qabul qilingan',
                statusColor: 'error',
                score: 2,
                time: '12.07.2023 16:34',
              },
            ],
          },
          {
            id: 126,
            title: 'Video Module 2',
            table: [
              {
                id: 2343,
                lessonName: '1- mavzu: Python dasturlash tiliga kirish',
                status: 'Qabul qilingan',
                statusColor: 'error',
                score: 2,
                time: '12.07.2023 16:34',
              },
              {
                id: 1433,
                lessonName: '1- mavzu: Python dasturlash tiliga kirish',
                status: 'Qabul qilingan',
                statusColor: 'error',
                score: 2,
                time: '12.07.2023 16:34',
              },
              {
                id: 43,
                lessonName: '1- mavzu: Python dasturlash tiliga kirish',
                status: 'Qabul qilingan',
                statusColor: 'error',
                score: 2,
                time: '12.07.2023 16:34',
              },
              {
                id: 90,
                lessonName: '1- mavzu: Python dasturlash tiliga kirish',
                status: 'Qabul qilingan',
                statusColor: 'error',
                score: 2,
                time: '12.07.2023 16:34',
              },
            ],
          },
        ],
      },
    ],
  },
]

export const myScoreTableHeader = (matches: boolean): TableHeader[] =>
  matches
    ? [
        {
          label: mainDictionary.myScoreLesson,
          value: mainDictionary.myScoreLesson,
        },
        {
          label: mainDictionary.myScoreStatus,
          value: mainDictionary.myScoreStatus,
        },
        {
          label: mainDictionary.myScoreScore,
          value: mainDictionary.myScoreScore,
        },
        {
          label: mainDictionary.myScoreTime,
          value: mainDictionary.myScoreTime,
        },
      ]
    : [
        {
          label: mainDictionary.myScoreLesson,
          value: mainDictionary.myScoreLesson,
        },
        {
          label: `${mainDictionary.myScoreStatus}/${mainDictionary.myScoreScore}/${mainDictionary.myScoreTime}`,
          value: `${mainDictionary.myScoreStatus}/${mainDictionary.myScoreScore}/${mainDictionary.myScoreTime}`,
        },
      ]
