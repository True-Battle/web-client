"use strict";
const ENV = process.env.NODE_ENV;

const gulp = require('gulp'),
  webpackStream = require('webpack-stream'),
  webpack = require('webpack'),
  jade = require('gulp-jade'),
  plumber = require('gulp-plumber'),
  connect = require('gulp-connect'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  ngAnnotate = require('gulp-ng-annotate');

const webpackOptions = ( ENV === 'production' ? require('./webpack.prod') : require('./webpack.dev') );

gulp.task('watch', function() {
  gulp.watch('src/index.jade', ['html']);
  gulp.watch('src/app/**/*.js', ['webpack']);
});

gulp.task('connect', function() {
  return connect.server({
    port: 3030,
    root: 'public',
    livereload: true
  })
});

gulp.task('html', function() {
  return gulp.src('src/index.jade')
    .pipe(plumber())
    .pipe(jade({"pretty": true}))
    .pipe(gulp.dest('public'))
    .pipe(connect.reload())
});

gulp.task('webpack', function() {
  return gulp.src('src/index.js')
    .pipe(plumber())
    .pipe(webpackStream(webpackOptions, webpack))
    // .pipe(ngAnnotate({ add: true }))
    // .pipe(uglify())
    .pipe(gulp.dest('public/'))
    .pipe(connect.reload())
});

gulp.task('common.assets', function() {
  return gulp.src('src/assets/**/*')
    .pipe(gulp.dest('public'));
});

gulp.task('game.assets', function() {
  return gulp.src('src/game-core/assets/*')
    .pipe(plumber())
    .pipe(gulp.dest('public/assets'));
});

gulp.task('vendor', function() {
  return gulp.src('src/vendor/**/*')
    .pipe(gulp.dest('public/vendor/'));
});

// Task for development
gulp.task('dev', ['html', 'webpack', 'common.assets', 'game.assets', 'vendor', 'watch', 'connect']);

// Task for production
gulp.task('default', ['html', 'webpack', 'common.assets', 'game.assets', 'vendor']);