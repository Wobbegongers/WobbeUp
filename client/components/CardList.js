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
            <ul className="cardcontainer">
                <li className="cardlistitem"><label className="cardlabel">Name:</label> {Ownername}</li>
                <li className="cardlistitem"><label className="cardlabel">Item:</label> {(props.name)}</li>
                <li className="cardlistitem"><label className="cardlabel">Price:</label> ${numeral(props.price).format('0,0')}</li>
                <li className="cardlistitem"><label className="cardlabel">Location:</label> {(props.location)}</li>
            </ul>
            <button className="cardbutton" onClick={handleClick}><Link className="linktext" to={{pathname: `/item/${props.name}`}} >Details </Link></button>

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