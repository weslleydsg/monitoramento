import { Router } from 'express';
import postsController from './posts.controller';

const path = '/posts';

class PostsRouter {
  private _router = Router();

  private _controller = postsController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.get('/', async (_, res, next) => {
      try {
        const result = await this._controller.index();
        res.status(200).json(result);
      } catch (error) {
        next(error);
      }
    });
  }
}

export default {
  router: new PostsRouter().router,
  path,
};
