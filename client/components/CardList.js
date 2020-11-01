import React from 'react';
import {Link} from 'react-router-dom';
const CardList = (props) => {
    return ( 
        <div className='CardList'>
            <ul>
                <li>Name</li>
                <li>item:</li>
                <li>Price</li>
                <li>Location</li>
            </ul>
            <button><Link to={`/item/${props.item}`} > button </Link> </button>
        </div>
     );
}
 
export default CardList;