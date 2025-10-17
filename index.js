// =============================================
// 📌 Servidor básico con Node.js (sin Express)
// =============================================

/*
const http = require("node:http")

const server = http.createServer((request, response) => {
  console.log("🚀 ~ request:", request.url)
  response.end("okay")
})

server.listen(8080, () => {
  console.log("🚀 Servidor en http://localhost:8080")
})
*/

// 1️⃣ Importamos la librería express
import express from "express"

// 2️⃣ Creamos una app de Express
const app = express()

// 3️⃣ Middlewares para interpretar JSON y formularios
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (request, response) => {
  response.send("get con express")
})

// 🔁 Rutas

// 📌Ruta GET con parámetro dinámico
// Si alguien entra a /algo (por ejemplo /123), Express captura ese "algo" como request.params.id
// Luego lo muestra por consola y responde con el texto "get con express"
app.get("/:id", (request, response) => {
  console.log("🚀 ~ request:", request.params)
  response.send("get con express")
})


// 📌 Ruta POST 
// Esta ruta responde a un pedido POST hecho a "/"
app.post("/", (request, response) => {
  // Mostramos en consola el contenido del body (los datos que nos mandaron)
  console.log("🚀 ~ body:", request.body)

  // Respondemos con un texto simple
  response.send("post con express")
})

// 📌 Ruta PUT
// Esta ruta responde a un pedido PUT hecho a "/"
app.put("/", (request, response) => {
  // Mostramos el body que nos mandan (los datos a actualizar)
  console.log("🚀 ~ body:", request.body)

  // Respondemos con un texto que indique que es un PUT
  response.send("put con express")
})

// 📌 Ruta DELETE con Express
// Esta ruta responde a un pedido DELETE hecho a "/"
app.delete("/", (request, response) => {
  // Mostramos el body (si el cliente nos manda datos para saber qué borrar)
  console.log("🚀 ~ body:", request.body)

  // Respondemos con un texto indicando que se recibió un DELETE
  response.send("delete con express")
})

app.listen(8080, () => {
  console.log("🚀 Servidor Express activo en http://localhost:8080")
})

