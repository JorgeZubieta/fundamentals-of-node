// Error dentro de otra funcion
// function otraFuncion() {
//     serompe();
// }
// // Ejemplo simple de un error 
// function serompe (){
//     return 3 + z;
// }
//llamamos a la funcion sin try/catch lo cual nos dara un error!
// serompe();
// console.log('este no llega a ejecutarse');

// Utilizamos try/catch para capturar el error!
// try{
//     // serompe();

//     // otro ejemplo de dos funciones, donde el error
//     otraFuncion();
// } catch(err){
//     console.log('Codigo roto');
//     // console.error(err.message);

//     // aca para el otro ejemplo mostramos la traza (detalle) entera
//     console.error(err);
//     console.log('Pero no pasa nada, lo hermos capturado');
// }
// console.log('El codigo aun roto continuo!');


// EJemplo de error asincronico sin el try/catch
// function seRompeAsincrona() {
//     setTimeout(function () {
//         return 3 + z;
//     })
// }

// Ejemplo de error asincrnico con el try/catch
function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + z;
        } catch (err) {
            console.error('ERROR EN MI FUNCION ASINCRONA');
            cb(err);
        }
    }) 
}

try {
    seRompeAsincrona(function (err) {
        console.log (err.message);
    });
} catch  {
    console.error('Vaya, algo se ha roto...');
    console.error(err);
    console.log('Pero no pasa nada, lo hemos capturado');
}
// al ser sincrona esto se ejecutara primero!
console.log('esto de aqui está al final');