import { Controller } from 'egg';
export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    const { query } = ctx;
    let data = await ctx.model.Movie.findOne({ _id: query.id });
    await ctx.render('detail.js', {
      title: data.title,
      keywords: '最新电影，电影，好看电影',
      description: '最新电影尽在88影视院',
      data
    });
  }
}