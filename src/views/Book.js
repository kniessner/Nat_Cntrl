import React, { Component } from 'react';
import Inner_Header from '../components/Inner_Header';



class Chapters extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="chapters" className=" ">
        <div className="chapter ">
          <h4>Thesis</h4>
          <section className="low_pres main_section chapter_content">
          Tesis Text
          </section>
        </div>
        <div className="chapter">
          <h4>Vorwort</h4>
        </div>
        <div className="chapter">
          <h4>Einleitung</h4>
          <section className="low_pres main_section chapter_content">
          Tesis Text
          </section>
        </div>
        <div className="chapter">
          <h4>Arbeit 4.0</h4>
        </div>
        <div className="chapter">
          <h4>Human Factor</h4>
        </div>
      </div>
    )
  }
}

class Book extends React.Component {
  constructor(props) {
    super(props);

  }
  render() {
      return (
        <div id="book" className="">
          <div className="inner_wrap ">
            <Inner_Header/>
            <Chapters />
          </div>
        </div>
      );
    }
};
export default Book;
