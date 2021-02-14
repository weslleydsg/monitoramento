(async () => {
  if (process.env.NODE_ENV === 'development')
    await (await import('./config/dotenv')).default();

  const port = Number(process.env.APP_PORT);

  const server = (await import('./server')).default;

  if (port)
    server.app.listen(port, () =>
      // eslint-disable-next-line no-console
      console.log(`[Server] Listening on port ${port}`),
    );
  else {
    console.error('[Server] APP_PORT environment is not defined.');
    process.exit(1);
  }
})();
