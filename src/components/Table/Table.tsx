import { ReactNode } from 'react'
import {
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material'
import { TableHeader } from './types'

type Props = {
  header: TableHeader[]
  children: ReactNode
}

export const Table = ({ header, children }: Props) => (
  <TableContainer>
    <MuiTable>
      <TableHead>
        <TableRow>
          {header.map(({ value, label, onSortChange }) => {
            const handleClick = () => onSortChange?.(value)

            return (
              <TableCell key={value} sortDirection={false}>
                {onSortChange ? <TableSortLabel onClick={handleClick}>{label}</TableSortLabel> : label}
              </TableCell>
            )
          })}
        </TableRow>
      </TableHead>

      <TableBody>{children}</TableBody>
    </MuiTable>
  </TableContainer>
)
