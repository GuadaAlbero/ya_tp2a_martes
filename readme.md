# Clase 4: JavaScript Moderno y Asincronía Profesional

## Objetivos
Al finalizar esta clase, los estudiantes serán capaces de:
- Utilizar Desestructuración para un código más limpio.
- Realizar copias superficiales y profundas de objetos y arrays.
- Dominar los métodos de array más importantes (`slice`, `splice`, `map`, `filter`, `reduce`).
- Entender cómo se crea una Promesa y cómo se consume.
- Escribir código asíncrono legible con `async/await`.
- Gestionar múltiples promesas en paralelo con `Promise.all` y `Promise.allSettled`.

---

## 1. Herramientas de JavaScript Moderno

#### a. Desestructuración (Destructuring)
Una forma rápida de extraer valores de arrays u objetos en variables distintas.

```javascript
const usuario = { id: 1, nombre: 'Leanne Graham', email: 'Sincere@april.biz' };
const { nombre, email } = usuario;
console.log(`${nombre} (${email})`); // "Leanne Graham (Sincere@april.biz)"
```

#### b. Copia Superficial (Shallow Copy)
Una copia superficial (usando `...`) solo copia el primer nivel. Los objetos anidados se comparten por referencia.

```javascript
const original = { a: 1, b: { c: 2 } };
const copiaSuperficial = { ...original };
copiaSuperficial.b.c = 99; // Modifica también el original
console.log(original.b.c); // 99
```

#### c. Copia Profunda (Deep Copy)
**El Método Antiguo (con fallos): `JSON.stringify`**
Convierte el objeto a string y lo vuelve a parsear. Falla con tipos de datos como `Date` (los convierte a string) o `undefined` (los elimina).

**El Método Moderno y Correcto: `structuredClone`**
API nativa diseñada para clonar estructuras de datos complejas, preservando la mayoría de los tipos de datos.

```javascript
const original = { fecha: new Date(), valor: undefined };
const copiaJSON = JSON.parse(JSON.stringify(original)); // `valor` desaparece, `fecha` es un string
const copiaReal = structuredClone(original); // `valor` y `fecha` se mantienen intactos
```

---

## 2. Métodos Clave de Arrays

#### a. `slice` (No destructivo)
Devuelve una copia superficial de una porción de un array en un nuevo array. No modifica el array original.

```javascript
const animales = ['pato', 'gato', 'perro', 'conejo', 'pez'];
const mascotas = animales.slice(1, 4); // Extrae desde el índice 1 hasta el 3
console.log(mascotas); // ['gato', 'perro', 'conejo']
console.log(animales); // El original no cambia
```

#### b. `splice` (Destructivo)
Cambia el contenido de un array eliminando, reemplazando o agregando elementos. **Modifica el array original.**

```javascript
const meses = ['Enero', 'Marzo', 'Abril', 'Junio'];
// Insertar en el índice 1, sin eliminar elementos
meses.splice(1, 0, 'Febrero');
console.log(meses); // ['Enero', 'Febrero', 'Marzo', 'Abril', 'Junio']

// Eliminar 1 elemento en el índice 4
meses.splice(4, 1);
console.log(meses); // ['Enero', 'Febrero', 'Marzo', 'Abril']
```

#### c. `map` (No destructivo)
Crea un **nuevo array** con los resultados de llamar a una función para cada uno de sus elementos. Es la forma estándar de transformar arrays.

```javascript
const numeros = [1, 4, 9, 16];
const raices = numeros.map(num => Math.sqrt(num));
console.log(raices); // [1, 2, 3, 4]
```

#### d. `reduce` (No destructivo)
Aplica una función "reductora" a cada elemento del array para reducirlo a un único valor (de izquierda a derecha).

```javascript
const numeros = [1, 2, 3, 4];
const sumaTotal = numeros.reduce((acumulador, valorActual) => {
  return acumulador + valorActual;
}, 0); // 0 es el valor inicial del acumulador
console.log(sumaTotal); // 10
```

---

## 3. Asincronía y Promesas

#### a. ¿Qué es una Promesa?
Una **Promesa** es un objeto que representa el resultado de una operación asíncrona. Es un contenedor para un valor que se conocerá en el futuro. Tiene 3 estados:
- **`pending`**: Estado inicial, la operación no ha terminado.
- **`fulfilled`**: La operación terminó con éxito.
- **`rejected`**: La operación falló.

#### b. Creando una Promesa
Así se construye una promesa desde cero. La función ejecutora recibe dos callbacks: `resolve` (para éxito) y `reject` (para fallo).

```javascript
function verificarDivisibilidad(numero) {
  return new Promise((resolve, reject) => {
    if (numero % 2 === 0) {
      resolve(`El número ${numero} es divisible por 2.`);
    } else {
      reject(`El número ${numero} no es divisible por 2.`);
    }
  });
}

// Consumiendo la promesa
verificarDivisibilidad(10)
  .then(mensaje => console.log('Éxito:', mensaje)) // Se ejecuta si la promesa es resolved
  .catch(error => console.log('Error:', error));   // Se ejecuta si la promesa es rejected
```

#### c. Consumiendo Promesas con `fetch` y `async/await`
`async/await` es la forma moderna de trabajar con promesas, como las que devuelve `fetch`.

```javascript
const obtenerUsuario = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    if (!response.ok) throw new Error('Fallo en la petición');
    const user = await response.json();
    console.log('Usuario obtenido:', user.name);
  } catch (error) {
    console.error(error.message);
  }
};
obtenerUsuario();
```

#### d. Gestión de Múltiples Promesas

**`Promise.all` (Falla Rápido)**
Ejecuta un array de promesas. Se resuelve si **todas** se resuelven. Se rechaza en cuanto **una de ellas** se rechaza.

```javascript
const urls = [
  'https://jsonplaceholder.typicode.com/users/1',
  'https://jsonplaceholder.typicode.com/users/2',
  'https://jsonplaceholder.typicode.com/users/3'
];

const obtenerVariosUsuarios = async () => {
  try {
    const promesas = urls.map(url => fetch(url).then(res => res.json()));
    const usuarios = await Promise.all(promesas);
    usuarios.forEach(user => console.log(user.name));
  } catch (error) {
    console.error('Una de las promesas falló', error);
  }
};
obtenerVariosUsuarios();
```

---

## 4. Ejercicios Prácticos

1.  **Ejercicio de `slice`:**
    - Dado el array `[10, 20, 30, 40, 50]`, usa `slice` para crear un nuevo array que contenga solo los elementos `[20, 30]`.

2.  **Ejercicio de `splice`:**
    - Dado el array `['a', 'b', 'c', 'd']`, usa `splice` para eliminar la 'c' y agregar 'x' y 'y' en su lugar.

3.  **Ejercicio de `map`:**
    - Tienes un array de objetos `[{id: 1, nombre: 'Ana'}, {id: 2, nombre: 'Luis'}]`. Usa `map` para crear un nuevo array que contenga solo los nombres: `['Ana', 'Luis']`.

4.  **Ejercicio de `reduce`:**
    - Tienes un array de números `[5, 10, 15, 20]`. Usa `reduce` para calcular el producto de todos los elementos.

5.  **Ejercicio de `Promise.all`:**
    - Define un array con 3 URLs de la API de JSONPlaceholder que apunten a diferentes usuarios (ej: /users/6, /users/7, /users/8).
    - Usa `Promise.all` y `fetch` para obtener los datos de los tres usuarios en paralelo.
    - Imprime en la consola el nombre de cada uno de los usuarios.

