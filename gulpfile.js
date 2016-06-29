var gulp = require('gulp');
var less = require('gulp-less');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
    // default tasks here
});

gulp.task('less', function() {
    return gulp.src('src/less/sb-bare.less') // Gets all files ending with .less in app/less
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Grab the Bootstrap CSS and JS files from node_modules and put them in src
gulp.task('bootstrap', function() {
    return gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('src'))
})

// Grab jQuery and put it in src
gulp.task('jquery', function() {
    return gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('src/js'))
})

// All bower component tasks
gulp.task('update', ['bootstrap', 'jquery']);

// browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'src'
        },
    })
})

// Watch Task
gulp.task('watch', ['browserSync', 'less'], function() {
    gulp.watch('src/less/*.less', ['less']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('src/*.html', browserSync.reload);
    gulp.watch('src/js/**/*.js', browserSync.reload);
});
