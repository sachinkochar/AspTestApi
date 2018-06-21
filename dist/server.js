'use strict';

var http = require('http');
var app = require('./app');
var port = process.env.PORT || 3000;
var server = http.createServer(app);

server.listen(port, function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log('Server Started');
	}
});