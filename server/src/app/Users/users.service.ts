import api from '../../services/jsonPlaceHolderApi';
import { User } from './users.entity';

class UsersService {
  async getAllUsers() {
    const { data } = await api.get<User[]>('/users');
    return data;
  }

  async getUserById(id: number) {
    const { data } = await api.get<User>(`/users/${id}`);
    return data;
  }
}

export default new UsersService();
