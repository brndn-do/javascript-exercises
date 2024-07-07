const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || typeof(num1) !== "number" || typeof(num2) !== "number") {
        return "ERROR";
    }
    let sum = 0;
    let small;
    let large;
    if (num1 < num2) {
        small = num1;
        large = num2;
    }
    else {
        large = num1;
        small = num2;
    }
    for (small; small <= large; small++) {
        sum += small;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
