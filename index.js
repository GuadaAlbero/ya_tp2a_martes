console.log("Clase 5 - Mi primer programa en Node.js");
// =============================================
// 1) MÓDULOS EN NODE
// =============================================

// 🔹 Traer un módulo nativo de Node (fs = File System)
const fs = require("node:fs");
//console.log("🚀 ~ fs:", fs);

// =============================================
// 2) MÓDULOS PROPIOS (archivos creados por mí)
// =============================================

// 🔹 Traigo mi archivo sumar.js
const sumar = require("./sumar"); // → “Buscá el archivo sumar.js que está en la misma carpeta que index.js”.
console.log("🚀 ~ sumar:", sumar(3, 5));

// =============================================
// 3) CREAR UNA CARPETA
// =============================================

// 🔹 Para poder usar "await", necesitamos una función async
// async function crearCarpeta() {
//   try {
    // Crea una carpeta llamada "calculos" en la raíz del proyecto
//     await fs.promises.mkdir("./calculos");
//     console.log("Carpeta 'calculos' creada con éxito 🚀");
//   } catch (error) {
     // Si la carpeta ya existe, tira error
//     console.log("Error al crear carpeta:", error.message);
//   }
// }

 // Llamamos a la función
// crearCarpeta();

// =============================================
// 4) LEER UN ARCHIVO (ASÍNCRONO)
// =============================================

// 🔹 Para leer archivos usamos fs.promises.readFile()
//    → devuelve una Promesa porque leer archivos puede tardar
async function leerArchivo() {
  try {
    // Espera (await) a que la promesa de leer el archivo termine
    const data = await fs.promises.readFile("./readme.md", "utf8");
    // Mostramos el contenido del archivo
    console.log("🚀 ~ leerArchivo ~ data:", data);
  } catch (error) {
    // Si el archivo no existe o hay error de lectura, lo capturamos acá
    console.log("🚀 ~ leerArchivo ~ error:", error.message);
  }
}
// 🔹 Llamamos a la función para ejecutarla
leerArchivo();

// **Ejercicio 2: Crear un Archivo en el Directorio**
// Crea una función llamada `crearArchivo` que reciba la ruta de un archivo dentro del directorio y escriba un mensaje inicial en el archivo. Si el archivo ya existe, muestra un mensaje adecuado.

// **Requisitos:**
// - Usa `fs.promises.writeFile`.
// - Maneja errores usando `try/catch`.

// 🔹 Importamos fs en modo Promises (ya no hace falta poner fs.promises todo el tiempo)
const fsp = require('fs').promises;

// 🔹 Importamos path (sirve para armar rutas absolutas → más seguro que poner './archivo')
const path = require('path');

// La ruta a nuestro archivo de base de datos JSON. Construye una ruta absoluta hacia tareas.json
const TAREAS_PATH = path.join(__dirname, 'tareas.json');

console.log(`🚀 ~ __dirname:`, __dirname) // Muestra la carpeta actual
console.log(`🚀 ~ TAREAS_PATH:`, TAREAS_PATH) // Muestra la ruta completa del JSON

/**
 * 📌 Ejercicio 2 - Clase 5
 * 
 * Hacer un gestor de tareas con Node.js:
 * - Leer tareas desde tareas.json (si no existe, array vacío).
 * - Guardar tareas en tareas.json.
 * - Cada tarea: { id, titulo, estado }.
 * - Funciones: listar, agregar, cambiar estado.
 */

// Lee el archivo tareas.json y lo parsea.
// Si no existe, devuelve un array vacío.
async function obtenerTareas() {
  try {
    const data = await fsp.readFile(TAREAS_PATH, 'utf8'); // lee como texto
    // 🔹 JSON.parse → convierte el texto JSON en un array/objeto de JS
    return JSON.parse(data);
  } catch (error) {
    // 🔹 ENOENT = // Si el archivo no existe, es una situación normal.
    // Devolvemos un array vacío para que la app pueda continuar.
    if (error.code === 'ENOENT') {
      return []; // devolvemos array vacío para seguir trabajando
    }
    // 🔹 Otros errores (permisos, archivo dañado, etc.)
    console.error("Error al leer:", error);
    throw error; // los relanzamos para no ocultarlos
  }
}

// Guarda el array de tareas en tareas.json
async function guardarTareas(tareas) {
  try {
    // 🔹 JSON.stringify → convierte el array de tareas en texto JSON
    // 🔹 fs.writeFile(ruta, contenido) → escribe el "contenido" en el archivo de esa "ruta"
    // Si el archivo no existe, lo crea. Si existe, lo sobrescribe.
    await fsp.writeFile(TAREAS_PATH, JSON.stringify(tareas, null, 2));

  } catch (error) {
    console.error("Error al guardar las tareas:", error);
    throw error; // relanzamos errores graves (ej: permisos, disco lleno, etc.)
  }
}

/**
 * Paso 3, 4 y 5: Lógica de la aplicación
 */

// Lista todas las tareas en la consola
async function listarTareas() {
  const tareas = await obtenerTareas(); // lee el array desde tareas.json
  if (tareas.length === 0) {
    console.log('No hay tareas en la lista. ¡Añade una!');
    return; // si no hay nada, corta acá
  }

  console.log('--- Tu Lista de Tareas ---');
  tareas.forEach(tarea => {
    // operador ternario → if corto (si completada es true → [x], sino [ ])
    const status = tarea.completada ? '[x]' : '[ ]';
    console.log(`ID: ${tarea.id} - ${status} ${tarea.texto}`);
  });
  console.log('------------------------');
}


// Añade una nueva tarea a la lista
async function agregarTarea(texto) {
  if (!texto) {
    console.error('Error: Debes proporcionar el texto de la tarea.');
    return; // valida que le pasen texto
  }

  const tareas = await obtenerTareas(); // lee lo que ya había
  const nuevaTarea = {
    id: Date.now(), // genera un id único con el timestamp actual
    texto: texto, // lo que escribió el usuario
    completada: false, // arranca siempre pendiente
  };

  tareas.push(nuevaTarea); // agrega al array
  await guardarTareas(tareas); // guarda de vuelta en tareas.json

  console.log(`✅ Tarea añadida: "${texto}"`);
}


// Marca una tarea como completada usando su ID
async function completarTarea(id) {
  if (!id) {
    console.error('Error: Debes proporcionar el ID de la tarea a completar.');
    return;
  }

  const tareas = await obtenerTareas(); // trae todas las tareas
  const idNumerico = parseInt(id, 10); // convierte el string a número (por si viene como texto)
  const tarea = tareas.find(t => t.id === idNumerico); // busca la tarea con ese ID

  if (!tarea) {
    console.error(`❌ Error: No se encontró ninguna tarea con el ID ${id}.`);
    return; // si no existe, corta
  }

  if (tarea.completada) {
    console.log(`ℹ️ La tarea "${tarea.texto}" ya estaba completada.`);
    return; // si ya estaba hecha, avisa y no hace nada
  }

  tarea.completada = true; // cambia el estado
  await guardarTareas(tareas); // guarda de nuevo

  console.log(`✔️ Tarea completada: "${tarea.texto}"`);
}

/**
 * BONUS: Ejecutar comandos desde la terminal
 * 
 * Comandos disponibles:
 *   node index.js list                     → lista todas las tareas
 *   node index.js add "Texto de la tarea" → agrega una nueva
 *   node index.js complete <ID>           → marca como completada
 */

/// ==========================================
// 📦 process.argv → argumentos desde terminal
// ==========================================
//
// process.argv es un array que contiene:
// [0] → Ruta a Node.js
// [1] → Ruta al archivo JS que ejecutás
// [2] → Primer argumento que pasás (ej: "add", "list", "complete")
// [3...] → El resto de los argumentos (ej: "Comprar pan", ID, etc.)
//
// Ejemplo:
//    node index.js add "Comprar pan"
//    → process.argv será:
//    ['node', 'index.js', 'add', 'Comprar pan']

async function main() {
  const [,, command, ...args] = process.argv;

  switch (command) {
    case 'list':
      await listarTareas();
      break;

    case 'add':
      const texto = args.join(' ');
      await agregarTarea(texto);
      break;

    case 'complete':
      const id = args[0];
      await completarTarea(id);
      break;

    default:
      console.log('⚠️  Comando no reconocido.');
      console.log('Usa uno de los siguientes comandos:');
      console.log('  node index.js list');
      console.log('  node index.js add "texto de la tarea"');
      console.log('  node index.js complete <ID>');
      break;
  }
}

main().catch(err => console.error("❌ Error inesperado:", err));

