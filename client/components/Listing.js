import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardList from './CardList';
import axios from 'axios';
import { connect } from 'react-redux';
import * as actions from '../actions/actions'
import Footer from '../containers/Footer'
const url = 'http://localhost:3000/'
/**
 * name: audi a7
 * category : car
 */
const Listing = (props) => {
  //create and array of cards
  const [library, setLibrary] = useState([]);
  useEffect(() => {
    // console.log(props.search)
    if (props.search.searchValue && props.search.category === 'All') {
      console.log('here i am')
      // console.log(props.search)
      console.log(props.user_id)
      axios.get(url + 'listing/searchall', {
        params: {
          name: props.search.searchValue.toLowerCase().trim(),
          user_id: props.user_id
        }
      })
        .then(res => {
          console.log('res:', res.data)
          setLibrary(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    else if (props.search.searchValue && props.search.category !== 'All') {
      console.log('here i am 2')
      axios.get(url + 'listing/search', {
        params: {
          name: props.search.searchValue.toLowerCase().trim(),
          category_id: props.search.category,
          user_id: props.user_id
        }
      })
        .then(res => {
          console.log(res.data)
          setLibrary(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
    else {
      axios.get(url + 'listing/all')
        .then(res => {
          console.log(res.data)
          setLibrary(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }, [])
  const cardList = library.map((el, index) => {
    return <CardList key={index} {...el} />
  })
  return (
    <div>
      {cardList}
      <Footer />
    </div>
  );
}
const mapStateToProps = (state) => ({
  search: state.wobbeReducer.search,
  user_id: state.wobbeReducer.user_id
})
export default connect(mapStateToProps)(Listing);