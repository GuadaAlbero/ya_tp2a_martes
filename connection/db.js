// Importamos la clase Sequelize desde la librería
import { Sequelize } from "sequelize";

// Creamos una nueva conexión a la base de datos
// Parámetros: (nombreBD, usuario, contraseña, configuración)
const connection = new Sequelize("martes", "root", "JiminChoa69", {
  host: "localhost",   // Dirección del servidor de la base de datos
  dialect: "mysql",    // Tipo de base de datos que usamos
  port: 3306,          // Puerto por defecto de MySQL
});

// Función asincrónica para probar la conexión
const testConnection = async () => {
  try {
    await connection.authenticate();
    console.log("✅ Conexión establecida correctamente.");
  } catch (error) {
    console.error("❌ No se pudo conectar a la base de datos:", error);
  }
};

// Llamamos a la función de prueba
testConnection();

// Exportamos la conexión para usarla en otros archivos del proyecto
export default connection;

