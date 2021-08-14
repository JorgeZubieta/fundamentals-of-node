function saludar() {
    console.log('Hola mundo!!');
}

// ES6 : expermental flag
// export default saludar;


export default {
    saludar,
    prop1: 'Soy un modulo experimental',
};