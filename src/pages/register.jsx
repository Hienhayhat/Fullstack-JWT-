import React from 'react';
import { Button, Checkbox, Form, Input, message, notification } from 'antd';
import { createUserApi } from '../util/api';
import { Navigate, useNavigate } from "react-router-dom";


const RegisterPage = () => {
    const Navigate = useNavigate();
    const onFinish = async (values) => {
        const { name, email, password } = values;
        const res = await createUserApi(name, email, password)
        
        if (res) {
            notification.success({
                message: "create user",
                description: "success"
            }
            )
            Navigate('/') 
        
        }
        else {
            notification.error({
                message: "create user",
                description: "error"
            }
            )
        };
    }
    return (
        <div style={{ margin: 100 }}>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}

                autoComplete="off"
            >
                <Form.Item
                    label="name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    
                </Form.Item>
            </Form>
        </div>)
}




export default RegisterPage;
