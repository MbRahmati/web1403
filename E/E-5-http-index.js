let cmd = require('./E-5-http-cmd');
let fs = require("fs");
let result;

cmd.use('sum', function (path, res) {
    result = parseInt(path[2]) + parseInt(path[3]);
    writeResponse(res, result);
});

cmd.use('multiply', function (path, res) {
    result = parseInt(path[2]) * parseInt(path[3]);
    writeResponse(res, result);
});

cmd.use('minus', function (path, res) {
    result = parseInt(path[2]) - parseInt(path[3]);
    writeResponse(res, result);
});

cmd.use('divide', function (path, res) {
    result = parseInt(path[2]) / parseInt(path[3]);
    writeResponse(res, result);
});

cmd.use('print', function (path, res) {
    let newObj = {
        fName: path[2],
        lName: path[3],
        email: path[4]
    };
    result = JSON.stringify(newObj);
    writeResponse(res, result);
});

cmd.use('saveRecord', function (path, res) {
    let newObj = {
        fName: path[3],
        lName: path[4],
        email: path[5]
    };
    fs.writeFile(path[2], JSON.stringify(newObj), "utf8", function (err) {
        result = err ? "ERROR: " + err : "File Saved";
        writeResponse(res, result);
    });
});

cmd.use("openFile", function (path, res) {
    fs.readFile(path[2], "utf8", function (err, data) {
        result = err ? "ERROR: " + err : data.toString();
        writeResponse(res, result);
    });
});

cmd.use("saveOBJ", function (path, res) {
    fs.readFile(path[2], "utf8", function (err, data) {
        if (err) {
            result = "ERROR: " + err;
        } else {
            let getData = JSON.parse(data.toString());
            let newObj = {
                fName: path[3],
                lName: path[4],
                email: path[5]
            };
            getData.data.push(newObj);
            fs.writeFile(path[2], JSON.stringify(getData), function (err) {
                result = err ? "ERROR: " + err : "Save Change";
                writeResponse(res, result);
            });
        }
    });
});

function writeResponse(res, result) {
    res.write(result.toString());
    res.end();
}
