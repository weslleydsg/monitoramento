import usersService from './users.service';

describe('UsersService', () => {
  it('index should return a array', async () => {
    const response = await usersService.getAllUsers();
    expect(response).toBeInstanceOf(Array);
  });
});
