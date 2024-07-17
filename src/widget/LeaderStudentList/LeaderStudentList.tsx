'use client'

import { useMemo, useState } from 'react'
import { ListItem as Item } from '@mui/material'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Stack from '@mui/material/Stack'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Typography from '@mui/material/Typography'
import classNames from 'classnames/bind'
import mainDictionary from '@/dictionary'
import { LeaderStudent } from './components'
import { studentsData, tabValues } from './utils'

import styles from './LeaderStudentList.module.scss'

const cn = classNames.bind(styles)

const { title, byCourse, byProfession } = mainDictionary

export const LeaderStudentList = () => {
  const [tabValue, setTabValue] = useState(tabValues.forCourse)

  const handleTabsOnChange = (e: React.SyntheticEvent, selectedTabValue: string) => {
    setTabValue(selectedTabValue)
  }

  const filteredStudentsData = useMemo(
    () => studentsData.filter((student) => student.key === tabValue),
    [tabValue, studentsData],
  )

  return (
    <Box className={cn('leader-student-list')}>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems={{ xs: 'none', sm: 'center' }}
        className={cn('leader-student-list__header')}
      >
        <Typography variant="h3">{title}</Typography>

        <Tabs value={tabValue} onChange={handleTabsOnChange}>
          <Tab disableRipple value={tabValues.forCourse} label={byCourse} />
          <Tab disableRipple value={tabValues.forProfession} label={byProfession} />
        </Tabs>
      </Stack>
      <List disablePadding>
        {filteredStudentsData.map((leaderStudent) => (
          <Item key={leaderStudent.id} disablePadding disableGutters className={cn('leader-student-list__list-item')}>
            <LeaderStudent leaderStudent={leaderStudent} />
          </Item>
        ))}
      </List>
    </Box>
  )
}
