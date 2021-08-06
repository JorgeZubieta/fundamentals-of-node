// Ejemplo promesa
function hola (nombre) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log("Hola " + nombre);
            // si no llamamos a la funcion, no se ejecuta el punto 4
            resolve(nombre);
            }, 2000
        )
    })    
}

// funion que se repetira
function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log("Bla bla bla...");
            // resolve(nombre);
            reject('Reject activado!');
        },1000);
    });
}

function adios (nombre) {
    return new Promise ( (resolve, reject) => {
        setTimeout(function() {
            console.log("Adios " + nombre);
            resolve(nombre);
            // reject('Reject activado!');
        }, 1000);
    })
}   
