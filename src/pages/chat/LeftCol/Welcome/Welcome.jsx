import React from 'react'
import UserEmpty from './UserEmpty'
import UserLogged from './UserLogged'

const Welcome = ({user}) => {
  return (
    user.length > 0 ? <UserLogged user={user} /> : <UserEmpty />
  )
}

export default Welcome