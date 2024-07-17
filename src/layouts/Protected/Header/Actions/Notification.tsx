import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import { Badge, IconButton } from '@mui/material'
import { headerRightStyles } from './right-side.style'

export const Notification = () => (
  <IconButton size="large" sx={headerRightStyles?.bellIcon} color="primary" aria-label="cart">
    <Badge sx={headerRightStyles?.notificationBadge} max={9} badgeContent={12} color="secondary" />
    <NotificationsActiveIcon />
  </IconButton>
)
