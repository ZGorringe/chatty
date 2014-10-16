var http = require('http');

var port = 8500;

var messages = [{'text': 'This is a test'}];

var createServer = function(res, req) {
	res.writeHead(200, {
		'Connection': 'close',
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	});
	if(req.method === 'GET') {
		res.end(JSON.stringify(messages));
	}
	if(req.method === 'POST') {
		var postData = '';
		req.on('data', function(chunk) {
			postData += chunk.toString();
		});
		req.on('end', function() {
			postData = JSON.parse(postData)
			console.log(postData);
			messages.push(postData);
			res.end('Message added? ' + message.[messages.length - 1].text);
		})
	}
	if(req.method === 'OPTIONS') {
		res.end();
	}
}

http.createServer(onRequest).listen(port, function() {
	console.log('Listening on ' + port);
})