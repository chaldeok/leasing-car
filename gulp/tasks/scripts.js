const gulp = require('gulp');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const terser = require('gulp-terser')
const concat = require('gulp-concat');
const mode = require('gulp-mode')();
const paths = require('../paths');

const jsFiles = [
  './././app/js/burger-menu.js',
  './././app/js/swiper-bundle.js',
  './././app/js/slider.js',
  './././app/js/calculator.js'
] // очередность подключения файлов

const scripts = () => {
  return gulp.src(jsFiles) //app/js
    .pipe(plumber())
    .pipe(babel({
      presets: ["@babel/preset-env"]
    }))
    .pipe(concat('scripts.js'))
    .pipe(mode.production(terser()))
    .pipe(gulp.dest(paths.dist.js));
};

module.exports = scripts;
