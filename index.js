// desestructuracion

// const obj = {
//   nombre: "Osvaldo",
//   mail: "mimail@gmail.com",
//   edad: 38,
// };

// console.log(obj["nombre"])

// const nombre = obj.nombre;
// const mail = obj.mail;
// const edad = obj.eded;
// console.log(`🚀 ~ nombre:`, nombre)

// const { edad, nombre, apellido } = obj;
// console.log(`🚀 ~ apellido:`, apellido);
// console.log(`🚀 ~ edad:`, edad);
// console.log(`🚀 ~ nombre:`, nombre);

const arr = ["hola", 456, {}];
// console.log(`🚀 ~ arr:`, arr)
// const saludo = arr[0];
// const numero = arr[1];
// const objeto = arr[2];

const [saludo, numero, objeto, array] = arr;
// console.log(`🚀 ~ array:`, array)
// console.log(`🚀 ~ objeto:`, objeto)
// console.log(`🚀 ~ numero:`, numero)
// console.log(`🚀 ~ saludo:`, saludo)

let nombre1 = "Pedlo";
// console.log(`🚀 ~ nombre1:`, nombre1);
// let nombre2 = nombre1;
// console.log(`🚀 ~ nombre2:`, nombre2);
// nombre2 = "pedro";
// console.log(`🚀 ~ nombre2:`, nombre2);
// console.log(`🚀 ~ nombre1:`, nombre1);

const obj = {
  nombre: "Osvaldo",
  mail: "mimail@gmail.com",
  edad: 38,
  data: {
    direccion: "calle 123",
    titulos: ["jardin", "primaria"],
  },
};
// console.log(`🚀 ~ obj:`, obj);
// const copia = obj;
// console.log(`🚀 ~ copia:`, copia);
// copia.edad = 39;
// console.log(`🚀 ~ copia:`, copia);
// console.log(`🚀 ~ obj:`, obj);

// // const copiaSpread={...obj}
// const copiaSpread={
//      nombre:obj.nombre
// }
// const copiaSpread={...obj}
// copiaSpread.nombre="Carlos"
// copiaSpread.data.cp=1440
// console.log(`🚀 ~ copiaSpread:`, copiaSpread)
// console.log(`🚀 ~ obj:`, obj);

const copiaArray = [20, ...arr];

// copia profunda

// const copiaJson = JSON.stringify(obj);
// // const copiaParse= JSON.parse(copiaJson)
// const copiaParse = JSON.parse(JSON.stringify(obj));
// console.log(`🚀 ~ copiaJson:`, copiaJson);
// copiaParse.data.direccion = "Calle falsa 123";
// console.log(`🚀 ~ copiaParse:`, copiaParse);
// console.log(`🚀 ~ obj:`, obj);

// const copiaStructure= structuredClone(obj)
// copiaStructure.data.titulos.push("secundaria")
// console.log(`🚀 ~ copiaStructure:`, copiaStructure)
// console.log(`🚀 ~ obj:`, obj)

// const copiaArrStructure=structuredClone(arr)
// console.log(`🚀 ~ copiaArrStructure:`, copiaArrStructure)

// promesas

function promesa(boo) {
  return new Promise((response, reject) => {
    if (boo) {
      response("todo ok");
    } else {
      reject("todo mal");
    }
  });
}

// console.log(promesa(true))
// const res= promesa(false)
// console.log(`🚀 ~ res:`, res)

// const respuesta = promesa(true)
//   .then((res) => {
//     console.log(`🚀 ~ res:`, res);
//     return res + "si";
//   })
//   .then((res2) => {
//     console.log(`🚀 ~ res2:`, res2);
//     return res2;
//   })
//   .catch((err) => {
//     console.log(`🚀 ~ err:`, err);
//     return err;
//   }).finally(()=>{
//      console.log("final")
//   })
// console.log(`🚀 ~ respuesta:`, respuesta);

function api() {
  return fetch("https://pokeapi.co/api/v2/pokemon/ditto");
}

// console.log(api())
api()
  // .then((res) => res.json())
  // .then((data) => console.log(data))
  // .catch(err=>console.log(err))
