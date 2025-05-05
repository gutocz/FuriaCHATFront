import { useState } from 'react';
import './styles/main.css';
import logo from './assets/logo.png';
import { sendMessage } from './services/api';
import MessageList from './components/MessageList';
import MessageInput from './components/MessageInput';

function App() {
  const [messages, setMessages] = useState([]);

  const handleSend = async (text) => {
    const userMessage = { id: Date.now(), text, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);

    const response = await sendMessage(text);
    const botMessage = { id: Date.now() + 1, text: response, sender: 'bot' };
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div className="chat-container">
      <img src={logo} alt="Logo" className="logo" />
      <div className="chat-box">
        <MessageList messages={messages} />
        <MessageInput onSend={handleSend} />
      </div>

      <div className="hover">
        <div className="hover-text">
          <p>dev by Gutocz</p>
        </div>
      </div>
    </div>
  );
}

export default App;