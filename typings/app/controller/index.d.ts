// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportDetail from '../../../app/controller/detail';
import ExportGetdata from '../../../app/controller/getdata';
import ExportHome from '../../../app/controller/home';

declare module 'egg' {
  interface IController {
    detail: ExportDetail;
    getdata: ExportGetdata;
    home: ExportHome;
  }
}
