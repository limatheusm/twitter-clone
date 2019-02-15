const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Configuring Real Time
const server = require('http').Server(app); // get http server created by express
const io = require('socket.io')(server);

mongoose.connect('mongodb+srv://limatheusm:lima123@cluster0-rjhxw.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

// middlewares
app.use((req, res, next) => {
  req.io = io;
  return next();
});

app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
  console.log('server started on port 3000')
});