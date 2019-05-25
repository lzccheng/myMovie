// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportMovie = require('../../../app/model/Movie');

declare module 'egg' {
  interface IModel {
    Movie: ReturnType<typeof ExportMovie>;
  }
}
