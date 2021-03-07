import React from 'react';
import res1 from './resumeAssets/res1.jpg';
import res2 from './resumeAssets/res2.jpg';
import styles from './Resume.css';

export default function Resume() {
  return (
    <div>

      <span className={styles.sidePanel}>

        <a href="/home">
          <img className={styles.side} src={res1} alt="left side panel" /> 
        </a>

        <img className={styles.side2} src={res2} alt="right side panel" /> 
      </span>

    </div>
  );
}
