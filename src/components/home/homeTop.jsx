import React, { Component } from 'react';
import mainTop from './homeAssests/ProfileTop.jpg';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="homeTop">
          <img src={mainTop} alt="main top piece" /> 
        </div>
      </>
    );
  }
}
