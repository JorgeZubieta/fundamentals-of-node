// ESTE INDEX VA A SER EL QUE GENERE TODO LO QUE HAGAMOS DENTRO DE PUPPETEER
const puppeteer = require('puppeteer');

(async () => {
    // Nuestro codigo
    console.log('Lanzamos navegador!');
    // const browser = await puppeteer.launch();
    const browser = await puppeteer.launch({ headless: false });

    // peticion : para abrir una pagina
    const page = await browser.newPage();
    await page.goto('https://platzi.com/home');


    // <--- CAPTURAMOS UN SCRIPT --->
    var titulo1 = await page.evaluate(() => {
        // apuntamos al h1 
        const h1 = document.querySelector('h1');
        // mostramos el h1 capturado por consola del chrome (ver)
        console.log(h1.innerHTML);
        
        // mandamos el resultado a la variable titulo1!
        return h1.innerHTML;
    });
    // mostramos el contenido de la variabel tituo1 por terminal con nodemon!
    console.log(titulo1);
    // <--- FIN CAPTURAMOS UN SCRIPT --->

    console.log('Cerramos navegador...');    
    // comentamos close para que no se cierre "CHROMIUM" y veamos le pagina
    // browser.close();
    // NOTA : si descomentamos la pagna se cerrara automaticamente
    console.log('Navegador cerrado');
})();