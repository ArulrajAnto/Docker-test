var http = require('http');

http.createServer(function(req, res){

res.writeHead(200, {'content-type':'text/plain'});
res.end('Hello World! This is Anto test web nodejs web page with jenkins triger testing');
}).listen(8080);

console.log('Server is running on a port over 8080 !!');
