import React,{useEffect} from 'react';
import axios from 'axios';
import Chat from './Chat'
import {connect} from 'react-redux';
import * as actions from "../actions/actions"

const url ='http://localhost:3000/listing/'

const Card = (props) => {
    console.log(props)
    return ( 
        <div className='card-lising-div'>
            <div className='card-listing-seller'>
                Name: Ali H
            </div>
            <ul>
                <li>Item: {props.item.name} </li>
                <li>Price: {props.item.price}</li>
                <li>location: {props.item.location}</li>
                <li>Description: {props.item.description}</li>
            </ul>
            <div className="chat-container">
                <Chat/>
            </div>
        </div>    
    );
}
const mapStateToProps = (state) =>({
    item : state.wobbeReducer.item
})

const mapActionToProps = {
    setItem : actions.setItem,
}

export default connect(mapStateToProps, mapActionToProps)(Card);