import { Company } from '../Users/users.entity';

interface Post {
  id: number;
  title: string;
  body: string;
}

export interface PostApiResponse extends Post {
  userId: number;
}

export interface PostResponse extends Post {
  user: {
    id: number;
    name: string;
  };
  company: Company;
}
