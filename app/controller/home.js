"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class HomeController extends egg_1.Controller {
    async index() {
        const { ctx } = this;
        let data = await ctx.model.Movie.find();
        data = data.map(item => {
            if (item.info.title && item.info.poster)
                return item;
        }).filter(i => i);
        await ctx.render('home.js', {
            title: '88影视院',
            keywords: '最新电影，电影，好看电影',
            description: '最新电影尽在88影视院',
            message: { text: 'Ant Design Tab Theme and Code Spliting' },
            data
        });
    }
}
exports.default = HomeController;
