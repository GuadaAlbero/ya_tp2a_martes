// if
let n = 0;
if (n === 1) {
  // console.log("soy un if");
} else if (n === 2) {
  // console.log("soy un else if");
} else {
  // console.log("soy un else");
}

// ternario
let letra = "b";
let mensaje = letra === "a" ? "soy a" : "no soy a";
// console.log(`🚀 ~ mensaje:`, mensaje);

// switch
let dia;
switch (dia) {
  case "martes":
    // console.log(`🚀 ~ dia:`, dia);
    break;
  case "lunes":
    // console.log(`🚀 ~ dia`, dia);
    break;
  default:
    // console.log(`🚀 ~ no soy nada`);
    break;
}

// funciones

// 🧠 Declaración de función:
//saludar("kuka");
function saludar(nombre) {
  console.log(`hola ${nombre}`); // Hola desde la funcion, se imprime siempre
  return `hola desde la funcion ${nombre}`; // se retorna el valor y se puede guardar en una variable
}
//let saludo = saludar("lolo");
//console.log(`🚀 ~ saludo:`, saludo);


// 🧠 Expresión de función: ANONIMA
// Se guarda una función sin nombre dentro de una constante. No se puede usar antes de declararla.

const nuevoSaludo = function () {
  console.log("🚀 Hola desde nuevoSaludo");
};

// nuevoSaludo(); //👉 Esto la ejecuta ()

// 🧠 Función de Flecha (Arrow Function):
// ✅ Con return (forma larga)
const saludoArrow = (nombre) => {
  return `Hola ${nombre}`;
};
//console.log("🚀 ~ saludoArrow:", saludoArrow("Guadalupe")); // 

// ✅ Sin return (forma corta, return implícito)
const saludoArrowCorto = (nombre) => `Hola ${nombre}`;
//console.log("🚀 ~ saludoArrowCorto:", saludoArrowCorto("Guada"))

// 🧠 Callback:
//Un callback es una función que se pasa como parámetro a otra función, y que se ejecuta dentro de esa otra función.
// 🧠 Función que recibe otra función como parámetro (callback)
function calcular(n1, n2, fn) {
  return fn(n1, n2); // Ejecuta la función que recibió
}

// 🧠 Funciones que puedo usar como callback
function sumar(n1, n2) {
  //console.log("🚀 ~ sumar:", n1 + n2);
}
function restar(n1, n2) {
  //console.log("🚀 ~ restar:", n1 - n2);
}

// ✅ Uso de callbacks
calcular(3, 4, sumar);  // 👉 llama a sumar(3, 4)
calcular(3, 4, restar); // 👉 llama a restar(3, 4)

// También podés pasar una función directamente sin nombrarla:
calcular(10, 2, function (a, b) {
  //console.log("🚀 ~ división:", a / b);
});


// 🧠 Arrays, for y forEach
// 🧠 Tenemos un array de nombres
const nombres = ["pepe", "kuka", "camilo"];

// ✅ Opción 1: Usando FOR clásico
// Recorre el array con un índice (i)
function upperCaseFor() {
  for (let i = 0; i < nombres.length; i++) {
   // console.log("🚀 ~ for:", nombres[i].toUpperCase());
  }
}
upperCaseFor(); // 👉 Ejecutamos la función

// ✅ Opción 2: Usando forEach
// Ejecuta una función por cada elemento del array
function upperCaseForEach() {
  nombres.forEach((nombre) => {
    //console.log("🚀 ~ forEach:", nombre.toUpperCase());
  });
}
upperCaseForEach(); // 👉 Ejecutamos la función

// 🧠 Closure en JavaScript
// Una función devuelve otra función que recuerda el valor de una variable interna (count),
// incluso después de que la función externa ya terminó.

function contador() {
  let count = 0; // Esta variable queda "encerrada" (closure)

  return function () {
    count++; // Aumenta en cada ejecución
    return count;
  };
}

const miContador = contador();

console.log(miContador()); // 1
console.log(miContador()); // 2
console.log(miContador()); // 3