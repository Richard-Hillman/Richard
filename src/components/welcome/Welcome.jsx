/* eslint-disable max-len */
import React, { Component } from 'react';
import rick from './welcomeAssets/RichardHillman.gif';
import styles from './Welcome.css';

export default class Home extends Component {
 
  handleClick = async(e) => {
    this.props.history.push('/home');
  }

  render() {
    return (
      <>
        <div className={styles.divStyle1}> 
          <img src={rick} alt="rick" />
        </div>


        <div className={styles.btn1, styles.divStyle}>
          <button className={styles.btn} onClick={this.handleClick}>ENTER</button>
        </div>
      </>
    );
  }
}
