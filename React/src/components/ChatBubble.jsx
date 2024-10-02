import React from 'react';
import { Card } from 'antd';

const ChatBubble = ({ messageText, isMine }) => {
  const mineClass = 'self-end bg-blue-500 text-white';
  const othersClass = 'self-start bg-gray-200 text-gray-800';
  return (
    <div
      className='flex flex-col'
    >

      <Card
        className={`w-52 rounded-lg ${isMine ? mineClass : othersClass} shadow-md mb-4`}
      >
        {messageText}
      </Card>
    </div>
  );
};

export default ChatBubble;