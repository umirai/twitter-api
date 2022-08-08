import { User } from '@/domain/user/user';

describe('domain/user', () => {
  const user = new User({
    id: '1',
    name: 'name',
    username: 'username'
  });

  it('Userインスタンスを作成できる', () => {
    expect(user).toBeInstanceOf(User);
  })

  it('idを取得できる', () => {
    expect(user.id).toBe('1');
  })

  it('nameを取得できる', () => {
    expect(user.name).toBe('name');
  })

  it('usernameを取得できる', () => {
    expect(user.username).toBe('username');
  })
})
