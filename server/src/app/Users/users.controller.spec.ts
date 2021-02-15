import UsersController from './users.controller';

describe('UsersController', () => {
  it('should have index property', () => {
    expect(UsersController).toHaveProperty('index');
  });
});
