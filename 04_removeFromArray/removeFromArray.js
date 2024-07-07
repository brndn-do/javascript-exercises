const removeFromArray = function(array) {
    for (argument of arguments) {
        array = array.filter(function(val) {
            return val !== argument;
        });
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
