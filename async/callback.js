// Ejemplo aun no es asincrono
// function soyAsincrona () {
//     console.log("hola soy una funcion asicrona");
// }
// console.log("Iniciando proceso...");
// soyAsincrona();
// console.log("Terminando proceso");



// Agregamos Set time out para que sea asincrono, veremos como se ejecutan el bloque en el orden asincronico
// function soyAsincrona () {
//     console.log("2 Empece el asicronismo");
//     setTimeout(function() {
//         console.log("4 Termine el asincronismo");
//         }, 1000
//     )
// }
// console.log("1 Iniciando proceso...");
// soyAsincrona();
// console.log("3 Terminando proceso");



// Agregamos un callback
// function soyAsincrona (micallback) {
//     console.log("2 Empece el asicronismo");
//     setTimeout(function() {
//         console.log("3 Termine el asincronismo");
//         // si no llamamos a la funcion, no se ejecuta el punto 4
//         micallback();
//         }, 1000
//     )
// }
// console.log("1 Iniciando proceso...");
// soyAsincrona(function(){
//     console.log("4 Terminando proceso");
// });



// Ejemplo con 2 funciones asincronias : podemos elejir cual se ejecute primero
function saludo (nombre, micallback) {
    console.log("2 Empece el asicronismo");
    setTimeout(function() {
        console.log("3 Hola " + nombre);
        // si no llamamos a la funcion, no se ejecuta el punto 4
        micallback(nombre);
        }, 1000
    )
}

function adios (nombre, otrocallback){
    
    setTimeout(function() {
        console.log("4 Adios " + nombre);
        // si no llamamos a la funcion, no se ejecuta el punto 5
        otrocallback();
        }, 5000
    )

}

// INICIAMOS
console.log("1 Iniciando proceso...");

// llamamos a las funciones donde la segunda esta anidada 
// saludo('Kaito',function(){
//     adios('kaito',function(){
//         console.log("5 Terminando proceso");
//     });
// });

// llamamos a las funciones en forma separada 
// saludo('Kaito',function(){});
// adios('kaito',function(){});
// console.log("3 aca vemos como se cumple el asincronismo y el proceso no se interrumpe, hola y adios dependen sel setTimeOut");


// Compartir informacion entre callbacks!!!!
// donde en la funcion Saludo me devolvera el valor de la variable  nombre = Kaito Kun!
saludo('Kaito Kun',function(nombre){
    adios(nombre,function(){
        console.log("5 Terminando proceso");
    });
});
