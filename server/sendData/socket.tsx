import {connectionEvents} from './dataEvents';

const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

import {sendLoginData} from './jsonSendFunction';

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  socket.on(connectionEvents.loginRequest, () => {
    io.emit(connectionEvents.loginResponse, sendLoginData());
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
