import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space} from 'antd';
import { Navbar, Footer } from './components/Navbar';
function App() {
  return (
    <div className="App">
      <header className="navbar">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Green Earth Token
        </p>
   
      </header>
    <div className='main'>

    </div>

    <div className='footer'>

    </div>
    </div>

  );
}

export default App;
