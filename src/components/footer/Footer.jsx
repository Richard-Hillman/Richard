/* eslint-disable max-len */
import React from 'react';
import styles from './Footer.css';
import git from './footerAssets/GitHub.png';
import linked from './footerAssets/LinkedIn.png';
import twitter from './footerAssets/Twitter.png';
import calendly from './footerAssets/Calendly.png';

export default function footer() {
  return (
    <div className={styles.foot}>
      <footer className={styles.footie}>

        <span>
          <a href="https://github.com/Richard-Hillman"><img src={git} className={styles.picky} /></a>
        </span>

        <span>
          <a href="https://www.linkedin.com/in/richard-hillman/"><img src={linked} className={styles.picky} /></a>
        </span>

        <span>
          <a href="https://twitter.com/RichardAndRhino"><img src={twitter} className={styles.picky} /></a>
        </span>

        <span>
          <a href="https://calendly.com/richard-and-rhino/15min"><img src={calendly} className={styles.picky} /></a>
        </span>

      </footer>
    </div>
  );
}
