import { Link } from 'react-router-dom'
import { useContext, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Navigate, useNavigate } from "react-router-dom";
import { authContext } from '../auth/auth.context'

import { Menu } from 'antd'
const Header = () => {
    const Navigate = useNavigate();
    const { auth,setAuth } = useContext(authContext)
    

    const items = [
        {

            label: <Link to={'/'}> Home </Link>,
            key: 'home',
            icon: <MailOutlined />,
        },
        ...auth.isLogined ? [{

            label: <Link to={'/user'}> User </Link>,
            key: 'User',
            icon: <MailOutlined />,
        }] : []

        ,
        {
            label: `Welcome ${auth?.userEmail}`,
            key: 'SubMenu',
            icon: <SettingOutlined />,
            children: [
                ...auth.isLogined ? [{
                    label: <div onClick={() => {
                        localStorage.clear('accessToken')
                        setAuth({
                            isLogined:false,
                            userEmail:'',
                            userName:''
                        })
                        Navigate('/')
                    }}>đăng xuất</div>,
                    key: 'logout',
                }] : [{
                    label: <Link to={'/login'}> Đăng nhập </Link>,
                    key: 'login',
                }]



            ]


        },
    ];
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {

        setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
}
export default Header