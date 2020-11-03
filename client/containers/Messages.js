import React from 'react';
import Message from '../components/message';


const Messages = (props) => {
    // console.log('first nest')
    // console.log('testing array',props.messageArray[0])
    // let x = props.messageArray
    // let y = x.map((ele,index) => <div key = {index}>{ele.text}</div>)


    return ( 
        <div className="messages">
            {props.messageArray.map((ele,index) => {
                return <Message {...props} message = {ele.text} user = {ele.user} key ={index}/>
            })}
            {/* <Message messages = {props.messageArray}/> */}
        </div>
     );
}
 
export default Messages;