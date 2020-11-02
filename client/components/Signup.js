import React, {useState} from 'react';
import logo from '../public/WobbeUp.png';
import axios from 'axios';
import {connect} from 'react-redux'
import * as actions from '../actions/actions'
import {Redirect} from 'react-router-dom'

const initialSignupState = {
  real_name:'',
  username:'',
  password:'',
  location: ''
}

const url = 'http://localhost:3000/'

const Signup = (props) => {
  const [signupInfo, setSignupInfo] = useState(initialSignupState);
  const [infoFromDB, setInfoFromDB] = useState({})
  const [redirect, setRedirect] = useState(false);
  
  const handleRedirect = () =>{
    axios.get(url+'account/finduser', {
      params:{
      username: signupInfo.username,
      location: signupInfo.location
    }
    }).then(res=>{
      setInfoFromDB(res.data)
      setRedirect(true);
    }).catch(err => console.log(err)) 
  }

  const updateInfo = (e) => {
    const {name, value} = e.target
    setSignupInfo({
      ...signupInfo,
      [name] : value
    })
  }

  const submitSignup = (e) =>{
    e.preventDefault();
    axios.post(url + 'account/signup/', {
      params: {
        real_name: signupInfo.real_name,
        username: signupInfo.username,
        password: signupInfo.password,
        location: signupInfo.location
      }
    })
    .then(response => {
      props.setUsername(signupInfo.username)
    })
    .then(()=> handleRedirect())
    .catch(err => console.log(err))
  }

  return (
    redirect === false ? 
    <div className='signup-container'>
      <div className='signup-logo-container'>
        {/* <img className="signup-logo" src={logo}></img> */}
      </div>
      <div>
        <h1>Signup up to WOBBE UP!</h1>
      </div>
      <form autoComplete='off' onSubmit={submitSignup}>
        {/* real_name, username, password, location */}
        <label>Nickname:</label>
        <input
          onChange={updateInfo}
          type='text'
          name='real_name'
          value={signupInfo.real_name}
        />
        <label>Username:</label>
        <input
          onChange={updateInfo}
          type='text'
          name='username'
          value={signupInfo.username}

        />
        <label>Password:</label>
        <input
          onChange={updateInfo}
          type='password'
          name='password'
          value={signupInfo.password}
        />
        <label>Zip Code:</label>
        <input
          onChange={updateInfo}
          type='number'
          name='location'
          value={signupInfo.location}
        /><br/>
        <input 
              type="submit" 
              value="Submit"
            />
      </form>
    </div>
    :
    <Redirect 
      to={{
        pathname: '/',
        state: infoFromDB
    }}
    />
  )
}

const mapStateToProps = (state) => ({
  username: state.wobbeReducer.username
})

const mapActionToProps = {
  setUsername: actions.setUsername
};

export default connect(mapStateToProps, mapActionToProps)(Signup)



// export default Signup;


