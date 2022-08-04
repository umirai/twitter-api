import { User } from '@/domain/user/user';

it('unit', () => {
  const user = new User({
    id: '1',
    name: 'test',
    username: 'test'
  });
  expect(true).toBe(true);
  expect(user).toBeInstanceOf(User);
})
