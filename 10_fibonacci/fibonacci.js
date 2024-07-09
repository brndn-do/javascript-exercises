const fibonacci = function(n) {
    n = parseInt(n);
    if (n < 0) {
        return "OOPS";
    }
    if (n === 0) {
        return 0;
    }
    const arr = [];
    for (let i = 0; i < n; i++) {
        if (i < 2) {
            arr.push(1);
        }
        else {
            arr.push(arr[i - 2] + arr[i - 1]);
        }
    }
    return arr.at(-1);
};

// Do not edit below this line
module.exports = fibonacci;
