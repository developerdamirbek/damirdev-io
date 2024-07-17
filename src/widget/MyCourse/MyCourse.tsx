import { Box, Button, Stack } from '@mui/material'
import classNames from 'classnames/bind'
import { MyCareersCard, WidgetHeader, WidgetHeaderType } from '@/components'
import mainDictionary from '@/dictionary'
import { coursesData } from './utils'

import styles from './MyCourse.module.scss'

const cn = classNames.bind(styles)

export const MyCourse = () => (
  <Stack direction="column" gap="20px">
    <WidgetHeader
      type={WidgetHeaderType.Row}
      title={mainDictionary.myCourses}
      actions={
        <Button className={cn('my-course__button')} size="small" variant="contained">
          {mainDictionary.viewAll}
        </Button>
      }
    />

    <Box className={cn('my-course__layout')}>
      {coursesData.map(({ name, id, category, lessonsCount, progress, image, href }) => {
        const categoryNames = [
          ...(category ? [category] : []),
          ...(lessonsCount ? [mainDictionary.lessonCount(lessonsCount)] : []),
        ]

        return (
          <MyCareersCard
            key={id}
            categoryNames={categoryNames}
            imageSrc={image}
            title={name}
            href={href}
            progressValue={progress}
          />
        )
      })}
    </Box>
  </Stack>
)
