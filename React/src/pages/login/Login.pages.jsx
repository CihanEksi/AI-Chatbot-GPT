import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex, Spin } from 'antd';
import { useState,useEffect } from 'react';
import useLogin from '../../hooks/useLogin';
import Cookies from 'js-cookie';
import router from '../../routes/router';

const Login = () => {
    const [isRegisterAction, setIsRegisterAction] = useState(false);
    const { isLoading, error, handleLogin,handleRegister } = useLogin();
    const [form] = Form.useForm();
    const actionText = isRegisterAction ? 'Login Now!' : 'Register Now!';
    const actionNameText = isRegisterAction ? 'Register' : 'Login';

    const onFinish = async (values) => {
        const username = values.username;
        const password = values.password;
        const releatedFunc = isRegisterAction ? handleRegister : handleLogin;
        await releatedFunc(username, password);
    };

    const onChangeProcess = () => {
        setIsRegisterAction(prev => !prev);
    }

    return (
        <div
            className="container mx-auto flex justify-center items-center h-screen"
        >
            <div className="w-1/2 bg-white p-8 shadow-lg rounded-lg">
                <h1 className="text-3xl font-bold mb-4">
                    {actionNameText}
                </h1>
                <Form
                    name="login"
                    form={form}
                    initialValues={{
                        remember: true,
                    }}
                    style={{
                        maxWidth: 560,
                    }}
                    onFinish={onFinish}

                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Password!',
                            },
                        ]}
                    >
                        <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                    </Form.Item>


                    <Form.Item
                        loader={<Spin />}

                    >
                        <Button block type="primary" htmlType="submit" 
                        loading={isLoading}
                        >
                            {actionNameText}
                        </Button>
                        or
                        <span
                            onClick={onChangeProcess}
                            className='ml-2 text-blue-500 cursor-pointer hover:underline text-sm'
                        >
                            {actionText}
                        </span>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}

export default Login;