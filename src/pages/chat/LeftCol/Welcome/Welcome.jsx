import React from 'react'

const Welcome = ({user}) => {
  return (
    <div className={styles.roomAndUsersColumn}>
      <div>Welcome , {user.username}</div>        
      <div>Your room topic is about: {user.room}! </div>  
    </div> 
  )
}

export default Welcome