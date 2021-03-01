import React, { Component } from 'react';
import HomeTop from '../homeTop/HomeTop';
import HomeOne from '../homeBottom/HomeOne';
import styles from '../mainCSS/HomeMain.css';

export default class Home extends Component {
  render() {
    return (
      <div className={styles.homeMain}>
        <div>
          <HomeTop/>
        </div> 

        <div>
          <HomeOne /> 
        </div> 

      </div>
    );
  }
}
