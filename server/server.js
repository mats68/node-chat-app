const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))


io.on('connection', (socket) => {
 

    socket.emit('newMessage', {
      from: 'Hans',
      text: 'Hey',
      createdAt: 123
    })

  socket.on('connect', () => {
    console.log('User connected')

  })

  socket.on('createMessage', (data) => {
    console.log('createMessage', data)
  })

  
  socket.on('disconnect', () => {
    console.log('User was disconnected')
  })
})

server.listen(port, () => {
  console.log(`Server started on port ${port}` )
})


module.exports = { app }