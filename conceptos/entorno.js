// ingreso y muestra por pantala con una variable ya definida dentro del codigo
let titulo = 'Se agrega el valor desde la terminal';
console.log(titulo);

//ingreso del valor de una variable por terminal
// let nombre = process.env.NOMBRE || "sin nombre";
// console.log('HOLA : ' + nombre);

//ingreso del varias valores por terminal
let nombre = process.env.NOMBRE || "sin nombre";
console.log('HOLA : ' + nombre);

let web = process.env.WEB || "sin sitio web";
console.log('HOLA : ' + web);

let cel = process.env.CEL || "sin numero de celular";
console.log('Numero de Cel : ' + cel);

