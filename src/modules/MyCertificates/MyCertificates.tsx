import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import { CertificateCard, WidgetHeader } from '@/components'
import mainDictionary from '@/dictionary'
import { taskCard } from './constants'

import style from './MyCertificates.module.scss'

const cn = classNames.bind(style)

export const MyCertificates = () => (
  <Box component="section" className={cn('my-certificates')}>
    <WidgetHeader title={mainDictionary.certificateTitle} />

    <Box component="section" className={cn('my-certificates__cards')}>
      {taskCard.map((item) => (
        <CertificateCard key={item.id} notComplete={item.notComplete || ''} href={item.href || ''} />
      ))}
    </Box>
  </Box>
)
