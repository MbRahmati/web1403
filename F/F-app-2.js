let app = require('./F-http-2.js');
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

function write(res, result) {
    res.write(JSON.stringify(result));
    res.end();
}

app.start();
