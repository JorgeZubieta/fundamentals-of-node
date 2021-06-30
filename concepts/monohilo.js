// Ejemplo buvel infinito
console.log("Hola mundo");
setInterval(function() {
    console.log('sigo activo');
}, 1000);


// ejemplo de bucle infinito con un error
console.log("Hola mundo");
let i=0;
setInterval(function() {
    console.log(i);
    i++;

    if (i === 5) {
        console.log('Forzamos error');
        var a = 3 + z;
    }
}, 1000);


// ejemplo de asincronismo
console.log("primer instruccion");
let i=0;
setInterval(function() {
    console.log('segunda instruccion',i);
    i++;
}, 1000);
console.log('tercera instruccion')




