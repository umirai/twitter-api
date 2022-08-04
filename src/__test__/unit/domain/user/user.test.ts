import { User } from '@/domain/user/user';

describe('domain/user', () => {
  const user = new User({
    id: '1',
    name: 'test',
    username: 'test'
  });

  it('Userインスタンスを作成できる', () => {
    expect(user).toBeInstanceOf(User);
  })

  it('idを取得できる', () => {
    expect(user.id).toBe('1');
  })
})
