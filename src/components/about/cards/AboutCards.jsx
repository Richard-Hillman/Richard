/* eslint-disable max-len */
import React, { Component } from 'react';
import roses from '../aboutAssets/roses.png';
import full from '../aboutAssets/AboutMe.jpg';
import styles from '../About.css';


export default class About extends Component {
  render() {
    return (
      <>
        <section>

          <span className={styles.sidePanel}>
            <a href="/home">
              <img className={styles.side} src={roses} alt="right side panel" /> 
            </a>

            <img className={styles.side2} src={full} alt="right side panel" /> 
          </span>

        </section>
      </>
    ); 
  }
}
