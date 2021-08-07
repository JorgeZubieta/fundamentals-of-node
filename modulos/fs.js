// Forma de llamar modulos en node
const fs = require('fs');

// Creamos una funcion para leer un archivo
// necesitaremos la ruta : ruta
// cb : para hacer algo despues de leer,  asi que utilizaremos un callback,
function leer(ruta, cb) {
    // el fs.readFile recibira los mismos parametros que la funcion leer, la ruta y el cb pero con los parametros que van a venir con el cb, usamos arrow fucntion : err por si algo no sale bien y el data del archivo!
    fs.readFile(ruta, (err, data) => {
        // archivo leido con data
        cb(data.toString());
        // cb(data.toString());
    })
}
// para poder llamar a la funcion leer
leer(__dirname + '/archivo.txt', console.log)


// Creamos al funcion escribir on un if por si tarda mucho
function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err) {
        if (err) {
            // , err (aca le pasamos el error)
            console.error('No he podido escribirlo', err);
        } else {
            console.log('ARCHIVO GUARDADO');
        }
    });
}


// Para escribir / crear un archivo en el sistmea
// direccion, nombre de archivo, contenido 
escribir(__dirname + '/archivox10.txt', 'Hola soy un archivo nuevo!' )
// para poder llamar a la funcion leer
leer(__dirname + '/archivox10.txt', console.log)


// Borrar un archivo con el sistema de node
function borrar(ruta, cb) {
    fs.unlink( ruta, cb)
}
// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo', console.log);
// leer(__dirname + '/archivo1.txt', console.log)
borrar(__dirname + '/archivox10.txt',console.log);