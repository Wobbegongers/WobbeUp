import React,{useState, useEffect} from 'react';
import Main from './Main';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'
import * as actions from '../actions/actions'
// import Login from '../components/Login';

const Home = (props) => {
    const [redirect, setRedirect] = useState(false);

    useEffect(()=>{
        console.log('hello ', props.username)
        if(props.location.state){
            props.setID(props.location.state.id);
            props.setLocation(props.location.state.location)
            props.setUsername(props.location.state.username)
        }
        else if(props.username ==='') setRedirect(true)
        
    },[])

    const renderRedirect = () => {
        if (redirect) {
          return <Redirect 
          to={{
            pathname: '/login',
            state:{
                username: props.username
            }
        }}
        />
        }
      }

    return ( 
        <div className="home-div">
            {/* {renderRedirect()} */}
            <Main/>
        </div>
     );
}

const mapStateToProps = (state)=>({
    username:state.wobbeReducer.username
})

const mapActionToProps ={
    setUsername : actions.setUsername,
    setID : actions.setID,
    setLocation : actions.setLocation
}

export default connect(mapStateToProps, mapActionToProps)(Home);