import React, { Component } from 'react';
import left1 from './homeAssests/ProfileLeftTop.jpg';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className="homeMain">
          <img src={left1} alt="left card" /> 
        </div>
      </>
    ); 
  }
}
