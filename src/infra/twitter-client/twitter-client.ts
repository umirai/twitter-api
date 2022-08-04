import { User } from '@/domain/user/user';
import { ITwitterClient } from '@/domain/interface/twitter-client-interface';
import { Client } from 'twitter-api-sdk';

export class TwitterClient implements ITwitterClient {
  constructor(
    private readonly client: Client,
    private readonly MAX_RESULTS: number = 10
  ) {}

  public async getUsersByKeyword(keyword: string): Promise<User[] | void> {
    try {
      const resp = await this.client.tweets.tweetsRecentSearch({
        query: keyword,
        max_results: this.MAX_RESULTS,
        expansions: ['author_id']
      })

      if (!resp.includes) return []
      if (!resp.includes.users) return []

      return resp.includes.users.map(user => {
        return new User({
          id: user.id,
          name: user.name,
          username: user.username
        })
      })

    } catch (error) {
      console.log(error);
    }
  }

  public async getUserByUsername(username: string): Promise<User | void> {
    try {
      const resp = await this.client.users.findUserByUsername(username)
      if (!resp.data) throw new Error('user not found')
      return new User({
        id: resp.data.id,
        name: resp.data.name,
        username: resp.data.username
      })
    } catch (error) {
      console.log(error);
    }
  }

  public async getFollowersById(userId: string): Promise<User[] | void> {
    try {
      const resp = await this.client.users.usersIdFollowers(userId, {
        max_results: this.MAX_RESULTS
      })
      if (!resp.data) return []
      return resp.data.map(user => {
        return new User({
          id: user.id,
          name: user.name,
          username: user.username
        })
      })
    } catch (error) {
      console.log(error);
    }
  }
}
