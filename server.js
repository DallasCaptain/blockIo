const express = require("express");
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser')
//const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/tempStackHatsDB', {useNewUrlParser: true});

app.use(session({
  secret: 'I solemly swear I am upto no good',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(express.static(__dirname + "/blocks/dist/blocks")); //change to angular
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

require('./server/config/routes.js')(app)

app.listen(8000, () => console.log("listening on port 8000"));