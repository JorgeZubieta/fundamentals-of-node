// Ejemplo bucle infinito
console.log("Hola mundo");
// setInterval recibe dos argumentos
setInterval(function() {
    console.log('sigo activo');
}, 1000);
// se frena un bucle ifinito con control + c


// Ejemplo de bucle infinito con un error, parecido a un ciclo for
console.log("Hola mundo");
let i=0;
setInterval(function() {
    console.log(i);
    i++;

    if (i === 5) {
        console.log('Forzamos un   error');
        var a = 3 + z;
    }
}, 1000);

// Ejemplo de bucle infinito pero se ve como se ejecuta la siguiente sentencia aunque aun no termino el bucle infinito esa es la ventaja
console.log("Hola mundo");
let i=0;
setInterval(function() {
    console.log(i);
    i++;
    // if (i === 5) {
    //     console.log('Forzamos un   error');
    //     var a = 3 + z;
    // }
}, 1000);
console.log("Aun se ejectua el bucle infinito");



// ejemplo de asincronismo
console.log("primer instruccion");
let i=0;
setInterval(function() {
    console.log('segunda instruccion',i);
    i++;
}, 1000);
console.log('tercera instruccion')




