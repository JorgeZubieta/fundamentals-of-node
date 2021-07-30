// ingreso y muestra por pantala con una variable ya definida dentro del codigo
// let nombre = 'KAITO';
// console.log('hola mundo');

// Variables de Entorno!
// NOMBRE va en maysuculas porque es la forma antigua d declarar una variable con guion bajo si se usa dos palabaras
let nombre = process.env.NOMBRE;
console.log('Hola :' + nombre);
