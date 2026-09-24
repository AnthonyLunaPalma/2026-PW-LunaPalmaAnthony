// 02-objetos-json.js
// Object.keys/values/entries y JSON.stringify/parse. Completa cada TODO.

const taller = {
  nombre: 'Introducción a Python',
  instructor: 'Ing. María López',
  cupo: 25,
  inscritos: 25,
};

// TODO: Object.keys — imprime solo los nombres de las propiedades de `taller`

console.log('manejo de object.keys');
console.log(Object.keys(taller));

// TODO: Object.values — imprime solo los valores

console.log('manejo de valores del objeto');
console.log(Object.values(taller));

// TODO: Object.entries — recorre con for..of e imprime "campo: valor" de cada propiedad

console.log('manejo de objeto por for of para entries');
for (const [campo, valor] of Object.entries(taller)) {
  console.log(`${campo}: ${valor}`);
}
// TODO: JSON.stringify — convierte `taller` a texto (guárdalo en `textoJson`) e imprímelo

console.log('manejo de conversion de objeto a string');
const textoJson = JSON.stringify(taller, null, 2);
console.log(textoJson);
  //Lo quiero visualizar como cadena
console.log('tipo: ', typeof textoJson);

// TODO: JSON.parse — convierte `textoJson` de vuelta a objeto (guárdalo en `objetoDeVuelta`)

console.log('Inverso de cadena a JSON');
const objetoDeVuelta = JSON.parse(textoJson);
console.log('tipo: ', typeof objetoDeVuelta);
console.log('nombre: ', objetoDeVuelta.nombre);

//       e imprime `objetoDeVuelta.nombre`