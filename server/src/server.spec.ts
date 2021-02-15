import request from 'supertest';
import server from './server';

describe('Server', () => {
  let api: request.SuperTest<request.Test>;
  beforeAll(async () => {
    api = request(server.app);
  });

  describe('Users', () => {
    it('path "/" should return an array', async () => {
      const { body } = await api.get('/api/users');

      expect(body).toBeDefined();
      expect(body).toBeInstanceOf(Array);
    });
  });
});
