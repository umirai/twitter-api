require('dotenv').config()
import { Command } from 'commander'
import { getUsersByKeyword, getFollowersByUsername } from '@/function'

// --------------------------------------------------

const program = new Command();

(() => {
  program
    .command('hello')
    .description('sample command')
    .action(() => {
      console.log('Hello World!')
    })

  program
    .command('search-keyword <keyword>')
    .description('get users by keyword')
    .action((keyword: string) => {
      getUsersByKeyword(keyword)
    })

  program
    .command('search-followers <username>')
    .description('get followers by username')
    .action((username: string) => {
      getFollowersByUsername(username)
    })

  program.parse(process.argv)
})();
