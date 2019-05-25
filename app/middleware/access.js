"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
function default_1() {
    const skipExt = ['.png', '.jpeg', '.jpg', '.ico', '.gif'];
    return async (ctx, next) => {
        const start = new Date().getTime();
        await next;
        const rs = Math.ceil(new Date().getTime() - start);
        ctx.set('X-Response-Time', rs);
        const ext = path.extname(ctx.url).toLocaleLowerCase();
        const isSkip = skipExt.indexOf(ext) !== -1 && ctx.status < 400;
        if (!isSkip) {
        }
    };
}
exports.default = default_1;
