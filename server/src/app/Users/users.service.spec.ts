import usersService from './users.service';

describe('UsersService', () => {
  it('index should return a Promise', async () => {
    const response = usersService.getAllUsers();
    expect(response).toBeInstanceOf(Promise);
  });
});
