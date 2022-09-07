import React from 'react';
import { connect } from 'react-redux';
import { Button, Menu, Typography, Avatar} from 'antd';
import { UserOutlined, LogoutOutlined, HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import icon from '../images/icon.png';

const Navbar = (props) => {
    return (
        <div className="nav-container">
            <div className="logo-container">
                <Avatar src={icon} size="large" />
                <Typography.Title level={2} className="logo">
                <Link to="/">GET Cryptoverse</Link>
                </Typography.Title>
            </div>
        </div>

    )
}

export default Navbar;