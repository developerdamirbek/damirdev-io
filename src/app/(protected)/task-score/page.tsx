import { Metadata } from 'next'
import { getMetaData } from '@/helpers/next'
import { TaskScore } from '@/modules/TaskScore'

export const metadata: Metadata = getMetaData('Task score')

export default function TaskSrocesPage() {
  return <TaskScore />
}
