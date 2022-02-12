import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import { path } from '../config/path.js';

export const spriteMono = () => (
  gulp.src(path.src.iconsMono)
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: '../sprites/sprite-mono.svg',
          example: true,
        },
        preview: {
          sprite: 'index.html',
        },
      },
      shape: {
        transform: [
          {
            svgo: {
              plugins: [
                {
                  removeAttrs: {
                    attrs: ['class', 'data-name', 'fill.*', 'stroke.*'],
                  },
                },
              ],
            },
          },
        ],
      },
    }))
    .pipe(gulp.dest(path.build.images))
);

export const spriteMulti = () => (
  gulp.src(path.src.iconsMulti)
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: '../sprites/sprite-multi.svg',
          example: true,
        },
        preview: {
          sprite: 'index.html',
        },
      },
      shape: {
        transform: [
          {
            svgo: {
              plugins: [
                {
                  removeAttrs: {
                    attrs: ['class', 'data-name'],
                  },
                },
                {
                  removeUselessStrokeAndFill: false,
                },
                {
                  inlineStyles: true,
                },
              ],
            },
          },
        ],
      },
    }))
    .pipe(gulp.dest(path.build.images))
);

export const sprites = gulp.series(spriteMono, spriteMulti);

export const spritesWatch = () => {
  gulp.watch(path.watch.iconsMono, spriteMono);
  gulp.watch(path.watch.iconsMulti, spriteMulti);
};
