# Clase 3: Fundamentos de JavaScript - Estructuras de Control, Funciones y Objetos

## Objetivos:

-   Comprender y aplicar estructuras de control como `if/else`, `switch` y el operador ternario.
-   Dominar la creación y uso de funciones, incluyendo `return` y IIFE.
-   Entender en profundidad el concepto de `scope` y `closures`.
-   Aprender a crear, manipular e iterar sobre objetos y sus métodos.
-   Comprender el comportamiento del `this` en distintos contextos.

## Contenido:

### 1. Estructuras de Control

Las estructuras de control nos permiten dirigir el flujo de nuestro código basándonos en condiciones.

#### Sentencia `if...else`

Ejecuta un bloque de código si una condición es verdadera y otro bloque si es falsa.

```javascript
let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad.");
} else {
  console.log("No eres mayor de edad.");
}
```

#### Operador Ternario

Es una forma compacta de escribir una sentencia `if...else`.

`condición ? expresionSiVerdadero : expresionSiFalso;`

```javascript
let edad = 18;
let mensaje = (edad >= 18) ? "Eres mayor de edad." : "No eres mayor de edad.";
console.log(mensaje);
```

#### Sentencia `switch`

Permite evaluar una expresión y ejecutar un bloque de código correspondiente a un `case` específico.

```javascript
let dia = 3;
let nombreDia;

switch (dia) {
  case 1:
    nombreDia = "Lunes";
    break;
  case 2:
    nombreDia = "Martes";
    break;
  case 3:
    nombreDia = "Miércoles";
    break;
  default:
    nombreDia = "Otro día";
}
console.log(nombreDia); // Miércoles
```

### 2. Funciones

Las funciones son bloques de código reutilizables que realizan una tarea específica.

#### Declaración de Función vs. Expresión de Función

-   **Declaración:** Es "elevada" (hoisted), por lo que puede ser llamada antes de ser declarada.
-   **Expresión:** No es "elevada", debe ser definida antes de ser utilizada.

```javascript
// Declaración
function sumar(a, b) {
  return a + b;
}

// Expresión de Función
const restar = function(a, b) {
  return a - b;
};
```

#### Funciones Flecha (Arrow Functions)

Una sintaxis más concisa, ideal para funciones cortas. No tienen su propio `this`.

```javascript
const multiplicar = (a, b) => a * b;

// Equivalente a:
const multiplicarClasico = function(a, b) {
    return a * b;
};
```

#### Parámetros y Retorno (`return`)

-   **Parámetros:** Variables que una función recibe.
-   **`return`:** La palabra clave `return` finaliza la ejecución de la función y especifica un valor para ser devuelto por la función. Si se omite, la función devuelve `undefined`.

```javascript
function dividir(a, b) {
  if (b === 0) {
    return "Error: No se puede dividir por cero."; // Finaliza la función aquí
  }
  return a / b; // Devuelve el resultado
}

console.log(dividir(10, 2)); // 5
console.log(dividir(10, 0)); // "Error: No se puede dividir por cero."
```

#### Funciones Inmediatamente Invocadas (IIFE)

Una función que se define y ejecuta en el mismo momento. Es útil para crear un scope privado y evitar contaminar el scope global.

```javascript
(function() {
  let mensaje = "Hola desde una IIFE";
  console.log(mensaje);
})();
// La variable "mensaje" no existe fuera de esta función.
```

### 3. Funciones de Orden Superior y Callbacks

Una **Función de Orden Superior (Higher-Order Function)** es una función que puede recibir otra función como argumento o devolver una función como resultado. Son una piedra angular de la programación funcional en JavaScript.

#### Ejemplo 1: Funciones que reciben funciones (Callbacks)

La función que se pasa como argumento se conoce como **callback**. La función que la recibe es la Función de Orden Superior.

```javascript
function procesar(array, callback) {
  let resultado = [];
  for (let i = 0; i < array.length; i++) {
    resultado.push(callback(array[i]));
  }
  return resultado;
}

const numeros = [1, 2, 3, 4];
const duplicar = n => n * 2;
const alCubo = n => n * n * n;

console.log(procesar(numeros, duplicar)); // [2, 4, 6, 8]
console.log(procesar(numeros, alCubo));   // [1, 8, 27, 64]

// Métodos como .map(), .filter() y .forEach() son HOFs nativas de JavaScript.
const numerosDuplicados = numeros.map(n => n * 2);
```

#### Ejemplo 2: Funciones que devuelven funciones

Esto se ve comúnmente con los closures. La función exterior es la Función de Orden Superior.

```javascript
function crearMultiplicador(factor) {
  // Esta es la HOF, porque devuelve una función.
  return function(numero) {
    return numero * factor;
  };
}

const duplicar = crearMultiplicador(2);
const triplicar = crearMultiplicador(3);

console.log(duplicar(5));  // 10
console.log(triplicar(5)); // 15
```

### 4. Scope y Closures

#### Scope (Ámbito)

Define la accesibilidad de las variables.
-   **Global:** Accesible desde cualquier parte.
-   **De Función:** Accesible solo dentro de la función.
-   **De Bloque (`let`, `const`):** Accesible solo dentro del bloque (`{...}`) donde se define.

#### Closures

Un closure (o clausura) es una función que "recuerda" el scope en el que fue creada, incluso si se ejecuta fuera de ese scope.

```javascript
function crearContador() {
  let contador = 0;

  return function() {
    contador++;
    console.log(contador);
  };
}

const miContador = crearContador(); // miContador es ahora una función con su propio scope recordado
miContador(); // 1
miContador(); // 2

const otroContador = crearContador(); // Este es un contador independiente
otroContador(); // 1
```

### 4. Objetos

Los objetos son colecciones de pares clave-valor, donde los valores pueden ser datos o funciones (métodos).

#### Creación y Manipulación de Objetos

```javascript
// Creación con notación literal
const persona = {
  nombre: "Ana",
  edad: 28,
  profesion: "Diseñadora"
};

// Acceso a propiedades
console.log(persona.nombre);       // Notación de punto
console.log(persona["edad"]);      // Notación de corchetes (útil para claves dinámicas)

// Añadir una nueva propiedad
persona.pais = "Argentina";

// Modificar una propiedad
persona.edad = 29;

// Eliminar una propiedad
delete persona.profesion;

console.log(persona);
```

#### Métodos de Objetos y `this`

Los métodos son funciones que pertenecen a un objeto. La palabra clave `this` se refiere al objeto que está ejecutando el método.

```javascript
const producto = {
  nombre: "Laptop",
  precio: 1200,
  mostrarInfo: function() {
    // 'this' se refiere al objeto 'producto'
    console.log(`Producto: ${this.nombre}, Precio: $${this.precio}`);
  },
  // ¡Cuidado con 'this' en arrow functions!
  mostrarPrecioConImpuesto: (impuesto) => {
    // Las arrow functions NO tienen su propio 'this'. Lo heredan del contexto exterior.
    // En este caso, `this` no es el objeto `producto`, por lo que `this.precio` es `undefined`.
    // La siguiente línea daría un error o un resultado inesperado (NaN).
    console.log("Dentro de la arrow function, this.precio es:", this.precio);
  },
  // La forma correcta de escribir un método que necesita 'this'
  calcularPrecioFinal: function(impuesto) {
    return this.precio * (1 + impuesto);
  }
};

producto.mostrarInfo(); // Producto: Laptop, Precio: $1200
producto.mostrarPrecioConImpuesto(0.21); // Muestra "Dentro de la arrow function, this.precio es: undefined"
console.log("El precio con impuesto es:", producto.calcularPrecioFinal(0.21)); // Muestra 1452
```

#### Iteración sobre Objetos

Podemos recorrer las propiedades de un objeto de varias maneras.

```javascript
const auto = {
  marca: "Ford",
  modelo: "Mustang",
  año: 1969
};

// for...in (itera sobre las claves)
for (let clave in auto) {
  console.log(`${clave}: ${auto[clave]}`);
}

// Object.keys (devuelve un array de claves)
console.log(Object.keys(auto)); // ["marca", "modelo", "año"]

// Object.values (devuelve un array de valores)
console.log(Object.values(auto)); // ["Ford", "Mustang", 1969]

// Object.entries (devuelve un array de pares [clave, valor])
console.log(Object.entries(auto)); // [["marca", "Ford"], ["modelo", "Mustang"], ["año", 1969]]
```

### 5. Ejercicios Prácticos

1.  **Control de Flujo:** Crea una función que reciba una puntuación (0-100) y devuelva una calificación usando `if/else`:
    -   90-100: "A"
    -   80-89: "B"
    -   70-79: "C"
    -   <70: "F"
2.  **Operador Ternario:** Crea una función `esPar` que use el operador ternario para devolver "Es par" o "Es impar" según el número recibido.
3.  **Calculadora con `switch`:** Crea una función `calcular` que reciba dos números y un operador (`"+"`, `"-"`, `"*"` o `"/"`) y devuelva el resultado usando una sentencia `switch`.
4.  **Objeto "Libro":** Crea un objeto `libro` con propiedades `titulo`, `autor`, `año` y un método `resumen` que imprima "El libro [titulo] fue escrito por [autor] en el año [año]".
5.  **Contador con Closure:** Crea una función `crearJuego` que use un closure para mantener un puntaje privado. Debe devolver un objeto con dos métodos: `sumarPunto()` y `mostrarPuntaje()`.
6.  **Iterar Objeto:** Crea una función `mostrarPropiedades` que reciba un objeto e imprima cada una de sus propiedades y valores en la consola.