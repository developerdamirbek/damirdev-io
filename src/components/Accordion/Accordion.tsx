import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Accordion as MuiAccordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import { Props } from './types'

import style from './Accordion.module.scss'

const cn = classNames.bind(style)

export const Accordion = ({ title, children, isChild, expanded, onChange, bordered, actions }: Props) => (
  <Box component="section" className={cn('accordion')}>
    <MuiAccordion expanded={expanded} onChange={onChange} className={bordered ? cn('accordion__border') : ''}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Box className={cn('accordion__title')}>
          <Typography variant={isChild}>{title}</Typography>

          {actions && <Box className={cn('accordion__actions')}>{actions}</Box>}
        </Box>
      </AccordionSummary>

      <AccordionDetails>{children}</AccordionDetails>
    </MuiAccordion>
  </Box>
)
