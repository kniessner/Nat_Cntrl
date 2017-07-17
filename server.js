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


var os = require('os');
var ifaces = os.networkInterfaces();
var server_ip;

Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      console.log(ifname, iface.address);
    }
    server_ip = iface.address;
    ++alias;
  });
});


//require('./server_modules/google_init.js');

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
    console.info('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT, PORT);
  }
});



io.on('connection', function(client) {
  console.log('client connected!');

  client.on('disconnect', function(){
    console.log('user disconnected');
  });

  client.emit('news', {topic: 'update available'});

  client.emit('message', {title: 'hello world'});

  client.emit('wire', {device_connected: 'server_'+server_ip});

  client.on('join', function(data) {
    console.log(data);
  });

  client.on('message', function(data) {
    console.log('message', data);
  });

});
