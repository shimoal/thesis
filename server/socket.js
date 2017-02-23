var app = require('./app.js');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 8080;


/************** dynamic rooms ***************/

var userNum = 0;
var rooms = {};

io.on('connection', function(socket) {
  console.log('a user connected');
  socket.on('disconnect', function() {
    console.log('user disconnected');
    userNum--;
    console.log('counter: ', userNum);
    // delete usernames[username];
  });
  /** when the client emits 'adduser', this listens and executes **/
  socket.on('adduser', function(username){
    // store the username in the socket session for this client
    // socket.username = username;
    // usernames[username] = username;
    userNum++;
    // console.log('usernames: ', username);
    console.log('counter: ', userNum);
  });
  /** when client emits 'addroom' **/
  socket.on('addroom', function(room_name) {
    if (rooms[room_name]) {
      console.log('socket.id: ', socket.id);
      socket.emit('room-exists', 'The room name is taken, please try other names');
    } else {
      rooms[room_name] = 0;
      socket.join(room_name);
      io.in(room_name).emit('welcome', 'a new user has joined the room');// broadcast to everyone in the room
        rooms[room_name]++;
        console.log('counter: ', userNum, '. rooms', JSON.stringify(rooms));      
    }
  });
  /** when client emits 'join-room' */
  socket.on('join-room', function(room_name) {
    socket.join(room_name);
    io.in(room_name).emit('welcome', 'a new user has joined the room');// broadcast to everyone in the room
      rooms[room_name]++;
      console.log('counter: ', userNum, '. rooms', JSON.stringify(rooms));
  });

  socket.on('editor-content-changes', function(room_name, val) {
    // io.emit will send to all client, socket.broadcast.emit will NOT send to sender
    // console.log('server socket on editor-content-changes: ', room_name, val);
    socket.broadcast.to(room_name).emit('editor-content-changes', val);
  });

  socket.on('submit-val', function(room_name, val) {
    io.in(room_name).emit('submit-val', val);
  });

  /** for the video chat - needs refactoring**/
  socket.on('sendDescription', function(data) {
    socket.broadcast.emit('description', data);
  });


  socket.on('sendCandidate', function(data){
    socket.broadcast.emit('candidate', data);
  });

  socket.on('disconnect', function() {
    userNum--;
    console.log('A user disconnected');
  });
});

http.listen(port, function() {
  console.log('now listening on port ' + port);
});

