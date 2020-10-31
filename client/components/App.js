import React, { Component } from 'react'
import Listing from '../components/Listing'
import CreateListing from './CreateListing';
import Home from '../containers/Home'
import Card from '../components/Card'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Nav from './Nav';

import CreateButton from './CreateButton';


export default class App extends Component {
  render() {
    return (
      <Router>
          <div className="page">
            <Nav/>
            <Route path="/" exact component={Home}/>

            <Route path="/listing" component={Listing}/>

            <Route path="/listing/:id" component={Card}/>

            <Route path="/create" component={CreateListing}/>

            <CreateButton/>
        </div>
      </Router>
    )
  }
}
