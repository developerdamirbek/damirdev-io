import HomeIcon from '/public/home.svg'
import MyScoreIcon from '/public/indicators.svg'
import RatingIcon from '/public/subtract.svg'
import mainDictionary from '@/dictionary'
import { Language } from './types'

export const MENU_LINKS = [
  {
    title: mainDictionary.homePage,
    icon: HomeIcon,
    link: '/',
  },
  {
    title: mainDictionary.rating,
    icon: RatingIcon,
    link: '/rating',
  },
  {
    title: mainDictionary.myScore,
    icon: MyScoreIcon,
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
