import mainDictionary from '@/dictionary'

export const handleStatusColor = (status: string) => {
  switch (status) {
    case mainDictionary.done:
      return 'success'

    case mainDictionary.notDone:
      return 'error'

    case mainDictionary.pending:
      return 'info'

    case mainDictionary.returned:
      return 'secondary'

    default:
      return 'secondary'
  }
}
