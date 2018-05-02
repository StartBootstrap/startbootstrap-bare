var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var pkg = require('./package.json');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

// Copy third party libraries from /node_modules into /vendor
gulp.task('vendor', function() {

  // Bootstrap
  gulp.src([
      './node_modules/bootstrap/dist/**/*',
      '!./node_modules/bootstrap/dist/css/bootstrap-grid*',
      '!./node_modules/bootstrap/dist/css/bootstrap-reboot*'
    ])
    .pipe(gulp.dest('./vendor/bootstrap'))

  // jQuery
  gulp.src([
      './node_modules/jquery/dist/*',
      '!./node_modules/jquery/dist/core.js'
    ])
    .pipe(gulp.dest('./vendor/jquery'))

})

// Default task
gulp.task('default', ['vendor', 'sass', 'assets', 'javascript', 'components', 'layouts']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('sass', function () {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('assets', function() {
    return gulp.src('./assets/**/*')
        .pipe(gulp.dest('./dist/assets'));
});

gulp.task('assets:watch', function(){
    gulp.watch('./assets/**/*', ['assets']);
})

gulp.task('javascript', function() {
    return gulp.src('./javascript/**/*')
        .pipe(gulp.dest('./dist/javascript'));
})

gulp.task('javascript:watch', function(){
    gulp.watch('./javascript/**/*', ['javascript']);
})

gulp.task('components', function() {
    return gulp.src('./components/**/*')
        .pipe(gulp.dest('./dist/components'));
})

gulp.task('components:watch', function(){
    gulp.watch('./components/**/*', ['components']);
})

gulp.task('layouts', function() {
    return gulp.src('./layouts/**/*')
        .pipe(gulp.dest('./dist/layouts'));
})

gulp.task('layouts:watch', function(){
    gulp.watch('./layouts/**/*', ['layouts']);
})

 
gulp.task('sass:watch', function () {
  gulp.watch('./scss/**/*.scss', ['sass']);
});

// Dev task
gulp.task('dev', ['browserSync', 'sass:watch', 'assets:watch', 'javascript:watch', 'components:watch', 'layouts:watch'], function() {
  gulp.watch('./dist/**/*', browserSync.reload);
  gulp.watch('./**/*.html', browserSync.reload);
});
