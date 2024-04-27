var calPoints = function (ops) {
    let result = [];
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] != "C" && ops[i] != "D" && ops[i] != "+") {
            let value = parseInt(ops[i]);
            result.push(value);
        }
        if (ops[i] == "C") {
            result.pop();
        } else if (ops[i] === "D") {
            let value = result[result.length - 1] * 2;
            result.push(value);
        } else if (ops[i] === "+") {
            let value = result[result.length - 2] + result[result.length - 1];
            result.push(value);
        }
    }
    let total = result.reduce((acc, cur) => {
        return (acc += cur);
    }, 0);

    return total;
};

//var ops = readline().split(" ");
console.log(calPoints(["5", "2", "C", "D", "+"]));
