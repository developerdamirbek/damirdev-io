import { userData } from './utils'

export const defaultValue = {
  name: userData.name || '',
  surname: userData.surname || '',
  email: userData.email || '',
  phone: userData.phone || '',
  password: '',
  newPassword: '',
  confirmPassword: '',
  code: '',
  gender: userData.gender || '',
  dateOfBirth: {
    day: userData.dateOfBirth.day || '',
    month: userData.dateOfBirth.month || '',
    year: userData.dateOfBirth.year || '',
  },
}

export const days = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
  { value: '13', label: '13' },
  { value: '14', label: '14' },
  { value: '15', label: '15' },
  { value: '16', label: '16' },
  { value: '17', label: '17' },
  { value: '18', label: '18' },
  { value: '19', label: '19' },
  { value: '20', label: '20' },
  { value: '21', label: '21' },
  { value: '22', label: '22' },
  { value: '23', label: '23' },
  { value: '24', label: '24' },
  { value: '25', label: '25' },
  { value: '26', label: '26' },
  { value: '27', label: '27' },
  { value: '28', label: '28' },
  { value: '29', label: '29' },
  { value: '30', label: '30' },
  { value: '31', label: '31' },
]

export const months = [
  { value: '1', label: '1' },
  { value: '2', label: '2' },
  { value: '3', label: '3' },
  { value: '4', label: '4' },
  { value: '5', label: '5' },
  { value: '6', label: '6' },
  { value: '7', label: '7' },
  { value: '8', label: '8' },
  { value: '9', label: '9' },
  { value: '10', label: '10' },
  { value: '11', label: '11' },
  { value: '12', label: '12' },
]

export const years = [
  { value: '2010', label: '2010' },
  { value: '2009', label: '2009' },
  { value: '2008', label: '2008' },
  { value: '2007', label: '2007' },
  { value: '2006', label: '2006' },
  { value: '2005', label: '2005' },
  { value: '2004', label: '2004' },
  { value: '2003', label: '2003' },
  { value: '2002', label: '2002' },
  { value: '2001', label: '2001' },
  { value: '2000', label: '2000' },
  { value: '1999', label: '1999' },
  { value: '1998', label: '1998' },
  { value: '1997', label: '1997' },
  { value: '1996', label: '1996' },
  { value: '1995', label: '1995' },
  { value: '1994', label: '1994' },
  { value: '1993', label: '1993' },
  { value: '1992', label: '1992' },
  { value: '1991', label: '1991' },
  { value: '1990', label: '1990' },
  { value: '1989', label: '1989' },
  { value: '1988', label: '1988' },
  { value: '1987', label: '1987' },
  { value: '1986', label: '1986' },
  { value: '1985', label: '1985' },
  { value: '1984', label: '1984' },
  { value: '1983', label: '1983' },
  { value: '1982', label: '1982' },
  { value: '1981', label: '1981' },
]
