/**
 * Created by declan on 17/1/2.
 */
'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var rimraf = require('rimraf');

var dist = './dist';

gulp.task('clean:dist', function (cb) {
    rimraf(dist, cb);
});

gulp.task('dist', ['clean:dist'], function () {
    return gulp.src('src/**/*.js')
        .pipe($.ngAnnotate())
        .pipe($.uglify())
        .pipe(gulp.dest(dist));
});


gulp.task('default', ['dist']);
