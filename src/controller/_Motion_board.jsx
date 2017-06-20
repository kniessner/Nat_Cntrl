import React from 'react';

import io from 'socket.io-client';
var connectionOptions =  {
            "force new connection" : true,
            "reconnectionAttempts": "Infinity", //avoid having user reconnect manually in order to prevent dead clients after a server restart
            "timeout" : 10000, //before connect_error and connect_timeout are emitted.
            "transports" : ["websocket"]
        };

let socket = io('http://localhost:8081/');




var Motion_Board = React.createClass({

  getInitialState: function() {
    return {title:''};
  },

  render() {
    socket.on('news', function (data) {
      console.log(data);
      socket.emit('my other event', { my: 'data' });
    });


    function hasUserMedia() {
       //check if the browser supports the WebRTC
       return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
          navigator.mozGetUserMedia);
    }

    if (hasUserMedia()) {
       navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia
          || navigator.mozGetUserMedia;

       //enabling video and audio channels
       navigator.getUserMedia({ video: true, audio: true }, function (stream) {
          var video = document.querySelector('video');

          //inserting our stream to the video tag
          video.src = window.URL.createObjectURL(stream);
       }, function (err) {});
    } else {
       alert("WebRTC is not supported");
    }



//hasUserMedia();
    return (
      <div>

        <h1>Motions</h1>

      </div>
    )
  }
});

module.exports = Motion_Board;
