import usersController from './users.controller';

describe('UsersController', () => {
  it('should have index property', () => {
    expect(usersController).toHaveProperty('index');
  });
});
