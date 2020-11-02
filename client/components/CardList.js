import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import * as actions from "../actions/actions"
import {connect} from 'react-redux';
import numeral from 'numeral';
import axios from 'axios';


const CardList = (props) => {

    const [Ownername, setOwnerName] = useState('')


    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
    
    const handleClick =(e) =>{
        // console.log(props)
        props.setItem(props)
    }

    useEffect(() => {
        console.log('inside cardlist', props)
        axios.get('http://localhost:3000/listing/searchname', { params :{ user_id : props.user_id}} )
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

    return ( 
        <div className='CardList'>
            <ul>
                <li>Name: {Ownername}</li>
                <li>item: {(props.name)}</li>
                <li>Price : ${numeral(props.price).format('0,0')}</li>
                <li>Location {(props.location)}</li>
            </ul>
            <button onClick={handleClick}><Link to={`/item/${props.name}`} >Details </Link> </button>

        </div>
     );
}

const mapStateToProps = (state) =>({
    item : state.wobbeReducer.item,
    
})

const mapActionToProps = {
    setItem : actions.setItem,
}

export default connect(mapStateToProps, mapActionToProps)(CardList);