import '../assets/stylesheets/base.scss';

import React, { Component } from 'react';
import {Row, Col} from 'pui-react-grids';
import {Grid, FlexCol} from 'pui-react-flex-grids';
import {Divider} from 'pui-react-dividers';
//import {Leap,screenPosition,hand} from 'leapjs';
//import leapShell from 'leapShell';
//const shellCommand = 'echo "hallo"';

class Leap_Zone extends React.Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    Leap.loop({
    hand: function(hand){
      console.log( hand.screenPosition() );
    }

  }).use('screenPosition');


      var out = this.refs.test_area;
      Leap.loop({
        frame: function(frame){
          var hand = frame.hands[0];
          if (hand){
            var dot = Leap.vec3.dot(hand.direction, hand.indexFinger.direction);
          //  console.assert(!isNaN(dot));
            out.innerHTML = dot.toPrecision(2);
          }
        }
      });

    (window.controller = new Leap.Controller).use('riggedHand').connect();



     }


  render() {
    return (
      <div className="container" id="content">
        <h1>Leap JS</h1>
        <Divider />
        <div className="test_area" ref="test_area">

        </div>
      </div>
    )
  }
};

export default Leap_Zone;
