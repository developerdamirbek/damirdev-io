'use client'

import { useState } from 'react'
import { Box, Chip, TableCell, TableRow, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import { Accordion, AccordionChildType, Table, TaskScoreCard, WidgetHeader } from '@/components'
import mainDictionary from '@/dictionary'
import { header, modules, taskScore, taskScoreCard } from './constans'
import { styles } from './TaskScore.style'
import { TaskScoreProps } from './types'
import { handleStatusColor } from './utils'

import style from './TaskScore.module.scss'

const cn = classNames.bind(style)

export const TaskScore = () => {
  const [expanded, setExpanded] = useState<number>()

  const handleAccordionChange = (panel: number, e: any, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : 0)
  }

  return (
    <Box component="section" className={cn('taskScore')}>
      <Box className={cn('taskScore__top')}>
        <Box>
          <Typography variant="caption">{mainDictionary.courseName}</Typography>

          <WidgetHeader title="Moushn dizayn" />
        </Box>

        <Box>
          <Typography variant="caption">{mainDictionary.modules}</Typography>
          <Box component="ol">
            {modules.map(({ id, title }) => (
              <Box component="li" key={id}>
                <Typography>{title}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Box className={cn('taskScore__top-cards')}>
          {taskScoreCard.map((item) => (
            <TaskScoreCard key={item.title} title={item.title} text={item.text} />
          ))}
        </Box>
      </Box>

      <Box className={cn('taskScore__botton')}>
        <Typography variant="h2">{mainDictionary.myScoresForTasks}</Typography>

        {taskScore.map((item: TaskScoreProps) => (
          <Accordion
            key={item.id}
            title={item.title}
            bordered
            isChild={AccordionChildType.H6}
            expanded={expanded === item.id}
            onChange={handleAccordionChange.bind(null, item.id)}
          >
            <Table header={header}>
              {item.table.map((table) => (
                <TableRow key={table.lesson}>
                  <TableCell>{table.lesson}</TableCell>

                  <TableCell>
                    <Chip label={table.status} color={handleStatusColor(table.status)} style={styles} />
                  </TableCell>
                </TableRow>
              ))}
            </Table>
          </Accordion>
        ))}
      </Box>
    </Box>
  )
}
