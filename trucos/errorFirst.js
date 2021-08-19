function asincrona(callback) {
    setTimeout(function() {
        try {
            let a = 3 + z;
            // el error va a ser nul = False! 
            // a valor a devolver
            callback(null, a);

        } catch (e) { //en el caso que se rompa tomamos el error en "e"
            // devolvemos el error
            callback(e); //solo asi el siguiente parametro sera undefined! y en este caso conviene
            // callback(e, null); // asi le damos un null pero pude influir n le codigo REVISAR!!! 
        }
    }, 1000);
}

// vamos a llamar a la funcion
asincrona(function (err, dato) {
    if (err) {
        console.error('Tenemos un error');
        // recogemos el error con el error first lo mas conveniente (truco)
        console.error(err);

        // buena practica es return para la ejecuccion de la funcnion
        return false;

        // throw err; // NO VA A FUNCIONAR
        // se utiliza para lanzar un error, va a disparar el error y capurarlo
        // Donde el patron  throw va  venir bien para las funciones sincronas, pero no en funciones asincronas!
    }
    // en el caso de que no haya habido ningun error
    console.log('todo ha ido bien, mi data es', dato);
})
// nota : estamos logeando (mostrando el error)