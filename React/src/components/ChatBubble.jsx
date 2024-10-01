import React from 'react';
import { Card } from 'antd';

const ChatBubble = ({ messageText,isMine }) => {
  return (
    <div
    className='flex flex-col'
    >

    <Card
      style={{
        width: 200,
        borderRadius: 10,
        padding: '10px',
        marginBottom: '10px',
        alignSelf: isMine ? 'flex-end' : 'flex-start',
      }}
      >
      {messageText}
    </Card>
      </div>
  );
};

export default ChatBubble;