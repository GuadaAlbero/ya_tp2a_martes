// =============================================
// 📌 Servidor básico con Node.js (sin Express)
// =============================================

// Importamos el módulo nativo 'http' de Node
const http = require("node:http")

// Creamos el servidor
const server = http.createServer((request, response) => {
  // Muestra en consola la URL pedida
  console.log("🚀 ~ request:", request.url)

  // Respondemos al cliente con el texto "okay"
  response.end("okay")
})

// El servidor escucha en el puerto 8080
server.listen(8080, () => {
  console.log("🚀 Servidor en http://localhost:8080")
})