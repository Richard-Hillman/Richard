import React, { Component } from 'react';
import mainTop from './homeAssests/ProfileTop.jpg';

const divStyle = { 
  width: '80%',
  height: 'auto'
};

export default class Home extends Component {
  render() {
    return (
      <>
        <div style={divStyle}>
          <img src={mainTop} alt="main top piece" /> 
        </div>
      </>
    );
  }
}
