import { Tokens } from './tokens'

export const enum RoleId {
  Admin,
  Employee,
}

export type TRole = {
  id: number
  name: string
}

export type User = {
  id: number
  createdAt: string
  firstName: string
  lastName: string
  middleName: string
  email: string
  experience: string
  salary: string
  gender: string
  isActivated: true
  status: {
    id: number
    status: string
    code: string
  }
  organization: {
    id: number
    title: string
    inn: string
    statusId: number
  }
}

export type UserCredentials = Tokens & { id: User['id'] }
