import { User } from '@/domain/user/user'
import { ITwitterClient } from '@/domain/interface/twitter-client-interface'

export class GetFollowersByUsername {
  constructor (
    private readonly twitterClient: ITwitterClient,
  ) {}

  public async execute (username: string): Promise<User[] | void> {
    const user = await this.twitterClient.getUserByUsername(username)
    if (!user) return []
    return await this.twitterClient.getFollowersById(user.id)
  }
}
