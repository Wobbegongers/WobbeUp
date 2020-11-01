import React from 'react';

import Chat from './Chat'

const Card = (props) => {
    
    return ( 
        <div className='card-lising-div'>
            <div className='card-listing-seller'>
                Name: Ali H
            </div>
            <ul>
                <li>Item: </li>
                <li>Price: </li>
                <li>location: </li>
                <li>Description: </li>
            </ul>
            <Chat/>
        </div>    
    );
}
 
export default Card;