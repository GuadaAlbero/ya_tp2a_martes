// if
let n = 0;
if (n === 1) {
  //   console.log("soy un if");
} else if (n === 2) {
  //   console.log("soy un else if");
} else {
  //   console.log("soy un else");
}

// ternario

let letra = "b";
let mensaje = letra === "a" ? "soy a" : "no soy a";
// console.log(`🚀 ~ mensaje:`, mensaje);

// switch
let dia = "";
switch (dia) {
  case "martes":
    //     console.log(`🚀 ~ dia:`, dia);
    break;
  case "lunes":
    //     console.log(`🚀 ~ dia`, dia);
    break;
  default:
    //     console.log(`🚀 ~ no soy nada`);
    break;
}

// funciones

// saludar("kuka");

function saludar(nombre) {
  console.log(`hola ${nombre}`);
  return `hola desde la funcion ${nombre}`;
}

// let saludo = saludar("lolo");
// console.log(`🚀 ~ saludo:`, saludo);

// expresion de funcion

const nuevoSaludo = function () {
  console.log(`🚀 ~ nuevoSaludo ~ nuevoSaludo`);
};
// nuevoSaludo();

// arrowfunctions

// const saludoArrow=()=>{}
// const saludoArrow = (nombre) => {
//      return `saludo arrow ${nombre}`
// };
// console.log(`🚀 ~ `, saludoArrow("jaco"))

const saludoArrow = (nombre) => `saludo arrow ${nombre}`;
console.log(`🚀 ~ `, saludoArrow("jaco"));

// callback

function calcular(n1, n2, fn) {
  return fn(n1, n2);
}

function sumar(n1, n2) {
  console.log(`🚀 ~ sumar `, n1 + n2);
}
function restar(n1, n2) {
  console.log(`🚀 ~ restar `, n1 - n2);
}

calcular(3, 4, sumar);
// calcular(3, 4, restar);
calcular(3, 4, function restar(n1, n2) {
  console.log(`🚀 ~ restar `, n1 - n2);
});

const nombres = ["pepe", "kuka", "camilo"];

// function upperCase() {
//   for (let index = 0; index < nombres.length; index++) {
//     console.log(nombres[index].toUpperCase());
//   }
// }
// upperCase()

function upperCase(arr) {
 arr.forEach((element) => {
    console.log(element.toUpperCase());
  });
}

upperCase(nombres);

// closure

function contador(){
     let count=0
     console.log(`🚀 ~ contador ~ count:`, count)
     return function(){
          count ++
          // console.log(`🚀 ~ contador `, count)
          return count
     }
}

const miContador=contador()
 miContador()
// miContador()
// miContador()
// miContador()

// const tuContador=contador()
// tuContador()
// tuContador()
// miContador()

