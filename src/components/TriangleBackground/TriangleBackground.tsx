import React from 'react';
import styles from './TriangleBackground.module.css';

const TriangleBackground: React.FC = () => {
  return (
    <div className={styles.triangleCluster}>
      <div className={styles.triangle}></div>
      <div className={styles.triangle}></div>
      <div className={styles.triangle}></div>
      <div className={styles.triangle}></div>
      <div className={styles.triangle}></div>
    </div>
  );
};

export default TriangleBackground;
