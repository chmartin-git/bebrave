'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const changed = require('gulp-changed');

var SCSS_SRC = '../client/src/assets/style/sass/**/*.sass';
var SCSS_DST = '../client/src/assets/style/css';

gulp.task('compile', function(){
    return gulp.src(SCSS_SRC)
            .pipe(sass().on('error', sass.logError))
            .pipe(minifyCSS())
            .pipe(rename({suffix: '.min'}))
            .pipe(changed(SCSS_DST))
            .pipe(gulp.dest(SCSS_DST));
});

gulp.task('watch', function(){
    gulp.watch(SCSS_SRC, gulp.parallel('compile'));
});

gulp.task('default', gulp.parallel('watch'));



