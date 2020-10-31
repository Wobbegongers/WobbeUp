import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Messages from '../containers/Messages'
import ChatInput from './ChatInput'


const Chat = () =>{
    const [name, setName] = useState('billy')
    const [room, setRoom] = useState('tester room')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    const ENDPOINT = 'localhost:3000'

    let socket = io(ENDPOINT);

    // basically component did mount
    useEffect(()=>{

        // socket = io(ENDPOINT)
        // set the name and room
        setName(name)
        setRoom(room)

        socket.emit('join', {name, room}, (err) =>{
            if(err){
                alert(err)
            }
            

        })

        return () =>{
            socket.emit('disconnect')
            socket.off()
        }
    }, [ENDPOINT])
    // use effect renders when something inside the array parameter changes

    // whhenever the array of messages change, then update the state 
    useEffect(() =>{
        socket.on('message',(message) =>{
            setMessages([...messages, message])
        })
    }, [messages])

    // sends the message to the server
    const onSend = (incoming_message) => {
        console.log(incoming_message)

        // sends the message to the socket server and resets the message
        socket.emit('sendMessage', incoming_message, () => {setMessage('')})
    }

    console.log(message, messages)
    return(
        <div>
            <Messages/>
            <ChatInput onSend ={onSend}/>
        </div>
    )
}

// http://localhost:3000/socket.io/?EIO=3&transport=polling&t=NM0gq5O

export default Chat