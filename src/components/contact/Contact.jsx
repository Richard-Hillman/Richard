/* eslint-disable max-len */
import React, { Component } from 'react';
import Icon from './contactAssets/Icon.png';
import styles from './Contact.css';


export default class Home extends Component {
  render() {
    return (
      <>
        <section className={styles.spanner}>

          <span className={styles.overlap}>
            <img className={styles.imago} src={Icon} alt="Main Icon" /> 
          </span>

          <span className={styles.snake}>
            <p>
              <a href="mailto: Richard.cc.hillman@gmail.com">RICHARD.CC.HILLMAN@GMAIL.COM</a>
            </p>
            
            <p>
              802-528-9511
            </p>

            <p>
              <a href="https://calendly.com/richard-and-rhino/30min">CALENDLY</a>
            </p>
          </span>

        </section>
      </>
    ); 
  }
}
