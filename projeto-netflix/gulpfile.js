import gulp from "gulp";
import cssnano from "gulp-cssnano";
import htmlmin from "gulp-htmlmin";
import concat from "gulp-concat" ;
import imagemin from "gulp-imagemin";


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
function minificarIMG() {
    return gulp.src("src/assets/img/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest("build/img"))
}

function watch(){
    gulp.watch("src/**/*.css",gulp.series(minificarCSS))
    gulp.watch("src/**/*.html",gulp.series(minificarHTML))
}

gulp.task("default",gulp.series(minificarHTML,minificarCSS,minificarIMG,watch))
