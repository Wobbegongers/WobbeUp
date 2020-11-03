import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Chat from './Chat'
import {connect} from 'react-redux';
import * as actions from "../actions/actions"
import numeral from 'numeral';

const url ='http://localhost:3000/listing/'

const Card = (props) => {

    const [Ownername, setOwnerName] = useState('')

    useEffect(() => {
        // console.log('inside card', props.item.user_id)
        axios.get('http://localhost:3000/listing/searchname', { params :{ user_id : props.item.user_id}} )
        .then((res) => { 
                if(res.status === 204) {
                    setOwnerName('No User')
                }
                else{
                    setOwnerName(res.data.username)
                }
            })
        .catch(err => console.log(err))
        
    })


    console.log(props)
    return ( 
        <div className='CardList'>
            <div className='card-listing-seller'>
            <label className="cardlabel">Seller:</label> {Ownername}
            </div>
            <ul className="cardcontainer">
                <li className="cardlistitem"><label className="cardlabel">Item:</label> {props.item.name} </li>
                <li className="cardlistitem"><label className="cardlabel">Price:</label> ${numeral(props.item.price).format('0,0')}</li>
                <li className="cardlistitem"><label className="cardlabel">Location:</label> {props.item.location}</li>
                <li className="cardlistitem"><label className="cardlabel">Description:</label> {props.item.description}</li>
            </ul>
            <div className="chat-container">
                <Chat {...props}/>
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