import React from 'react'
import styles from './dashboard.module.css';

function Dashboard() {
  return (  
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.dashboard}>
          
          
        </div>
        <div className={styles.resumeCard}></div>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}

export default Dashboard;
