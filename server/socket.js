var app = require('./app.js');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;

/************** dynamic rooms ***************/
var users = {};
var userNum = 0;
var rooms = {};

io.on('connection', function(socket) {
  console.log('user connected');
  userNum++;
  socket.on('disconnect', function() {
    userNum--;
    console.log('user disconnected');
  });

  /** when client emits 'addroom' **/
  socket.on('addroom', function(username, room_name) {
    // if the room_name all ready exists
    if (rooms[room_name]) {
      io.to(socket.id).emit('room-exists', 'The room name is taken, please try other names');
    } else {
      rooms[room_name] = [];
      socket.join(room_name);
      io.to(socket.id).emit('info', 'You have created a room ' + room_name);
      rooms[room_name].push(username);
    }
  });

  /** when client emits 'join-room' */
  socket.on('join-room', function(username, room_name) {
    if (rooms[room_name]) {
      if (!rooms[room_name].includes(username)) {
        socket.join(room_name);
        io.in(room_name).emit('info', 'a new user has joined the room');// broadcast to everyone in the room
        io.to(socket.id).emit('info', 'You joined the room');
        rooms[room_name].push(username);
      } else {
        io.to(socket.id).emit('info', 'You are already in the room');
      }
    } else {
      socket.emit('info', 'There is no such room');
    }
  });

  socket.on('exit_room', function(username, room_name) {
    if (rooms[room_name]) {
      var index = rooms[room_name].indexOf(username);
      rooms[room_name].splice(index, 1);
    } else {
      delete rooms[room_name];
    }
    io.in(room_name).emit('info', 'the other user exit the room');
    io.to(socket.id).emit('info', 'You left the room');
    io.to(socket.id).emit('exit_room');
  });

});

http.listen(port, function() {
  console.log('now listening on port ' + port);
});