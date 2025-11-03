import { Router } from "express"; // Importamos Router para crear rutas

const rolesRoutes = Router(); // Creamos el mini-router de roles

// GET /roles
rolesRoutes.get("/", (req, res) => {
  res.send("get con express rolesRoutes"); // Respuesta de prueba
});

// GET /roles/:id
rolesRoutes.get("/:id", (req, res) => {
  console.log("🚀 ~ request:", req.params); // Muestra el ID que llega por URL
  res.send("get by id con express");
});

// POST /roles
rolesRoutes.post("/", (req, res) => {
  console.log("🚀 ~ request body:", req.body); // Muestra el cuerpo enviado
  res.send("post con express");
});

// PUT /roles/:id
rolesRoutes.put("/:id", (req, res) => {
  console.log("🚀 ~ request:", req); // Muestra el request completo
  res.send("put con express");
});

// DELETE /roles/:id
rolesRoutes.delete("/:id", (req, res) => {
  console.log("🚀 ~ request:", req); // Muestra el request completo
  res.send("delete con express");
});

export default rolesRoutes; // Lo exportamos para usar en routes/index.js
