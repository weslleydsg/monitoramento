import postsRouter from './posts.router';

describe('PostsRouter', () => {
  it('PostsRouter should have router property', () => {
    expect(postsRouter).toHaveProperty('router');
  });

  it('PostsRouter should have path property', () => {
    expect(postsRouter).toHaveProperty('path');
  });

  it('PostsRouter path should be /posts', () => {
    expect(postsRouter.path).toBe('/posts');
  });
});
