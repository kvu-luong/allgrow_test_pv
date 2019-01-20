'use strict';
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var { series } = require('gulp');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var del = require('del');

const clean = () => del(['dist']);

const browserSync = require("browser-sync");

const server = browserSync.create();

const paths = {
    script_initial: {
      js: './src/asset/js/*.js',
      scss: './src/asset/sass/*.scss'
    },
    script_final: {
        js: './src/dist/js',
        css: './src/dist/css'
    }
};

function reload(done) {
    server.reload();
    done();
}

function serve(done) {
    server.init({
      server: {
        baseDir: './src'
      }
    });
    done();
  }

function minifyjs(){
  return gulp.src(paths.script_initial.js)
        .pipe(uglify())
        .pipe(gulp.dest(paths.script_final.js));  
};
 
function scss() {
  return gulp.src(paths.script_initial.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({ suffix: ".min" }))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(gulp.dest(paths.script_final.css));
};
 
const watch = () => {
    gulp.watch(paths.script_initial.js, gulp.series(minifyjs, reload));
    gulp.watch(paths.script_initial.scss, gulp.series(scss, reload));
}

const dev = gulp.series(clean, minifyjs, scss, serve, watch);

exports.default = dev;
exports.browser = serve;
