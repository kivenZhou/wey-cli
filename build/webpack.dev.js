const webpack = require('webpack')
const webpackBase = require('./webpack.base')
const merge = require('webpack-merge')
const clearConsole = require('react-dev-utils/clearConsole')
const WebpackDevServer = require('webpack-dev-server')
const openBrowser = require('react-dev-utils/openBrowser')



module.exports = merge(webpackBase, {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    host: 'localhost',
    port: '8010',
    hot: true,
    //  启用服务端压缩
    compress:true,
    // before: function() {
    //   if (openBrowser('http://localhost:8010')) {
    //     console.log('The browser tab has been opened!');
    //   }
    // },
    after: function() {
      if (openBrowser('http://localhost:8010')) {
        console.log('The browser tab has been opened!');
      }
      clearConsole()
    }
  }
})

// let config = merge(webpackBase, {
//   mode: 'development',
//   plugins: [
//     new webpack.HotModuleReplacementPlugin()
//   ]
// })

// const compiler = webpack(config)

// compiler.hooks.done.tap('done', function(stats) {
//   var rawMessages = stats.toJson({}, true);
//   var messages = formatWebpackMessages(rawMessages);
//   if (!messages.errors.length && !messages.warnings.length) {
//     console.log('Compiled successfully!');
//   }
//   if (messages.errors.length) {
//     console.log('Failed to compile.');
//     messages.errors.forEach(e => console.log(e));
//     return;
//   }
//   if (messages.warnings.length) {
//     console.log('Compiled with warnings.');
//     messages.warnings.forEach(w => console.log(w));
//   }
// });

// const app = new WebpackDevServer(compiler, {
//   compress:true,
//   hot: true
// })

// app.listen(8010, 'localhost', function(err) {
//   if (err) {
//     console.log(err)
//   } else {
//     clearConsole()
//     if (openBrowser('http://localhost:8010')) {
//       console.log('The browser tab has been opened!');
//     }
    
//   }
// })