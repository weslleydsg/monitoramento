import usersService from './users.service';

class UsersController {
  async index() {
    return usersService.getAllUsers();
  }
}

export default new UsersController();
