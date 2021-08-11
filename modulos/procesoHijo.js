// EXEC para procesos cortos
// esta primera forma es util si queremos acceder a mas de una propiedad de nuestro chil process!
// en esta segunda forma solo utilizaremos exec!
// const exec = require ('child_process').exec;

// Que liste el directorio
// eer : el error
// stdout : standar Out -> salida principal estandar
// sterr : standar error o algun tipo de probelma
// exec('ls -la', (err,stdout, sterr ) =>{
//     if (err){
//         console.error(err);
//         return false;
//     }
//     // en err; caso de que hsta ido bien
//     console.log(stdout);
// });

// ejecuta el consola.js
// exec('node modulos/consola.js', (err,stdout, sterr ) =>{
//     if (err){
//         console.error(err);
//         return false;
//     }
//     // en err; caso de que hsta ido bien
//     console.log(stdout);
// });

// Spawn para procesos mas complejos
const { exec,spawn } = require('child_process');
let proceso = spawn('ls', ['-la']);
// no vemos nada en terminal porque el proceso se ha espauwneado (spawn)
console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', function(dato){
    console.log('El proceso esta muerto?');
    console.log(process.killed);
    console.log(dato.toString());
})

// para verficar si el proceso termino
proceso.on('exit', function(){
    console.log('Proceso terminado!');
    // killed nos muestra el estado del proceso
    console.log(proceso.killed);
})