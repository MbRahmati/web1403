let mathLib = require('./B-3-cmd');

mathLib.use("minus", function(a, b){
    return a - b
});
mathLib.use("sum", function(a, b){
    return a + b
});
mathLib.use("multiply", function(a, b){
    return a * b
});
mathLib.use("divide", function(a, b){
    return a / b
});

mathLib.start();
