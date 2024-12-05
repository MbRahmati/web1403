let app = require('./F-http-1.js');

app.use('/test', function(req, res){

    console.log('This is a test message.')
});

app.use('/sum', function(req, res){

    sumRes = {
        data: parseInt(path[2]) + parseInt(path[3])
    };
    
    write(res, result);
});

app.start();
