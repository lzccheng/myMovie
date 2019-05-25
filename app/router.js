"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    app.get('/', app.controller.home.index);
    app.get('/detail', app.controller.detail.index);
};
