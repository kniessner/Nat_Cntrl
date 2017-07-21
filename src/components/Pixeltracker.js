
import React, { Component } from 'react';
import {Tracker,ColorTracker,ObjectTracker} from 'tracking';
import {Row, Col} from 'pui-react-grids';


class Pixel_tracker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { camera: false ,canvas:false };
    this.toggle_camera = this.toggle_camera.bind(this);
    this.toggle_canvas = this.toggle_canvas.bind(this);
  }
  toggle_camera() {
   this.setState({ pixel_camera: !this.state.camera });
  }
  toggle_canvas() {
   this.setState({ pixel_camera: !this.state.canvas });
  }

  componentDidMount() {
    var canvas = this.refs.canvas;
    var context = canvas.getContext('2d');

    var FastTracker = function() {
      FastTracker.base(this, 'constructor');
    };

    tracking.inherits(FastTracker, tracking.Tracker);
    tracking.Fast.THRESHOLD = 2;
    FastTracker.prototype.threshold = tracking.Fast.THRESHOLD;
    FastTracker.prototype.track = function(pixels, width, height) {
      stats.begin();
      var gray = tracking.Image.grayscale(pixels, width, height);
      var corners = tracking.Fast.findCorners(gray, width, height);
      stats.end();

      this.emit('track', {
        data: corners
      });
    };

    var tracker = new FastTracker();
    tracker.on('track', function(event) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      var corners = event.data;
      for (var i = 0; i < corners.length; i += 2) {
        context.fillStyle = '#f00';
        context.fillRect(corners[i], corners[i + 1], 2, 2);
      }
    });
    tracking.track(this.refs.video, tracker, { camera: true });



    // GUI Controllers
    var gui = new dat.GUI();
    gui.add(tracker, 'threshold', 1, 100).onChange(function(value) {
      tracking.Fast.THRESHOLD = value;
    });

   }
  render() {
    return (
      <div ref='cam_wrap'>
        <Row className="grid-show">
          <Col md={12}><video   className="media_screen" id="video"   ref='video' width="400" height="400" preload autoPlay loop muted></video></Col>
          <Col md={12}><canvas  className="media_screen" id="canvas"  ref='canvas' width="400" height="400"></canvas></Col>
        </Row>


      </div>
    );
  }
}
export default Pixel_tracker;
