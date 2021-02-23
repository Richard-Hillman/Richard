import React, { Component } from 'react';
import mainMiddle from './homeAssests/ProfileMiddle.jpg';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="homeMiddle">
          <img src={mainMiddle} alt="main secondary" /> 
        </div>
      </>
    );
  }
}
