var fs = require('fs');
var http = require('http');
var port = 8080;

var server = http.createServer(function(req, res) {
    var file = fs.createReadStream('out.json');
    
    file.on('open', function() {
        res.setHeader('Content-Type', 'application/json');
        file.pipe(res);
    });
});

server.listen(port);
