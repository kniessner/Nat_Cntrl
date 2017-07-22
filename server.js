const express = require('express');
const app = express();
const router = express.Router;
const server = require('http').createServer(app);
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
require('./data/constants.js')(app);
//const rout = require('./server/routes')(app,server);

app.use(express.static(__dirname + '/app'));
if (process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    hot: true,
    historyApiFallback: true,
    publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}

server.listen(process.env.PORT || 3030, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser. -%s', this.address().port,this.address().port, app.settings.env);
    require('./server/index.js')(app,server);
  }
})
