import React, { useEffect, useState } from 'react'
import io from 'socket.io-client'
import Messages from '../containers/Messages'
import ChatInput from './ChatInput'


const ENDPOINT = 'localhost:3000'
let socket = io(ENDPOINT)


const Chat = () =>{
    // the name of the person that wants to join (profile name)
    const [name, setName] = useState('billy')
    // set the name of the room to the product
    const [room, setRoom] = useState('tester room')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])
    

    // let socket = io(ENDPOINT)
    // basically component did mount
    useEffect(()=>{
        console.log("socketsss", socket)
        // socket = io(ENDPOINT)
        // set the name and room
        setName(name)
        setRoom(room)

        socket.emit('join', {name, room}, (err) =>{
            if(err){
                alert(err)
            }
            

        })

        console.log("socketsss", socket)
        return () =>{
            console.log('exiting')
            socket.emit('disconnect')
            socket.off()
        }
    }, [ENDPOINT, name, room])
    // use effect renders when something inside the array parameter changes

    // whenever the array of messages change, then update the state 
    useEffect(() =>{
        console.log("inside first use effect socketsss", socket)
        socket.on('message',message =>{
            console.log('did we do something')
            setMessages([...messages, message])
        })
    })
    

    // sends the message to the server
    const onSend = (incoming_message) => {
        console.log('socket id ')
        console.log(socket.id)
        console.log(incoming_message)

        // sends the message to the socket server and resets the message
        socket.emit('sendMessage', incoming_message, () => setMessage(''))
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