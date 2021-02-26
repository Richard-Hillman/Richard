import React, { Component } from 'react';
import left1 from './homeAssests/ProfileLeftTop.jpg';

const divStyle2 = { 
  width: '20%',
  height: 'auto',
};

export default class Home extends Component {
  render() {
    return (
      <>
        <div style={divStyle2}>
          <img src={left1} alt="left card" /> 
        </div>
      </>
    ); 
  }
}
