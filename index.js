const express = require('express');
const app = express();

const router = express.Router;
const server = require('http').createServer(app);
const routes = require('./server/routes');

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const config = require('./webpack.config');

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

require('./server/server_modules/globals.js')(app);
const dt = require('./server/server_modules/constants.js'); //Datastore
const isDeveloping = process.env.NODE_ENV !== 'production';

app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/doc'));

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src'
  });
  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', function(request, response) {
    console.log('id '+request.ip,'host '+request.hostname);
    response.sendFile(__dirname + '/app/index.html');
});


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
