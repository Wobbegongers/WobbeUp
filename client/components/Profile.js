import React, { useState, useEffect } from 'react';
import CardList from './CardList';
import axios from 'axios';
import { connect } from 'react-redux';
import {Redirect} from 'react-router-dom';
import Footer from '../containers/Footer';

const url = 'http://localhost:3000/'

const mapStateToProps = (state) => ({
  user_id: state.wobbeReducer.user_id,
  username: state.wobbeReducer.username
})


const Profile = (props) => {

  const [userListing, setUserListing] = useState([]);
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    // console.log(props)
    if(props.username ==='') setRedirect(true)
    else{
    axios.get(url + 'listing/userItems', {
      params: {
        user_id: props.user_id
      }
    })
      .then(res => {
        setUserListing(res.data)
      })
      .catch(err => console.log(err))
    }
  }, []);
  const sChecker = (name) =>{
    if(name[name.length-1]==='s') return `${name}'`
    else return `${name}'s`
  }
  const cardList = userListing.map((el, index) => {
    return <CardList key={index} {...el} />
  });

  return (
    redirect === false 
    ?
    <div>
      <div>
        <h1>{sChecker(props.username)} listings </h1>
      </div>
      {cardList}
      <Footer />
    </div>
    :
    <Redirect 
          to={{
            pathname: '/login',
            state:{
                username: props.username
            }
        }}
        />
  )
};


export default connect(mapStateToProps)(Profile); 
