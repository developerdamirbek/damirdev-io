import Box from '@mui/material/Box'
import classNames from 'classnames/bind'
import { WidgetHeader } from '@/components'
import mainDictionary from '@/dictionary'
import { Inbox } from '../../components'
import { EditedBox } from '../../components/EditedBox'
import { CommentBox } from './components'
import { commentsData } from './utils'

import styles from './LessonComments.module.scss'
const cn = classNames.bind(styles)

export const LessonComment = () => (
  <Box className={cn('comment')}>
    <WidgetHeader title={mainDictionary.comments} />
    <Box className={cn('comment__list')}>
      {commentsData.map(({ id, author, avatar, comment, date, status, isEdited }) => (
        <CommentBox
          key={id}
          comment={comment}
          author={author}
          avatar={avatar}
          date={date}
          status={status}
          isEdited={isEdited}
        />
      ))}
    </Box>
    <EditedBox author="Damirbek Xursanaliyev" status="reply" editedText="edited comment" />
    <Inbox placeholder={mainDictionary.writeComment} />
  </Box>
)
