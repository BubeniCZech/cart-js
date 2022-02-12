import gulp from 'gulp';
import { clean } from './gulp/tasks/clean.js';
import { html, htmlsWatch } from './gulp/tasks/html.js';
import { styles, stylesWatch } from './gulp/tasks/styles.js';
import { scripts, scriptsWatch } from './gulp/tasks/scripts.js';
import { assets, assetsWatch } from './gulp/tasks/assets.js';
import { images, imagesWatch } from './gulp/tasks/images.js';
import { sprites, spritesWatch } from './gulp/tasks/sprites.js';
import { server } from './gulp/tasks/server.js';
import { path } from './gulp/config/path.js';

path.setEnv();

export const build = gulp.series(
  clean,
  gulp.parallel(
    html,
    styles,
    scripts,
    assets,
    images,
    sprites,
  ),
);

export const watch = gulp.series(
  build,
  server,
  gulp.parallel(
    htmlsWatch,
    stylesWatch,
    scriptsWatch,
    assetsWatch,
    imagesWatch,
    spritesWatch,
  ),
);
