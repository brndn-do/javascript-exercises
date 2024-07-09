const palindromes = function (s) {
    const notAlphNum = ['.', ',', '!', ' '];
    let l = 0;
    let r = s.length - 1;
    while (l < r) {
        while (notAlphNum.includes(s[l])) {
            l++;
        }
        while (notAlphNum.includes(s[r])) {
            r--;
        }
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false;
        }
        l++;
        r--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
