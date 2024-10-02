import React, { useState, useEffect } from 'react';
import { List, Input, Button, Space } from 'antd';
import useDialog from '../../hooks/useDialog';
import ChatBubble from '../../components/ChatBubble';
import LogoutButton from '../../components/LogoutButton';
import { LogoutOutlined } from '@ant-design/icons';

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const { getDialogList, answerLastQuestion, isLoading } = useDialog();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getDialogList();
            setMessages(response.data);
        };

        fetchData();
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async () => {
        
            const questionId = messages?.at(-1)?._id;
            if(!questionId) return;
            const answerResponse = await answerLastQuestion(questionId, inputValue);
            const newMessages = answerResponse.data;
            setMessages(newMessages);
            setInputValue('');
        
    };

    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    }

    return (
        <div
            className='w-full flex justify-center items-center'
        >
            <LogoutButton
                className='absolute top-0 right-0 m-4 bg-red-500'
                icon={<LogoutOutlined />}
            />
            <div
                className='border-2 border-gray-200 rounded-lg w-4/5 m-4 p-4'
            >
                <div
                    className='flex flex-col justify-between w-full min-h-[92vh]'
                >
                    <List
                        dataSource={messages}
                        renderItem={(item) => {
                            const answer = item.answers?.[0]?.answer;
                            const answerId = item.answers?.[0]?._id;
                            return (
                                <>
                                    <ChatBubble
                                        key={item._id}
                                        messageText={item.question}
                                        isMine={false}
                                    />
                                    {answer && (
                                        <ChatBubble
                                            messageText={answer}
                                            isMine={true}
                                            key={answerId}
                                        />
                                    )}
                                </>
                            )
                        }}
                    />

                    <Space.Compact
                        className='w-full'
                    >
                        <Input
                            value={inputValue}
                            onChange={handleInputChange}
                            className='w-full'
                            placeholder='Type an answer ...'
                            onKeyUp={onKeyPress}
                        />
                        <Button type="primary"
                            onClick={handleSubmit}
                            disabled={!inputValue}
                            loading={isLoading}
                        >Submit</Button>
                    </Space.Compact>
                </div >
            </div>
        </div>
    );
};

export default ChatComponent;