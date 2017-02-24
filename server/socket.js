var app = require('./app.js');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;


/************** dynamic rooms ***************/

var userNum = 0;
var rooms = {};

io.on('connection', function(socket) {
  userNum++;
  console.log('a user connected. counter: ', userNum);
  console.log(JSON.stringify(rooms));
  socket.on('disconnect', function() {
    console.log('user disconnected');
    userNum--;
    console.log('counter: ', userNum);
    // delete usernames[username];
  });
  /** when the client emits 'adduser', this listens and executes **/
  // socket.on('adduser', function(username){
    // store the username in the socket session for this client
    // socket.username = username;
    // usernames[username] = username;
    // userNum++;
    // console.log('usernames: ', username);
    // console.log('counter: ', userNum);
  // });
  /** when client emits 'addroom' **/
  socket.on('addroom', function(username, room_name) {
    // if the room_name all ready exists
    if (rooms[room_name]) {
      console.log('socket.id: ', socket.id);
      io.to(socket.id).emit('room-exists', 'The room name is taken, please try other names');
      // socket.emit('room-exists', 'The room name is taken, please try other names');
    } else {
      rooms[room_name] = [];
      socket.join(room_name);
      io.to(socket.id).emit('info', 'You have created a room ' + room_name);
      // io.in(room_name).emit('info', 'You have created a room ' + room_name);// broadcast to everyone in the room
      rooms[room_name].push(username);
      console.log('counter: ', userNum, '. rooms', JSON.stringify(rooms));      
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
        console.log('counter: ', userNum, '. rooms', JSON.stringify(rooms));      
      } else {
        io.to(socket.id).emit('info', 'You are already in the room');
      }
    } else {
      socket.emit('info', 'There is no such room');
    }
  });

  socket.on('exit_room', function(username, room_name) {
    if (rooms[room_name].length > 1) {
      var index = rooms[room_name].indexOf(username);
      rooms[room_name].splice(index, 1);
    } else {
      delete rooms[room_name];
    }
    console.log(JSON.stringify(rooms));
    io.in(room_name).emit('info', 'the other user exit the room');
    io.to(socket.id).emit('info', 'You left the room');
    io.to(socket.id).emit('exit_room');
  });

  socket.on('editor-content-changes', function(room_name, val) {
    socket.broadcast.to(room_name).emit('editor-content-changes', val);
  });

  socket.on('clear-editor', function(room_name) {
    io.in(room_name).emit('clear-editor');
  });

  socket.on('submit-val', function(room_name, val) {
    io.in(room_name).emit('submit-val', val);
  });

  /** for the video chat - needs refactoring**/
  socket.on('sendDescription', function(room_name, data) {
    io.in(room_name).emit('description', data);
    // socket.broadcast.emit('description', data);
  });

  socket.on('sendCandidate', function(room_name, data){
    io.in(room_name).emit('candidate', data);
    // socket.broadcast.emit('candidate', data);
  });

});

http.listen(port, function() {
  console.log('now listening on port ' + port);
});

