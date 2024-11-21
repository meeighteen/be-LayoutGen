import { User } from "../../models/user/user.schema.js";

class UserRepository {
  // Crear un nuevo usuario
  async create(userData) {
    try {
      const user = new User(userData);
      return await user.save();
    } catch (err) {
      throw new Error("Error al crear el usuario: " + err.message);
    }
  }

  // Obtener todos los usuarios
  async getAll() {
    try {
      return await User.find();
    } catch (err) {
      throw new Error("Error al obtener usuarios: " + err.message);
    }
  }

  // Obtener un usuario por su ID
  async getById(userId) {
    try {
      return await User.findById(userId);
    } catch (err) {
      throw new Error("Error al obtener el usuario: " + err.message);
    }
  }

  // Actualizar un usuario
  async update(userId, userData) {
    try {
      return await User.findByIdAndUpdate(userId, userData, { new: true });
    } catch (err) {
      throw new Error("Error al actualizar el usuario: " + err.message);
    }
  }

  // Eliminar un usuario
  async delete(userId) {
    try {
      return await User.findByIdAndDelete(userId);
    } catch (err) {
      throw new Error("Error al eliminar el usuario: " + err.message);
    }
  }
}

export default new UserRepository();
