var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

var socket;

io.on('connection', function(socket){
    console.log('client has connected');
    socket.on('messaging event', function(msg){
        console.log('server got messaging event');
        console.log(msg);
        socket.broadcast.emit('messaging event',{data: msg});
    });
});

http.listen(80, function(){
    console.log('listening on *:80');
});