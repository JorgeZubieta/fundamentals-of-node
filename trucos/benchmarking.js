// EJEMPLO FUNCION ASINCRONA
function asincrona() {
    return new Promise( (resolve) => {
        setTimeout(function () {
            console.log('Termina el proceso asíncrono');
            resolve();
        }, 5000)
    })
}
// FIN - EJEMPLO FUNCION ASINCRONA


// EMPIEZA EL PROCESO
console.time('TOTAL PROCESO TERMINADO');
let suma = 0;
console.time('bucle');
for (let i = 0; i < 100000000; i++) {
    suma += 1;
}
console.timeEnd('bucle');

let suma2 = 0;
console.time('bucle 2');
for (let j = 0; j < 1000000000; j++) {
    suma2 += 1;
}
console.timeEnd('bucle 2');


// EJEMPLO ASICNCRONO
console.time('Total Tiempo Asincrono');
console.log('Empieza el proceso async')
asincrona()
    .then(() => {
        console.timeEnd('Total Tiempo Asincrono');
    });
// FIN - EJEMPLO ASINCRONO

console.timeEnd('TOTAL PROCESO TERMINADO');

