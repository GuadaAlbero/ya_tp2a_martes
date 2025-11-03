import { Router } from "express"; // Importamos el "Router" que nos da Express
import userRoutes from "./userRoutes.js"; // Importamos las rutas de usuarios
import rolesRoutes from "./rolesRoutes.js"; // Importamos las rutas de roles

const router = Router(); // Creamos una instancia de router (como un mini-servidor)

router.use("/users", userRoutes); // Si la URL empieza con /users, mandalo a userRoutes
router.use("/roles", rolesRoutes); // Si la URL empieza con /roles, mandalo a rolesRoutes

export default router; // Exportamos el router para usarlo en index.js (el principal)
