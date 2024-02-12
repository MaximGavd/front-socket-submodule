import React from 'react'
import styles from '../../style.module.css';

const UserLogged = ({user}) => {
  return (
    <div className={styles.roomAndUsersColumn}>
      <div>Welcome , {user.username}</div>        
      <div>Your room topic is about: {user.room}! </div>  
    </div>   
  )
}

export default UserLogged