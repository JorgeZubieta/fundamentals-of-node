// Opcion 1 - original : invocamos al modulo creado
// const miAddon = require('addon');

// Opcion 2 : especificamos la ruta de acceso
const miAddon = require('./build/Release/addon');

// Agregamos el parametro hola para que se ejecute la funcion hola del modulo addon y nos devuelva la respuesta del modulo RTA : KAITO!
console.log( miAddon.hello() );
// lo ejecutamos con nodemon! donde hello es el nombre de la funcion del modulo que llamaremos!