import UsersRouter from './users.router';

describe('UsersRouter', () => {
  it('UsersRouter should have router property', () => {
    expect(UsersRouter).toHaveProperty('router');
  });

  it('UsersRouter should have path property', () => {
    expect(UsersRouter).toHaveProperty('path');
  });

  it('UsersRouter path should be /users', () => {
    expect(UsersRouter.path).toBe('/users');
  });
});
