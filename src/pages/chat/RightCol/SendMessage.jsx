import React from 'react'
import styles from '../style.module.css'

const SendMessages = ({user , socket}) => {
    const [message , setMessage] = React.useState([]);     
    const sentMessage = () =>  {
        if(message !== '') {
            socket.emit('message_sent' , {message , username: user.username , room: user.room})
            setMessage('');
        }
    } 
    return (
        <div className={styles.messagesColumn}>
            <input className={styles.messageInput} onChange={(e) => setMessage(e.target.value)} value={message} placeholder='Start chating' />
            <button className='btn btn-secondary' onClick={sentMessage} >Send message</button>
        </div>
    )
}

export default SendMessages