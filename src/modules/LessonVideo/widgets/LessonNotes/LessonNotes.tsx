import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import classNames from 'classnames/bind'
import { WidgetHeader } from '@/components'
import mainDictionary from '@/dictionary'
import { Inbox } from '../../components'
import { EditedBox } from '../../components/EditedBox'
import { NoteBox } from './components/NotesBox'
import { notesData } from './utils'

import styles from './LessonNotes.module.scss'
const cn = classNames.bind(styles)

export const LessonNotes = () => (
  <Box className={cn('notes')}>
    <WidgetHeader title={mainDictionary.notes} />
    <Typography variant="h4">{mainDictionary.availableNotes(3)}</Typography>
    <Box className={cn('notes__list')}>
      {notesData.map(({ id, lessonTitle, note, sentTime }) => (
        <NoteBox {...{ sentTime, lessonTitle, note }} key={id} />
      ))}
    </Box>
    <Box>
      <EditedBox status="edit" editedText="edited note" />
    </Box>
    <Box>
      <Inbox placeholder="Write a note" timer="01:00" />
    </Box>
  </Box>
)
