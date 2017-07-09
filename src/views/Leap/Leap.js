
import React, { Component } from 'react';
import {Row, Col} from 'pui-react-grids';
import {Grid, FlexCol} from 'pui-react-flex-grids';
import {Divider} from 'pui-react-dividers';




class Leap_Zone extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    var leapjs      = require('leapjs');
    var controller  = new leapjs.Controller();
    window.plotter = new LeapDataPlotter();

    /***********************
              LEAP CONNECTION
    ************************/
    controller.on('connect', function() {
      console.log("Successfully connected.");
    });

    controller.on('deviceConnected', function() {
      console.log("A Leap device has been connected.");
    });

    controller.on('deviceDisconnected', function() {
      console.log("A Leap device has been disconnected.");
    });

    controller.connect();


    /***********************
                COUNTING FINGERS
    ************************/
    controller.on('deviceFrame', function(frame) {
      var numberOfFingers = frame.fingers.length;
      console.log(numberOfFingers);
    });




/******************************************** THE LEAP LOOP
**************************************************************/
var pointer_leap = this.refs.leap_point;
var controllerOptions = { enableGestures: true };
var fingertipX = 0;
var fingertipY = 0;


    if(pointer_leap){
      Leap.loop(controllerOptions, function(frame) {

          /***********************
                      GESTURES
                      https://developer.leapmotion.com/documentation/javascript/api/Leap.Gesture.html#Gesture
          ************************/

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

            /***************************
                        DATA PLOTTER
                        http://leapmotion.github.io/leapjs-plugins/utils/data-plotter/
            ****************************/

            var hand = frame.hands[0];
              if (!hand) return;
              // call this once per frame per plot
              plotter.plot('height', hand.palmPosition[1], {
                precision: 3,
                units: 'mm'
              });
              plotter.plot('y velocity', hand.palmVelocity[1], {
                precision: 4,
                units: 'mm/s'
              });
              plotter.update()

              /***************************
                          MOVE THE BLOCK
              ****************************/

            if(frame.pointables.length > 0){
              fingertipX = frame.pointables[0].positions[0][0];
              fingertipY = frame.pointables[0].positions[0][1];
              if(fingertipX > 0){
                pointer_leap.style.left    = fingertipX*6 +'px';

              }
              if(fingertipY > 0){
                pointer_leap.style.top   = (fingertipY*3)* -1 +'px';
              }
            }


      });
    }


 }


//FLIP CARD : https://developer-archive.leapmotion.com/gallery/css3-card-flip

  render() {
  (window.controller = new Leap.Controller).use('riggedHand').connect()


    return (
      <div className="container" id="content">
        <h1>Leap JS</h1>
        <Divider />
        {/*<div className="centerer" style={{'width':'0',height:'0'}}>
          <div ref="leap_point" id="leap_point" style={{'width':'20px','height':'20px','background':'red','position':'absolute'}}></div>
        </div>*/}
        <div ref="leap_point" id="leap_point" style={{'width':'20px','height':'20px','background':'skyblue','position':'absolute'}}></div>

        <div className="test_area" ref="test_area">
        </div>
      </div>
    )
  }
};

export default Leap_Zone;
