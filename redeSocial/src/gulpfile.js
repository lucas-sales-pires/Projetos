import cssnano from 'gulp-cssnano';
import pkg from 'gulp';
const { src, dest, task, watch } = pkg;
import htmlmin from 'gulp-htmlmin';
import babel from 'gulp-babel';
import imgmin from 'gulp-imagemin';
import concat from "gulp-concat";

function minificarHTML() {
  watch('./src/**/*.html',() => {
    src('src/**/*.html')
      .pipe(htmlmin({
        collapseWhitespace: true,
        removeComments: true,
      }))
      .pipe(concat("min.html"))
      .pipe(dest('build'));
  });
}

function minificarCSS() {
  watch('src/**/*.css',() => {
    src('src/**/*.css')
      .pipe(cssnano())
      .pipe(dest('build/assets/css'));
  });
}

function minificarJS() {
  watch('src/**/*.js',() => {
    src('src/**/*.js')
      .pipe(babel({
        presets: ['env'],
        comments: false,
      }))
      .pipe(dest('build/assets/javascript/'));
  });
}

function minificarIMG() {
  watch('src/img/*.*',() => {
    src('src/img/*.*')
      .pipe(imgmin())
      .pipe(dest('build/assets/img'));
  });
}

function minificarTS() {
  watch('src/typescript/*.ts',() => {
    src('src/typescript/*.ts')
      .pipe(tsProject())
      .pipe(babel({
        presets: ['env'],
        comments: false,
      }))
      .pipe(dest('build/assets/typescript/'));
  });
}

task('minificarHTML', minificarHTML);
task('minificarCSS', minificarCSS);
task('minificarJS', minificarJS);
task('minificarIMG', minificarIMG);
task('minificarTS', minificarTS);

export {
  minificarHTML,
  minificarCSS,
  minificarJS,
  minificarIMG,
  minificarTS,
};
