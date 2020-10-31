
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')
// allows for the use of body on a request
const bodyparser = require('body-parser')
const http = require('http')
const server =  http.createServer(app)
const socketio = require('socket.io')
const io = socketio(server)

// allows us to read json
app.use(express.json())

app.use(cors())

app.use(bodyparser.urlencoded({extended:true}))
// render static index.html file
app.use(express.static(path.join(__dirname, '../client/public')))

io.on('connection', socket =>{
  console.log('New user has joined')

  socket.on('disconnect', ()=>{
    console.log("user has left")
  })
})

app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'../client/public/index.html'))
})



// handles any errors from middleware
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


// server listens on port 3000
server.listen(3000, (err, result) =>{
    console.log("listening on port 3000")
});

module.exports = app;