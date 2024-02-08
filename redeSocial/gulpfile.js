import pkg from 'gulp';
const { task,series } = pkg;
import {
  minificarHTML,
  minificarCSS,
  minificarIMG,
  minificarJS,
  minificarTS,
} from './src/gulpfile.js';

task('default', series( minificarCSS,minificarHTML, minificarIMG, minificarJS,minificarTS));
