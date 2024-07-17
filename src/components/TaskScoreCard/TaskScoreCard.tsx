import { Card, Typography } from '@mui/material'
import classNames from 'classnames/bind'

import style from './TaskScoreCard.module.scss'

type Props = {
  title: string
  text: string
}

const cn = classNames.bind(style)

export const TaskScoreCard = ({ title, text }: Props) => (
  <Card className={cn('taskScoreCard')}>
    <Typography variant="caption">{title}</Typography>

    <Typography variant="h2">{text}</Typography>
  </Card>
)
