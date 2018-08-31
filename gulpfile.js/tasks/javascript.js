'use strict';

var babel = require('gulp-babel');
var browserSync  = require('browser-sync');
var changed = require('gulp-changed');
var config = require('../config');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var handleErrors = require('../lib/handleErrors');
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
var removeCode = require('gulp-remove-code');
var uglify = require('gulp-uglify');

var through2 =  require('through2');
var browserify =  require('browserify');


gulp.task('js', function() {
  return gulp.src(config.tasks.js.src)
    .pipe(through2.obj(function (file, enc, next){
      browserify(file.path)
        .bundle(function(err, res){
          // assumes file.contents is a Buffer
          file.contents = res;
          next(null, file);
        });
    }))
    .pipe(changed(config.tasks.js.dest))
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(gulpif(process.env.NODE_ENV == 'production', jshint()))
    .pipe(gulpif(process.env.NODE_ENV == 'production', jshint.reporter('default')))
    .pipe(babel({presets: ['es2015']}))
    .pipe(gulpif(process.env.NODE_ENV == 'production', uglify()))
    .pipe(gulp.dest(config.tasks.js.dest))
    .pipe(browserSync.stream());
});

