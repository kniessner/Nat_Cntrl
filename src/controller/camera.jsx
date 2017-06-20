import React from 'react';



class Camera extends React.Component {


  constructor(props) {
    super(props);
    this.state = {videoSrc: '',MediaStream:''};
  }

  componentDidMount() {
    var that = this;
    var videoDiv = document.querySelector('video');
      //  var videoDiv = document.getElementById("video");
          var  vendorUrl = window.URL || window.webkitURL;
            navigator.getMedia =    navigator.getUserMedia ||
                                    navigator.webkitGetUserMedia ||
                                    navigator.mozGetUserMedia ||
                                    navigator.oGetUserMedia ||
                                    navigator.msGetUserMedia;

        var MediaStream;
        function captureWebcam(video, audio){
            navigator.getMedia({
                video: video,
                audio: audio
            }, function(stream){
                videoDiv.src = vendorUrl.createObjectURL(stream);
                MediaStream = stream.getTracks()[0]; // create the stream tracker
                that.setState({MediaStream:MediaStream});

            }, function(error){
                // An error occured
                // error.code
                console.log(error)
            });
        }
      /*  $("#stop").on("click", function(){
           // Stop the tracked stream
           MediaStream.stop()
        });
        $("#start").on("click", function(){
            captureWebcam(true, false)
        });*/
    captureWebcam(true, false)
   }

   componentWillUnmount() {
    console.log('WillUnmount');

    this.state.MediaStream.stop();
     //alert('WillUnmount');
   }

  handlePlay(){
    this.state.MediaStream.stop()
  }

  render() {

      return(

        <div>
          <button id="start" onClick={this.handlePlay}>START!</button>
          <button id="stop">STOP!</button>
          <video id="video" autoPlay></video>
          {this.state.MediaStream}
        </div>

    )
  }
};

module.exports = Camera;
