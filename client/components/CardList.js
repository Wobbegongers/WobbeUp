import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import * as actions from "../actions/actions"
import {connect} from 'react-redux';


const CardList = (props) => {
    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
    
    const handleClick =(e) =>{
        console.log(props)
        props.setItem(props)
    }

    return ( 
        <div className='CardList'>
            <ul>
                <li>Name: User Name</li>
                <li>item: {(props.name)}</li>
                <li>Price : {props.price}</li>
                <li>Location {(props.location)}</li>
            </ul>
            <button onClick={handleClick}><Link to={`/item/${props.name}`} > button </Link> </button>
        </div>
     );
}

const mapStateToProps = (state) =>({
    item : state.wobbeReducer.item
})

const mapActionToProps = {
    setItem : actions.setItem,
}

export default connect(mapStateToProps, mapActionToProps)(CardList);