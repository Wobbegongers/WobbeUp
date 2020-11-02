import React, {useState} from 'react';
import logo from '../public/WobbeUp.png';
import axios from 'axios';
import {connect} from 'react-redux'
import * as actions from '../actions/actions'

const initialSignupState = {
  real_name:'',
  username:'',
  password:'',
  location: ''
}

const url = 'http://localhost:3000/'

const Signup = (props) => {

  const [signupInfo, setSignupInfo] = useState(initialSignupState);

  const updateInfo = (e) => {
    const {name, value} = e.target
    // console.log(e.target)
    setSignupInfo({
      ...signupInfo,
      [name] : value
    })
    console.log(signupInfo)
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
      console.log('res ', response);
      props.setUsername(signupInfo.real_name)
    }).catch(err => console.log(err))
  }

  return (
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
  )
}

const mapStateToProps = (state) => ({
  username: state.wobbeReducer.username,
})

const mapActionToProps = {
  setUsername: actions.setUsername
};

export default connect(mapStateToProps, mapActionToProps)(Signup)



// export default Signup;


