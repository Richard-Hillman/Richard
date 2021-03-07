import React from 'react';
import stack from './stackAssets/stack.gif';
import styles from './Stack.css';

export default function Stack() {
  return (
    <div>
      <a href="/home">
        <img className={styles.stackDiv} src={stack} alt="rick" />
      </a>
    </div>
  );
}
