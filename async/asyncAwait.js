// Agregamos en las funciones solo async al principio!
async function hola (nombre) {
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
async function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function() {
            console.log("Bla bla bla...");
            // resolve(nombre);
            resolve('blo blo blo...');
            // reject('Reject activado!');
        },1000);
    });
}

async function adios (nombre) {
    return new Promise ( (resolve, reject) => {
        setTimeout(function() {
            console.log("Adios " + nombre);
            resolve(nombre);
            // reject('Reject activado!');
        }, 1000);
    })
}   

// llamado por Async y ejecutamos await! pero el await debe ir si o si dentro de una funcion
async function main () {
    let nombre = await hola('Kaito-Kun');
    await hablar();
    // sin el await no espera que se cumpla la funcion hablar y ejecuta proceso terminado!
    hablar();
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Proceso terminado con await!');
}

// INICIAMOS EL LLAMADO : se cumple en orden con todos los await en hablar!
console.log('Iniciando proceso:');
main();
// con este console log aca y sin el waiat en hola, esto funcionara en forma asincrona y es lo que tenemos que evitar para que el proceso se vea o parezca asincrono!
console.log('Proceso terminado sin await!');