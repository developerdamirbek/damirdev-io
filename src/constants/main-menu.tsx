'use client'

import { ReactElement } from 'react'
import { ROUTES } from '@/constants/routes'
import { menuDictionary } from '@/dictionary/uz/app'
import type { ValueOf } from '@/types'

export type MainMenuItem = {
  href: ValueOf<typeof ROUTES>
  title: string
  id: string
  icon?: ReactElement
  notifications?: string
}

export const mainMenuList: MainMenuItem[] = [
  {
    href: ROUTES.home,
    title: menuDictionary.main,
    id: 'mainMenuMain',
  },
]
