var http = require('http');

http.createServer(function (req, res) {

    let reqNum = parseInt(req.url.split("/")[1]) + parseInt(req.url.split("/")[2]);
    //console.log(reqNum); 

    res.write(reqNum.toString());
    res.end();
}).listen(80);