
/**
 * [express description]
 * @type {[type]}
 */
const express = require('express');
const app = express();
//const router = express.Router;
const server = require('http').createServer(app);

const io = require('socket.io')(server);
//const io_base = require('./server/modules/socket_base');

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const request = require('request');
const log = require('./server/modules/console_mod.js');
const sio = require('./server/modules/sockets.js');
//const rout = require('./server/routes')(app,server);

require('./data/constants.js')(app);
const modules = require('./server/index.js');

modules.cloud;

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



app.on('mount', function (parent) {
  console.log('App Mounted');
  console.log(parent); // refers to the parent app
});



server.listen(process.env.PORT || 3030, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser. -%s', this.address().port,this.address().port, app.settings.env);
  }
})

io.on('connect', function(client) {
  console.log('Client connected...'+ client.id);

  log.sys('client ', 'found', client.id);
  const client_origin =  'localhost';
  console.log(client.handshake.headers);
  /*
  if(client.handshake.headers){
    client_origin = client.handshake.headers;
  }*/

  client.on('register', function(data){
    log.sys('client ', 'connected', client.id);
  });
  client.on('disconnect', function(data){
    log.sys('client', 'disconnected', client.id);
  });
  client.on('wire', function(data) {
    log.client(client.id,'wire',data );
  });
  client.on('message', function(data) {
    client.broadcast.emit('message', { from:  data.from  ,title: data.title, msg: data.msg  });
  });
  client.on('log', function(data) {
    log.client(client.id,'log',data );
  });

  client.on('exec', function(data) {
    log.client(client.id,'exec',data);
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      log.inf('exec',`stdout: ${stdout}`);
      log.inf('exec',`stderr: ${stderr}`);
    });
  });

  client.broadcast.emit('message', { from:  'server'  ,title:'new client', msg: client.id });
  client.on('ping', function(data) {
    var i = 0;
    setInterval(function() {
      client.emit('ping', {
        client: client.id,
        message: i++
      });
    }, 1000);
  });
});
