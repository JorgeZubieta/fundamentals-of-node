// nos permite ver algo
console.log('Kaito');

// otra forma de ver porque basicamente van al mismo sitio
console.info('Kaito');

// si hay error lo pinta de rojo
console.error('error');

// Potencial error
console.warn('potencial error');

// Para ver datos de una tabla grafica ordenada (tabulada) -> console.table()
const tableID = [
    { 
    ID: 101,
    Categoria: 'Y',
    Inversion : 47839
    },
    { 
    ID: 102,
    Categoria: 'Z',
    Inversion : 39339 
    },
    {
    ID: 103,
    Categoria: 'X',
    Inversion : 1020494 
    }
]
console.table(tableID);
// ┌─────────┬─────┬─────┐
// │ (index) │  a  │  b  │
// ├─────────┼─────┼─────┤
// │    0    │  1  │ 'Y' │
// │    1    │ 'Z' │  2  │
// └─────────┴─────┴─────┘


// EJEMPLO 1
// console.group();
// console.groupEnd();
console.group('grupo despedida');
	console.log('adios grupal');
	console.group('grupo de carlos');
		console.log('Conversacion de Carlos');
	console.groupEnd();
console.groupEnd();

// Ejemplo2 con funciones
function funcion1() {
    console.group('grupo_f1');
    console.log('empezamos con la funcion 1');
    console.log('esto es de la funcion 1');
    funcion2();
    console.log('regresamos a la funcion 1');
    console.groupEnd('grupo_f1');
}
function funcion2(){
    console.group('grupo_f2');
    console.log('empezamos funcion 2');
    console.log('esto de de la funcion 2');
    console.groupEnd('grupo_f2');
}
console.log('empezando el proceso');
funcion1();


// Contadores
console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');
console.count('veces');

// console.time: inicia un cronometro en ms.

// console.timeEnd: Finaliza el cronometro.

// console.clear: Limpia la consola.