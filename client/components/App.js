import React, { Component } from 'react'
import Listing from '../components/Listing'
import CreateListing from './CreateListing';
import Home from '../containers/Home'
import Card from '../components/Card'
import Chat from '../components/Chat'
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './Nav';
import Image from '../components/Image'
import Footer from '../containers/Footer'
import Signup from '../components/Signup'

import CreateButton from './CreateButton';
import Login from './Login';


export default class App extends Component {
  render() {
    return (
      <Router>
          <div className="page">
            <Nav/>
            <Route path="/" exact component={Home}/>

            <Route path="/listing" component={Listing}/>

            <Route path="/item/:id" component={Card}
            />

            <Route path="/create" component={CreateListing}/>

            <Route path="/chat" component={Chat}/>

            <Route path = '/image' component = {Image}/>
            
            <Route path='/login' component ={Login}/>
            
            <Route path='/signup' component ={Signup}/>


            <Footer/>
          </div>
      </Router>
    )
  }
}
