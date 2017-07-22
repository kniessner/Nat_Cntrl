const express = require('express');
const app = express();

const router = express.Router;
const server = require('http').createServer(app);
const routes = require('./server/routes');

var http = require('http'),
    httpProxy = require('http-proxy');
    var apiProxy = httpProxy.createProxyServer();



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


app.get("/api/*", function(req, res){
  apiProxy.web(req, res, { target: 'http://google.com:80' });
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



 // get the remote IP
 var remotehost = req.connection.remoteAddress;
 if(typeof(req.headers["x-forwarded-for"]) !== 'undefined')
 {
 var forwardedFor = req.headers["x-forwarded-for"].split(",");
 remotehost = forwardedFor[forwardedFor.length-1].trim();
 }
 console.log(remotehost);

/*

//
// Create your proxy server and set the target in the options.
//
httpProxy.createProxyServer({target:'http://kniessner.com:8080'}).listen(3090); // See (†)

//
// Create your target server
//
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
  res.end();
  console.log(req);
}).listen(9000);



var options = {
  hostnameOnly: true,
  router: {
    'kniessner.com': '127.0.0.1:9000',
    'domaintwo.net': '127.0.0.1:9001',
    'domainthree.org': '127.0.0.1:9002'
  }
}

//
// ...and then pass them in when you create your proxy.
//
var proxyServer = httpProxy.createServer(options).listen(80);*/
