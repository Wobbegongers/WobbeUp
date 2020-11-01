import React from 'react';
import {AppBar, Toolbar, Typography, IconButton, Button} from '@material-ui/core'
import {Link} from 'react-router-dom';

const Nav = (props) => {
  return ( 
    <div className='navBar'>
      <ul>
          <li><Link to="/" className="logo">Logo/Home</Link></li>
          <li><a className="profile_link">Profile</a></li>
      </ul>
    </div>
   );
}
 
export default Nav;