import { Chip, TableCell, TableRow, Typography, useMediaQuery } from '@mui/material'
import { Table } from '@/components'
import { style } from './Accordion.style'
import { myScoreTableHeader } from './constants'
import { TableEntry } from './types'

type TableAccordionProps = {
  data: TableEntry[]
}

export const TableAccordion = ({ data }: TableAccordionProps) => {
  const matches = useMediaQuery('(min-width:530px)')

  return (
    <Table header={myScoreTableHeader(matches)}>
      {data.map((row) => (
        <TableRow key={row.id}>
          {matches ? (
            <>
              <TableCell>{row.lessonName}</TableCell>

              <TableCell>
                <Chip label={row.status} color={row.statusColor} style={style.color} />
              </TableCell>

              <TableCell>
                <Chip label={String(row.score)} color="secondary" variant="outlined" style={style.color} />
              </TableCell>

              <TableCell>{row.time}</TableCell>
            </>
          ) : (
            <>
              <TableCell>{row.lessonName}</TableCell>

              <TableCell sx={style.tableMobile}>
                <Chip label={row.status} color={row.statusColor} style={style.color} />
                <Chip label={String(row.score)} color="secondary" variant="outlined" style={style.color} />
                <Typography variant="body1">{row.time}</Typography>
              </TableCell>
            </>
          )}
        </TableRow>
      ))}
    </Table>
  )
}
