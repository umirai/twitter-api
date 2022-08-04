import { User } from '@/domain/user/user';
import { ITwitterClient } from '@/domain/interface/twitter-client-interface';

export class GetUsersByKeyWord {
  constructor (
    private readonly twitterClient: ITwitterClient,
  ) {}

  public async execute (keyword: string): Promise<User[] | void> {
    return await this.twitterClient.getUsersByKeyword(keyword)
  }
}
