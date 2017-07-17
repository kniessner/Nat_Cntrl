import React, { Component } from 'react';
import View_turn    from '../components/View_turn';
import CustSlider   from '../components/Carousel';


class Modules extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
      return (
        <div id="modules" className="">
        <div className="inner_wrap ">
        <h4>Touch Slide Components</h4>
          <View_turn />
          <hr/>
          <h4>Carousel</h4>
          <section className="high_pres  test_area">
            <CustSlider />
          </section>
          <hr/>
          <h4>Drag and Drop</h4>
          <hr/>
          <h4>Flexible Grid</h4>
          <hr/>
          <h4>Timer</h4>
          <hr/>
          <h4>Innerheader</h4>
        </div>
            </div>
      );
    }
};
export default Modules;
