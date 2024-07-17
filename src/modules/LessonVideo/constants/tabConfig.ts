import { ReactNode } from 'react'
import DocumentCenterIcon from '@/assets/icons/document_center_icon.svg'
import DocumentLeftIcon from '@/assets/icons/document_left_icon.svg'
import FaqCircleIcon from '@/assets/icons/faq_circle_icon.svg'
import MessageIcon from '@/assets/icons/message_icon.svg'
import PinIcon from '@/assets/icons/pin_icon.svg'
import mainDictionary from '@/dictionary'
import { TabConfig } from '../types'
import { LessonComment } from '../widgets/LessonComment'
import { LessonFAQ } from '../widgets/LessonFAQ'
import { LessonNotes } from '../widgets/LessonNotes'
import { LessonSubject } from '../widgets/LessonSubject'
import { LessonThemes } from '../widgets/LessonThemes/LessonThemes'

type TabPanelsProps = {
  id: number
  children: () => ReactNode
}

export const tabs: TabConfig[] = [
  { label: mainDictionary.notes, icon: PinIcon, id: 0 },
  { label: mainDictionary.tasks, icon: DocumentLeftIcon, id: 1 },
  { label: mainDictionary.theme, icon: DocumentCenterIcon, id: 2 },
  { label: mainDictionary.comments, icon: MessageIcon, id: 3 },
  { label: mainDictionary.faq, icon: FaqCircleIcon, id: 4 },
]

export const tabPanels: TabPanelsProps[] = [
  { id: 0, children: LessonNotes },
  { id: 1, children: LessonSubject },
  { id: 2, children: LessonThemes },
  { id: 3, children: LessonComment },
  { id: 4, children: LessonFAQ },
]
