const express = require("express");
const severController = require("./controllers/indexController");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const app = express();
const secretkey = "chihuahua";
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 4000;
const http = require("http");
const server = http.createServer(app);
//fire controllers
app.use(bodyParser.json()); //nangalimtan nim
app.use(cors()); //FOR CROSS-ORIGIN
const users = {};
severController(app, jwt, mongoose, secretkey , users);
const io = require("socket.io")(server);
// this
io.on("connection", (socket) => {
  socket.emit("socID", socket.id);
  socket.on("new-user", (name) => {
    users[socket.id] = name;
    socket.broadcast.emit("user-connected", name, users);
    console.log(users)
  });
  // talking to another person
  socket.on("send message", ( username , body , enduser) => {
    io.to(enduser).emit("message", body);
  });
});
server.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
