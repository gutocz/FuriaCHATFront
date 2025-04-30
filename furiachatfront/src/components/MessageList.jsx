import { useEffect, useRef } from 'react';
import Message from './Message';

function MessageList({ messages }) {
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      const element = messagesContainerRef.current;
      const start = element.scrollTop;
      const end = element.scrollHeight;
      const duration = 300; // duração em ms
      const startTime = performance.now();

      function scrollStep(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1); // Garante que não passe de 1
        element.scrollTop = start + (end - start) * progress;

        if (progress < 1) {
          requestAnimationFrame(scrollStep);
        }
      }

      requestAnimationFrame(scrollStep);
    }
  }, [messages]);

  return (
    <div className="messages" ref={messagesContainerRef}>
      {messages.map((msg) => (
        <Message key={msg.id} text={msg.text} sender={msg.sender} />
      ))}
    </div>
  );
}

export default MessageList;