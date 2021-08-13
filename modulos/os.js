const os = require('os'); // ---> Nos tremos el modulo "OS" Operating System
console.log(os.arch()); //----> Me devuelve la arquitecura de mi OS 

console.log(os.platform());//---> Me dice en qué plataforma estoy 

console.log(os.cpus());//--->podemos acceder a la información de las cpus de mi pc. 

console.log(os.cpus().length);//--->podemos ver la cant procesos que puedo ejecutar

console.log(os.constants);//---> Me muestran todos los errores de sistema. //Acceder a espacios de memoria es muy útil para saber si tengo a memoria suficiente para realizar esta operación. 




console.log('Bytes');
console.log(os.freemem());// ---> Me dice en bytes la memoria libre que tenemos 

const SIZE = 16183296; //valor sacado previamente con os.freemen  

function kb(bytes) { return bytes / SIZE } 
function mb(bytes) { return kb(bytes) / SIZE } 
function gb(bytes) { return mb(bytes) / SIZE }

console.log('Kilo bytes');
console.log(kb( os.freemem() ));
console.log('Mega bytes');
console.log(mb( os.freemem() ));
console.log('Giga bytes');
console.log(gb( os.freemem() ));
console.log('Total de memoria RAM libre');
console.log(gb( os.totalmem() )); //para saber la cantidad de memori libre que tengo

console.log('DIRECTORIO RAIZ');
console.log( os.homedir() ) // Me permite saber cual es el directorio raíz 

console.log('DIRECTORIO TEMPORAL');
console.log(os.tmpdir());//-->Me muestra los directorios temporales, temproales una imagen que voy a procesar 

console.log('<--- NOMBRE DEL HOST DE LA MAQUINA --->');
console.log( os.hostname() );// Voy a saber el hostname de la máquina console.log(os.networkInterfaces());// Puedo acceder a mi interfaz de red activas en mi máquina, puedo saber IPVX

console.log('<--- NETWORKINTERFACES --->');
console.log( os.networkInterfaces() );