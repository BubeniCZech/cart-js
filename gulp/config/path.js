import * as nodePath from 'path';

const rootFolder = nodePath.basename(nodePath.resolve());
const srcFolder = './src';
const buildFolder = './build';

export const path = {
  rootFolder,
  srcFolder,
  buildFolder,

  src: {
    html: `${srcFolder}/*.html`,
    styles: `${srcFolder}/scss/**/*.scss`,
    scripts: `${srcFolder}/js/**/*.js`,
    assets: `${srcFolder}/assets/**/*.*`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg,webp}`,
    iconsMono: `${srcFolder}/images/icons/mono/**/*.svg`,
    iconsMulti: `${srcFolder}/images/icons/multi/**/*.svg`,
  },

  build: {
    html: `${buildFolder}/`,
    styles: `${buildFolder}/css`,
    scripts: `${buildFolder}/js`,
    assets: `${buildFolder}/assets`,
    images: `${buildFolder}/images`,
  },

  watch: {
    html: `${srcFolder}/**/*.html`,
    styles: `${srcFolder}/scss/**/*.scss`,
    scripts: `${srcFolder}/js/**/*.js`,
    assets: `${srcFolder}/assets/**/*.*`,
    images: `${srcFolder}/images/**/*.{jpg,jpeg,png,svg}`,
    iconsMono: `${srcFolder}/images/icons/mono/**/*.svg`,
    iconsMulti: `${srcFolder}/images/icons/multi/**/*.svg`,
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};
