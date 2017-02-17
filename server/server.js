const path = require('path')
const http = require('http')
const express = require('express')
const socketIO = require('socket.io')

const {generateMessage} = require('./utils/message')

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(express.static(publicPath))


io.on('connection', (socket) => {

  socket.on('createMessage', (data, callback) => {
    console.log(data)
    io.emit('newMessage', generateMessage(data.from, data.text))
    callback('This is from server')
  })


  socket.on('disconnect', () => {
    console.log('User was disconnected')
  })
})

server.listen(port, () => {
  console.log(`Server started on port ${port}`)
})


module.exports = { app }