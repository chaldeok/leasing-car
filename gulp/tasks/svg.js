const gulp = require('gulp');
const svgSprite = require('gulp-svg-sprite');

const paths = require('../paths');

gulp.task('getSvg', () => {
  return gulp.src(paths.app.svg)
    .pipe(svgSprite(
      {
        mode: {
          stack: {
            sprite: '../icons/icons.svg', // sprite file name
            example: true
          }
        }
      }
    ))
    .pipe(gulp.dest(paths.dist.svg))
})

