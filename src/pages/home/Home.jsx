import React from 'react'
import styles from './styles.module.css';
import { useNavigate } from 'react-router-dom';

const Home = ({username , room , setUsername , setRoom , socket}) => {
    const navigate = useNavigate();
    const joinRoom = () => {        
        if (username !== '' && room !== '') {
            socket.emit('join_room', { username, room });
            navigate('/chat');
        }
    }
    return ( 
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h1>{'<>DevRooms</>'}</h1>
                <input 
                    className={styles.input} 
                    placeholder='Username...'
                    onChange={(e) => setUsername(e.target.value)} />

                <select 
                    className={styles.input}
                    onChange={(e) => setRoom(e.target.value)}>
                <option>-- Select Room --</option>
                    <option value="Javascript">Javascript</option>
                    <option value="NodeJS">NodeJS</option>
                    <option value="PHP">PHP</option>
                </select>

                <button onClick={joinRoom} className='btn btn-secondary'>Join Room</button>
            </div>
        </div>    
    )
}

export default Home