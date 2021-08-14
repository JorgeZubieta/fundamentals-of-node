// Traer nuestro modulo
const modulo = require('./modulo');

// ejecutar una funcion del modulo y nos mostrara un objeto con su detalle en este caso la funcion
// console.log(modulo);

// como saludar es una funcion dentro del archvo modulo, ste se puede llamar com una funcion!
// y nos mostrara lo que nos devuelve la funcion!
// modulo();


// muestra el contenido del objeto mas complejo
console.log(modulo);
// mustra el contenido de prop1
console.log(modulo.prop1);
// muestra el contenido de la funcion saludo
modulo.saludar();