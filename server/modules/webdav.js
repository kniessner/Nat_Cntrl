var createClient = require("webdav");

var client = createClient(
    "http://kniessner.com/cloud/remote.php/webdav/",
    "kniessner",
    "bkv1805"
);


function Cloud() {
    this.self = function() {
        console.log('cloud_client ',this);
    };

    this.get = function(path) {
        client
            .getDirectoryContents("/")
            .then(function(contents) {
                console.log(JSON.stringify(contents, undefined, 4));
                return JSON.stringify(contents, undefined, 4);
            });
    };

}


module.exports = new Cloud();
