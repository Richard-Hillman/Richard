/* eslint-disable max-len */
import React, { Component } from 'react';
import mainTop from '../homeAssests/HelloWorld.jpg';
import styles from '../mainCSS/HomeMain.css';

export default class Home extends Component {
  render() {
    return (
      <>
        <div className={styles.divStyle}>
          <img className={styles.divStyleTop} src={mainTop} alt="main top piece" /> 
        </div>
      </>
    );
  }
}
