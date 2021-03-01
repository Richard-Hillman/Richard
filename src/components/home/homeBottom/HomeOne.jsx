/* eslint-disable max-len */
import React, { Component } from 'react';
import left1 from '../homeAssests/ProfileLeftTop.jpg';
import mainMiddle from '../homeAssests/ProfileMiddle.jpg';
import styles from '../mainCSS/HomeMain.css';


export default class Home extends Component {
  render() {
    return (
      <>
        <section className={styles.divStyleBottomThree}>

          <span>
            <img className={styles.divStyleLeft} src={left1} alt="left card" /> 
          </span>

          <span>
            <img className={styles.divStyleRight} src={mainMiddle} alt="main secondary" /> 
          </span>
          
        </section>
      </>
    ); 
  }
}
