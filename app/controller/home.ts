import { Controller } from 'egg';
export default class HomeController extends Controller {
  public async index() {
    const { ctx } = this;
    // console.log('mongoose:',await ctx.model.Movie.find());
    let data = await ctx.model.Movie.find();
    data = data.map(item => {
      if (item.title && item.poster) return item; 
    }).filter(i => i)
    await ctx.render('home.js', {
      title: '88影视院',
      keywords: '最新电影，电影，好看电影',
      description: '最新电影尽在88影视院',
      message: { text: 'Ant Design Tab Theme and Code Spliting' },
      data
    });
  }
}