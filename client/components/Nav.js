import React from 'react';
import {AppBar, Toolbar, Typography, IconButton, Button} from '@material-ui/core'

const Nav = (props) => {
  return ( 
    <div className='navBar'>
      <ul>
          <li><a className="logo">Logo/Home</a></li>
          <li><a className="profile_link">Profile</a></li>
      </ul>
    </div>
   );
}
 
export default Nav;