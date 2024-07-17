import mainDictionary from '@/dictionary'
import { Language } from './types'

export const MENU_LINKS = [
  {
    title: mainDictionary.homePage,
    icon: '/home.svg',
    link: '/',
  },
  {
    title: mainDictionary.rating,
    icon: '/subtract.svg',
    link: '/rating',
  },
  {
    title: mainDictionary.myScore,
    icon: '/indicators.svg',
    link: '/my-score',
  },
]

export const languageOptions = [
  {
    label: mainDictionary?.uz,
    value: Language.Uz,
  },
  {
    label: mainDictionary?.ru,
    value: Language.Ru,
  },
]
