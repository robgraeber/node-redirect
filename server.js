var http = require("http");

http.createServer(function (req, res) {
    res.writeHead(301, {"Location": process.env.REDIRECT_URL || "http://example.com"});
    res.end();
}).listen(process.env.PORT || 8000);
console.log('Express server listening on port ' + (process.env.PORT || 8000));