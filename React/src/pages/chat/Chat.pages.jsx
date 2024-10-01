import React, { useState, useEffect } from 'react';
import { List, Avatar, Input, message, Button, Select, Space } from 'antd';
import useDialog from '../../hooks/useDialog';
import axios from 'axios';
import ChatBubble from '../../components/ChatBubble';

const ChatComponent = () => {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const { getDialogList,answerLastQuestion } = useDialog();

    useEffect(() => {
        const fetchData = async () => {
            const response = await getDialogList();
            setMessages(response.data);
            console.log(response.data, 'response.data');
        };

        fetchData();
    }, []);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = async () => {
        const questionId = messages.at(-1)._id;
        const answerResponse = await answerLastQuestion(questionId, inputValue);
        const newMessages = answerResponse.data;
        setMessages(newMessages);
        setInputValue('');
    };

    return (
        <div
            className='container mx-auto flex h-screen flex-col justify-between pb-2 pt-6'
        >
            <List
                dataSource={messages}
                renderItem={(item) => {
                    const answer = item.answers?.[0]?.answer;
                    return (
                        <>
                            <ChatBubble
                                messageText={item.question}
                                isMine={false}
                            />
                            {answer && (
                                <ChatBubble
                                    messageText={answer}
                                    isMine={true}
                                />
                            )}
                        </>
                    )
                }}
            />

            <Space.Compact style={{ width: '100%' }}>
                <Input
                    value={inputValue}
                    onChange={handleInputChange}
                    style={{ width: '100%' }}
                    placeholder='Type an answer ...'
                />
                <Button type="primary"
                    onClick={handleSubmit}
                    disabled={!inputValue}
                >Submit</Button>
            </Space.Compact>
        </div>
    );
};

export default ChatComponent;