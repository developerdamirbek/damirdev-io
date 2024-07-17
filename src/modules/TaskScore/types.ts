type Table = {
  lesson: string
  status: string
}

export type Header = {
  value: string
  label: string
}

export type TaskScoreProps = {
  id: number
  title: string
  table: Table[]
}

export type CardProps = {
  title: string
  text: string
}

export type Modules = {
  id: number
  title: string
}
