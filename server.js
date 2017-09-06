var app = require('express')();
var express = require('express');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000; //switch back to 3000 after demo
var eyecounter = 0;


app.get('/', function(req, res){
console.log('got to a');
res.sendFile(__dirname + '/index.html');
});

app.get('/eyes', function(req, res){
console.log('got to eyes');
res.sendFile(__dirname + '/eyes.html');
});

app.get('/public/browser.js', function(req, res){
console.log('got to browser.js');
res.sendFile(__dirname + '/public/browser.js');
});

app.get('/contact', function(req, res){
console.log('got to contact');
res.sendFile(__dirname + '/contact.html');
});

io.on('connection', function(socket){
  console.log('Client connected');
  socket.on('disconnect', () => console.log('Client disconnected'));
  socket.on('disconnect', function() {
    eyecounter = eyecounter - 1;
  });
});

io.on('connection', function(socket){
  eyecounter = eyecounter + 1;
  io.emit('look', eyecounter);
});


app.use(express.static('public'))
//This is required to keep the server on and listening?
http.listen(3000, function(){
  console.log('listening on *:3000');
});
