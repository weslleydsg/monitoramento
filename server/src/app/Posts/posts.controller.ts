import postsService from './posts.service';

class PostsController {
  async index() {
    return postsService.getAllPosts();
  }

  async userPosts(id: number) {
    return postsService.getAllUserPosts(id);
  }
}

export default new PostsController();
