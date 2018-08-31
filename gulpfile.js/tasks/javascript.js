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
var filepath;
var buffer;
var returnStream;


gulp.task('js', function() {
  return gulp.src(config.tasks.js.entry)
    .pipe(through2.obj(function (file, enc, next){
      filepath = file;
      buffer =  enc;
      returnStream = next;

      browserify({entries:[filepath.path]})
        .bundle(function(err, streamData){
          // console.log(err); // enable for troubleshooting
          // console.log(streamData); // json with all data from file.
          filepath.contents = streamData;
          returnStream(null, file);
        })
    }))
    .pipe(plumber({ errorHandler: handleErrors }))
    .pipe(gulpif(process.env.NODE_ENV === 'production', jshint()))
    .pipe(gulpif(process.env.NODE_ENV === 'production', jshint.reporter('default')))
    .pipe(gulpif(process.env.NODE_ENV === 'production', uglify({ compress:{drop_console:true} })))
    .pipe(gulp.dest(config.tasks.js.dest))
    .pipe(browserSync.stream());
});

