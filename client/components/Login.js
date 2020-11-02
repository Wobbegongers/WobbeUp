import React, {useState} from 'react';
import logo from '../public/WobbeUp.png';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

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
  const [infoFromDB, setInfoFromDB] = useState({})
  const [redirect, setRedirect] = useState(false);
  const updateInfo = (e) => {
    const {name, value} = e.target
    setLoginInfo({
      ...loginInfo,
      [name] : value
    })
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
        console.log('res: ', response.data);
        setInfoFromDB(response.data);
        setRedirect(true);
      }else {
        window.alert('Incorrect Username and/or Password!!!')
        setLoginInfo(initialLoginState)
      }
    }).catch(err => {
       console.log(err)
    });
  }


    return (
      redirect === false ?
      <div className='login-container'>
          <div className='loginLogo'>
            <img className="login-logo" src={logo}></img>
          </div>
        <div className='login-form-div'>
         <div className='login-title'>
            <h1 className="logo-name">Login to WOBBE UP!</h1>
          </div>
          <form autoComplete="off" onSubmit={submitLogin}>
            <label> Username: </label>
            <input
              onChange={updateInfo}
              type='text'
              name='username'
              value={loginInfo.username}
            />
            <label> Password: </label>
            <input
            onChange={updateInfo}
            type='password'
            name='password'
            value={loginInfo.password}
            /><br/>
            <input 
              type="submit" 
              value="Submit"
            />
          </form>
        </div>
      </div>
      :
      <Redirect 
      to={{
        pathname: '/',
        state: infoFromDB
    }}
    />
    );
}
 
export default Login;