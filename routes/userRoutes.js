import { Router } from "express"; // Importamos Router para crear rutas
import logger from "../middlewares/logger.js"; // Middleware que muestra info por consola
import register from "../middlewares/register.js"; // Middleware que valida el body

// Importamos las funciones que controlan cada ruta
import {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} from "../controller/userController.js";

const userRoutes = Router(); // Creamos el mini-router

// Ruta para obtener todos los usuarios
userRoutes.get("/", getAllUsers);

// Ruta para obtener un usuario por ID, pero primero pasa por el logger
userRoutes.get("/:id", logger, getUserById);

// Ruta para crear un usuario, primero pasa por register (verifica datos)
userRoutes.post("/", register, createUser);

// Ruta para actualizar un usuario
userRoutes.put("/:id", updateUser);

// Ruta para eliminar un usuario
userRoutes.delete("/:id", deleteUser);

export default userRoutes; // Exportamos las rutas para usarlas en routes/index.js
