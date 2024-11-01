import React from 'react';
import './Chat.css';
import { useLocation } from 'react-router-dom'; // Use for getting passed state

const Chat = () => {
  const location = useLocation(); // Access the state passed from AudioRecorder
  const { userMessage, botMessage } = location.state || {}; // Destructure the state
  
  return (
    <div className="chat-container">
      {/* User message bubble */}
      {userMessage && (
        <div className="user-message">
          <p>{userMessage}</p>
        </div>
      )}

      {/* Bot/Transcribed message bubble */}
      {botMessage && (
        <div className="bot-message">
          <p>{botMessage}</p>
        </div>
      )}
    </div>
  );
};

export default Chat;
