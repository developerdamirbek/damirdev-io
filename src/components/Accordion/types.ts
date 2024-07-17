import { ReactNode } from 'react'
import { AccordionProps } from '@mui/material'

export enum AccordionChildType {
  H5 = 'h5',
  H6 = 'h6',
  Body1 = 'body1',
}

export type Props = {
  title: string
  children: ReactNode
  expanded: boolean
  isChild: AccordionChildType
  bordered?: boolean
  actions?: ReactNode
  onChange: AccordionProps['onChange']
}
