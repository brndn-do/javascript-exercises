const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
  if (arr.length === 0) {
    return 0;
  }
	return arr.reduce((total, curr) => {
    return total += curr;
  });
};

const multiply = function(arr) {
  return arr.reduce((product, curr) => {
    return product * curr;
  });
};

const power = function(x, y) {
	return x**y;
};

const factorial = function(x) {
  if (x === 0) {
    return 1;
  }

  let result = 1;
	for (let i = 1; i <= x; i++) {
    result *= i; 
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
