export enum Gender {
  Man = 'Erkak',
  Woman = 'Ayol',
}

export type EmailFormValues = {
  email: string
  code: string
}

export type PhoneFormValues = {
  phoneNumber: string
  code: string
}

export type InfoFormValues = {
  name: string
  surname: string
  dateOfBirth: {
    day: string
    month: string
    year: string
  }
  gender: string
}

export type PasswordFormValues = {
  currentPassword: string
  newPassword: string
  confirmPassword: string
}

export type UserDataType = {
  name: string
  surname: string
  dateOfBirth: {
    day: string
    month: string
    year: string
  }
  phone: string
  gender: string
  email: string
  password: string
  passwordMask: string
  avatar: string
  getFormattedDateOfBirth: () => string
}
