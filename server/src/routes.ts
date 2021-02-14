import { Router } from 'express';
import UsersRouter from './app/Users/users.router';

class AppRouter {
  private _router = Router();

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  private _configure() {
    this._router.use(UsersRouter.path, UsersRouter.router);
  }
}

export = new AppRouter().router;
