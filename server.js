var http = require('http');

http.createServer(function(req, res){

res.writeHead(200, {'content-type':'text/plain'});
res.end('Hello World! This is Anto test web nodejs page, Will work fine after chh
anging the page too');
}).listen(8080);

console.log('Server is running on a port over 8080 !!');
