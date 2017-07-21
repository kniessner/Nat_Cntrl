
const dt = require('./server_modules/constants.js'); //Datastore
const colors = require('./server_modules/constants.js').colors; //Datastore
const server_ip = require('./server_modules/get_infos.js').server_ip;

module.exports = function (app) {

    console.log(app.locals.title);
    console.log(server_ip);
}
