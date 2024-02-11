import cssnano from 'gulp-cssnano';
import pkg from 'gulp';
const { src, dest, task, watch, series } = pkg;
import htmlmin from 'gulp-htmlmin';
import babel from 'gulp-babel';
import imgmin from 'gulp-imagemin';
import concat from "gulp-concat";
import ts from 'gulp-typescript';

const tsProject = ts.createProject('tsconfig.json');

export const minificarHTML = () => {


  return src('./src/**/*.html')
    .pipe(concat("min.html"))
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
    }))

    .pipe(dest('build'));
};


export const minificarCSS = () => {
  return src('./src/**/*.css')
    .pipe(concat("min.css"))
    .pipe(cssnano())
    .pipe(dest('build/assets/css'));
};


export const minificarJS = () => {
  return src('./src/assets/javascript/*.js')
    .pipe(babel({
      presets: ['@babel/env'],
      comments: false,
    }))
    .pipe(dest('build/assets/javascript'));
};


export const minificarIMG = () => {
  return src('./src/img/*.*')
    .pipe(imgmin())
    .pipe(dest('build/assets/img'));
};


export const minificarTS = () => {

  return src('./src/typescript/*.ts')
    .pipe(tsProject())
    .pipe(babel({
      presets: ['env'],
      comments: false,
    }))
    .pipe(dest('build/assets/typescript'));
}


task('minificarHTML', minificarHTML);
task('minificarCSS', minificarCSS);
task('minificarJS', minificarJS);
task('minificarIMG', minificarIMG);
task('minificarTS', minificarTS);

task('default', series(minificarHTML, minificarCSS, minificarJS, minificarIMG, minificarTS));

watch('./src/**/*.html', minificarHTML);
watch('./src/**/*.css', minificarCSS);
watch('./src/**/*.js', minificarJS);
watch('./src/img/*.*', minificarIMG);
watch('./src/typescript/*.ts', minificarTS);

