import browserSync from 'browser-sync';
import { path } from '../config/path.js';

export const server = (callback) => {
  browserSync.create().init({
    server: {
      baseDir: path.buildFolder,
    },
    files: [
      path.watch.html,
      path.watch.styles,
      path.watch.scripts,
      path.watch.assets,
      {
        match: path.build.images,
        fn() {
          this.reload();
        },
      },
    ],
    open: false,
    notify: false,
  });

  callback();
};
