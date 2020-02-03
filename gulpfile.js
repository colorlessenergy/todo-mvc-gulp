const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

gulp.task('styles', function() {
  return gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css/'))
});

gulp.task('concat', function () {
  return gulp.src(['js/models/*.js', 'js/controllers/*.js', 'js/views/*.js'])
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./build/js/'))
});

gulp.task('watch', function () {
  gulp.watch('sass/**/*.scss', gulp.series(['styles']));
  gulp.watch('js/**/*.js', gulp.series(['concat']));
});

gulp.task('default', gulp.series(['styles', 'concat']));