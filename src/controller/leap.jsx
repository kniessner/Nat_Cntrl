import React from 'react';
import Leap from 'leapjs';
import  plugins  from 'leapjs-plugins';
import * as THREE from "three";



class Leap_View extends React.Component {
  componentDidMount() {


    var controller = new Leap.Controller();
        controller.on('deviceFrame', function(frame) {
          // loop through available gestures
          for(var i = 0; i < frame.gestures.length; i++){
            var gesture = frame.gestures[i];
            var type    = gesture.type;

            switch( type ){

              case "circle":
                if (gesture.state == "stop") {
                  console.log('circle');
                }
                break;

              case "swipe":
                if (gesture.state == "stop") {
                  console.log('swipe');
                }
                break;

              case "screenTap":
                if (gesture.state == "stop") {
                  console.log('screenTap');
                }
                break;

              case "keyTap":
                if (gesture.state == "stop") {
                  console.log('keyTap');
                }
                break;

              }
            }
        });

        controller.connect();


    }
render(){

  Leap.loop(function(frame) {
   if (frame.pointables.length > 0)
       console.log(frame.pointables);
 });

    var controller = new Leap.Controller({enableGestures: true})
    .use('screenPosition')
    .connect()
    .on('frame', function(frame){
      // Try making some circles
        //console.log('a');

    })


    var controller  = new Leap.Controller();

    controller.on('connect', function() {
      console.log("Successfully connected.");
    });

    controller.on('streamingStarted', function() {
      console.log("A Leap device has been connected.");
    });

    controller.on('streamingStopped', function() {
      console.log("A Leap device has been disconnected.");
    });

    controller.connect();




  /*


   */

    /*Leap*/


    return(
      <div id="leap">
          <canvas id="displayArea" width="200" height="100" ></canvas>

      <div id="output"></div>
      <div id="progress"></div>
    </div>
    )

  }

}

module.exports = Leap_View;
