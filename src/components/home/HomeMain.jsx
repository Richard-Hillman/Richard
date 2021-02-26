import React, { Component } from 'react';
import HomeTop from '../home/HomeTop';
import HomeTwo from '../home/HomeTwo';
import HomeOne from '../home/HomeOne';

const divStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignContent: 'center',
  width: '80%',
  height: 'auto'
};


export default class Home extends Component {
  render() {
    return (
      <>
        <div style = {divStyle}>
          <HomeTop />
        </div> 

        <div>
          <HomeTwo />
          <HomeOne /> 
        </div> 


      </>
    );
  }
}
