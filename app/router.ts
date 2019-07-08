
import { Application } from 'egg';
export default (app: Application) => {
  app.router.redirect('/', '/index');
  app.get('/index', app.controller.home.index);
  app.get('/detail', app.controller.detail.index);
  app.get('/get_data', app.controller.getdata.index);
};
