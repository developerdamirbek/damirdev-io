import { Accordion } from './accordion'
import { appDictionary, navDictionary } from './app'
import { EmptyWidget } from './empty-widget'
import { errorDictionary } from './error'
import { forgotDictionary } from './forgot'
import { layoutDictionary } from './layout'
import { lessonVideoDictionary } from './lesson-video'
import { loginDictionary } from './login'
import { MyCertificates } from './my-certificates'
import { myCourseDictionary } from './my-course'
import { myJobsDictionary } from './my-jobs'
import { MyScore } from './myScore'
import { profileDictionary } from './profile'
import { ratingDictionary } from './rating'
import { registerDictionary } from './register'
import { Status } from './status'
import { Welcome } from './welcome'
import { leaderStudentList } from './widget'

export const uzDictionary = {
  ...appDictionary,
  ...EmptyWidget,
  ...errorDictionary,
  ...forgotDictionary,
  ...layoutDictionary,
  ...leaderStudentList,
  ...loginDictionary,
  ...myCourseDictionary,
  ...myJobsDictionary,
  ...navDictionary,
  ...profileDictionary,
  ...ratingDictionary,
  ...ratingDictionary,
  ...Welcome,
  ...profileDictionary,
  ...navDictionary,
  ...ratingDictionary,
  ...MyScore,
  ...Accordion,
  ...MyCertificates,
  ...MyScore,
  ...lessonVideoDictionary,
  ...Status,
  ...registerDictionary,
}
