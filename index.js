const dt = require('./server/server_modules/constants.js'); //Datastore
const colors = require('./server/server_modules/constants.js').colors; //Datastore


const express = require('express');
const app = express();
require('./server/server_modules/globals.js')(app);

const   router = express.Router;
const server = require('http').createServer(app);
const routes = require('./server/routes');

const fs = require('fs');
const nodemon = require('nodemon');
const path = require('path');
const React = require('react');
const ReactEngine = require('react-engine');

const jsx = require('node-jsx');
jsx.install();

const chalk = require('chalk');


const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const config = require('./webpack.config');

const getPort = require('get-port');
const isDeveloping = process.env.NODE_ENV !== 'production';



//require('./server/server_modules/google_init.js');



//app.get('/', routes.index);
app.use(express.static(__dirname + '/app'));
app.use(express.static(__dirname + '/doc'));

// using webpack-dev-server and middleware in development environment
if (isDeveloping) {


  const compiler = webpack(config);

  const middleware = webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));

}

app.get('*', function(request, response) {
    response.sendFile(__dirname + '/app/index.html')
});


server.listen(PORT, function(error) {
var host = server.address().address;
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.', PORT);
    require('./server/index.js')(app);
    require('./server/server_modules/socket_base.js')(server);
    //
  }
});



/********************* ARCHIV SNIPPETS
`******************/
/*
getPort(3000).then(port => {
//    console.log(port);
    var server1 = app.listen(port, function () {
        var host = server.address().address;
        console.log('Listening at http://%s:%s', host, port);
    })
    // Will use 3000 if available, otherwise fall back to a random port
});

app.use('/', function(req, res) {
  var books = [{
    title: 'Professional Node.js',
    read: false
  }, {
    title: 'Node.js Patterns',
    read: false
  }];

  res.setHeader('Content-Type', 'text/html');
  res.end(React.renderToStaticMarkup(
    React.DOM.body(
      null,
      React.DOM.div({
        id: 'root',
        dangerouslySetInnerHTML: {
          __html: React.renderToString(React.createElement(TodoBox, {
            data: data
          }))
        }
      }),
      React.DOM.script({
        'id': 'initial-data',
        'type': 'text/plain',
        'data-json': JSON.stringify(data)
      }),
      React.DOM.script({
        src: '/bundle.js'
      })
    )
  ));
});
 */
