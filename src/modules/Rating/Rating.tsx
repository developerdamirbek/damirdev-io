'use client'

import { useMemo, useState } from 'react'
import { Box, Chip, PaginationProps, SelectProps, TableCell, TableRow } from '@mui/material'
import classNames from 'classnames/bind'
import { Avatar, Pagination, Select, Table, WidgetHeader } from '@/components'
import mainDictionary from '@/dictionary'
import { getInitials } from '@/helpers/client-utils'
import { ratingTableHeader, selectOptions, selectOptionsPagination, students } from './constants'

import styles from './Rating.module.scss'

const cn = classNames.bind(styles)

export const Rating = () => {
  const [page, setPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(8)

  const totalPages = useMemo(() => Math.ceil(students.length / rowsPerPage), [students, rowsPerPage])

  const handlePaginationChange: PaginationProps['onChange'] = (_event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage: SelectProps['onChange'] = (event) => {
    setRowsPerPage(Number(event.target.value))
    setPage(1)
  }

  const currentStudents = useMemo(
    () => students.slice((page - 1) * rowsPerPage, page * rowsPerPage),
    [students, page, rowsPerPage],
  )

  return (
    <Box className={cn('rating')}>
      <WidgetHeader title={mainDictionary.ratingTitle} actions={<Select option={selectOptions} />} />

      <Box className={cn('rating__table')}>
        <Table header={ratingTableHeader}>
          {currentStudents.map(({ id, firstName, lastName, imageUrl, place, scores, isMe, course }) => (
            <TableRow key={id} className={cn({ 'rating__table-row': isMe })}>
              <TableCell>
                <Box component="span" className={cn({ 'rating__table-cell--white': isMe })}>
                  {place}
                </Box>
              </TableCell>

              <TableCell>
                <Avatar
                  src={imageUrl}
                  firstName={firstName}
                  lastName={lastName}
                  alt={getInitials(firstName, lastName)}
                  isBorder
                />
              </TableCell>

              <TableCell>
                <Box component="span" className={cn({ 'rating__table-cell--white': isMe })}>
                  {firstName} {lastName}
                </Box>
              </TableCell>

              <TableCell>
                <Chip color="secondary" label={course} />
              </TableCell>

              <TableCell>
                <Chip color="secondary" label={scores} variant="outlined" className={cn({ white: isMe })} />
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </Box>

      <Pagination
        page={page}
        onChange={handlePaginationChange}
        count={totalPages}
        totalCount={students.length}
        onRowsPerPageChange={handleChangeRowsPerPage}
        selectOptions={selectOptionsPagination}
      />
    </Box>
  )
}
