/**
 * [express description]
 * @type {[type]}
 */
const express = require('express');
const app = express();
const server = require('http').createServer(app);

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const request = require('request');

const sio = require('./server/modules/sockets.js')(server);
const {cpu} = require('./server/modules/sys.js');
const {current_date} = require('./server/modules/get_infos.js');
const rout = require('./server/routes');
require('./data/constants.js')(app);
//const modules = require('./server/index.js');



app.use(express.static(__dirname + '/app'));
if (process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    historyApiFallback: true,
    port: 3030,
    publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}

sio;

server.listen(80, function(error) {
  if (error) console.error(error);
  else  console.info('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser. -%s', this.address().port,this.address().port, app.settings.env);
});





//io.origins(['http://localhost:3030/','http://wiresense.herokuapp.com/']);
