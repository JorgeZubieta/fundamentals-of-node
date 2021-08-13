// importams el modulo process
// const { exception } = require('console');
// const p = require('process');
// NOTA : no necesitamos importarlos porque vienen por defecto


// Para informar antes de que termine el proceso
process.on('beforeExit', () => {
    console.log('El proceso va a terminar...');
});

// para que nos avise cuando el proceso termino
// process.on('exit', () => {
//     console.log('<--- PROCESO TERMINADO --->');
// });


// <--- EJEMPLO CAPTURAMOS EL ERROR del HILO PRINCIPAL --->
// Para capturar el error de excepciones no capuradas
// process.on('uncaughtException', (err, origen) => {
//     console.error('Vaya se nos ha olvidado capturar un error');
//     console.error(err);
// });
// forzamos un error llamando una funcion que no existe (o si sabemos de algo que va a rompoerse)
// funcionQueNoExiste();
// console.log('Esto si el error no se recoje, no sale');
// <--- FIN EJEMPLO CAPTURAMOS EL ERROR del HILO PRINCIPAL --->


// <--- EJEMPLO CAPTURAMOS EL ERROR EN OTRO HILO (no en el principal) --->
//ejemplo cuando rome en exit y lo de adentro de la funcion setTimeOut.
process.on('exit', () => {
    console.log('<--- PROCESO TERMINADO --->');
    setTimeout(() => {
        console.log('X Esto no se va a ver nunca');
    }, 0);
});

// Pero si colocamos el setTimeout fuera del exit si funcionara
setTimeout(() => {
    console.log('Esto si se va a ver');
}, 0);

// Capturamos el error de exception
process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    setTimeout(() => {
        console.log('Esto viene desde las excepciones');
    }, 0);
});
// forzamos un error llamando una funcion que no existe (o si sabemos de algo que va a rompoerse)
funcionQueNoExiste();
console.log('Esto si el error no se recoje, no sale');
// <--- FIN EJEMPLO CAPTURAMOS EL ERROR EN OTRO HILO (no en el principal) --->



//Para pormesas que se han rechzado y no tienen CATCH!
// process.on('uncaughtRejection');