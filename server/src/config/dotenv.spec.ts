import dotenv from './dotenv';

describe('dotenv', () => {
  beforeAll(async () => {
    await dotenv();
  });

  it('APP_PORT should defined', async () => {
    const { APP_PORT } = process.env;
    expect(APP_PORT).toBeDefined();
  });
});
