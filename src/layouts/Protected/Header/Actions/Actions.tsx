import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import { Badge, Box, IconButton, MenuItem, Select } from '@mui/material'
import classNames from 'classnames/bind'
import { ROUTES } from '@/constants'
import { languageOptions } from '../constants'
import { User } from './User'

import styles from './Actions.module.scss'

const cn = classNames.bind(styles)

export const Actions = () => (
  <Box className={cn('actions')}>
    <Select defaultValue={languageOptions?.[0]?.value} IconComponent={KeyboardArrowDownIcon}>
      {languageOptions?.map((item) => (
        <MenuItem key={item.value} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>

    <Badge max={99} badgeContent={112} color="error" className="circle">
      <IconButton href={ROUTES.notifications} size="medium" color="secondary" className={cn('actions__bell')}>
        <NotificationsActiveIcon sx={{ width: 16, height: 16 }} />
      </IconButton>
    </Badge>

    <User />
  </Box>
)
