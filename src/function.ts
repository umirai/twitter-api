import { Client } from "twitter-api-sdk"
import { TwitterClient } from '@/infra/twitter-client/twitter-client'
import { GetUsersByKeyWord } from '@/usecase/user/get-users-by-keyword'
import { GetFollowersByUsername } from '@/usecase/user/get-followers-by-username'
import { User } from '@/domain/user/user'

const client = new Client(process.env.BEARER_TOKEN as string)
const twitterClient = new TwitterClient(client)

export const getUsersByKeyword = async (keyword: string) => {
  const usecase = new GetUsersByKeyWord(twitterClient)
  const users = await usecase.execute(keyword)
  if (users) {
    console.log(format(users))
  }
}

export const getFollowersByUsername = async (username: string) => {
  const usecase = new GetFollowersByUsername(twitterClient)
  const users = await usecase.execute(username)
  if (users) {
    console.log(format(users))
  }
}

const format = (users: User[]): string[] => {
  return users.map(user => `${user.name}（@${user.username}）`)
}
