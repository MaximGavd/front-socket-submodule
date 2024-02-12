import React from 'react'
import styles from '../style.module.css'
import Message from './Message';

const Messages = ({message}) => {
    return (        
        <div>
            {message.map(item => {
                return <Message message={message} item={item} />
            })}
        </div>
             
    )
}

export default Messages