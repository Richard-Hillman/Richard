/* eslint-disable max-len */
import React, { Component } from 'react';
import left1 from '../homeAssests/About.jpg';
import mainMiddle from '../homeAssests/Contact.jpg';
import resCard from '../homeAssests/resCard.jpg';
import stackCard from '../homeAssests/stackCard.jpg';
import styles from '../mainCSS/HomeMain.css';


export default class Home extends Component {
  render() {
    return (
      <>
        <section className={styles.divStyleBottomThree}>

          <span>
            <a href="/about">
              <img className={styles.divStyleLeft} src={left1} alt="left card" /> 
            </a>
          </span>

          <span>
            <a href="/contact">
              <img className={styles.divStyleRight} src={mainMiddle} alt="main secondary" /> 
            </a>
          </span>
          
        </section>

        <section className={styles.divStyleBottomThreetwo}>

          <span>
            <a href="/stack">
              <img className={styles.divStyleLeft} src={stackCard} alt="left card" /> 
            </a>
          </span>

          <span>
            <a href="/resume">
              <img className={styles.divStyleRight} src={resCard} alt="main secondary" /> 
            </a>
          </span>
          
        </section>
      </>
    ); 
  }
}
