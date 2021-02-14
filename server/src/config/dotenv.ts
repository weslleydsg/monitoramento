export default async (): Promise<void> => {
  if (process.env.NODE_ENV === 'development') {
    const dotenv = await import('dotenv');
    dotenv.config();
  }
};
