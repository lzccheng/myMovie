"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ip = require("ip");
const path = require("path");
exports.default = (app) => {
    const config = {};
    config.view = {
        cache: 0
    };
    config.static = {
        maxAge: 0
    };
    config.development = {
        watchDirs: ['build'],
        ignoreDirs: ['app/web', 'public', 'config']
    };
    config.logview = {
        dir: path.join(app.baseDir, 'logs')
    };
    config.reactssr = {
        injectCss: true
    };
    const localIP = ip.address();
    const domainWhiteList = [];
    [7001, 9000, 9001].forEach((port) => {
        domainWhiteList.push(`http://localhost:${port}`);
        domainWhiteList.push(`http://127.0.0.1:${port}`);
        domainWhiteList.push(`http://${localIP}:${port}`);
    });
    config.security = { domainWhiteList };
    return config;
};
