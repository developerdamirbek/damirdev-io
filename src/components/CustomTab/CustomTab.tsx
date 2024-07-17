import { Box } from '@mui/material'
import classNames from 'classnames/bind'

import styles from './custom-tab.module.scss'

const cx = classNames.bind(styles)

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

export function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box className={cx('custom-table')}>{children}</Box>}
    </div>
  )
}
