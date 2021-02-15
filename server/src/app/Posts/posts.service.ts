import api from '../../services/jsonPlaceHolderApi';
import usersService from '../Users/users.service';
import { PostApiResponse, PostResponse } from './posts.entity';

class PostsService {
  async getAllPosts() {
    const { data } = await api.get<PostApiResponse[]>('/posts');
    const promiseResponse = data.map(async value => {
      const { name, company } = await usersService.getUserById(value.userId);
      const postResponse: PostResponse = {
        id: value.id,
        title: value.title,
        body: value.body,
        user: {
          id: value.userId,
          name,
        },
        company,
      };
      return postResponse;
    });

    const result = await Promise.allSettled(promiseResponse);
    return result
      .filter(value => value.status === 'fulfilled')
      .map(value => {
        const fulfilledResult = <PromiseFulfilledResult<PostResponse>>value;
        return fulfilledResult.value;
      });
  }
}

export default new PostsService();
