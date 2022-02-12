import gulp from 'gulp';
import { path } from '../config/path.js';

export const assets = () => (
  gulp.src(path.src.assets)
    .pipe(gulp.dest(path.build.assets))
);

export const assetsWatch = () => {
  gulp.watch(path.watch.assets, assets);
};
