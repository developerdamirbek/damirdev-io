import { ReactNode } from 'react'

export type TableHeader = {
  value: string
  label: ReactNode
  onSortChange?: (value: TableHeader['value']) => void
}
