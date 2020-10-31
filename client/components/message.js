import React from 'react';

const Message = (props) => {
    
    return ( 
        <div className={`message`}>
            <div className="messsage-username">
                username
            </div>
            <div className="message-body">
                Message
            </div>
        </div>
     );
}
 
export default Message;