// const fs = require('fs');

// let data = '';

// let readableStream = fs.createReadStream(__dirname + '/input.txt');
// // en vez de utilizar el toString!
// readableStream.setEncoding('utf-8');

// STREAM DE LECTURA
// readableStream.on('data', function(chunk){
//     // console.log(chunk);
//     // console.log(chunk.toString);
    
//     // Para bloques enormes de data
//     data += chunk;

//     // para que nos muestre el chunk que fue guardado en memoria
//     readableStream.on('end', function() {
//         console.log(data);
//     })
// });
// FIN - STREAM DE LECTURA


// STREAM DE ESCRITURA
// process.stdout.write('Hola');
// process.stdout.write('Que');
// process.stdout.write('Tal');
// FIN - STREAM DE ESCRITURA


// STREAM PARA GRANDES CANTIDADES DE INFORMACION
const fs = require('fs');
// con el siguiente stream ya podesmos crear la transformacion
const stream = require('stream');
// me traigo al clase util para poder trabajar con herencia automatico
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('utf-8');

// esto nos crea un stram de trasnformacion donde puede leer y escribir!
const Transform = stream.Transform;

// creamos la transformacion a mayusculas y luego crearemos un constructor para este tranform
function Mayus() {
    Transform.call(this);
}

util.inherits(Mayus, Transform);

// creamos la transformacion
Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

// Para ver la transformacion
// mayus en minuscula porque ya no es una clase ni nada???
// y con esto ya tenemos la tranformacion creada
let mayus = new Mayus();

// ahora utilizamos al tansformacion creda 
// readableStream.pipe() -> es la funcion que se utiliza para mandar de un siti a otro
readableStream
    .pipe(mayus)
    // la salida se la pasamos a stdout
    .pipe(process.stdout);
  // FIN - STREAM PARA GRANDES CANTIDADES DE INFORMACION