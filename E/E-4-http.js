var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    let path = req.url.split('/');
    let result;

    if (path[1] === "sum") {
        result = parseInt(path[2]) + parseInt(path[3]);
        return writeResponse(res, result);
    } 
    
    else if (path[1] === "multiply") {
        result = parseInt(path[2]) * parseInt(path[3]);
        return writeResponse(res, result);
    } 
    
    else if (path[1] === "print") {
        let newObj = {
            fName: path[2],
            lName: path[3],
            email: path[4]
        };
        result = JSON.stringify(newObj);
        return writeResponse(res, result);
    } 
    
    else if (path[1] === "saveRecord") {
        let newObj = {
            fName: path[3],
            lName: path[4],
            email: path[5]
        };
        fs.writeFile(path[2], JSON.stringify(newObj), "utf8", function (err) {
            if (err) {
                result = "ERROR: " + err;
            } else {
                result = "File saved";
            }
            writeResponse(res, result);
        });
    } 
    
    else {
        result = "Incorrect Argument!";
        writeResponse(res, result);
    }
}).listen(80);

function writeResponse(res, result) {
    res.write("<h1>" + result.toString() + "</h1>");
    res.end();
}
