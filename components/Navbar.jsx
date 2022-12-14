import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Typography } from 'antd';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/cryptocurrency.png'
const Navbar = () => {  
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(undefined);
  
    useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);
  
      window.addEventListener('resize', handleResize);
  
      handleResize();
  
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    
  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  
  return (
    <div>
        <Menu>
            <Menu.Item key="logo">
                <Link to="/">
                    <Typography.Title level={2} className="logo">
                        <img src="https://i.imgur.com/6Q9Z4Z0.png" alt="logo" className="logo" />
                        <span>CRYPTO</span>
                    </Typography.Title>
                </Link>
            </Menu.Item>
            <Menu.Item key="exchange">
                <Link to="/exchange">Exchange</Link>
            </Menu.Item>
            <Menu.Item key="news">
                <Link to="/news">News</Link>
            </Menu.Item>
            <Menu.Item key="login">
                <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="signup">
                <Link to="/signup">
                    <Button type="primary">Sign Up</Button>
                </Link>
            </Menu.Item>
        </Menu>
    
    </div>
  )
}

export default Navbar