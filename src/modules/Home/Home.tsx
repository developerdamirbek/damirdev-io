import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import { LastVideo } from '@/widget/LastVideo'
import { LeaderStudentList } from '@/widget/LeaderStudentList'
import { MyCourse } from '@/widget/MyCourse'
import { MyJobs } from '@/widget/MyJobs/MyJobs'

import styles from './Home.module.scss'

const cx = classNames.bind(styles)

export const Home = () => (
  <Box component="section" className={cx('home')}>
    <Box className={cx('home__item')}>
      <LastVideo />
    </Box>

    <Box className={cx('home__item')}>
      <LeaderStudentList />
    </Box>

    <Box className={cx('home__item')}>
      <MyCourse />
    </Box>

    <Box className={cx('home__item')}>
      <MyJobs />
    </Box>
  </Box>
)
