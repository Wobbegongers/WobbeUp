import React, {useState} from 'react';
import logo from '../public/WobbeUp.png';
import axios from 'axios';
import {Link} from 'react-router-dom';

const initialLoginState = {
  username: '',
  password: ''
}

/**
 * const loginInfo = {
  username: '',
  password: ''
}
 */
const url = 'http://localhost:3000/'

const Login = (props) => {
  const [loginInfo, setLoginInfo] = useState(initialLoginState);

  const updateInfo = (e) => {
    const {name, value} = e.target
    setLoginInfo({
      ...loginInfo,
      [name] : value
    })
    console.log(loginInfo)
  }

  const submitLogin = (e) =>{
    e.preventDefault();
    console.log("login: ",loginInfo)
    axios.get(url + 'account/login', {
    params: {
      username: loginInfo.username,
      password: loginInfo.password
    }
    })
    .then(response => {
      console.log(response);
      if(response.status === 200){
        console.log('access granted')
      }else {
        window.alert('Incorrect Username and/or Password!!!')
        setLoginInfo(initialLoginState)
      }
    }).catch(err => {
       console.log(err)
    });
    //....
  }


    return (
      <div className='login-container'>
          <div className='loginLogo'>
            <img className="login-logo" src={logo}></img>
          </div>
        <div className='login-form-div'>
         <div className='login-title'>
            <h1 className="logo-name">Login to WOBBE UP!</h1>
          </div>
          <form className="loginform" autoComplete="off" onSubmit={submitLogin}>
            <label className="loginlabel"> Username: </label>
            <input className="logininput"
              onChange={updateInfo}
              type='text'
              name='username'
              value={loginInfo.username}
            />
            <label className="loginlabel"> Password: </label>
            <input className="logininput"
            onChange={updateInfo}
            type='password'
            name='password'
            value={loginInfo.password}
            /><br/>
            <Link to="/signup">
              <button className="signupbutton">Sign Up!</button>
            </Link>
            <input className="logininput loginsubmit"
              type="submit" 
              value="Submit"
            />
          </form>
        </div>
      </div>
    );
}
 
export default Login;