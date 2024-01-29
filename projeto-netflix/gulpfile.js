const gulp = require("gulp")
const cssnano = require("gulp-cssnano")
const htmlmin = require("gulp-htmlmin")
const concat = require("gulp-concat")


function minificarCSS() {
    return gulp.src("src/**/*.css")
    .pipe(concat("style.min.css"))
    .pipe(cssnano())
    .pipe(gulp.dest("build/assets/css"))
}
function minificarHTML() {
    return gulp.src("src/**/*.html")    
    .pipe(concat("index.min.html"))
    .pipe(htmlmin({
        collapseWhitespace:true,
        removeComments:true
    }))
    .pipe(gulp.dest("build"))
}

function watch(){
    gulp.watch("src/**/*.css",gulp.series(minificarCSS))
    gulp.watch("src/**/*.html",gulp.series(minificarHTML))
}

gulp.task("default",gulp.series(minificarHTML,minificarCSS,watch))
