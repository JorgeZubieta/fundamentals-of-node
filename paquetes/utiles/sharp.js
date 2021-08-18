// importamos la libreria
const sharp = require('sharp');

// para utilizarla llamamos a la imagen con su extension
sharp('original.png')
// decimos que quermos hacer con la img en esta caso grande, reducir el size
    .resize(80)
    .grayscale() //pone la img en balanco y negro
    .toFile('resized.png');