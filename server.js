var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3030;
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs');

/** Description of prop "foo". */
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

fs.watch('./src', function(event, filename) {
  console.log('event is: ' + event);
  if (filename) {
    console.log('filename provided: ' + filename);
  } else {
    console.log('filename not provided');
  }
});

app.use(express.static(path.join(__dirname, 'app')));

app.get('*', function(request, response) {
  response.sendFile(__dirname + '/app/index.html')
});

app.get('/style/', function(request, response) {
  response.sendFile(__dirname + '/styleguide/index.html')
});

io.on('connection', function(client) {
  console.log('client connected!');
  client.emit('news', {hello: 'world'});
  client.on('join', function(data) {
    console.log(data);
  });
});

server.listen(PORT, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
  }
});
