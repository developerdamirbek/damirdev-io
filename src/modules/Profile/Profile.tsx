import { ReactNode } from 'react'
import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import { Avatar } from '@/components/Avatar'
import { AvatarType } from '@/components/Avatar/types'
import { WidgetHeader, WidgetHeaderType } from '@/components/WidgetHeader'
import mainDictionary from '@/dictionary'
import { EditEmail } from './components/EditEmail'
import { EditInfo } from './components/EditInfo'
import { EditPassword } from './components/EditPassword'
import { EditPhone } from './components/EditPhone'
import { userData } from './utils'

import styles from './Profile.module.scss'

const cn = classNames.bind(styles)

type DetailProps = {
  title: string
  detail: string
  action: ReactNode
}

const profileDetails: DetailProps[] = [
  {
    title: mainDictionary.phone,
    detail: userData.phone,
    action: <EditPhone />,
  },
  {
    title: mainDictionary.email,
    detail: userData.email,
    action: <EditEmail />,
  },
  {
    title: mainDictionary.password,
    detail: userData.passwordMask,
    action: <EditPassword />,
  },
]

export const Profile = () => (
  <Box className={cn('profile')}>
    <Box className={cn('profile__wrapper')}>
      <WidgetHeader title={mainDictionary.personalInfo} type={WidgetHeaderType.Row} actions={<EditInfo />} />

      <Box className={cn('profile__layout')}>
        <Box>
          <Avatar size={AvatarType.ExtraLarge} src={userData.avatar} />
        </Box>

        <Box className={cn('profile__info')}>
          <Box>
            <Typography className={cn('profile__label')} variant="subtitle2">
              {mainDictionary.name}
            </Typography>

            <Typography variant="h4">{userData.name}</Typography>
          </Box>

          <Box>
            <Typography className={cn('profile__label')} variant="subtitle2">
              {mainDictionary.surname}
            </Typography>

            <Typography variant="h4">{userData.surname}</Typography>
          </Box>

          <Box>
            <Typography className={cn('profile__label')} variant="subtitle2">
              {mainDictionary.dateOfBirth}
            </Typography>

            <Typography variant="h4">{userData.getFormattedDateOfBirth()}</Typography>
          </Box>

          <Box>
            <Typography className={cn('profile__label')} variant="subtitle2">
              {mainDictionary.gender}
            </Typography>
            <Typography variant="h4">{userData.gender}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>

    <Box className={cn('profile__details_wrapper')}>
      {profileDetails.map((item) => (
        <Box key={item.title} className={cn('profile__card')}>
          <WidgetHeader type={WidgetHeaderType.Row} title={item.title} actions={item.action} />

          <Box className={cn('profile__detail_block')}>
            <Typography className={cn('profile__detail_text')} variant="body1">
              {item.detail}
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
)
