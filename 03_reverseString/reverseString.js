const reverseString = function(str) {
    let list = str.split("");
    list = list.toReversed();
    let res = "";
    for (substr of list) {
        res += substr;
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
