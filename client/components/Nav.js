import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core'
import { Link } from 'react-router-dom';

const Nav = (props) => {
  return (
    <div className='navBar'>
      <ul className='navUl'>
        <li className='navLi'><Link to="/" className="navLogo">Home</Link></li>
        <li className='navLi'><Link to="/Profile" className="navProfile">Profile</Link></li>
      </ul>
    </div>
  );
}

export default Nav;