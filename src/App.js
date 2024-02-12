import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import io from 'socket.io-client';
import React from 'react';
import Chat from './pages/chat/Chat';

function App() {
  const [username , setUsername] = React.useState();
  const [room , setRoom] = React.useState();
  const socket = io.connect('http://localhost:4000');
  return (
    <Router>
      <div className='App'>
        <Routes>
          <Route path='/' element={
            <Home 
                username={username}
                setUsername={setUsername}
                room={room}
                setRoom={setRoom}
                socket={socket}
              />} />
            <Route path='/chat' element={
              <Chat 
                  socket={socket}
                />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
