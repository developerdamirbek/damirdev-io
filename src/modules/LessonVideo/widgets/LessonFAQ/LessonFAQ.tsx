'use client'

import { SyntheticEvent, useState } from 'react'
import { Typography } from '@mui/material'
import Box from '@mui/material/Box'
import classNames from 'classnames/bind'
import { Accordion, WidgetHeader } from '@/components'
import { AccordionChildType } from '@/components/Accordion/types'
import mainDictionary from '@/dictionary'
import { faqsData } from './utils'

import styles from './LessonFAQ.module.scss'
const cn = classNames.bind(styles)

export const LessonFAQ = () => {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange = (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box className={cn('faq')}>
      <WidgetHeader title={mainDictionary.faq} />
      <Box className={cn('faq__list')}>
        {faqsData.map(({ id, question, answer }) => (
          <Accordion
            bordered
            expanded={expanded === `panel${id}`}
            onChange={handleChange(`panel${id}`)}
            isChild={AccordionChildType.H6}
            title={question}
            key={id}
          >
            <Typography>{answer}</Typography>
          </Accordion>
        ))}
      </Box>
    </Box>
  )
}
