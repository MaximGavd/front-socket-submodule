import React from 'react'
import styles from '../style.module.css';
import { useNavigate } from 'react-router-dom';

const UserList = ({user , socket}) => {
    const [allUsers , setAllUsers] = React.useState([]);
    const navigate = useNavigate();    
    const usersRemain = allUsers.filter(person => person.username !== user.username )

    const leaveRoom = () => {
        socket.emit('leave_room' , usersRemain );
        setAllUsers(usersRemain);
    }
    React.useEffect(() => { 
        socket.on('all_users' , ({chatRoomUsers}) => {
            chatRoomUsers && setAllUsers(chatRoomUsers);
        })
    } , [socket])  
  return (
    <div className={styles.roomAndUsersColumn}>
        <div className={styles.usersTitle}>List of users:</div>
        <div className={styles.usersList}>
            {allUsers && allUsers.map(users => {
                return <li>{users.username} {users.username == user.username && '- you'}</li>
            })}
        </div>
        <button onClick={leaveRoom} className='btn btn-outline'>Leave room</button>
    </div>
  )
}

export default UserList