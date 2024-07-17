import Box from '@mui/material/Box'
import classNames from 'classnames/bind'
import { WidgetHeader, WidgetHeaderType } from '@/components'
import mainDictionary from '@/dictionary'
import { Inbox } from '../../components'
import { StatusBox, SubjectBox } from './components'

import styles from './LessonSubject.module.scss'
const cn = classNames.bind(styles)

export const LessonSubject = () => (
  <Box className={cn('tasks')}>
    <WidgetHeader type={WidgetHeaderType.Row} title={mainDictionary.tasks} />
    <SubjectBox type="teachertask" title="Homework" filesCount={3} />
    <SubjectBox type="mytask" title="Homework" sendTime="20:54 26.01.24" filesCount={3} />
    <Inbox fileUpload placeholder={mainDictionary.enterMesssageOrFile} />
    <StatusBox status="pending" />
  </Box>
)
