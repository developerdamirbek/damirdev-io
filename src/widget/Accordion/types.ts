export type TableEntry = {
  id: number
  lessonName: string
  status: string
  score: number
  time: string
  statusColor: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
}

export type Module = {
  id: number
  title: string
  table: TableEntry[]
}

export type Course = {
  id: number
  title: string
  totalScore: number
  module: Module[]
}

export type AccordionItem = {
  id: number
  title: string
  courses: Course[]
}
