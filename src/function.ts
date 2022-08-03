import { Client } from "twitter-api-sdk"

const client = new Client(process.env.BEARER_TOKEN as string)

export const main = async () => {
  try {
    const resp = await client.tweets.tweetsRecentSearch({
      query: 'プラハチャレンジ',
      max_results: 10,
      expansions: ['author_id']
    });
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
}
