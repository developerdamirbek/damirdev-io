export const tabValues = {
  forCourse: 'tabValues.forCourse',
  forProfession: 'forProfession',
}

export interface LeaderStudent {
  id: number
  key: string
  firstName: string
  scores: string
  lastName: string
  categoryName: string
  imageUrl: string
}

export const studentsData: LeaderStudent[] = [
  {
    id: 1,
    key: tabValues.forCourse,
    firstName: 'Cormier',
    lastName: 'Carolyn',
    categoryName: 'Marketing',
    scores: '140 ball',
    imageUrl: 'https://loremflickr.com/640/480',
  },
  {
    id: 2,
    key: tabValues.forCourse,
    firstName: 'Cronin',
    lastName: 'Serena',
    scores: '150 ball',
    categoryName: 'Marketing',
    imageUrl: 'https://loremflickr.com/640/480',
  },
  {
    id: 3,
    key: tabValues.forCourse,
    firstName: 'Quigley',
    lastName: 'Clotilde',
    scores: '140 ball',
    categoryName: 'SMM onlayn ',
    imageUrl: 'https://loremflickr.com/640/480',
  },
  {
    id: 4,
    key: tabValues.forProfession,
    firstName: 'Altenwerth',
    lastName: 'Clay',
    scores: '100 ball',
    categoryName: 'Marketing',
    imageUrl: 'https://loremflickr.com/640/480',
  },
  {
    id: 5,
    key: tabValues.forProfession,
    firstName: 'Ferry',
    lastName: 'Deven',
    scores: '150 ball',
    categoryName: 'Marketing',
    imageUrl: 'https://loremflickr.com/640/480',
  },
  {
    id: 6,
    key: tabValues.forProfession,
    firstName: 'Kohler',
    lastName: 'Selina',
    scores: '200 ball',
    categoryName: 'SMM onlayn ',
    imageUrl: 'https://loremflickr.com/640/480',
  },
]
