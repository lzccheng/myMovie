"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const egg_1 = require("egg");
class HomeController extends egg_1.Controller {
    async index() {
        const { ctx } = this;
        const { query } = ctx;
        let data = await ctx.model.Movie.findOne({ _id: query.id });
        console.log(data);
        await ctx.render('detail.js', {
            title: data.info.title,
            keywords: '最新电影，电影，好看电影',
            description: '最新电影尽在88影视院',
            data
        });
    }
}
exports.default = HomeController;
