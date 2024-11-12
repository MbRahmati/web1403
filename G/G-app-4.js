const { json } = require('stream/consumers');
let app = require('./G-http-3.js');
let fs = require('fs');

function write(res, body){
    res.write(JSON.stringify(body));
    res.end();
}

app.use('GET', '/test', function(request, response){
    console.log('test.')
});
app.use('GET', '/sum', function(request, response){
    result = {
        data: parseInt(request.path[2]) + parseInt(request.path[3])
    };

    write(response, result);
});
app.use('GET', '/multiply', function(request, response){
    result = {
        data: parseInt(request.path[2]) * parseInt(request.path[3])
    };
    write(response, result);
});
app.use('GET', '/printRecord', function(request, response){
    result = {
        "name": request.path[2],
        "family": request.path[3],
        "email": request.path[4]
    }
    write(response, result);
});

app.use('POST', '/file', function(request, response){
    let fs = require('fs');

    fs.writeFile(request.data.name, request.data.content, function(err) {
        if (err) {
            console.log('FAILLLLL')
            write(response, { status: "FAIL"})
        }
        else{
            console.log('OKKKKKKKK');
            write(response, { status: "OK"})
        }
    }); 
});

app.use('POST', '/data', function(request, response){

    fs.readFile("./data1.json", {encoding : "utf8"}, function(fileError, fileData) {
        if (fileError) {
            console.log(fileError);
            write(response, { status: "FAIL1"});
        }

        else {
            let objData = JSON.parse(fileData);
            objData.data.push(request.data);
            let objString = JSON.stringify(objData);

            fs.writeFile("./data1.json", objString, function(err){
                if (err)
                {
                    write(response, { status: "FAIL2"});
                }

                else {
                    write(response, { status: "OK"});
                }
            })
        }
    }); 
});

app.use('GET', '/data', function(request, response){

    fs.readFile("./data1.json", {encoding : "utf8"}, function(fileError, fileData) {
        if (fileError) {
            console.log(fileError);
            write(response, { status: "FAIL1"});
        }

        else {
            {
                
                write(response, { status: JSON.parse(fileData)});
            }
        }
    }); 
});

app.start();