import React, { Component } from 'react';

class View_Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

        <section className="low_pres main_section sub_head">
          <h4>{this.props.title} </h4>
        </section>

      )
    }
};
export default View_Header;
