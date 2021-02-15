import postsController from './posts.controller';

describe('PostsController', () => {
  it('should have index property', () => {
    expect(postsController).toHaveProperty('index');
  });
});
