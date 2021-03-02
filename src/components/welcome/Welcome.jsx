/* eslint-disable max-len */
import React, { Component } from 'react';
import rick from './welcomeAssets/SiteFront.gif';
import styles from './Welcome.css';

export default class Home extends Component {
 

  render() {
    return (
      <>
        <div className={styles.divStyle2}> 
          <a href="/home">
            <img className={styles.divStyle1} src={rick} alt="rick" />
          </a>
        </div>
      </>
    );
  }
}
