import { Router } from 'express';
import usersRouter from './app/Users/users.router';
import postsRouter from './app/Posts/posts.router';

class AppRouter {
  private _router = Router();

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.use(usersRouter.path, usersRouter.router);
    this._router.use(postsRouter.path, postsRouter.router);
  }
}

export default new AppRouter().router;
