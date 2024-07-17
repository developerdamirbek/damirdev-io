'use client'

import { useState } from 'react'
import { Box, Chip, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import { Accordion } from '@/components'
import { AccordionChildType } from '@/components/Accordion/types'
import mainDictionary from '@/dictionary'
import { accordionConstant } from './constants'
import { TableAccordion } from './Table'
import { AccordionItem, Course, Module } from './types'

import styles from './Accordion.module.scss'

const cn = classNames.bind(styles)

export const AccordionWidget = () => {
  const [expandedCourse, setExpandedCourse] = useState<number>()
  const [expandedModule, setExpandedModule] = useState<number>()

  const handleCourseChange = (courseID: number, e: any, isExpanded: boolean) => {
    setExpandedCourse(isExpanded ? courseID : 0)
    setExpandedModule(0)
  }

  const handleModuleChange = (moduleID: number, e: any, isExpanded: boolean) => {
    setExpandedModule(isExpanded ? moduleID : 0)
  }

  return (
    <Box component="section" className={cn('accordion')}>
      {accordionConstant.map((item: AccordionItem) => (
        <Box key={item.id} className={cn('accordion__content')}>
          <Typography variant="h3">{item.title}</Typography>

          <Box className={cn('accordion__content-item')}>
            {item.courses.map((course: Course) => (
              <Accordion
                key={course.id}
                title={course.title}
                isChild={AccordionChildType.H5}
                expanded={expandedCourse === course.id}
                onChange={handleCourseChange.bind(null, course.id)}
              >
                <Box className={cn('accordion__content-item')}>
                  {course.module.map((module: Module) => (
                    <Accordion
                      key={module.id}
                      title={module.title}
                      isChild={AccordionChildType.H6}
                      expanded={expandedModule === module.id}
                      onChange={handleModuleChange.bind(null, module.id)}
                      bordered
                    >
                      <TableAccordion data={module.table} />
                    </Accordion>
                  ))}

                  <Box component="section">
                    <Chip
                      label={mainDictionary.totalScore(course.totalScore)}
                      variant="outlined"
                      color="secondary"
                      size="large"
                    />
                  </Box>
                </Box>
              </Accordion>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  )
}
