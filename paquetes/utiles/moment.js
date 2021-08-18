// llamamos a la libreria moment
const moment = require('moment');

let ahora = moment();

// nos trae un objeto con todo lo que podemos hacer con moment
console.log(ahora);

// nos muestra en forma de string la fecha detalle simple de la fecha1
console.log(ahora.toString());

// podemos elegir el formato de la fecha
console.log(ahora.format('YYYY/MM/DD - HH:mm'));