import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Messages from '../containers/Messages'
import ChatInput from './ChatInput'
import {connect} from 'react-redux'


const ENDPOINT = 'localhost:3000'
let socket = io(ENDPOINT)


const Chat = (props) =>{
    // the name of the person that wants to join (profile name)
    // console.log(props)
    const [name, setName] = useState(props.username)//username from redux store
    // set the name of the room to the product
    const [room, setRoom] = useState(props.item.name)//props itemname
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    

    // let socket = io(ENDPOINT)
    // basically component did mount
    useEffect(()=>{

        socket.emit('join', {name, room}, (err) =>{
            if(err){
                alert(err)
            }
        })

        return () =>{
            // console.log('exiting')
            socket.emit('disconnect')
            socket.off()
        }
    }, [ENDPOINT, name, room])
    // use effect renders when something inside the array parameter changes

    // whenever the array of messages change, then update the state 
    useEffect(() =>{
        // console.log("inside first use effect socketsss", socket)
        socket.on('message',message =>{
            setMessages([...messages, message])
        })
    },[messages])
    

    // sends the message to the server
    const onSend = (incoming_message) => {

        // sends the message to the socket server and resets the message
        socket.emit('sendMessage', incoming_message, () => setMessage(''))

        // console.log('did it')
    }

    // console.log(message, messages)
    return(
        <div className="chatWindow">
            <Messages {...props} messageArray={messages}/>
            <ChatInput onSend ={onSend}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    username: state.wobbeReducer.username
})

export default connect(mapStateToProps)(Chat);