import { RoleId } from '@/types/users'

export type TRole = {
  id: RoleId
  name: string
}

export type TStatus = {
  id: number
  status: string
  code: string
}

export type TVideo = {
  id: number
  title: string
  videoURL: string
  status: TStatus
  roles: TRole[]
}
