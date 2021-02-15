import postsService from './posts.service';

class PostsController {
  async index() {
    return postsService.getAllPosts();
  }
}

export default new PostsController();
