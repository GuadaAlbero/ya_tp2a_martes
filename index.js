import express from "express"; // Importa Express para crear el servidor
import router from "./routes/index.js"; // Importa las rutas centralizadas

const app = express(); // Crea la app de Express

app.use(express.json()); // Permite recibir y leer JSON en los requests

app.use("/", router); // Usa las rutas definidas en la carpeta routes

app.listen(3000, () => {
  console.log("Servidor escuchando en http://localhost:3000"); // Muestra que el servidor está corriendo
});
// Clase 7 - inicio
