'use strict';
// https://www.yuque.com/easy-team/egg-react/config
const path = require('path');
const resolve = (filepath) => path.resolve(__dirname, filepath);
module.exports = {
  devtool: 'eval',
  entry: {
    home: 'app/web/page/home/index.tsx',
    detail: 'app/web/page/detail/index.tsx'
  },
  lib: ['react', 'react-dom'],
  loaders: {
    babel: {
      include: [resolve('app/web'), resolve('node_modules')]
    },
    less: {
      include: [resolve('app/web'), resolve('node_modules')],
      options: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#1890ff',
          'link-color': '#fff',
          'border-radius-base': '2px'
        }
      }
    },
    typescript: true
  },
  plugins: {
    imagemini: false
  },
  done() {
    console.log('---webpack compile finish---');
  }
};