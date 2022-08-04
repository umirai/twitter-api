import { User } from '@/domain/user/user';
import { GetUsersByKeyWord } from '@/usecase/user/get-users-by-keyword';

describe('usecase/user/get-users-by-keyword', () => {
  it('execute()メソッドを実行できる', () => {

    // const resp = ["1", "2", "3"].map(id => {
    //   return new User({
    //     id: id,
    //     name: 'test',
    //     username: 'test'
    //   })
    // })

    const resp: User[] = [];
    const mockedUsecase = jest.spyOn(GetUsersByKeyWord.prototype, 'execute');
    mockedUsecase.mockResolvedValue(resp);
    expect(GetUsersByKeyWord.prototype.execute('keyword')).resolves.toEqual(resp);
    expect(mockedUsecase).toHaveBeenCalled();
  })
})
