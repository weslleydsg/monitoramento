export default async (): Promise<void> => {
  const { NODE_ENV } = process.env;
  if (NODE_ENV === 'development' || NODE_ENV === 'test') {
    const dotenv = await import('dotenv');
    dotenv.config();
  }
};
