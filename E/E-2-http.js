var http = require('http');

http.createServer(function (req, res) {
    let path = req.url.split('/');
    let result;

    if (path[1] === "sum") {
        result = parseInt(path[2]) + parseInt(path[3]);
    } else if (path[1] === "multiply") {
        result = parseInt(path[2]) * parseInt(path[3]);
    } else if (path[1] === "print") {
        let newOBJ = {
            fName: path[2],
            lName: path[3],
            email: path[4]
        };
        result = JSON.stringify(newOBJ);
    } else {
        result = "Incorrect Argument!";
    }

    writeResponse(res, result);
}).listen(80);

function writeResponse(res, result) {
    res.write(result.toString());
    res.end();
}
