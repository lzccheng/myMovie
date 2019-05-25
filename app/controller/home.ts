import { Controller } from 'egg';
export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    await ctx.render('home.js', {
      title: '88影视院',
      keywords: '最新电影，电影，好看电影',
      description: '最新电影尽在88影视院',
      message: { text: 'Ant Design Tab Theme and Code Spliting' }
    });
  }
}