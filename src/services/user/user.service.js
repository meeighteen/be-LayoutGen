import UserRepository from "../../repositories/user/user.repository.js";

class UserService {
  // Crear un nuevo usuario
  async createUser(userData) {
    return await UserRepository.create(userData);
  }

  // Obtener todos los usuarios
  async getUsers() {
    return await UserRepository.getAll();
  }

  // Obtener un usuario por ID
  async getUserById(userId) {
    return await UserRepository.getById(userId);
  }

  // Actualizar un usuario
  async updateUser(userId, userData) {
    return await UserRepository.update(userId, userData);
  }

  // Eliminar un usuario
  async deleteUser(userId) {
    return await UserRepository.delete(userId);
  }
}

export default new UserService();
