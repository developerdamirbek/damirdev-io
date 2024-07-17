import { Box } from '@mui/material'
import classNames from 'classnames/bind'

import styles from './List.module.scss'

type Option = {
  label: string
  value: string
}

type Props = {
  option: Option[]
}

const cx = classNames.bind(styles)

export const List = ({ option }: Props) => (
  <Box component="ul" className={cx('list')}>
    {option.map(({ value, label }) => (
      <Box component="li" key={value} className={cx('list__item')}>
        <Box component="span">
          {value} <Box component="b">{label}</Box>
        </Box>
      </Box>
    ))}
  </Box>
)
