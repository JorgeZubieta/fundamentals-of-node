// Timers
// console.log(setInterval);)
// console.log(clearInterval);
// console.log(setTimeout);
// console.log(clearTimeout);
// console.log(setInmediate);

// Modules
// console.log(exports);
// console.log(module);

// <---------------->

// Para acceder a los modulos que queramos
// require();
// console.log(require);


// Obejto global
console.log(global);

// Solo con esta funcion el proceso no termina continua indefinidamente!
// setInterval(function() {
//     console.log('Hola Kaito Kun');
// }, 1000);

// // Ahora con el clearInterval para parar el proceso
let i = 0;
let intervalo = setInterval(function() {
    console.log('Hola Kaito Kun');
    if (i === 3) {
        // apunto al intervalo que quiero limpiar / parar
        clearInterval(intervalo);        
    }
    i++;
}, 1000);


// //Con esta funcion el el proceso se ejecuta rapidamente sin esperar
setImmediate(function(){
    console.log('Te amo hijo mio');
});


// Muestra todo lo que podemos hacer con process!
// console.log(process);

// Ubicación de ficheros al lugar donde esta el directorio
console.log(__dirname);
// como se llama este fichero de globales : por si alguna vez necesitamos acceder aqui para leer un archivo uso __filename!
console.log(__filename);


// Seteando variables globales
global.test = 'Kaito Kun es Global';
console.log(test);
// console.log(global.test);