import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import appRouter from './routes';
import ErrorHandler from './models/ErrorHandler';

class Server {
  public app = express();

  public router = appRouter;
}

const server = new Server();

server.app.use(cors());

server.app.use('/api', server.router);

server.app.use(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (error: ErrorHandler, _req: Request, res: Response, _next: NextFunction) => {
    if (process.env.NODE_ENV === 'development') {
      return res.status(error.statusCode || 500).json({
        status: 'error',
        statusCode: error.statusCode,
        message: error.message,
      });
    }

    return res.status(500).json({
      status: 'error',
      statusCode: error.statusCode,
      message: 'Internal server error',
    });
  },
);

export default server;
