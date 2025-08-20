// var nombre="Kuka"
// console.log(`🚀 ~ nombre:`, nombre)
// var nombre="pepe"

// let apellido
// console.log(`🚀 ~ apellido:`, apellido)
// // let apellido= "Perez"
// apellido="ojeda"
// console.log(`🚀 ~ apellido:`, apellido)

// const py=3.14
// console.log(`🚀 ~ py:`, py)
// -------------------------------------------------

// tipos de datos en js

// tipos primitivos

let nombre = "Lolo";
console.log(`🚀 ~ nombre:`, typeof nombre);

let edad = 38;
console.log(`🚀 ~ edad:`, typeof edad);

let bolean = true; // false
console.log(`🚀 ~ bolean:`, typeof bolean);

let mail;
console.log(`🚀 ~ mail:`, typeof mail);

let nulo = null;
console.log(`🚀 ~ nulo:`, typeof nulo);

let big = 23456n;
console.log(`🚀 ~ big:`, typeof big);

let sim1 = Symbol("dato");
console.log(`🚀 ~ sim1:`, sim1);
let sim2 = Symbol("dato");
console.log(`🚀 ~sim1== sim2:`, sim1 === sim2);

let n1 = 2;
let n2 = "2";
console.log(`🚀 ~n1== n2:`, n1 == n2);

// datos complejos

// objeto literal
const data = {
  nombre: "Kuka",
  edad: 11,
  estudios: {},
};
console.log(`🚀 ~ data:`, typeof data);

data.apellido = "ojeda";
data.nombre = "jaco";
data["edad"] = 14;
let dato = "edad";
data[dato] = 23;
// console.log(`🚀 ~ data:`,  data["edad"]);
// console.log(`🚀 ~ data:`, data)

// array
const arr = [3, "Canela", [1, 2, 3], {}];
// console.log(`🚀 ~ arr:`, arr[3])
console.log(`🚀 ~ arr:`, typeof arr);

arr.push("hola");
console.log(`🚀 ~ arr:`, arr);
arr.pop();
console.log(`🚀 ~ arr:`, arr);
arr.unshift("pepe");
console.log(`🚀 ~ arr:`, arr);
arr.shift();
console.log(`🚀 ~ arr:`, arr);

// operadores
// +,-, *,/
console.log(`🚀 suma`, 3 + 6);

// operadores de comparacion
// == de igualdad
//=== de igualdad estricta
// >
// <
// <=
// !=
// !==

// operadores logicos
// && and
// || or
console.log(`🚀 `, null==undefined);
console.log(`🚀 `, null===undefined)


