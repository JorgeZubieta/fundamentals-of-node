// // invocamos al modulo http
// const http = require('http');

// // create server : esta es la forma mas sencilla de crear un servidor basico
// // para que funcione le pasams una funcion.
// // req (request) -> peticion (con cabeceras, metodos, historias, etc)
// // res (response) -> respuesta del servidor al cliente (en este caso un mensaje de texto plano)
// http.createServer( function(req, res){
//     // logeamos nueva peticion para la consola
//     console.log('Nueva petición!');
//     // voy a traer a la URL a la que se sta llamando en este caso el puerto 201!
//     console.log(req.url);

//     // CABECERA 
//     // 201 -> codigo de estado, suele ser creado cuando devuelves un archivo para que el cliente sep que todo va bien
//     // {} -> tipo de contenido
//     res.writeHead(201,{ 'Content-Type' : 'text/plain' }) 

//     // Respuesta escrita para el usuario - aparecera en la pagina del navegador!
//     res.write('Hola Kaito, Daddy ya sabe usar HTTP en node.js')
    
//     // terminamos la peticion, se cierra la misma!
//     res.end();
// // para que el sevidor funcione, debe ser escuchado en algun sitio, puerto de nuestro sistem
// }).listen(3000);

// // buena practica
// console.log("Escuchando http en el puerto 3000");



// <----------------  Call back con una funcion  ------------------>
// CODIGO
function router(req, res) {
    console.log('Nueva petición!');
    console.log(req.url);

    switch (req.url) {
        case '/hola':
            let saludo = hola();
            res.write(saludo);
            res.end();
            break;
        
        default:
            res.write('Error 404: No se lo que quieres');
            res.end();
    }
    // res.writeHead(201, { 'Content-Type': 'text/plain' })
    // // Escribir respuesta al usuario
    // res.write('Hola, ya se usar HTTP de NodeJS');
    // res.end();
}

function hola() {
    return 'DADDY MISS YOU SO MUCH GUYS';
}

// INICIAMOS EL PROCESO DE SERVIDOR
const http = require('http');
http.createServer(router).listen(3000);
console.log("Escuchando http en el puerto 3000");