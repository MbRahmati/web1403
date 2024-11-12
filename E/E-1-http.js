var http = require('http');

http.createServer(function (req, res) {
    let path = req.url.split('/');
    let result;

    if (path[1] === "sum") {
        result = parseInt(path[2]) + parseInt(path[3]);
    } else if (path[1] === "multiply") {
        result = parseInt(path[2]) * parseInt(path[3]);
    } else {
        result = "Incorrect Argument!";
    }

    res.write(result.toString());
    res.end();
}).listen(80);
