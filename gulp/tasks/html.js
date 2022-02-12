import gulp from 'gulp';
import fileInclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import replace from 'gulp-replace';
import beautify from 'gulp-beautify';
import gulpif from 'gulp-if';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import webpInHtml from 'gulp-webp-html-nosvg';
import { path } from '../config/path.js';

export const html = () => (
  gulp.src(path.src.html)
    .pipe(plumber(notify.onError({
      title: 'HTML',
      message: 'Error: <%= error.message %>',
    })))
    .pipe(fileInclude({
      prefix: '@',
    }))
    .pipe(replace(/@img\//g, 'images/'))
    .pipe(webpInHtml())
    .pipe(beautify.html({
      indent_size: 2,
    }))
    .pipe(gulpif(path.isProd, htmlmin({
      collapseWhitespace: true,
    })))
    .pipe(gulp.dest(path.build.html))
);

export const htmlsWatch = () => {
  gulp.watch(path.watch.html, html);
};
