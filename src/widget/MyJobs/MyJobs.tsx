import { Box, Button, Stack } from '@mui/material'
import classNames from 'classnames/bind'
import { MyCareersCard, WidgetHeader, WidgetHeaderType } from '@/components'
import mainDictionary from '@/dictionary'
import { myJobsData } from './utils'

import styles from './MyJobs.module.scss'

const cn = classNames.bind(styles)

export const MyJobs = () => (
  <Stack direction="column" gap="15px">
    <WidgetHeader
      type={WidgetHeaderType.Row}
      title={mainDictionary.myJobs}
      actions={
        <Button className={cn('my-jobs__button')} size="small" variant="contained">
          {mainDictionary.viewAll}
        </Button>
      }
    />

    <Box className={cn('my-jobs__layout')}>
      {myJobsData.map(({ id, name, image, href }) => (
        <MyCareersCard key={id} href={href} title={name} imageSrc={image} />
      ))}
    </Box>
  </Stack>
)
