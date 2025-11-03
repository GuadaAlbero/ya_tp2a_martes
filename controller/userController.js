import {
  getAllUsersSevice,
  getUserByIdSevice,
  updateUserSevice,
  deleteUserSevice,
  createUserSevice,
} from "../services/userServices.js";

// GET /users
export const getAllUsers = (req, res) => {
  try {
    const users = getAllUsersSevice(); // Pedimos todos los usuarios al service
    res.status(200).send({
      message: users, // Respondemos con los datos
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// GET /users/:id
// GET /users/:id
export const getUserById = (req, res) => {
  try {
    const { id } = req.params;
    const user = getUserByIdSevice(Number(id)); // Convertimos el ID a número

    if (!user) {
      return res.status(404).send({
        message: `Usuario con ID ${id} no encontrado`,
      });
    }

    res.status(200).send({
      message: user,
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};


// PUT /users/:id
export const updateUser = (req, res) => {
  try {
    res.status(200).send({
      message: "updateUserController", // Por ahora es un texto de prueba
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// DELETE /users/:id
export const deleteUser = (req, res) => {
  try {
    res.status(200).send({
      message: "deleteUserController", // Texto de prueba
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

// POST /users
export const createUser = (req, res) => {
  try {
    res.status(200).send({
      message: "createUserController", // Texto de prueba
    });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
