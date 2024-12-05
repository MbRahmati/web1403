let app = require('./F-http-3.js');
let fs = require('fs');

app.use('/test', function(req, res) {
    console.log('This is a test message.');
});

app.use('/sum', function(req, res) {
    let result = {
        data: parseInt(req.path[2]) + parseInt(req.path[3])
    };

    console.log(result.data);
    write(res, result);
});

app.use('/multiply', function(req, res) {
    let result = {
        data: parseInt(req.path[2]) * parseInt(req.path[3])
    };

    console.log(result.data);
    write(res, result);
});

app.use('/minus', function(req, res) {
    let result = {
        data: parseInt(req.path[2]) - parseInt(req.path[3])
    };

    console.log(result.data);
    write(res, result);
});

app.use('/divide', function(req, res) {
    let result = {
        data: parseInt(req.path[2]) / parseInt(req.path[3])
    };

    console.log(result.data);
    write(res, result);
});

app.use('/print', function(req, res) {
    console.log(req.path);
    let newObj = {
        name: req.path[2],
        family: req.path[3],
        email: req.path[4]
    };

    let result = {
        data: [newObj]
    };

    write(res, JSON.stringify(result));
});

app.use('/saveRecord', function(req, res) {
    let newObj = {
        name: req.path[3],
        family: req.path[4],
        email: req.path[5]
    };

    console.log(req.path);

    fs.writeFile("data.txt", JSON.stringify(newObj), "utf8", function(err) {
        let result = err ? `ERROR: ${err}` : "File Saved"; // if/else kootah faghat baraye tamiz kardan code
        write(res, result);
    });
});

app.use('/openFile', function(req, res) {
    fs.readFile(req.path[2], "utf8", function(err, data) {
        if (err) {
            console.log(err);
        } else {
            let result = data.toString();
            write(res, result);
        }
    });
});

app.use('/saveOBJ', function(req, res) {
    fs.readFile(req.path[2], "utf8", function(err, data) {
        if (err) {
            console.log(err);
        } else {
            let parsedData = JSON.parse(data.toString());
            let newObj = {
                name: req.path[3],
                family: req.path[4],
                email: req.path[5]
            };

            parsedData.data.push(newObj);

            fs.writeFile(req.path[2], JSON.stringify(parsedData), function(err) {
                let result = err ? `ERROR: ${err}` : "Save Change";
                write(res, result);
            });
        }
    });
});

function write(res, result) {
    if (typeof result === "number") {
        result = result.toString();
    }

    res.write(result);
    res.end();
}

app.start();
