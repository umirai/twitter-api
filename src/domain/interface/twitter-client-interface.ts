import { User } from '@/domain/user/user'

export interface ITwitterClient {
  getUsersByKeyword: (keyword: string) => Promise<User[] | void>
}
