let http = require('http');
let controllers = [];

function use(url, func) {
    let funcArgs = {
        url: url,
        function: func
    };

    controllers.push(funcArgs);
}

function route(req, res) {
    let found = false;

    for (let item of controllers) {
        if (req.url.startsWith(item.url)) {
            req.path = req.url.split('/');
            item.function(req, res);
            found = true;
        }
    }

    if (!found) {
        console.log('Path not found.');
    }
}

function start() {
    let server = http.createServer(function(req, res) {
        req.path = req.url.split('/');
        console.log(req.method, req.url);
        route(req, res);
    });

    server.listen(80, function() {
        console.log('Server is up and running.');
    });
}

module.exports = {
    use,
    start
};
