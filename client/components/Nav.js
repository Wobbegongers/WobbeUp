import React from 'react';
import {AppBar, Toolbar, Typography, IconButton, Button} from '@material-ui/core'
import {Link} from 'react-router-dom';

const Nav = (props) => {
  return ( 
    <div className='navBar'>
      <ul className='navUl'>
          <li className='navLi'><Link to="/" className="navLogo">Logo/Home</Link></li>
          <li className='navLi'><a className="navProfile">Profile</a></li>
      </ul>
    </div>
   );
}
 
export default Nav;