const gulp = require('gulp');
const csso = require('gulp-csso');
const sass = require('gulp-sass');
const eslint = require('gulp-eslint');
const nodemon = require('nodemon');
const webpack = require('webpack-stream');

const webpackConfig = (process.env.NODE_ENV === 'production') ?
  require('./webpack.prod.config.js') : require('./webpack.dev.config.js');

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
  gulp.watch('./client/resources/**/*.scss', ['css']);
  gulp.watch('./client/*.html', ['html']);
  gulp.watch('./client/**/*.js', ['bundle']);
});

// build for deployment
gulp.task('build', ['css', 'html', 'bundle']);

// build for development
gulp.task('default', ['watch', 'css', 'html', 'bundle'], () => {
  nodemon({
    script: 'server.js',
    ignore: ['./dist/'],
  });
});
