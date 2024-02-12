import React from 'react'
import styles from '../style.module.css'

const Message = ({message , item}) => {
    return (
        <div className={`${message.length > 0 && styles.message}`}>
            <div className={styles.msgMeta}>
                {item.username}
            </div>
            <div className={styles.msgText}>
                {item.message}
            </div>
        </div>
    )
}

export default Message