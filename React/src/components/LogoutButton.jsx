import React from 'react';
import { Button } from 'antd';
import Cookies from 'js-cookie';

const LogoutButton = ({ className = "",icon }) => {
    return (
        <Button
            type='primary'
            className={className}
            onClick={() => {
                Cookies.remove('sessionID');
                window.location.replace('/');
            }}
            icon={icon}
        >
            Logout
        </Button>
    );
}

export default LogoutButton;