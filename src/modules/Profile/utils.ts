import { UserDataType } from './types'

export const userData: UserDataType = {
  name: 'Daniyer',
  surname: 'Farxodov',
  dateOfBirth: {
    day: '01',
    month: '01',
    year: '1971',
  },
  phone: '+998 93 585 31 51',
  gender: 'Erkak',
  email: 'testerqadevn1@gmail.com',
  password: '12345678',
  passwordMask: '••••••••',
  avatar: 'https://i.pravatar.cc/300',
  getFormattedDateOfBirth() {
    const { day, month, year } = this.dateOfBirth

    return `${day}.${month}.${year}`
  },
}
