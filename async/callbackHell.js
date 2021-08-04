function saludo (nombre, micallback) {
    console.log("2 Empezando el asicronismo");
    setTimeout(function() {
        console.log("3 Hola " + nombre);
        // si no llamamos a la funcion, no se ejecuta el punto 4
        micallback(nombre);
        }, 1000
    )
}

// funion que se repetira
function hablar(callbackHablar) {
    setTimeout(function(){
        console.log("4 Bla bla bla...");
        callbackHablar();
        },1000
    )
} 

function conversacion(nombre, veces, callback){
    // parametros ligeramente distinos
    if(veces > 0){
        hablar(function(){
            // deberea regresar los mismos parametros ligeramente distintos para el if (contador que resta)
            conversacion(nombre, --veces, callback)
        })
    }
    else {
        // datos que recogemos para el callback
        callback(nombre);
        // callback(); tambien funciona si no le pasamos el parametro nombre!
    }
}

// EJECUTAMOS
console.log("1 Iniciando proceso...");


saludo("Kaito Kun", function(nombre){
    conversacion (nombre, 3, function(){
        console.log("5 Proceso terminado de " +nombre);
    });
})