console.log('hello server');

var express = require('express');
var path = require('path');

var app = express();

var http = require('http').Server(app);

var io = require('socket.io')(http);

app.use(express.static(__dirname + '/../public'));

app.use('/bootstrap/js', express.static(__dirname + '/../node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/bootstrap/css', express.static(__dirname + '/../node_modules/bootstrap/dist/css')); // redirect CSS bootstrap

//https://nodejs.org/docs/latest/api/path.html#path_path_resolve_paths
//The path.resolve() method resolves a sequence of paths or path segments into an absolute path.
app.get('/*', function(req, res) {
  res.sendFile(path.resolve(__dirname + '/../public/index.html'));
});

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
});
/**************************************/

http.listen(8080, function(){
  console.log('listening on localhost:8080');
});
