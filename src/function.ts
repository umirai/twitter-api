import { Client } from "twitter-api-sdk"
import { TwitterClient } from '@/infra/twitter-client/twitter-client'
import { GetUsersByKeyWord } from '@/usecase/user/get-users-by-keyword'
import { GetFollowersByUsername } from '@/usecase/user/get-followers-by-username'

const client = new Client(process.env.BEARER_TOKEN as string)
const twitterClient = new TwitterClient(client)

export const getUsersByKeyword = async (keyword: string) => {
  const usecase = new GetUsersByKeyWord(twitterClient)
  const result = await usecase.execute(keyword)
  console.log(result)
}

export const getUsersByFollows = async (username: string) => {
  const usecase = new GetFollowersByUsername(twitterClient)
  const result = await usecase.execute(username)
  console.log(result)
}
