import del from 'del';
import { path } from '../config/path.js';

export const clean = () => del(path.buildFolder);
