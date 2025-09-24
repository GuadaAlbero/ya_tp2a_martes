// 📘 TEMA: DESESTRUCTURACIÓN DE OBJETOS EN JAVASCRIPT

// 📦 OBJETO DE EJEMPLO
const obj = {
  nombre: "Osvaldo",
  mail: "mimail@gmail.com",
  edad: 38,
};

// ✅ ACCEDER A UNA PROPIEDAD con notación de corchetes (menos usada)
console.log(obj["nombre"]); // → "Osvaldo"

// ✅ ACCEDER A CADA PROPIEDAD MANUALMENTE (forma clásica)
const nombre = obj.nombre;
const mail = obj.mail;
const edad = obj.edad;

console.log(`🚀 ~ nombre:`, nombre); // → "Osvaldo"

// ✅ DESESTRUCTURACIÓN: forma moderna y prolija de extraer varias propiedades
const { edad: edad2, nombre: nombre2, apellido = "Sin apellido" } = obj;

// 🔍 DETALLES:
// - Extrae `edad` y `nombre`, y los guarda en variables nuevas llamadas `edad2`, `nombre2`
// - `apellido` no existe en el objeto, así que se usa el valor por defecto: "Sin apellido"

console.log(`🚀 ~ nombre2:`, nombre2);       // → "Osvaldo"
console.log(`🚀 ~ edad2:`, edad2);           // → 38
console.log(`🚀 ~ apellido:`, apellido);     // → "Sin apellido"

// ✅ También podrías hacer desestructuración SIN renombrar (más simple si no necesitás cambiar nombres)
//{ ... } = usuario -> “Saco propiedades del objeto usuario y las meto en variables nuevas.”
//const { edad, nombre, mail } = obj;

// 📘 TEMA: DESESTRUCTURACIÓN DE ARRAYS EN JAVASCRIPT

const arr = ["hola", 456, {}];

// 🔹 Forma clásica (sin desestructuración):
// const saludo = arr[0];
// const numero = arr[1];
// const objeto = arr[2];

// 🔹 Forma moderna con DESESTRUCTURACIÓN:
const [saludo, numero, objeto, extra = "valor por defecto"] = arr;

// 🧠 DETALLES:
// - `saludo` recibe el primer valor → "hola"
// - `numero` recibe el segundo valor → 456
// - `objeto` recibe el tercer valor → {}
// - `extra` no existe en el array original, así que se le asigna el valor por defecto → "valor por defecto"

console.log("🟢 saludo:", saludo);     // → "hola"
console.log("🟢 numero:", numero);     // → 456
console.log("🟢 objeto:", objeto);     // → {}
console.log("🟢 extra:", extra);       // → "valor por defecto"

// 📘 TEMA: COPIA POR REFERENCIA EN OBJETOS

// Creamos un objeto con datos anidados (otro objeto y un array dentro)
const obj2 = {
  nombre: "Osvaldo",
  mail: "mimail@gmail.com",
  edad: 38,
  data: {
    direccion: "calle 123",
    titulos: ["jardin", "primaria"],
  },
};

// Hacemos una "copia" del objeto, pero en realidad solo copiamos la referencia
const copia = obj2;

// Modificamos un valor en la "copia"
copia.edad = 39;

// ✅ Imprimimos ambos para ver qué pasó
console.log("🔁 copia:", copia); // edad: 39
console.log("🧨 obj original:", obj2); // edad: 39 también 😱

// 🧠 ¿Qué pasó?
// Como los objetos se copian por REFERENCIA, ambas variables apuntan al MISMO objeto en memoria.
// Entonces si cambiás algo desde `copia`, también se ve reflejado en `obj`.

// 📘 TEMA: COPIA SUPERFICIAL CON SPREAD (...)

const obj3 = {
  nombre: "Osvaldo",
  mail: "mimail@gmail.com",
  edad: 38,
  data: {
    direccion: "calle 123",
    titulos: ["jardin", "primaria"],
  },
};

// Hacemos una copia superficial con spread
const copiaSpread = { ...obj3 };

// Modificamos el primer nivel → esto NO afecta al original
copiaSpread.nombre = "Carlos";

// Modificamos algo anidado → esto SÍ afecta al original
copiaSpread.data.cp = 1440;

console.log("🟢 copiaSpread:", copiaSpread);
console.log("🔴 obj original:", obj3);


// 📘 TEMA: COPIA PROFUNDA DE OBJETOS Y ARRAYS

// ---------------------------------------------
// 🔸 MÉTODO 1: JSON.stringify + JSON.parse
// (Sirve para la mayoría de los casos, pero tiene limitaciones)

const copiaParse = JSON.parse(JSON.stringify(obj3));
copiaParse.data.direccion = "Calle falsa 123";

console.log("🟡 copiaParse:", copiaParse); // con dirección modificada
console.log("🟡 obj original:", obj3);      // dirección original intacta

// ⚠️ LIMITACIONES del método JSON:
// - Pierde funciones
// - Pierde valores `undefined`
// - Convierte fechas (Date) a strings
// - No funciona con Map, Set, etc.

// ---------------------------------------------
// 🔹 MÉTODO 2: structuredClone (💎 la forma moderna y recomendada)

const copiaStructure = structuredClone(obj3);
copiaStructure.data.titulos.push("secundaria");

console.log("🔵 copiaStructure:", copiaStructure); // tiene "secundaria"
console.log("🔵 obj original:", obj3);              // NO tiene "secundaria"

// 🔹 También funciona con arrays:
const copiaArrStructure = structuredClone(arr);

// Modificamos la copia
copiaArrStructure[2].nuevoCampo = "agregado";

console.log("🔵 copiaArrStructure:", copiaArrStructure);
console.log("🟡 arr original:", arr);

// 📘 TEMA: PROMESAS EN JAVASCRIPT (EJEMPLO MANUAL)

// 🔹 Creamos una función que devuelve una promesa.
//    Si el parámetro `boo` es true → la promesa se resuelve (resolve)
//    Si es false → la promesa se rechaza (reject)

function promesa(boo) {
  return new Promise((response, reject) => {
    if (boo) {
      response("todo ok");
    } else {
      reject("todo mal");
    }
  });
}

// 🔹 Probamos la promesa con consumo correcto usando then / catch / finally

// ✏️ Cambiá true o false para ver qué pasa
promesa(true)
  .then((res) => {
    // ✅ Si se resolvió correctamente (resolve)
    console.log("✅ Éxito:", res); // → "todo ok"
    return res + " si"; // agregamos algo más y lo pasamos al siguiente .then
  })
  .then((res2) => {
    // 📦 Este then recibe lo que se devolvió antes ("todo ok si")
    console.log("📦 Resultado intermedio:", res2);
  })
  .catch((err) => {
    // ❌ Si algo salió mal (reject)
    console.log("❌ Error:", err); // → "todo mal"
  })
  .finally(() => {
    // 🔚 Esto se ejecuta siempre, pase lo que pase
    console.log("🔚 Finalizó la promesa");
  });

// 📘 TEMA: FETCH CON PROMESAS (API - PokeAPI)

// 🔹 Esta función hace un pedido HTTP usando fetch
// 🔹 fetch devuelve una promesa que se resuelve con la "respuesta" del servidor
function api() {
  return fetch("https://pokeapi.co/api/v2/pokemon/ditto");
}

// 🔹 Consumimos esa promesa con then/catch (modo clásico)
api()
  .then((res) => {
    // ✅ Cuando llega la respuesta, todavía no tenemos el contenido
    //    Hay que convertirla a JSON (también devuelve una promesa)
    return res.json();
  })
  .then((data) => {
    // 📦 Ahora sí tenemos los datos de la API
    console.log("🟢 Pokémon obtenido:", data.name); // → "ditto"
    // console.log(data); // si querés ver todo el objeto completo
  })
  .catch((err) => {
    // ❌ Si algo falla (problema de red, URL incorrecta, etc.)
    console.log("❌ Error al hacer fetch:", err.message);
  });


