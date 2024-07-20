import { UserDataType } from './types'

export const userData: UserDataType = {
  name: 'Damirbek',
  surname: 'Xursanaliyev',
  dateOfBirth: {
    day: '20',
    month: '03',
    year: '2006',
  },
  phone: '+998 33 200 06 07',
  gender: 'Erkak',
  email: 'devdamirbek@gmail.com',
  password: '12345678',
  passwordMask: '••••••••',
  avatar: 'https://i.pravatar.cc/300',
  getFormattedDateOfBirth() {
    const { day, month, year } = this.dateOfBirth

    return `${day}.${month}.${year}`
  },
}
