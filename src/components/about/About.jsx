import React, { Component } from 'react';
import About from './cards/AboutCards.css';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="about">
          <About />
        </div>
      </>
    );
  }
}
