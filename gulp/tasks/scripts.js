import gulp from 'gulp';
import webpackStream from 'webpack-stream';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import { path } from '../config/path.js';

export const scripts = () => (
  gulp.src(path.src.scripts)
    .pipe(plumber(notify.onError({
      title: 'JS',
      message: 'Error: <%= error.message %>',
    })))
    .pipe(webpackStream(
      {
        mode: path.isDev ? 'development' : 'production',
        output: {
          filename: 'common.js',
        },
        module: {
          rules: [{
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          }],
        },
      },
    ))
    .on('error', (err) => {
      console.error('WEBPACK ERROR', err);
      this.emit('end'); // Don't stop the rest of the task
    })
    .pipe(rename({
      basename: 'scripts',
      suffix: '.min',
    }))
    .pipe(gulp.dest(path.build.scripts))
);

export const scriptsWatch = () => {
  gulp.watch(path.watch.scripts, scripts);
};
