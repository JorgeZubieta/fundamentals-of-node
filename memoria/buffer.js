// let bufferA = Buffer.alloc(4);
// console.log(bufferA);
// let bufferB = Buffer.alloc(8);
// console.log(bufferB);

// let buffer2 = Buffer.from([89, 67, 10]);
// console.log(buffer2);

// let buffer3 = Buffer.from('Hola Kaito Kun, mi hijito!');
// console.log(buffer3.toString());



// Trabajamos con el buffer posicion a posicion

// alloc (26) --> nos muestra 26 posciciones del Buffer
let abc = Buffer.alloc(26);
console.log(abc);

// recorremos las posiciones del buffer
for (let i = 0; i < 26; i++) {
    // por cada iteracion se le sumara un 1 a 97
    abc[i] = i + 97;
}
// muestra los valores hexa
console.log(abc);
// mestra los valores en texto
console.log(abc.toString());