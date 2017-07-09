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
  var init = function(){
   var scene = new THREE.Scene();
   var camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 0.10, 1000);
   var renderer = new THREE.WebGLRenderer();
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);
   camera.position.z = 500;
   camera.position.y = 200;
   camera.lookAt(new THREE.Vector3(0,200,0));

   var fingers = {};
   var spheres = {};

   Leap.loop(function(frame) {

     var fingerIds = {};
     var handIds = {};

     for (var index = 0; index < frame.pointables.length; index++) {

       var pointable = frame.pointables[index];
       var finger = fingers[pointable.id];

       var pos = pointable.tipPosition;
       var dir = pointable.direction;

       var origin = new THREE.Vector3(pos[0], pos[1], pos[2]);
       var direction = new THREE.Vector3(dir[0], dir[1], dir[2]);

       if (!finger) {
         finger = new THREE.ArrowHelper(origin, direction, 40, Math.random() * 0xffffff);
         fingers[pointable.id] = finger;
         scene.add(finger);
       }

       finger.position = origin;
       finger.setDirection(direction);

       fingerIds[pointable.id] = true;
     }

     for (fingerId in fingers) {
       if (!fingerIds[fingerId]) {
         scene.remove(fingers[fingerId]);
         delete fingers[fingerId];
       }
     }

     //if(frame.gestures.length > 0) console.log(frame.gestures);

     renderer.render(scene, camera);
   });
  };
  setTimeout(init, 100);


  (window.controller = new Leap.Controller).use('riggedHand').connect();

  var out = this.refs.test_area;
  Leap.loop({
    frame: function(frame){
      var hand = frame.hands[0];
      if (hand){
        var dot = Leap.vec.dot(hand.direction, hand.indexFinger.direction);
      //  console.assert(!isNaN(dot));
        out.innerHTML = dot.toPrecision(2);
      }
    }
  });
  var canvas  = this.refs.canvas;


      var Canvas = (function () {
          var context = canvas.getContext("2d");

          context.fillStyle = '#bdc3c7';

          var clearCanvas = function() {
              context.clearRect(0, 0, context.canvas.width, context.canvas.height);
          }

          return {
              context: context,
              clear: clearCanvas
          }
      })();

      var Hand = (function (context) {
          var renderFingerTips = function(frame) {
              frame.pointables.forEach(function(pointable) {
                  var position   = pointable.stabilizedTipPosition;
                  var normalized = frame.interactionBox.normalizePoint(position);

                  var x = context.canvas.width * normalized[0];
                  var y = context.canvas.height * (1 - normalized[1]);

                  context.beginPath();
                  context.fillRect(x, y, 20, 20);
              });
          }

          return {
              renderFingerTips: renderFingerTips
          }
      })(Canvas.context);


      (function(hand, canvas){
        Leap.loop({frameEventName: "animationFrame"}, function(frame) {
          canvas.clear();
          hand.renderFingerTips(frame);
        });
      }(Hand, Canvas))
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
