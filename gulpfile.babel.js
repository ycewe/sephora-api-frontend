const gulp = require('gulp');
const babel = require('gulp-babel');
const csso = require('gulp-csso');
const sass = require('gulp-sass');
const mocha = require('gulp-mocha-co');
const eslint = require('gulp-eslint');
const nodemon = require('nodemon');
const webpack = require('webpack-stream');

const webpackConfig = require('./webpack.dev.config.js');

const rootDir = './dist';

// required dependencies for es6 in gulp
require('babel-register');
require('babel-polyfill');

// lint task
gulp.task('lint', () =>
  gulp.src(['./client/**/*.js', '!node_modules/**', '!./client/resources/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.formatEach())
    .pipe(eslint.failAfterError()),
);

// run test
gulp.task('test', () => {
  gulp.src('tests/*.test.js')
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(mocha({
      reporter: 'Spec',
    }));
});

// minimizing files and bundling
gulp.task('css', () =>
  gulp.src('./client/resources/**/*.scss')
    .pipe(
      sass({
        includePaths: ['./client/resources'],
        errLogToConsole: true,
      }))
    .pipe(csso())
    .pipe(gulp.dest(`${rootDir}/resources`)),
);

gulp.task('html', () =>
  gulp.src('./client/*.html')
    .pipe(gulp.dest(rootDir)),
);

gulp.task('bundle', () =>
  gulp.src('./client/main.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(rootDir)),
);

// watch file changes
gulp.task('watch', () => {
  gulp.watch('./client/resources/style/**/*.scss', ['css']);
  gulp.watch('./client/*.html', ['html']);
  gulp.watch('./client/**/*.js', ['bundle']);
});

// run gulp task for development
gulp.task('default', ['watch', 'css', 'html', 'bundle'], () => {
  nodemon({
    script: 'server.js',
    ignore: ['./dist/'],
  });
});
