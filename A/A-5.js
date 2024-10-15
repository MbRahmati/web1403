let input = process.argv.slice(2);

let controller = [
    {
        cmd : '-m',
        func : function minus(a, b) {
            return a - b;
        }
    },

    {
        cmd : '-M',
        func : function multiply(a, b) {
            return a * b;
        }
    },

    {
        cmd : '-s',
        func : function sum(a, b) {
            return a + b;
        }
    },
]

for (const i of controller) {
    if (i.cmd === input[0]) {
        console.log(i.func(parseInt(input[1]), parseInt(input[2])))
    }
}