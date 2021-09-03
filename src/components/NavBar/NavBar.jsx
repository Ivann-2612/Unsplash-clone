import React from 'react';
import './NavBar.css';
import logo from '../../assets/logo.PNG';

const NavBar = () => (
  <nav className='NavBar-Wrapper'>
    <div className='Logo-Wrapper'>
      <img src={logo} alt='' className='logo' />
    </div>
    <div className='Author-Wrapper'>
      <a
        href='https://github.com/Ivann-2612'
        target='_blank'
        rel='noopener noreferrer'
      >
        <p className='author'>Ivan Nikolic</p>
      </a>
    </div>
  </nav>
);

export default React.memo(NavBar);
