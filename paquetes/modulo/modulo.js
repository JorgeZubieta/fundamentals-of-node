function saludar() {
    console.log('Hola mundo!!');
}
// ahora podemos exportamos la funcion saludar
// module.exports = saludar;

// Exportamos un modulo mas complejo "ARRAY" y sus diferentes contenidos
// y lo deberemos llamar desde l index con otro metodo y no como a una funcion ya qu es un obejto!
module.exports = {
    // contiene una funcion
    saludar,
    // contiene una propiedad
    prop1: 'Hola que tal soy la propiedad'
};