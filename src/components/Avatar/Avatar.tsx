import { ReactNode } from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import { Avatar as MuiAvatar, AvatarProps, Box } from '@mui/material'
import classNames from 'classnames/bind'
import { getInitials } from '@/helpers/client-utils'
import { AvatarType } from './types'

import styles from './Avatar.module.scss'

const cn = classNames.bind(styles)

const avatarSize: Record<AvatarType, number> = {
  [AvatarType.Small]: 33,
  [AvatarType.Medium]: 44,
  [AvatarType.Large]: 80,
  [AvatarType.ExtraLarge]: 99,
}

type Props = AvatarProps & {
  actions?: ReactNode
  isBorder?: boolean
  firstName?: string
  lastName?: string
  size?: AvatarType
}

export const Avatar = ({
  lastName,
  firstName,
  actions,
  size = AvatarType.Medium,
  isBorder,
  ...restAvatarProps
}: Props) => (
  <Box className={cn('avatar', { 'avatar--has-border': isBorder })}>
    <MuiAvatar sx={{ width: avatarSize[size], height: avatarSize[size] }} {...restAvatarProps}>
      {!restAvatarProps.src && (getInitials(firstName, lastName) || <AccountCircleOutlinedIcon />)}
    </MuiAvatar>

    <Box className={cn('avatar__actions')}>{actions}</Box>
  </Box>
)
