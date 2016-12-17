'use strict';

const path = require('path');
const gulp = require('gulp');
const conf = require('./conf');
const poststylus = require('poststylus');
const rucksack = require('rucksack-css');
const fontMagician = require('postcss-font-magician');
const lost = require('lost');
const rupture = require('rupture');
const browserSync = require('browser-sync');
const mdcss = require('mdcss');
const plugins = require('gulp-load-plugins')();

let options = {
  use: [rupture(), poststylus([lost(), fontMagician(), rucksack({ autoprefixer: true })])],
  compress: false
}

gulp.task('styles-reload', ['styles'], () => {
  return buildStyles()
    .pipe(browserSync.stream());
});

gulp.task('styles', () => {
  return buildStyles();
});

let buildStyles = () => {
  return gulp.src([
      path.join(conf.paths.src, '/app/styl/style.styl')
    ])
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.stylus(options)).on('error', conf.errorHandler('Stylus'))
    .pipe(plugins.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app/')));
};
