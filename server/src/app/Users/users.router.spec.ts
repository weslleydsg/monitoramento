import usersRouter from './users.router';

describe('UsersRouter', () => {
  it('UsersRouter should have router property', () => {
    expect(usersRouter).toHaveProperty('router');
  });

  it('UsersRouter should have path property', () => {
    expect(usersRouter).toHaveProperty('path');
  });

  it('UsersRouter path should be /users', () => {
    expect(usersRouter.path).toBe('/users');
  });
});
