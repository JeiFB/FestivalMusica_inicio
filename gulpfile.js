const {src, dest } = require("gulp");
const sass = require("gulp-sass")(require('sass')); 
function css(done){
    src('src/scss/app.scss')// Indentificar el archivo de SASS
    .pipe(sass())//compilarlo
    .pipe(dest("build/css"));//almacernarla en el disco duro

    done(); //call back que avisa a gulp cuando llegamos al final  
}

exports.css = css;