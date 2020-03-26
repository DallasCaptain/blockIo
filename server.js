const express = require("express");
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser')
var server = require('http').Server(app);
const io = require('socket.io')(server)

//const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/tempStackHatsDB', {useNewUrlParser: true});
server.listen(80)
app.use(session({
  secret: 'I solemly swear I am upto no good',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname + "/blocks/dist/blocks")); //change to angular
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/sockettest', (req, res) => {
  res.sendFile(__dirname + '/index.html')
});

colors = {
  'red': 2,
  'blue': 3,
  'green': 4,
  'purple': 5,
  'white': 1
}

require('./server/config/routes.js')(app)

io.on('connection', function(socket){
  socket.emit('greeting', "hello"); // emit an event to the socket
   // emit an event to all connected sockets
  socket.on('blockclicked', function(data){ 
    console.log('blockclicked by a client', data)
    io.emit('updateBlock',{color:colors[data.color], pos:data.pos});
  }); // listen to the event
});











app.listen(8000, () => console.log("listening on port 8000"));