import pkg from 'gulp';
const { task,series } = pkg;
import {
  minificarHTML,
  minificarCSS,
  minificarIMG,
  minificarJS,
  minificarTS,
} from './src/gulpfile.js';

task('default', series(minificarHTML, minificarCSS, minificarIMG, minificarTS, minificarJS));
