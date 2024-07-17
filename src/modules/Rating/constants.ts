import type { TableHeader } from '@/components'
import mainDictionary from '@/dictionary'
import { Student } from './types'

export const paginationData = {
  page: 1,
  perPage: 10,
  totalCount: 3409,
}

export const selectOptionsPagination = [
  {
    value: '10',
    label: `10/${mainDictionary.ratingPage}`,
  },
  {
    value: '25',
    label: `25/${mainDictionary.ratingPage}`,
  },
  {
    value: '50',
    label: `50/${mainDictionary.ratingPage}`,
  },
]

export const students: Student[] = [
  {
    id: 1,
    place: 1000,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 1,
    scores: 126,
  },
  {
    id: 2,
    place: 2,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 2,
    scores: 126,
  },
  {
    id: 3,
    place: 3,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    isMe: true,
    course: 3,
    scores: 126,
  },
  {
    id: 4,
    place: 4,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 4,
    scores: 126,
  },
  {
    id: 5,
    place: 5,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 5,
    scores: 126,
  },
  {
    id: 6,
    place: 6,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 6,
    scores: 126,
  },
  {
    id: 7,
    place: 7,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 7,
    scores: 126,
  },
  {
    id: 8,
    place: 8,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 8,
    scores: 126,
  },
  {
    id: 9,
    place: 9,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 9,
    scores: 126,
  },
  {
    id: 10,
    place: 10,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 10,
    scores: 126,
  },
  {
    id: 11,
    place: 11,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 1,
    scores: 126,
  },
  {
    id: 12,
    place: 12,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 2,
    scores: 126,
  },
  {
    id: 13,
    place: 13,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 3,
    scores: 126,
  },
  {
    id: 14,
    place: 14,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 4,
    scores: 126,
  },
  {
    id: 15,
    place: 15,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 5,
    scores: 126,
  },
  {
    id: 16,
    place: 16,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 6,
    scores: 126,
  },
  {
    id: 17,
    place: 17,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 7,
    scores: 126,
  },
  {
    id: 18,
    place: 18,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 8,
    scores: 126,
  },
  {
    id: 19,
    place: 19,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 9,
    scores: 126,
  },
  {
    id: 20,
    place: 20,
    imageUrl: 'https://loremflickr.com/640/480',
    firstName: 'Daniyer',
    lastName: 'Farxodov',
    course: 10,
    scores: 126,
  },
]

export const selectOptions = [
  {
    value: 'all',
    label: 'Barcha kurslar',
  },
  {
    value: 'my',
    label: 'Meni kurslarim',
  },
]

export const ratingTableHeader: TableHeader[] = [
  {
    value: mainDictionary.ratingPlace,
    label: mainDictionary.ratingPlace,
    onSortChange: () => {},
  },
  {
    value: mainDictionary.ratinImage,
    label: mainDictionary.ratinImage,
  },
  {
    value: mainDictionary.ratingFullName,
    label: mainDictionary.ratingFullName,
  },
  {
    value: mainDictionary.ratingCourse,
    label: mainDictionary.ratingCourse,
  },
  {
    value: mainDictionary.ratingScores,
    label: mainDictionary.ratingScores,
  },
]
