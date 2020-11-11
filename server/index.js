const express = require('express')
const severController = require('./controllers/indexController')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const app = express()
const secretkey = 'chihuahua'
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 4000
//fire controllers
app.use(bodyParser.json()) //nangalimtan nim
app.use(cors()) //FOR CROSS-ORIGIN
severController(app,jwt, mongoose , secretkey)
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
// this
const io = require('socket.io')(3000)
io.on('connection', socket => {
  // talking to another person
  socket.on('chatting-other',( username , otherName ,message) => {
    socket.in(otherName).emit({
      sender: username,
      message: message
    })
  })
  let group = { group: 'dummygroup' }
  //group chat
  socket.on('chatting-to-group',( username , groupName , message) => {
    socket.in(groupName).emit({
      sender: username,
      message: message
    })
  })
})