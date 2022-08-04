import { User } from '@/domain/user/user';
import { GetFollowersByUsername } from '@/usecase/user/get-followers-by-username';

describe('usecase/user/get-followers-by-username', () => {
  it('executeメソッドを実行できる', () => {
    const resp: User[] = []
    const mockedUsecase = jest.spyOn(GetFollowersByUsername.prototype, 'execute')
    mockedUsecase.mockResolvedValue(resp)
    expect(GetFollowersByUsername.prototype.execute('username')).resolves.toEqual(resp)
    expect(mockedUsecase).toHaveBeenCalled()
  })
})
