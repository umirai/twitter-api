import { User } from '@/domain/user/user';

describe('domain/user', () => {
  it('Userインスタンスを作成できる', () => {
    const user = new User({
      id: '1',
      name: 'test',
      username: 'test'
    });
    expect(user).toBeInstanceOf(User);
  })
})
