import { Box, Chip } from '@mui/material'
import classNames from 'classnames/bind'
import mainDictionary from '@/dictionary'
import { AccordionWidget } from '@/widget/Accordion'

import style from './MyScore.module.scss'

const cn = classNames.bind(style)

export const MyScore = () => (
  <Box component="section" className={cn('myscore')}>
    <Box component="section">
      <Chip label={mainDictionary.totalScore(21)} variant="outlined" color="secondary" size="large" />
    </Box>

    <AccordionWidget />
  </Box>
)
