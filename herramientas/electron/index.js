// El paquete de Electron : exporta un objeto con un monton de opciones
// app  : aplicacion principal de electron
// BrowserWindow
const { app, BrowserWindow } = require('electron');

// ventana principal donde va a verse toda la aplicacion
let ventanaPrincipal;

// proceso que chequea que app este lista!
app.on('ready', crearVentana)



// funcion que cree la ventana : viene un new broser de electron y se setea en mainWindow!
function crearVentana(){
    ventanaPrincipal = new BrowserWindow({
        width: 400,
        height: 600,

        // que cargue un script antes
        // wenPreferences : {
            // preload:{
                // para una recarga de archivos
            // }
        // };
    });
    // para que lo seteado demainWindow este en ua ventana
    // vamos a cargar la aplicacion
    ventanaPrincipal.loadFile('index.html');
}