import { User } from '@/domain/user/user'

export interface ITwitterClient {
  getUsersByKeyword: (keyword: string) => Promise<User[] | void>
  getUserByUsername: (username: string) => Promise<User | void>
  getFollowersById: (userId: string) => Promise<User[] | void>
}
