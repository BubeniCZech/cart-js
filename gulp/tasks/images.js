import gulp from 'gulp';
import changed from 'gulp-changed';
import imagemin from 'gulp-imagemin';
import imageminWebp from 'imagemin-webp';
import imageminPngquant from 'imagemin-pngquant';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminSvgo from 'imagemin-svgo';
import rename from 'gulp-rename';
import gulpif from 'gulp-if';
import { path } from '../config/path.js';

const imagesCopy = () => (
  gulp.src(path.src.images)
    .pipe(gulpif(path.isProd, imagemin([
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [0.8, 0.9] }),
      imageminSvgo(),
    ])))
    .pipe(gulp.dest(path.build.images))
);

const imagesWebp = () => (
  gulp.src(path.src.images)
    .pipe(changed(path.build.images, { extension: '.webp' }))
    .pipe(imagemin([
      imageminWebp({ quality: 70 }),
    ]))
    .pipe(rename({
      extname: '.webp',
    }))
    .pipe(gulp.dest(path.build.images))
);

export const images = gulp.series(imagesCopy, imagesWebp);

export const imagesWatch = () => {
  gulp.watch(path.watch.images, images);
};
