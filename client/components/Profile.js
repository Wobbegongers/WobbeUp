import React, { useState, useEffect } from 'react';
import CardList from './CardList'
import axios from 'axios';
import { connect } from 'react-redux'
import Footer from '../containers/Footer'

const url = 'http://localhost:3000/'

const mapStateToProps = (state) => ({
  user_id: state.wobbeReducer.user_id
})


const Profile = (props) => {

  const [userListing, setUserListing] = useState([]);

  useEffect(() => {
    console.log("Profile Props:", props)
    axios.get(url + 'listing/userItems', {
      params: {
        user_id: props.user_id
      }
    })
      .then(res => {
        console.log(res.data)
        setUserListing(res.data)
      })
      .catch(err => console.log(err))
  }, []);

  const cardList = userListing.map((el, index) => {
    return <CardList key={index} {...el} />
  });

  return (
    <div>
      {cardList}
      <Footer />
    </div>
  )
};


export default connect(mapStateToProps)(Profile); 
