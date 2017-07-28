/**
 * [express description]
 * @type {[type]}
 */
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const fs = require('fs');
const path = require('path');
const chalk = require('chalk');
const request = require('request');
const { exec } = require('child_process');

const log = require('./server/modules/console_mod.js');
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



server.listen(process.env.PORT || 3030, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser. -%s', this.address().port,this.address().port, app.settings.env);
  }
});



function socket_handshake(x){
  return x.handshake.headers;
}

//io.origins(['http://localhost:3030/','http://wiresense.herokuapp.com/']);
io.on('connect', function(client) {
  let client_origin =  'localhost';
  log.sys('Client connected...'+ client.id);
  let header = socket_handshake(client);
  if(header.origin){
    log.sys('origin > ',header.origin);
  }else{
    log.sys('header > ',header);
  }

  /**
  * Get & Log
  */
  client.on('register', function(data){
    log.sys('client ', 'connected', client.id);
  });
  client.on('disconnect', function(data){
    log.sys('client', 'disconnected', client.id);
  });
  client.on('wire', function(data) {
    log.client(client.id,'wire',data );
  });
  client.on('log', function(data) {
    log.client(client.id,'log',data );
  });

  /**
  * Get & Emit
  */

  client.on('message', function(data) {
    client.broadcast.emit('message', { from:  data.from  ,title: data.title, msg: data.msg  });
  });

  /**
  * Get & Exec
  */


  client.on('exec', function(cmd) {
    log.client(client.id,'exec',cmd);


    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        return;
      }
      log.inf('exec',`stdout: ${stdout}`,stdout);
      log.inf('exec',`stderr: ${stderr}`);
      var lines = stdout.toString().split('\n');
      var results = new Array();
      lines.forEach(function(line) {
          var parts = line.split('=');
          results[parts[0]] = parts[1];
      });
      client.emit('display', {type:'array', name:'exec_out', data: lines, raw: stdout});
      return results

    });
  });

  client.on('sys', function(data) {
    console.log('sys',data);
    switch(data) {
        case 'client':
            log.sys('client send header ',header);
            client.emit('display', {type:'object', name:'client_header', data: header});
            break;
       case 'sys':
            //client.broadcast.emit('data', {'sys'});
            break;
        default:
        client.emit('display', {type:'string', name:'error', data:'no sys data found'});
    }
  });


  /**
  * Emits
  */
  //client.emit('display', {type:'string', name:'message', data:'hello'});

  io.emit('message', { from:  'server'  ,title:'new client', msg: client.id });

});
