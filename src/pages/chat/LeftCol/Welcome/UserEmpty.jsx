import React from 'react'
import styles from '../../style.module.css';

const UserEmpty = () => {
  return (
    <div className={styles.roomAndUsersColumn}>
      <div>You have to be logged in!</div>        
    </div>   
  )
}

export default UserEmpty