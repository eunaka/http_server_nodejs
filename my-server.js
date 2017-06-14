var WebSocketServer = require('websocket').server;
var WebSocketClient = require('websocket').client;
var WebSocketFrame  = require('websocket').frame;
var WebSocketRouter = require('websocket').router;
var W3CWebSocket = require('websocket').w3cwebsocket;
var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
    var res = (new Date()) + ' Received request for ' + request.method;
    console.log(res);
    response.writeHead(200, {
        'Content-Type': 'application/json',
        'author': 'EMMY'
    });
    response.end('Bem vindo ao sistema, pequeno garfanhoto');
});
server.listen(8080, function() {
    console.log((new Date()) + ' Server is listening on port 8080');
});