import { Box, Pagination as MuiPagination, PaginationProps, SelectProps, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import { useMediaQuery } from 'usehooks-ts'
import mainDictionary from '@/dictionary'
import { Select } from '../Select'

import styles from './Pagination.module.scss'

const cn = classNames.bind(styles)

export type Option = {
  value: string
  label: string
}

type Props = PaginationProps & {
  totalCount?: number
  onRowsPerPageChange: SelectProps['onChange']
  selectOptions?: Option[]
}

export const Pagination = ({ totalCount, onRowsPerPageChange, selectOptions, ...restPaginationProps }: Props) => {
  const matches = useMediaQuery('(min-width:600px)')

  return matches ? (
    <Box component="section" className={cn('pagination__desktop')}>
      {totalCount && <Typography variant="subtitle2">{mainDictionary.ratingTotalCount(totalCount)}</Typography>}

      <MuiPagination variant="outlined" {...restPaginationProps} />

      {selectOptions && <Select option={selectOptions} onChange={onRowsPerPageChange} />}
    </Box>
  ) : (
    <Box component="section" className={cn('pagination__mobile')}>
      <MuiPagination variant="outlined" {...restPaginationProps} />

      <Box component="section" className={cn('pagination__mobile-bar')}>
        {totalCount && <Typography variant="subtitle2">{mainDictionary.ratingTotalCount(totalCount)}</Typography>}

        {selectOptions && <Select option={selectOptions} onChange={onRowsPerPageChange} />}
      </Box>
    </Box>
  )
}
