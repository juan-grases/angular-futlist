var gulp = require('gulp');
var sass = require('gulp-sass');
var karma = require('karma').server;

gulp.task('sass', function () {
    gulp.src('./public/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
});
/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done);
});
/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done);
});

gulp.task('default', ['sass', 'tdd'], function(){
	gulp.watch("./public/sass/*.scss", ['sass']);
});