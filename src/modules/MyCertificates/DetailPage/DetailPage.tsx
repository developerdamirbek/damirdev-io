import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import certificate from '@/assets/certificate.png'
import { WidgetHeader } from '@/components'
import mainDictionary from '@/dictionary'
import { DetailButton } from './Buttons'

import style from './DetailPage.module.scss'

const cn = classNames.bind(style)

export const DetailPage = () => (
  <Box component="section" className={cn('detail')}>
    <WidgetHeader title="Grafik dizayn" actions={<DetailButton />} goBackTitle={mainDictionary.certificateTitle} />

    <Box component="section" className={cn('detail__certificate')}>
      <Image src={certificate} alt="certificate" />
    </Box>
  </Box>
)
