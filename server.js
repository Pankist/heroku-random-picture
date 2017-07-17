/**
 * Created by pankist on 17/07/2017.
 */
var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello, World!");
    response.end();
}).listen(3000);