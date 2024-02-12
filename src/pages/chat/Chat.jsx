import React from 'react'
import SendMessages from './RightCol/SendMessage';
import UserList from './LeftCol/UserList';
import Messages from './RightCol/Messages';
import styles from './style.module.css';
import Welcome from './LeftCol/Welcome/Welcome';
import { useNavigate } from 'react-router-dom';

const Chat = ({socket}) => {
    const [user , setUser] = React.useState([]);
    const [message , setMessage] = React.useState([]);
    const navigate = useNavigate();
    console.log();
    React.useEffect(() => {
        socket.on('user_info' , (data) => {
            setUser(data);
        })
        console.log(user);
        !user.length && navigate('/');        
        socket.on('recieve_message' , (data) => {
            setMessage(state => [ ...state , {message: data.message , username: data.username , room: data.room}]);
        })
        return () => {
            socket.off('user_info');
            socket.off('receive_message');
        };
    } , [socket]) 
    return (
        <div className={styles.chatContainer}>  
            <Welcome user={user} />   
            <Messages message={message} />       
            <UserList socket={socket} user={user} /> 
            <SendMessages user={user} socket={socket} />
        </div>        
    )
}

export default Chat