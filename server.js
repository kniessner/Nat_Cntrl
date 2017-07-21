
const fs = require('fs');
const nodemon = require('nodemon');
const path = require('path');
const express = require('express');
const app = express();
const server = require('http').createServer(app);

require('./server/server_modules/globals.js')(app);




// using webpack-dev-server and middleware in development environment
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

app.use(express.static(path.join(__dirname, 'app')));
app.get('*', function(request, response) {
  response.sendFile(__dirname + '/app/index.html')
});
app.get('/style/', function(request, response) {
  response.sendFile(__dirname + '/styleguide/index.html')
});

server.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT,PORT);
    require('./server/index.js')(app);
    require('./server/server_modules/socket_base.js')(server);

  }
});
