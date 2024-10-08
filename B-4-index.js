let lib = require('./B-4-cmd');

lib.use("minus", function(contInputs){
    console.log(lib.parseInput(contInputs[1]) - lib.parseInput(contInputs[2]));
});
lib.use("sum", function(contInputs){
    console.log(lib.parseInput(contInputs[1]) + lib.parseInput(contInputs[2]));
});
lib.use("multiply", function(contInputs){
    console.log(lib.parseInput(contInputs[1]) * lib.parseInput(contInputs[2]));
});
lib.use("div", function(contInputs){
    console.log(lib.parseInput(contInputs[1]) / lib.parseInput(contInputs[2]));
});
lib.use("printRecord", function(contInputs){
    console.log({
        name: contInputs[1],
        family: contInputs[2],
        age: contInputs[3],
        email: contInputs[4]
    });
});


lib.start();