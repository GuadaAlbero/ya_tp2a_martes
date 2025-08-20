# Clase 2: Fundamentos de JavaScript - Variables, Tipos y Operadores

## Objetivos

Al finalizar esta clase, los estudiantes serán capaces de:

- Entender qué es JavaScript y sus entornos de ejecución principales.
- Declarar variables correctamente usando `let` y `const`.
- Distinguir y utilizar los tipos de datos primitivos y complejos.
- Realizar operaciones básicas utilizando los operadores esenciales de JavaScript.

---

## 1. Introducción Práctica a JavaScript

JavaScript es el lenguaje de programación que da vida a la web. Originalmente creado para ejecutarse en el **navegador** (lado del cliente) para añadir interactividad a las páginas, su rol se ha expandido masivamente.

Gracias a **Node.js**, ahora podemos ejecutar JavaScript en el **servidor** (lado del backend), lo que nos permite construir aplicaciones completas, APIs, y mucho más. En este curso, nos centraremos en su uso con Node.js.

---

## 2. Variables: Almacenando Información

Una variable es un contenedor con un nombre donde guardamos un valor para usarlo más tarde. En JavaScript moderno, tenemos dos formas de declarar variables:

### `let`

Se usa para variables cuyo valor puede cambiar con el tiempo.

```javascript
let edad = 25;
console.log("Edad inicial:", edad); // Muestra 25

edad = 26; // Reasignamos el valor
console.log("Edad actualizada:", edad); // Muestra 26
```

### `const`

Se usa para constantes, es decir, variables cuyo valor no cambiará una vez asignado. Esto ayuda a prevenir errores.

```javascript
const fechaDeNacimiento = "1998-05-10";
// fechaDeNacimiento = "2000-01-01"; // Esto provocaría un error, lo cual es bueno.
```

**Regla de oro:** Usa siempre `const` por defecto, y cambia a `let` solo si sabes que necesitarás reasignar la variable.

**¿Y qué pasó con `var`?**
`var` es la forma antigua de declarar variables en JavaScript. Tiene un comportamiento considerado confuso y propenso a errores (relacionado con un concepto llamado _hoisting_ y el _scope_). En el desarrollo moderno, **no hay razón para usar `var`**. Nos limitaremos a `let` y `const`.

---

## 3. Tipos de Datos Primitivos

Son los bloques de construcción más básicos del lenguaje.

- **`string`**: Cadenas de texto. Se escriben entre comillas simples (`' '`) o dobles (`" "`).

  ```javascript
  let nombre = "Beto";
  console.log(typeof nombre); // "string"
  ```

- **`number`**: Para cualquier tipo de número, ya sea entero o decimal.

  ```javascript
  const PI = 3.14;
  console.log(typeof PI); // "number"
  ```

- **`boolean`**: Representa un valor lógico, que solo puede ser `true` o `false`.

  ```javascript
  let esMayorDeEdad = true;
  console.log(typeof esMayorDeEdad); // "boolean"
  ```

- **`null`**: Representa la ausencia intencional de un valor. Es un valor que asignamos nosotros para decir "aquí no hay nada".

  ```javascript
  let autoSeleccionado = null;
  console.log(typeof autoSeleccionado); // "object"
  ```

  **¡Ojo!** `typeof null` devuelve `"object"`. Esto es un error histórico de JavaScript que se ha mantenido por compatibilidad. Aunque `typeof` diga que es un objeto, `null` es y siempre ha sido un tipo de dato primitivo.

- **`undefined`**: Indica que una variable ha sido declarada pero aún no se le ha asignado un valor.
  ```javascript
  let direccion;
  console.log(typeof direccion); // "undefined"
  ```

### ¿Y los otros tipos primitivos?

Tu lista es correcta. JavaScript tiene dos tipos primitivos más que son un poco más avanzados o de uso menos frecuente para principiantes:

- **`bigint`**: Se usa para representar números enteros de tamaño arbitrario, más grandes de lo que el tipo `number` puede manejar de forma segura. Se crea añadiendo una `n` al final del número.

  ```javascript
  const numeroMuyGrande = 9007199254740991n;
  console.log(typeof numeroMuyGrande); // "bigint"
  ```

- **`symbol`**: Es un tipo de dato **único e inmutable**. Se usa principalmente para crear identificadores únicos para las propiedades de los objetos, evitando colisiones de nombres. Cada vez que se llama a `Symbol()`, se crea un valor completamente nuevo.

  ```javascript
  const idUnico = Symbol("descripcion");
  console.log(typeof idUnico); // "symbol"
  ```

  ```javascript
  // Aunque ambos tienen la misma descripción "id", son valores diferentes.
  const id1 = Symbol("id");
  const id2 = Symbol("id");

  console.log(id1 === id2); // Muestra false
  ```

**Nota:** Para una clase de fundamentos, es muy común centrarse en los cinco primeros (`string`, `number`, `boolean`, `null`, `undefined`) ya que son los que usarás el 99% del tiempo al empezar. ¡Pero es genial que conozcas los siete!

---

## 4. Tipos de Datos Complejos (Introducción)

Permiten agrupar valores.

### `object`

Colecciones de datos relacionados en pares de `clave: valor`.

```javascript
const persona = {
  nombre: "Carlos",
  edad: 30,
  profesion: "Ingeniero",
  estaActivo: true,
};

// Para acceder a un valor, usamos el punto:
console.log(persona.nombre); // Muestra "Carlos"
```

### `array`

Listas ordenadas de valores. Los valores se acceden por su índice (posición), que empieza en 0.

```javascript
const listaDeCompras = ["leche", "pan", "huevos", "fruta"];

// Para acceder a un valor, usamos los corchetes y el índice:
console.log(listaDeCompras[0]); // Muestra "leche"
console.log(listaDeCompras[2]); // Muestra "huevos"
```

---

## 5. Operadores Esenciales

Son símbolos que realizan operaciones sobre nuestras variables y valores.

### Operadores Aritméticos

Realizan cálculos matemáticos.

- `+` (suma), `-` (resta), `*` (multiplicación), `/` (división)

```javascript
const resultado = (10 + 5) * 2; // resultado es 30
```

### Operadores de Comparación

Comparan dos valores y devuelven un `boolean` (`true` o `false`).

- `>` (mayor que), `<` (menor que)
- `>=` (mayor o igual que), `<=` (menor o igual que)
- `==` (igualdad laxa o devil): Devuelve `true` si los valores son iguales después de convertir ambos a un tipo común.
- `!=` (desigualdad laxa o devil): Devuelve `true` si los valores son diferentes después de la conversión de tipos. \*\*
- `===` (igualdad estricta): Devuelve `true` si el valor Y el tipo son iguales.
- `!==` (desigualdad estricta): Devuelve `true` si el valor O el tipo son diferentes.

```javascript
const edadPermitida = 18;
let edadUsuario = 20;
console.log(edadUsuario >= edadPermitida); // Muestra true

console.log(5 == "5"); // Muestra true (¡peligroso!) porque convierte el string "5" a number.
console.log(5 === "5"); // Muestra false, porque uno es number y el otro string

console.log(5 != "5"); // Muestra false (¡confuso!) porque los considera iguales.
console.log(5 !== "5"); // Muestra true, porque los tipos son diferentes.
```

**Nota:** Evita usar `==` y `!=` (sin el tercer igual), ya que pueden llevar a comparaciones extrañas y errores.

### Operadores Lógicos

Permiten combinar expresiones booleanas.

- `&&` (AND): `true` si **ambas** expresiones son verdaderas.
- `||` (OR): `true` si **al menos una** de las expresiones es verdadera.
- `!` (NOT): Invierte el valor booleano.

```javascript
const tieneEntrada = true;
const esMayorDeEdad = true;
const puedeEntrar = tieneEntrada && esMayorDeEdad; // true

const tieneDescuento = false;
const esVIP = false;
const tieneBeneficio = tieneDescuento || esVIP; // false
```

---