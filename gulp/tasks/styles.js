import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCss from 'gulp-clean-css';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
import sourcemap from 'gulp-sourcemaps';
import gcmq from 'gulp-group-css-media-queries';
import webpCss from 'gulp-webp-css-fixed';
import beautify from 'gulp-beautify';
import { path } from '../config/path.js';

const sass = gulpSass(dartSass);

export const styles = () => (
  gulp.src(path.src.styles)
    .pipe(plumber(notify.onError({
      title: 'SCSS',
      message: 'Error: <%= error.message %>',
    })))
    .pipe(gulpif(path.isDev, sourcemap.init()))
    .pipe(sass({
      includePaths: ['./node_modules'],
      grid: true,
      cascade: true,
    }))
    .pipe(replace(/@img\//g, '../images/'))
    .pipe(gcmq())
    .pipe(webpCss(['.jpg', '.jpeg']))
    .pipe(gulpif(path.isProd, autoprefixer({
      cascade: false,
      grid: true,
    })))
    .pipe(beautify.css({ indent_size: 2 }))
    .pipe(gulpif(path.isProd, cleanCss({ level: 2 })))
    .pipe(rename({
      basename: 'styles',
      suffix: '.min',
    }))
    .pipe(gulpif(path.isDev, sourcemap.write('.')))
    .pipe(gulp.dest(path.build.styles))
);

export const stylesWatch = () => {
  gulp.watch(path.watch.styles, styles);
};
