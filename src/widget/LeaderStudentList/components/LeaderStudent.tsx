import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import classNames from 'classnames/bind'
import { Avatar } from '@/components/Avatar'
import { LeaderStudent as Student } from '../utils'

import styles from './LeaderStudent.module.scss'

const cn = classNames.bind(styles)

interface Props {
  leaderStudent: Student
}

export const LeaderStudent = ({ leaderStudent }: Props) => {
  const { imageUrl, firstName, lastName, categoryName, scores } = leaderStudent

  return (
    <Box className={cn('leader-student')}>
      <Box className={cn('leader-student__content-left')}>
        <Avatar src={imageUrl} firstName={firstName} lastName={lastName} />

        <Typography variant="h6">{`${firstName} ${lastName}`}</Typography>
      </Box>
      <Stack direction={{ xs: 'column', sm: 'row' }} className={cn('leader-student__content-rigth--flexible')}>
        <Typography variant="button">{categoryName}</Typography>
        <Chip label={scores} variant="outlined" color="secondary" />
      </Stack>
    </Box>
  )
}
