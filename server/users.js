const users = []

const socketController = {}


socketController.addUser = ({id, name, room}) =>{
    name = name.trim().toLowerCase()
    room = room.trim().toLowerCase()

    const user = {id, name, room}

    users.push(user)

    return {user}
    
}

// removes a user from the array of users
socketController.removeUser = (id) =>{
    const index = users.findIndex((user) => user.id === id)

    if(index !== -1){
        return users.splice(index,1)[0]
    }


}

// returns a user
socketController.getUser = (id) => users.find((user) => user.id === id)


//returns and array of users in the room
socketController.getUsersInRoom = (room) => users.filter((user) => user.room === room)


module.exports = socketController