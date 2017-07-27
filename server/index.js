/**
* This is a description
* @namespace My.Namespace
* @method myMethodName
* @param {String} str - some string
* @param {Object} obj - some object
* @param {requestCallback} callback - The callback that handles the response.
* @return {bool} some bool
*/
const log    = require('./modules/console_mod.js');
const cloud  = require('./modules/webdav.js');
const google = require('./modules/google.js');
const sockets = require('./modules/sockets.js');
/*
var request = require('request');
request('http://kniessner.com', function (error, response, body) {
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
});
*/


module.exports = {
  log,
  cloud:cloud.get()
  google,
  sockets
}
