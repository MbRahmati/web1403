let http = require('http');
let controllers = [];

function use(route, handler) {
    let controller = {
        url: route,
        function: handler
    };
    controllers.push(controller);
}

function route(req, res) {
    let found = false;
    for (let controller of controllers) {
        if (req.url.startsWith(controller.url)) {
            controller.function(req, res);
            found = true;
        }
    }

    if (!found) {
        console.log('Path not found.');
    }
}

function start() {
    console.log('Server is starting...');
    let server = http.createServer(function(req, res) {
        console.log('Request received:', req.method, req.url);

        req.path = req.url.split('/');

        let data = '';
        req.on('data', function(chunk) {
            data += chunk;
        });

        req.on('end', function() {
            try {
                req.data = JSON.parse(data);
            } catch (error) {
                req.data = {};
                console.log('Error parsing JSON:', error.message);
            }

            route(req, res);
        });
    });

    server.listen(80, function() {
        console.log('Server is up and running.');
    });
}

module.exports = {
    use: use,
    start: start
};
