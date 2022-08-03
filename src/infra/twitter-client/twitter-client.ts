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
}
