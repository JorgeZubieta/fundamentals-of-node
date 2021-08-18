// paquete importado y usado a continuacion
const bcrypt = require('bcrypt');

// tenemos un password
// 1ro cifrarlo para que nadie la pueda leer
// la misma no debe ser guardada en texto plano
// la misma puede venir de una http por ejemplo, ahora solo la recibimos de forma esatica
const password = 'mariokaitozubieta!';

// ciframos con hash de forma asicncrona, contiene 3 parametros
//password : 
//numero de rondas (algoritmo) que va hacer para crear el hash. 5 es buen numero!
//funcion para ver que devuele, el error o el hash!
bcrypt.hash(password, 5, function(err, hash){
    //hash es el codigo que habremos creado
    console.log(hash);

    // comparamos si el hash creado corresponde a password true/false
    bcrypt.compare(password, hash, function(err,res) {
    //'paswordxxx' con esto nos dara false!
    // bcrypt.compare('passwordxxx', hash, function(err,res) {
    
        // console.log(err);
        console.log(res);
    })
});