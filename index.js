const express = require('express');
const app = express();

const router = express.Router;
const server = require('http').createServer(app);
const routes = require('./server/routes');


const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

require('./server/server_modules/globals.js')(app);
const dt = require('./server/server_modules/constants.js'); //Datastore

app.use(express.static(__dirname + '/app'));
//app.use(express.static(__dirname + '/doc'));


if (process.env.NODE_ENV !== 'production') {
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  var webpack = require('webpack');
  var config = require('./webpack.config');
  var compiler = webpack(config);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
  app.use(webpackHotMiddleware(compiler));
}


server.listen(PORT, function(error) {
var host = server.address().address;
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT);
    require('./server/index.js')(app);
    require('./server/server_modules/socket_base.js')(server);
  }
});


var http = require('http'),
    httpProxy = require('http-proxy');
//
// Create your proxy server and set the target in the options.
//
httpProxy.createProxyServer({target:'http://kniessner.com'}).listen(8000); // See (†)

//
// Create your target server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
}).listen(9000);
