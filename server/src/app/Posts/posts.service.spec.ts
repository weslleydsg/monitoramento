import postsService from './posts.service';

describe('postsService', () => {
  it('index should return a array', async () => {
    const response = await postsService.getAllPosts();
    expect(response).toBeInstanceOf(Array);
  });
});
