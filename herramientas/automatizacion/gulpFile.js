const gulp = require('gulp');

// 1er tarea le doy un nombre BUILD (construir)
gulp.task('build', function(cb) {
    console.log('Construyendo el sitio');
    setTimeout(cb, 1200);
});
// para llamar a este BUILD deberemos ponerlo en el JSON como un script personalizado : "build" : "gulp build"



// 2da Tarea que crea un servidor
const server = require('gulp-server-livereload');
// Otra tarea que una funcion que nos cree un servidor en la web!
gulp.task('serve', function(cb) {
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true,
        }));
});

// Tarea en series por default
// 1 build --> construye el sitio
// 2 serve --> nos inicia nuestro servidor
gulp.task('default', gulp.series('build', 'serve'));
// dentro del json agregamos la tarea: "start" : "gulp" --> tarea por defecto y simplemente la ejecutamos!!!