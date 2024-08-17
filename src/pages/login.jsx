import React, { useContext } from 'react';
import { Button, Checkbox, Form, Input, message, notification } from 'antd';
import { LoginApi } from '../util/api';
import { Navigate, useNavigate } from "react-router-dom";
import { authContext } from '../components/auth/auth.context';


const LoginPage = () => {
    const Navigate = useNavigate();
    const {setAuth}=useContext(authContext);
    const onFinish = async (values) => {
        const {  email, password } = values;
        const res = await LoginApi( email, password)
        if (res&&res.EC==0) {
            localStorage.setItem("accessToken",res.accessToken);
            notification.success({
                message: "login user",
                description: res.message
            }
            )
            console.log(res);
            
            setAuth({
                isLogined:true,
                userEmail:res?.detail?.email??'',
                userName:res?.detail?.name??''
            })
            Navigate('/') 
        
        }
        else {
            notification.error({
                message: "login user",
                description: res.message
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




export default LoginPage;
