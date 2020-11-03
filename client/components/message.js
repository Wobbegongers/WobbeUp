import React from 'react';
// import {connect} from 'react-redux';

const Message = (props) => {
    // console.log('inside emssages')
    // console.log(props.message)
    // console.log(props.user)
    console.log(props.user)
        console.log(props.username)
    return ( 
        // replace billy with user to see how to style the messages
        // if the user name is the same then the message will go on the right 
        // if the user name is not the same then the message will go on the left
        
        props.user.toLowerCase() === props.username.toLowerCase() 

        ?

        <div className='same-user'>
            {/* <div className="messsage-username">
                username
            </div>
            <div className="message-body">
                Message
            </div> */}
            
            {props.message}
        </div>

        :

        <div className='diff-user'>
            {/* <div className="messsage-username">
                username
            </div>
            <div className="message-body">
                Message
            </div> */}
            
            {props.message}
        </div>


     );
}
export default (Message);