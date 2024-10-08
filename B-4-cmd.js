let inputs = process.argv.slice(2);
let command = inputs[0];
let valid = false;

let controllers = [];

function parseInput(input){
    if (isNaN(parseInt(input))){
        return input;
    }
    else{
        return parseInt(input);
    }
}

function use(name, func){
    let x = {
        command: name,
        function: func
    };

    controllers.push(x);
}

function start() {
    for(let item of controllers){
        
        if(item.command === command){
            //console.log(item.function(parseInput(inputs[1]), parseInput(inputs[2])));
            item.function(inputs)
            valid = true;
        }
    }
    
    if(!valid){
        console.log("Command Not Found!")
    }
}

module.exports = {use, start, parseInput};
